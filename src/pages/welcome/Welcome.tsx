import React from "react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import {
  CommandLineIcon,
  RssIcon,
  CalculatorIcon,
} from "@heroicons/react/24/solid";
import { Paths } from "@/constants/Paths";
import { Link } from "react-router-dom";
import { Logo } from "@/ui/BringitLogo";
import { RingITLogo } from "@/ui/RingitLogo";

const links = [
  {
    name: "Examples",
    href: Paths.COUNTER,
    description: "Learn how to write test. Interact with examples",
    icon: CalculatorIcon,
  },
  {
    name: "Github repository",
    href: "https://github.com/ringit/bringit-testing",
    description: "Check it out, clone it and try it out!",
    icon: CommandLineIcon,
    linkAttr: { target: "_blank", rel: "noopener noreferrer" },
  },
  {
    name: "Testing library",
    href: "https://testing-library.com/",
    description: "Documentation for Testing library",
    icon: RssIcon,
    linkAttr: { target: "_blank", rel: "noopener noreferrer" },
  },
];

const Welcome = () => {
  return (
    <div className="bg-slate-50 h-screen">
      <main className="mx-auto w-full max-w-7xl px-6 pb-16 pt-10 sm:pb-24 lg:px-8">
        <div className="flex justify-center items-end gap-10">
          <Logo className="h-32 w-32 md:h-64 md:w-64 text-primary" />
          <RingITLogo className="h-32 w-32 md:h-64 md:w-64" />
        </div>
        <div className="mx-auto mt-20 max-w-2xl text-center sm:mt-24">
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            BringIT X RingiT
          </h1>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
            Welcome to BringIT testing workshop! Click on the links below to
            check out all parts to be tested
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-lg sm:mt-20">
          <ul
            role="list"
            className="-mt-6 divide-y divide-gray-900/5 border-b border-gray-900/5"
          >
            {links.map((link, linkIdx) => (
              <li key={linkIdx} className="relative flex gap-x-6 py-6">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg shadow-sm ring-1 ring-gray-900/10">
                  <link.icon
                    className="h-6 w-6 text-primary"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex-auto">
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">
                    <Link to={link.href} {...link.linkAttr}>
                      <span className="absolute inset-0" aria-hidden="true" />
                      {link.name}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {link.description}
                  </p>
                </div>
                <div className="flex-none self-center">
                  <ChevronRightIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Welcome;
