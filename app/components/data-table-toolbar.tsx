"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { DataTableDatePickerFilter } from "./data-table-date-picker-filter";
import { areas, shifts, statuses } from "../data/data";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex flex-col items-start gap-2 md:flex-row justify-between">
      <div className="flex flex-1 items-center gap-2 flex-wrap">
        <Input
          placeholder="Filter customers..."
          value={
            (table.getColumn("customer")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("customer")?.setFilterValue(event.target.value)
          }
          className="flex-1 min-w-[250px] w-full lg:max-w-[250px]"
        />
        <DataTableDatePickerFilter
          value={
            (table.getColumn("businessDate")?.getFilterValue() as string) ?? ""
          }
          onChange={(value: any) =>
            table.getColumn("businessDate")?.setFilterValue(value)
          }
        />
        {table.getColumn("status") && (
          <DataTableFacetedFilter
            column={table.getColumn("status")}
            title="Status"
            options={statuses}
          />
        )}
        {table.getColumn("area") && (
          <DataTableFacetedFilter
            column={table.getColumn("area")}
            title="Area"
            options={areas}
          />
        )}
        {table.getColumn("shift") && (
          <DataTableFacetedFilter
            column={table.getColumn("shift")}
            title="Shift"
            options={shifts}
          />
        )}
      </div>
      {isFiltered && (
        <Button
          variant="ghost"
          onClick={() => table.resetColumnFilters()}
          className="px-2 lg:px-3"
        >
          Reset
          <Cross2Icon className="ml-2 h-4 w-4" />
        </Button>
      )}
    </div>
  );
}
