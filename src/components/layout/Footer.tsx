import { contacts, links } from "@/constants/links";
import { Divider, Tooltip } from "@mantine/core";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-dark p-8 space-y-10 text-white">
      <section className="flex flex-col md:flex-row gap-10">
        <div className="space-y-4 flex-1">
          <h2 className="font-italiana text-2xl font-normal text-primary">
            RosaHub
          </h2>

          <p className="text-sm">
            Your hub for amazing resources and connections.
          </p>
        </div>

        <div className="flex-1 space-y-4">
          <h3 className="font-semibold !tracking-widest">Quick Links</h3>
          <div className="flex flex-wrap items-center md:items-start gap-x-6 gap-y-4">
            {links.root
              .filter((link) => link.title !== "Home")
              .map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="relative px-2 pb-2 text-sm font-medium flex items-center transition-all duration-300 hover:text-primary-dark group"
                >
                  {link.title}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-dark transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
          </div>
        </div>

        <div className="w-fit md:w-1/4 space-y-4">
          <h3 className="font-semibold !tracking-widest">Contact Us</h3>

          <div className="space-y-2">
            {contacts.details.map((contact, index) => (
              <Link
                href={contact.href}
                key={index}
                className="flex items-center gap-x-2 transition-all duration-300 hover:text-primary-dark"
              >
                <contact.icon size={16} />
                <span className="text-sm">{contact.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Divider color="#5cb25d" />

      <section className="flex flex-col gap-y-2 md:flex-row justify-between md:items-center">
        <p className="text-xs md:text-center">
          &copy; {new Date().getFullYear()}
          <span className="text-sm font-italiana text-primary"> RosaHub </span>
          All rights reserved.
        </p>

        <div className="flex items-center gap-x-2 md:mr-12">
          <h3 className="text-sm font-italiana tracking-wide">Social links:</h3>

          <div className="flex items-center gap-x-2">
            {contacts.social.map((social, index) => (
              <Tooltip
                key={index}
                label={social.title}
                position="bottom"
                offset={10}
              >
                <Link
                  href={social.href}
                  className="flex items-center gap-x-2 transition-all duration-300 hover:text-primary-dark"
                >
                  <social.icon size={16} />
                </Link>
              </Tooltip>
            ))}
          </div>
        </div>
      </section>
    </footer>
  );
}
