import {
  CheckCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons";

export const areas = [
  {
    value: "BAR",
    label: "Bar",
  },
  {
    value: "MAIN ROOM",
    label: "Main room",
  },
];

export const statuses = [
  {
    value: "CONFIRMED",
    label: "Confirmed",
    icon: CheckCircledIcon,
  },
  {
    value: "SEATED",
    label: "Seated",
    icon: StopwatchIcon,
  },
  {
    value: "CHECKED OUT",
    label: "Checked out",
    icon: CheckCircledIcon,
  },
  {
    value: "NOT CONFIRMED",
    label: "Not confirmed",
    icon: QuestionMarkCircledIcon,
  },
];

export const shifts = [
  {
    label: "Lunch",
    value: "LUNCH",
  },
  {
    label: "Breakfast",
    value: "BREAKFAST",
  },
  {
    label: "Dinner",
    value: "DINNER",
  },
];
