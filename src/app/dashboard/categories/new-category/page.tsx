import { CreateCategoryForm } from "@/components/forms";

export default function NewCategory() {
  return (
    <section className="card">
      <h2 className="title">
        Create New Category
      </h2>

      <CreateCategoryForm />
    </section>
  );
}
