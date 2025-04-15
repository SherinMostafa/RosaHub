"use client";

import Link from "next/link";
import { links } from "@/constants/links";
import { usePathname, useRouter } from "next/navigation";
import { Burger, Drawer } from "@mantine/core";
import { useDisclosure, useWindowScroll } from "@mantine/hooks";
import { ClickButton, LinkButton } from "../common/buttons";
import { DeleteCookie } from "@/lib/client/cookie";
import { IconLogout } from "@tabler/icons-react";
import UserMenu from "../ui/UserMenu";
import { User } from "@/interfaces/data";

export default function NavBar({
  type = "Root",
  user,
}: {
  type?: "Root" | "Dashboard";
  user?: User;
}) {
  const [scroll] = useWindowScroll();
  const [drawerOpened, { toggle, close }] = useDisclosure(false);
  const router = useRouter();
  const pathname = usePathname();

  async function handleLogout() {
    await DeleteCookie();

    router.refresh();
  }

  if (type === "Dashboard") {
    return (
      <>
        <nav
          className={`h-16 flex items-center px-4 justify-between fixed left-0 md:left-48 right-0 bg-white shadow-md  z-40 ${
            scroll.y > 0 && "shadow-md"
          }`}
        >
          <div className="flex items-center gap-x-2">
            <Burger
              opened={drawerOpened}
              onClick={toggle}
              size={16}
              lineSize={2}
              hiddenFrom="sm"
            />

            <h2 className="font-italiana text-2xl font-normal text-primary">
              RosaHub
            </h2>
          </div>

          <div>{user && <UserMenu user={user} />}</div>
        </nav>
        
        <Drawer
          opened={drawerOpened}
          onClose={close}
          withCloseButton={false}
          size="15rem"
          hiddenFrom="sm"
          position="left"
          classNames={{
            header: "!bg-neutral-dark",
            content: "!bg-neutral-dark",
          }}
          zIndex={40}
        >
          <section className="py-6 mx-auto flex flex-col justify-between h-[calc(100vh-2rem)] transition-all duration-300">
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
                    onClick={() => close()}
                  >
                    <link.icon size={18} />
                    <span>{link.title}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <ClickButton
                buttonColor="bg-transparent border-none transition-all duration-300 text-primary-light hover:text-primary-light hover:bg-white cursor-pointer !justify-normal !px-3"
                fullWidth={true}
                className="w-full"
                onClick={handleLogout}
              >
                <IconLogout size={18} />
                <span className="ml-2">Logout</span>
              </ClickButton>
            </div>
          </section>
        </Drawer>
      </>
    );
  }

  return (
    <nav
      className={`h-16 flex items-center px-4 justify-between md:justify-around fixed inset-x-0 bg-white z-50 ${
        scroll.y > 0 && "shadow-md"
      }`}
    >
      <h2 className="font-italiana text-2xl font-normal text-primary">
        RosaHub
      </h2>

      <div className="hidden md:flex items-center justify-between space-x-4">
        {links.root.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={`relative px-3 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-300 hover:text-primary-dark group ${
              pathname === link.href && "!text-primary-dark"
            }`}
          >
            {link.title}
            <span
              className={`absolute bottom-0 left-0 w-0 h-0.5 bg-primary-dark transition-all duration-300 group-hover:w-full ${
                pathname === link.href && "!w-full"
              }`}
            ></span>
          </Link>
        ))}
      </div>

      <div className="flex items-center">
        {user ? (
          <>
            <UserMenu user={user} />
          </>
        ) : (
          <>
            <LinkButton
              label="Login"
              href="/login"
              buttonColor="bg-transparent hover:bg-transparent border-none hover:text-primary-dark !px-4"
            />
            <LinkButton label="Register" href="/register" />
          </>
        )}

        <Burger
          opened={drawerOpened}
          onClick={toggle}
          size={16}
          lineSize={2}
          hiddenFrom="sm"
          className="ml-2"
        />
      </div>

      <Drawer
        opened={drawerOpened}
        onClose={close}
        size="15rem"
        hiddenFrom="sm"
        position="top"
        classNames={{ content: "!bg-neutral-light" }}
        zIndex={40}
      >
        <div className="mt-6 space-y-4">
          {links.root.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`relative rounded-md text-sm font-medium flex items-center transition-all duration-300 hover:text-primary-dark `}
              onClick={() => close()}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </Drawer>
    </nav>
  );
}
