import { promises as fs } from "fs";
import path from "path";
import { z } from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DataTable } from "./components/data-table";
import { guestSchema } from "./data/schema";
import { columns } from "./components/columns";

// Simulate a database read for guests.
async function getGuests() {
  const data = await fs.readFile(
    path.join(process.cwd(), "app/data/guests.json")
  );

  const guests = JSON.parse(data.toString());

  return z.array(guestSchema).parse(guests);
}

export default async function Home() {
  const guests = await getGuests();
  return (
    <Card x-chunk="dashboard-06-chunk-0">
      <CardHeader>
        <CardTitle>Guests</CardTitle>
        <CardDescription>
          Manage your Guest and view their reservations.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <DataTable data={guests} columns={columns} />
      </CardContent>
    </Card>
  );
}
