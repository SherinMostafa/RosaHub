import TableList from "@/components/lists/TableList";
import { Plant } from "@/interfaces/data";
import { GetCookie } from "@/lib/server/cookie";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plants",
};

export default async function Plants() {
  const token = await GetCookie();

  return (
    <section className="card">
      <h2 className="title">Plants List</h2>

      <TableList<Plant>
        token={token!}
        columns={[
          { accessor: "name", title: "Name", noWrap: true, sortable: true },
          {
            accessor: "category.name",
            title: "Category",
            noWrap: true,
          },
          {
            accessor: "growingSeason",
            title: "Season",
            noWrap: true,
          },
          {
            accessor: "lightRequirements",
            title: "Light",
            noWrap: true,
          },
          {
            accessor: "soilRequirements",
            title: "Soil",
            noWrap: true,
          },
          {
            accessor: "wateringRequirements",
            title: "Watering",
            noWrap: true,
          },
        ]}
        queryKey={["Plants"]}
        endpoint="/dashboard/plants"
        entityName="Plant"
        addURL="/dashboard/plants/new-plant"
        entityType="plants"
        withCreatedAt
        withUpdatedAt
        searchBy={["Name", "Season"]}
      />
    </section>
  );
}
