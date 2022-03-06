import { useState } from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Logo from "../assets/ha-logo.png";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Road Map", href: "#roadmap" },
  { name: "Team", href: "#team" },
  { name: "FAQ", href: "#faq" },
];

export const Header = () => {
  return (
    <Popover>
      <nav
        className="relative mx-auto max-w-7xl pt-10 px-4 sm:px-6 lg:px-8 flex justify-between sm:h-10 lg:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between w-full md:w-auto align-middle">
          <a href="#">
            <span className="sr-only">Workflow</span>
            <img className="h-14 " src={Logo} />
          </a>
          <div className="-mr-2 flex items-center md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open main menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
        </div>

        <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-medium text-gray-500 hover:text-gray-900"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#"
            className=" px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
          >
            Join discord
          </a>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt=""
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close main menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <a
                href="#"
                className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
              >
                Join discord
              </a>
            </div>
          </Popover.Panel>
        </Transition>
      </nav>
    </Popover>
  );
};
