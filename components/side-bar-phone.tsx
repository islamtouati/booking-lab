import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { PanelLeft, Users, Users2 } from "lucide-react";
import Link from "next/link";

export default function SideBarPhone() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="sm:hidden">
          <PanelLeft className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="sm:max-w-xs">
        <nav className="grid gap-6 text-lg font-medium">
          <Link
            href="#"
            className="group flex items-center space-x-5 text-lg font-semibold text-primary-foreground md:text-base"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary">
              <Users className="h-5 w-5 transition-all group-hover:scale-110" />
            </div>
            <span className="text-primary">Booking lab</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-4 px-2.5 text-foreground"
          >
            <Users2 className="h-5 w-5" />
            Guest
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
