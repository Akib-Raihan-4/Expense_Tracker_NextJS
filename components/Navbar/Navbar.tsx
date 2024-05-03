
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
          <Logo />
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

// function MobileNav() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="block border-separate bg-background md:hidden">
//       <nav className="container flex items-center justify-between px-8">
//         <Sheet open={isOpen} onOpenChange={setIsOpen}>
//           <SheetTrigger asChild>
//             <Button variant={"ghost"} size={"icon"}>
//               <Menu />
//             </Button>
//           </SheetTrigger>
//           <SheetContent className="w-[100%] sm:w-[540px]" side="left">
//             <Logo />
//             <div className="flex flex-col gap-1 pt-4">
//               {items.map((item) => (
//                 <NavbarItem
//                   key={item.label}
//                   link={item.link}
//                   label={item.label}
//                 />
//               ))}
//             </div>
//           </SheetContent>
//         </Sheet>
//         <div className="flex h-[80px] min-h-[60px] items-center gap-x-4">
//             <Logo/>
//         </div>
//         <div className="flex items-center gap-2">
//             <ThemeSwitcherBtn/>
//             <UserButton afterSignOutUrl="/sign-in"/>
//         </div>
//       </nav>
//     </div>
//   );
// }
