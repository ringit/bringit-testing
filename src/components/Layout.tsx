import { ReactNode } from "react";
import {
  HomeIcon,
  CalculatorIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { Paths } from "@/constants/Paths";
import { Logo } from "@/ui/BringitLogo";
import { RingITLogo } from "@/ui/RingitLogo";

const navigation = [
  { name: "Welcome", href: "/", icon: HomeIcon },
  { name: "Counter", href: Paths.COUNTER, icon: CalculatorIcon },
  { name: "Login", href: Paths.LOGIN, icon: LockClosedIcon },
];

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-primary px-6 pb-4">
          <div className="flex h-16 shrink-0 items-center gap-4">
            <Logo className="h-12 w-12 text-white" />
            <RingITLogo className="h-12 w-12 " />
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <NavLink
                        to={item.href}
                        className={({ isActive }) =>
                          clsx(
                            isActive
                              ? "bg-indigo-900 text-white"
                              : "text-gray-300 hover:text-white hover:bg-indigo-900",
                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                          )
                        }
                      >
                        <item.icon
                          className="h-6 w-6 shrink-0"
                          aria-hidden="true"
                        />
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="lg:pl-72 bg-slate-50 h-screen">
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </>
  );
}
