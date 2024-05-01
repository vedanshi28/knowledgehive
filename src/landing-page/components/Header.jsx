import { Disclosure } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { HamburgerMenu } from "../design/Header";
import { useState } from "react";
import { navigation } from "../constant";
import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [activeLink, setActiveLink] = useState("index");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = (value) => {
    if (!openNavigation) return;
    setActiveLink(value);

    enablePageScroll();
    setOpenNavigation(false);
  };
  return (
    <Disclosure
      as="nav"
      className={`fixed top-0 left-0 w-full z-50 pt-3 lg:backdrop-blur-sm ${
        scrolled ? "scrolled" : ""
      }  ${openNavigation ? "bg-black" : "bg-black backdrop-blur-sm"}`}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={toggleNavigation}
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <HamburgerMenu />
                  ) : (
                    <Bars3Icon className="block h-5 w-5" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center text-2xl text-indigo-400 font-bold ">
                  Knowledge Hive
                </div>
                <div
                  className={`${
                    openNavigation ? "flex" : "hidden"
                  } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
                >
                  <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                    {navigation.map((item) => (
                      <a
                        key={item.id}
                        href={item.url}
                        onClick={handleClick(item.value)}
                        className={`text-2xl hover:text-indigo-400 ${
                          item.onlyMobile ? "lg:hidden" : ""
                        } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-base lg:font-semibold ${
                          item.url === pathname.hash
                            ? "z-2 lg:text-base"
                            : "lg:text-base"
                        } lg:hover:text-base xl:px-12`}
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <a
                href="/sign-up"
                className="button mr-8 text-base  hover:text-indigo-400 lg:block font-semibold"
              >
                Sign Up
              </a>
              <button className="lg:flex bg-indigo-400 rounded-md pt-2 pb-2 pr-3 pl-3 font-semibold text-black hover:text-white">
                <a href="/sign-in" className="no-underline">
                  Login
                </a>
              </button>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
