"use client";

import { links } from "@/constants/links";
import { IconLogout } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ClickButton } from "../common/buttons";
import { DeleteCookie } from "@/lib/client/cookie";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await DeleteCookie();

    router.refresh();
  }

  return (
    <>
      <section className="w-48 bg-neutral-dark p-6 h-svh hidden md:flex flex-col justify-between transition-all duration-300">
        <div className="space-y-8">
          <h2 className="font-italiana text-xl text-primary">RosaHub</h2>

          <div className="flex flex-col gap-y-4 font-medium">
            {links.dashboard.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`p-3 rounded text-sm flex items-center gap-2 transition-all duration-300 text-primary-light hover:bg-white tracking-wider font-semibold ${
                  (pathname === link.href ||
                    (pathname.startsWith(link.href) &&
                      link.href !== "/dashboard")) &&
                  "bg-white"
                }`}
              >
                <link.icon size={18} />
                <span>{link.title}</span>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <ClickButton
            buttonColor="bg-transparent border-none transition-all duration-300 text-primary-light hover:text-primary-light hover:bg-white cursor-pointer md:!justify-normal !px-3"
            fullWidth={true}
            className="w-full"
            onClick={handleLogout}
          >
            <IconLogout size={18} />
            <span className="ml-2 hidden md:block">Logout</span>
          </ClickButton>
        </div>
      </section>
    </>
  );
}
