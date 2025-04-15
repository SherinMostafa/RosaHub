import ActionButtons from "@/components/ui/ActionButtons";
import NotFound from "@/components/ui/NotFound";
import { GetCookie } from "@/lib/server/cookie";
import FetchSingleContactData from "@/services/FetchSingleContactData";

export default async function ContactView({
  params,
}: {
  params: { contactID: string };
}) {
  const { contactID } = await params;

  const token = await GetCookie();
  const contact = await FetchSingleContactData(token!, contactID);

  if (!contact) {
    return <NotFound title="Contact" />;
  }

  return (
    <section className="card">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">{contact.name}</h1>

        <ActionButtons
          entityType="contacts"
          entityName={contact.name}
          id={contactID}
          token={token!}
          queryKey={["Contacts"]}
          successRedirectUrl="/dashboard/contacts"
          acceptOrRejectButtons
        />
      </div>
      <div className="p-8 bg-neutral-light rounded-md">
        <div className="border-l-2 border-primary-light px-4 py-2">
          <p className="text-sm font-medium">{contact.message}</p>
        </div>
      </div>
    </section>
  );
}
