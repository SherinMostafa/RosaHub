"use client";

import { Loader, Skeleton } from "@mantine/core";

export default function Loading({
  display,
}: {
  display: "Skeleton" | "Loading";
}) {
  if (display === "Skeleton") {
    return (
      <div className="min-h-[80vh] py-4">
        <div className="flex justify-between items-center space-y-4">
          <Skeleton width={160} height={40} radius="md" />

          <div className="flex justify-center items-center gap-x-4">
            <Skeleton width={100} height={40} radius="md" />
            <Skeleton width={100} height={40} radius="md" />
          </div>
        </div>

        <Skeleton width={"100%"} height={430} mt={12} radius="md" />
      </div>
    );
  }

  if (display === "Loading") {
    return (
      <div className="bg-neutral-light flex items-center justify-center min-h-svh">
        <Loader color="#02ec88" type="dots" size={40} />
      </div>
    );
  }
}
