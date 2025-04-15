import TableList from "@/components/lists/TableList";
import { Category } from "@/interfaces/data";
import { GetCookie } from "@/lib/server/cookie";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Categories",
};

export default async function Categories() {
  const token = await GetCookie();

  return (
    <>
      <section className="card">
        <h2 className="title">
          Categories List
        </h2>

        <TableList<Category>
          token={token!}
          columns={[
            { accessor: "name", title: "Name", noWrap: true, sortable: true },
          ]}
          queryKey={["Categories"]}
          endpoint="/dashboard/categories"
          entityName="Category"
          addURL="/dashboard/categories/new-category"
          entityType="categories"
          withCreatedAt
          withUpdatedAt
        />
      </section>
    </>
  );
}
