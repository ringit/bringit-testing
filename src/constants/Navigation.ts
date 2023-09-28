import {
  BookmarkSquareIcon,
  QueueListIcon,
  RssIcon,
  CalculatorIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";
import { Paths } from "./Paths";

export const NavigationLinks = [
  {
    name: "Counter",
    href: Paths.COUNTER,
    description: "Learn how to write test without Testing library",
    icon: CalculatorIcon,
  },
  {
    name: "Login",
    href: Paths.LOGIN,
    icon: LockClosedIcon,
    description: "A complete API reference for our libraries.",
  },
  {
    name: "Guides",
    href: "#",
    description: "Installation guides that cover popular setups.",
    icon: BookmarkSquareIcon,
  },
  {
    name: "Blog",
    href: "#",
    description: "Read our latest news and articles.",
    icon: RssIcon,
  },
];
