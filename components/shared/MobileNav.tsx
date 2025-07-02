"use client"

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navLinks } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { usePathname } from "next/navigation";

const MobileNav = ({ user }: { user: any }) => {
  const pathname = usePathname();

  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image 
          src="/assets/images/logo-text.svg"
          alt="logo"
          width={180}
          height={28}
        />
      </Link>
      <Sheet>
        <SheetTrigger>
          <Image 
            src="/assets/icons/menu.svg"
            alt="menu"
            width={32}
            height={32}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="sheet-content">
          <>
            <Image 
              src="/assets/images/logo-text.svg"
              alt="logo"
              width={152}
              height={23}
            />

            <ul className="header-nav_elements">
              {navLinks.map((link) => {
                const isActive = link.route === pathname;
                return (
                  <li
                    key={link.route}
                    className={`${
                      isActive && "gradient-text"
                    } p-18 flex whitespace-nowrap text-dark-700`}
                  >
                    <Link className="sidebar-link cursor-pointer" href={link.route}>
                      <Image 
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                      />
                      {link.label}
                    </Link>
                  </li>
                )
              })}
              {user && (
                 <li key="/profile">
                  <Link href="/profile" className="sidebar-link cursor-pointer">
                    <Image src="/assets/icons/profile.svg" alt="profile" width={24} height={24} />
                    Profile
                  </Link>
                </li>
              )}
            </ul>

            {user ? (
              <Button asChild className="button bg-red-gradient bg-cover w-full">
                <Link href="/api/auth/logout">Logout</Link>
              </Button>
            ) : (
              <Button asChild className="button bg-purple-gradient bg-cover w-full">
                <Link href="/sign-in">Login</Link>
              </Button>
            )}
          </>
        </SheetContent>
      </Sheet>
    </header>
  )
}

export default MobileNav