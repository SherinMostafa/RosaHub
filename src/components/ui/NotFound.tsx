"use client";

import { useRouter } from "next/navigation";
import { ClickButton } from "../common/buttons";

export default function NotFound({
  title = "Page",
  description,
}: {
  title?: string;
  description?: string;
}) {
  const router = useRouter();

  return (
    <section className="card flex flex-col items-center justify-center text-center !py-10 !space-y-4">
      <div className="space-y-2">
        <h2 className="title">{title} not found</h2>

        <p className="text-sm font-semibold tracking-wider text-neutral-grey-light">
          Sorry, we couldn’t find the {title.toLowerCase()} you’re looking for.
        </p>
      </div>

      {description && <p className="text-neutral-grey-light">{description}</p>}

      <div className="space-x-2">
        <ClickButton label="Go Back" onClick={() => router.back()} />

        <ClickButton
          label="Refresh Page"
          onClick={() => router.refresh()}
          buttonColor="!bg-error-light hover:!bg-error-dark text-white hover:!text-white"
        />
      </div>
    </section>
  );
}
