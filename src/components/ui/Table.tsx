"use client";

import {
  Group,
  Loader,
  Pill,
  Select,
  Stack,
  TextInput,
  Tooltip,
} from "@mantine/core";
import {
  IconCheck,
  IconChevronUp,
  IconEdit,
  IconSearch,
  IconSelector,
  IconTrash,
  IconX,
} from "@tabler/icons-react";
import {
  DataTable,
  DataTableColumn,
  DataTableSortStatus,
} from "mantine-datatable";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ClickButton, LinkButton } from "../common/buttons";
import Link from "next/link";
import useDeleteModal from "@/hooks/useDeleteModal";
import DeleteSingleData from "@/services/DeleteSingleData";
import { useApiMutation } from "@/hooks/useAPIMutation";
import { APIResponse } from "@/interfaces/api";
import { QueryKey } from "@tanstack/react-query";
import UpdateSingleDataStatus from "@/services/UpdateSingleDataStatus";
import sortBy from "lodash/sortBy";
import { useDebouncedValue } from "@mantine/hooks";
import dayjs from "dayjs";
import DeleteAllData from "@/services/DeleteAllData";

const PAGE_SIZES = [25, 50];

interface BaseRecord {
  _id: string;
  name: string;
  status?: "Pending" | "Accepted" | "Rejected";
  createdAt?: string;
  updatedAt?: string;
  [key: string]: unknown;
}

interface TableProps<T extends BaseRecord> {
  data: T[];
  columns: DataTableColumn<T>[];
  entityType: string;
  addURL?: string;
  entityName: string;
  queryKey: QueryKey;
  token?: string;
  loading: boolean;
  withStatus?: boolean;
  searchBy?: string[];
  withCreatedAt?: boolean;
  withUpdatedAt?: boolean;
}

export default function Table<T extends BaseRecord>({
  data,
  columns,
  entityType,
  addURL,
  entityName,
  queryKey,
  token,
  loading,
  withStatus = false,
  withCreatedAt = false,
  withUpdatedAt = false,
  searchBy = ["Name"],
}: TableProps<T>) {
  function handleAction({
    id,
    actionType,
  }: {
    id?: string;
    actionType: "Accepted" | "Rejected" | "Delete" | "Drop";
  }): Promise<APIResponse<{ _id?: string }>> {
    if (actionType === "Delete")
      return DeleteSingleData(token!, id!, entityType);
    if (actionType === "Drop") return DeleteAllData(token!, entityType);
    else return UpdateSingleDataStatus(token!, id!, entityType, actionType);
  }

  const { mutate, isPending } = useApiMutation({
    mutationFn: handleAction,
    queryKey: queryKey,
    successTitleMessage: `Congratulations!`,
  });

  const router = useRouter();
  const Delete = useDeleteModal();

  const initialRecords = data.slice(0, data.length);

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
  const [records, setRecords] = useState<T[]>(data.slice(0, pageSize));
  const [query, setQuery] = useState("");
  const [selectedField, setSelectedField] = useState<string>("All");
  // const [searchValue, setSearchValue] = useState("");
  const [debouncedQuery] = useDebouncedValue(query, 400);
  const [searchLoading, setSearchLoading] = useState(false);
  const [sortStatus, setSortStatus] = useState<DataTableSortStatus<T>>({
    columnAccessor: "createdAt",
    direction: "asc",
  });

  // const scrollRowIntoView = (selector: string) => {
  //   document
  //     .querySelector(selector)
  //     ?.scrollIntoView({ block: "end", behavior: "smooth" });
  // };

  const statusColumn: DataTableColumn<T>[] = [
    {
      accessor: "status",
      title: "Status",
      sortable: true,
      width: "0%",
      textAlign: "center",
      filtering: selectedField.length > 0,
      render: (record: T) => (
        <Group gap={6} wrap="nowrap">
          <Pill
            className={
              record.status === "Accepted"
                ? "bg-green-100 text-green-800"
                : record.status === "Rejected"
                ? "bg-red-100 text-red-800"
                : "bg-blue-100 text-blue-800"
            }
          >
            {record.status}
          </Pill>
        </Group>
      ),
    },
    {
      accessor: "actions",
      title: "Actions",
      sortable: false,
      width: "0%",
      textAlign: "center",
      render: (record: T) => (
        <Group gap={6} wrap="nowrap">
          <Tooltip label={"Accept"} position="bottom" offset={10}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                mutate({
                  id: record._id.toString(),
                  actionType: "Accepted",
                });
              }}
            >
              <IconCheck
                size={22}
                className="text-primary-light hover:text-primary-dark"
              />
            </button>
          </Tooltip>

          <Tooltip label={"Reject"} position="bottom" offset={10}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                mutate({
                  id: record._id.toString(),
                  actionType: "Rejected",
                });
              }}
            >
              <IconX
                size={22}
                className="text-error-light hover:text-error-dark"
              />
            </button>
          </Tooltip>
        </Group>
      ),
    },
  ];

  const createdAtColumn: DataTableColumn<T>[] = [
    {
      accessor: "createdAt",
      title: "Created At",
      noWrap: true,
      sortable: true,
      width: "0%",
      textAlign: "center",
      filtering: selectedField.length > 0,
      render: ({ createdAt }) => dayjs(createdAt).format("DD MMM YYYY"),
    },
  ];

  const updatedAtColumn: DataTableColumn<T>[] = [
    {
      accessor: "updatedAt",
      title: "Updated At",
      noWrap: true,
      sortable: true,
      width: "0%",
      textAlign: "center",
      filtering: selectedField.length > 0,
      render: ({ updatedAt }) => dayjs(updatedAt).format("DD MMM YYYY"),
    },
  ];

  useEffect(() => {
    setPage(1);
  }, [pageSize]);

  useEffect(() => {
    const from = (page - 1) * pageSize;
    const to = from + pageSize;
    setRecords(data.slice(from, to));
  }, [data, page, pageSize]);

  useEffect(() => {
    setSearchLoading(true);

    const queryLower = debouncedQuery.trim().toLowerCase();
    const filteredRecords = initialRecords.filter((record) => {
      if (!queryLower) {
        return true;
      }

      if (selectedField === "All") {
        return Object.values(record).some((value) =>
          String(value).toLowerCase().includes(queryLower)
        );
      }

      const normalizedSelectedField = selectedField.toLowerCase();
      if (record.hasOwnProperty(normalizedSelectedField)) {
        return String(record[normalizedSelectedField])
          .toLowerCase()
          .includes(queryLower);
      }

      return false;
    });

    const sortedRecords = sortBy(
      filteredRecords,
      sortStatus.columnAccessor
    ) as T[];
    const finalRecords =
      sortStatus.direction === "desc" ? sortedRecords.reverse() : sortedRecords;

    setRecords(finalRecords);

    const timeout = setTimeout(() => setSearchLoading(false), 400);
    return () => clearTimeout(timeout);
  }, [debouncedQuery, selectedField, sortStatus]);

  return (
    <div className="space-y-4">
      <div className="flex gap-x-4 gap-y-2 items-end">
        <div className="flex-1">
          <TextInput
            placeholder="Search ..."
            value={query}
            onChange={(event) => setQuery(event.currentTarget.value)}
            rightSection={
              searchLoading ? (
                <Loader size={14} color="#0f9015" />
              ) : (
                <IconSearch size={16} />
              )
            }
            classNames={{
              label: `mb-2`,
              input: `border-success-light`,
            }}
          />
        </div>

        <Select
          label="Search By"
          withCheckIcon={false}
          rightSection={<></>}
          maxDropdownHeight={166}
          value={selectedField}
          onChange={(value) => setSelectedField(value || "All")}
          className="max-w-[7.72rem]"
          classNames={{
            label: `mb-2`,
            input: `border-success-light`,
          }}
          comboboxProps={{
            transitionProps: { transition: "pop", duration: 200 },
            shadow: "md",
          }}
          data={["All", ...searchBy]}
        />
      </div>

      <div className="flex gap-x-4 justify-between md:justify-end">
        {addURL && (
          <LinkButton
            label={`Create ${entityName}`}
            href={addURL}
            className="mb-0"
          />
        )}

        <ClickButton
          label="Delete All"
          onClick={(e) => {
            e.stopPropagation();
            Delete({
              entityName: `all ${entityType}`,
              onConfirm: () =>
                mutate({
                  actionType: "Drop",
                }),
            });
          }}
          buttonColor="!text-error-light border-error-light hover:bg-error-dark hover:!text-white"
          className="mb-0"
        />
      </div>

      <DataTable<T>
        withTableBorder
        borderRadius={"sm"}
        highlightOnHover
        verticalAlign="center"
        withRowBorders
        withColumnBorders
        pinFirstColumn
        pinLastColumn
        borderColor={"#5cb25d"}
        horizontalSpacing={"md"}
        verticalSpacing={"xs"}
        className="w-[calc(100vw-5.15rem)] md:w-[calc(100vw-17.15rem)]"
        classNames={{
          header: "!text-xs tracking-wide",
          table: "!text-sm",
          pagination: "!flex-row !flex-wrap items-start justify-end",
        }}
        height={298}
        scrollAreaProps={{
          type: "never",
        }}
        highlightOnHoverColor={"#faf6ed"}
        storeColumnsKey="table"
        records={records}
        idAccessor={"_id"}
        columns={[
          {
            accessor: "index",
            title: "#",
            textAlign: "center",
            width: "0%",
            render: (record: T) => data.indexOf(record) + 1,
          },
          ...columns,
          ...(withCreatedAt ? createdAtColumn : []),
          ...(withUpdatedAt ? updatedAtColumn : []),
          ...(withStatus
            ? statusColumn
            : [
                {
                  accessor: "actions",
                  title: "Actions",
                  sortable: false,
                  width: "0%",
                  render: (record: T) => (
                    <Group gap={6} wrap="nowrap">
                      <Tooltip label={"Edit"} position="bottom" offset={10}>
                        <Link
                          href={`/dashboard/${entityType}/${record._id}/edit`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <IconEdit
                            size={22}
                            className="text-primary-light hover:text-primary-dark"
                          />
                        </Link>
                      </Tooltip>
                      <Tooltip label={"Delete"} position="bottom" offset={10}>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            Delete({
                              entityName: record.name.toLowerCase(),
                              onConfirm: () =>
                                mutate({
                                  id: record._id.toString(),
                                  actionType: "Delete",
                                }),
                            });
                          }}
                        >
                          <IconTrash
                            size={22}
                            className="text-error-light hover:text-error-dark"
                          />
                        </button>
                      </Tooltip>
                    </Group>
                  ),
                },
              ]),
        ]}
        defaultColumnRender={(row, _, accessor) => {
          const data = row[accessor as keyof typeof row];

          if (Array.isArray(data)) {
            return data.join(", ");

            // return (
            //   <div className="flex gap-2 flex-wrap">
            //     {data.map((item, index) => (
            //       <Pill key={index} className="bg-primary-light text-white">{item}</Pill>
            //     ))}
            //   </div>
            // );
          }

          if (typeof data === "string") return data;
        }}
        sortStatus={sortStatus}
        onSortStatusChange={setSortStatus}
        sortIcons={{
          sorted: <IconChevronUp size={14} />,
          unsorted: <IconSelector size={14} />,
        }}
        totalRecords={data.length}
        recordsPerPage={pageSize}
        page={page}
        onPageChange={(page) => setPage(page)}
        paginationActiveBackgroundColor={"#0f9015"}
        recordsPerPageOptions={PAGE_SIZES}
        onRecordsPerPageChange={setPageSize}
        onRowClick={({ record }: { record: T }) =>
          router.push(`/dashboard/${entityType}/${record._id}`)
        }
        customRowAttributes={({ name }, recordIndex) => ({
          "data-row-name": name,
          "data-row-index": recordIndex,
        })}
        noRecordsText=""
        recordsPerPageLabel=""
        emptyState={
          <Stack align="center" gap="xs">
            <p className="text-neutral-grey-dark font-semibold text-sm">
              No data found
            </p>
            {addURL && (
              <LinkButton
                label={`Create ${entityName}`}
                href={addURL}
                className="pointer-events-auto"
              />
            )}
          </Stack>
        }
        fetching={loading || isPending}
        loaderType="dots"
        loaderSize="md"
        loaderColor="#02ec88"
      />
    </div>
  );
}
