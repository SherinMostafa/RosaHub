import TableList from "@/components/lists/TableList";
import { Contact } from "@/interfaces/data";
import { GetCookie } from "@/lib/server/cookie";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacts",
};

export default async function Contacts() {
  const token = await GetCookie();

  return (
    <section className="card">
      <h2 className="title">
        Contacts List
      </h2>

      <TableList<Contact>
        token={token!}
        columns={[
          { accessor: "name", title: "Name", noWrap: true, sortable: true },
          { accessor: "email", title: "Email", noWrap: true },
          { accessor: "phone", title: "Phone", noWrap: true },
          {
            accessor: "message",
            title: "Message",
            ellipsis: true,
            width: 400,
          },
        ]}
        queryKey={["Contacts"]}
        endpoint="/dashboard/contacts"
        entityName="Contact"
        entityType="contacts"
        withStatus={true}
        withCreatedAt={true}
        withUpdatedAt={true}
        searchBy={["Name", "Email"]}
      />
    </section>
  );
}
