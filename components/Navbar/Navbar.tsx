
import React from "react";
import Logo from "../Logo";
import { ThemeSwitcherBtn } from "./ThemeSwitcherBtn";
import { UserButton } from "@clerk/nextjs";
import NavbarItem from "./NavbarItem";
// import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
// import { Button } from "../ui/button";
// import { Menu } from "lucide-react";
import MobileNav from "./MobileNav";

function Navbar() {
  return (
    <>
      <DesktopNav />
      <MobileNav items = {items} />
    </>
  );
}

export default Navbar;

const items = [
  {
    label: "Dashboard",
    link: "/",
  },
  {
    label: "Transactions",
    link: "/transactions",
  },
  {
    label: "Manage",
    link: "/manage",
  },
];

function DesktopNav() {
  return (
    <div className=" hidden border-separate border-b bg-background md:block">
      <nav className="container flex items-center justify-between px-8">
        <div className="flex h-[80px] min-h-[60px] items-center gap-x-4">
          <Logo showPiggyBank={true} />
          <div className="flex h-full">
            {items.map((item) => (
              <NavbarItem
                key={item.label}
                link={item.link}
                label={item.label}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ThemeSwitcherBtn />
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </nav>
    </div>
  );
}

