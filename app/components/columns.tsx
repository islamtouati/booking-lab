"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import dayjs from "dayjs";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";
import { format } from "date-fns";
import { MessageCircleWarning, Users } from "lucide-react";
import { Guest } from "../data/schema";
import { areas, shifts, statuses } from "../data/data";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const columns: ColumnDef<Guest>[] = [
  {
    accessorKey: "customer",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Name"
        className="w-[150px]"
      />
    ),
    cell: ({ row }) => {
      const customer = row.original.customer;
      return (
        <div className="flex space-x-2">
          <span className="flex-1 max-w-[150px] truncate font-medium">
            {`${customer.firstName} ${customer.lastName}`}
          </span>
          {row.original.guestNotes && (
            <Popover>
              <PopoverTrigger>
                <MessageCircleWarning className="size-4" />
              </PopoverTrigger>
              <PopoverContent>
                <strong>Note :</strong> {row.original.guestNotes}
              </PopoverContent>
            </Popover>
          )}
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return (
        row.original.customer.firstName
          .toLocaleLowerCase()
          .includes(value.toLocaleLowerCase()) ||
        row.original.customer.lastName
          .toLocaleLowerCase()
          .includes(value.toLocaleLowerCase())
      );
    },
    sortingFn: (rowA, rowB) => {
      const nameA = `${rowA.original.customer.firstName} ${rowA.original.customer.lastName}`;
      const nameB = `${rowB.original.customer.firstName} ${rowB.original.customer.lastName}`;
      return nameA.localeCompare(nameB);
    },
  },
  {
    accessorKey: "quantity",
    header: ({ column }) => (
      <DataTableColumnHeader
        className="w-[50px]"
        column={column}
        title="Guests"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center space-x-2">
          <Users className="h-4 w-4" />
          <span className="truncate font-medium">
            {row.getValue("quantity")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "businessDate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Day" />
    ),
    cell: ({ row }) => {
      const date = (row.getValue("businessDate") as string).split(".");
      return (
        <div className="flex space-x-2">
          <span className="truncate font-medium">
            {format(`${date[2]}-${date[1]}-${date[0]}`, "PPP")}
          </span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      const date = (row.getValue(id) as string).split(".");
      return dayjs(value).isSame(`${date[2]}-${date[1]}-${date[0]}`);
    },
  },
  {
    accessorKey: "start",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Check-in" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="truncate font-medium">
            {dayjs(row.getValue("start")).format("HH:MM")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "end",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Check-out" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="truncate font-medium">
            {dayjs(row.getValue("end")).format("HH:MM")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "shift",
    header: ({ column }) => (
      <DataTableColumnHeader
        className="w-[100px]"
        column={column}
        title="Shift"
      />
    ),
    cell: ({ row }) => {
      const shift = shifts.find(
        (shift) => shift.value === row.getValue("shift")
      );

      if (!shift) {
        return null;
      }

      return (
        <div className="flex items-center">
          <Badge variant="outline">{shift.label}</Badge>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "area",
    header: ({ column }) => (
      <DataTableColumnHeader
        className="w-[90px]"
        column={column}
        title="Area"
      />
    ),
    cell: ({ row }) => {
      const area = areas.find((area) => area.value === row.getValue("area"));

      if (!area) {
        return null;
      }

      return (
        <div className="flex items-center">
          <Badge variant="secondary">{area.label}</Badge>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader
        className="w-[150px]"
        column={column}
        title="Status"
      />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue("status")
      );

      if (!status) {
        return null;
      }

      return (
        <div className="flex items-center">
          {status.icon && (
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{status.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    enableSorting: false,
    enableHiding: false,
  },

  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
