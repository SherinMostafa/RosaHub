import { ContactUsForm } from "@/components/forms";
import { contacts } from "@/constants/links";
import { Divider, Tooltip } from "@mantine/core";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function ContactUs() {
  return (
    <div>
      <h2 className="p-10 text-center text-4xl font-italiana font-bold tracking-wider">
        Contact Us
      </h2>

      <div className="p-10 flex flex-col lg:flex-row gap-8 bg-white">
        <section className="space-y-10 md:p-10">
          <div className="space-y-2">
            <h3 className="title text-accent-pink">
              We&apos;d Love To Hear From You!
            </h3>

            <p className="text-sm text-neutral-grey-dark">
              Fill up the form and our team will get back to you within two days.
            </p>
          </div>

          <div className="space-y-4">
            {contacts.details.map((detail, index) => (
              <div key={index} className="flex gap-x-4 w-fit">
                <detail.icon size={24} />

                <div>
                  {detail.href ? (
                    <div>
                      <h3 className="text-base font-italiana font-semibold tracking-wider">
                        {detail.title}
                      </h3>
                      <Link
                        href={detail.href}
                        className="text-sm font-mono hover:text-primary-dark transition-all duration-300"
                      >
                        {detail.label}
                      </Link>
                    </div>
                  ) : (
                    <p className="text-sm">{detail.label}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <Divider color="#5cb25d" />

          <div className="space-y-4 ml-10">
            <h3 className="text-lg font-italiana font-semibold tracking-wider">
              Follow Us On
            </h3>

            <div className="flex items-center gap-x-4">
              {contacts.social.map((social, index) => (
                <Tooltip
                  key={index}
                  label={social.title}
                  position="bottom"
                  offset={10}
                >
                  <Link
                    href={social.href}
                    className="transition-all duration-300 hover:text-primary-dark hover:border-primary-dark rounded-full border p-2"
                  >
                    <social.icon size={16} />
                  </Link>
                </Tooltip>
              ))}
            </div>
          </div>
        </section>

        <Divider orientation="vertical" color="#5cb25d" />
        <Divider orientation="horizontal" color="#5cb25d" />

        <section className="flex-1 md:pt-16">
          <ContactUsForm />
        </section>
      </div>
    </div>
  );
}
