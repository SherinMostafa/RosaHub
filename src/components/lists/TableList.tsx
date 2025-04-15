"use client";

import Table from "../ui/Table";
import { useApiQuery } from "@/hooks/useAPIQuery";
import { DataTableColumn } from "mantine-datatable";
import { QueryKey } from "@tanstack/react-query";

export default function TableList<T extends { _id: string; name: string }>({
  token,
  columns,
  endpoint,
  queryKey,
  entityName,
  entityType,
  addURL,
  withStatus,
  withCreatedAt,
  withUpdatedAt,
  searchBy,
}: {
  token: string;
  columns: DataTableColumn<T>[];
  endpoint: string;
  queryKey: QueryKey;
  entityName: string;
  entityType: string;
  addURL?: string;
  withStatus?: boolean;
  withCreatedAt?: boolean;
  withUpdatedAt?: boolean;
  searchBy?: string[];
}) {
  const {
    data = [],
    isLoading,
    error,
  } = useApiQuery<T>({
    endpoint: endpoint,
    queryKey: queryKey,
    token: token,
  });

  if (error) return <p>Error loading data</p>;

  const formattedData = data.map((record) => ({
    ...record,
    _id: record._id.toString(),
  }));

  return (
    <Table<T>
      data={formattedData}
      columns={columns}
      entityType={entityType}
      addURL={addURL}
      entityName={entityName}
      queryKey={queryKey}
      token={token}
      loading={isLoading}
      withStatus={withStatus}
      withCreatedAt={withCreatedAt}
      withUpdatedAt={withUpdatedAt}
      searchBy={searchBy}
    />
  );
}
