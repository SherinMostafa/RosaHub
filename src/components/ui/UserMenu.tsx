import { forwardRef } from "react";
import { IconLogout } from "@tabler/icons-react";
import { Avatar, Menu, UnstyledButton } from "@mantine/core";
import { User } from "@/interfaces/data";
import { DeleteCookie } from "@/lib/client/cookie";
import { useRouter } from "next/navigation";

interface UserButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  image?: string;
  name: string;
  email: string;
  icon?: React.ReactNode;
}

const UserButton = forwardRef<HTMLButtonElement, UserButtonProps>(
  ({ image, name, ...other }: UserButtonProps, ref) => (
    <UnstyledButton ref={ref} {...other}>
      <div className="flex items-center">
        <Avatar src={image} radius="xl" size={"md"} variant="transparent" />

        <div className="flex-1">
          <p className="text-sm">{name}</p>
        </div>
      </div>
    </UnstyledButton>
  )
);

export default function UserMenu({ user }: { user: User }) {
  const router = useRouter();

  async function handleLogout() {
    await DeleteCookie();

    router.refresh();
  }

  return (
    <Menu
      trigger="click-hover"
      openDelay={100}
      closeDelay={400}
      width={"180"}
      offset={20}
      zIndex={55}
      classNames={{ dropdown: "border shadow-md" }}
    >
      <Menu.Target>
        <UserButton
          name={`${user.firstName} ${user.lastName}`}
          email={user.email}
        />
      </Menu.Target>

      <Menu.Dropdown>
        {/* <Menu.Label>Application</Menu.Label>
        <Menu.Item leftSection={<IconSettings />}>Settings</Menu.Item>

        <Menu.Divider /> */}

        <Menu.Item
          leftSection={<IconLogout />}
          classNames={{
            itemSection: "text-error-light",
            itemLabel: "text-error-light font-semibold",
          }}
          onClick={handleLogout}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
