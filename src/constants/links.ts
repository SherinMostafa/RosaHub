import {
  IconAddressBook,
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandTwitterFilled,
  IconHome,
  IconLayoutDashboard,
  IconMail,
  IconPhoneCall,
  IconPlant,
} from "@tabler/icons-react";

export const links = {
  dashboard: [
    {
      href: "/dashboard",
      title: "Dashboard",
      icon: IconHome,
    },
    {
      href: "/dashboard/plants",
      title: "Plants",
      icon: IconPlant,
    },
    {
      href: "/dashboard/categories",
      title: "Categories",
      icon: IconLayoutDashboard,
    },
    {
      href: "/dashboard/contacts",
      title: "Contacts",
      icon: IconAddressBook,
    },
    // {
    //   href: "/dashboard/blogs",
    //   title: "Blogs",
    //   icon: IconLibrary,
    // },
  ],
  root: [
    {
      href: "/",
      title: "Home",
    },
    {
      href: "/plants",
      title: "Plants",
    },
    {
      href: "/about-us",
      title: "About Us",
    },
    {
      href: "/contact-us",
      title: "Contact Us",
    },
  ],
};

export const contacts = {
  social: [
    {
      href: "/",
      title: "Facebook",
      icon: IconBrandFacebookFilled,
    },
    {
      href: "/",
      title: "Instagram",
      icon: IconBrandInstagram,
    },
    {
      href: "/",
      title: "Twitter",
      icon: IconBrandTwitterFilled,
    },
  ],
  details: [
    {
      href: "mailto:rosahub@gmail.com",
      title: "General Enquiries",
      label: "rosahub@gmail.com",
      icon: IconMail,
    },
    {
      href: "tel:+201012345678",
      title: "Call Us",
      label: "+20 10 1234 5678",
      icon: IconPhoneCall,
    },
  ],
};
