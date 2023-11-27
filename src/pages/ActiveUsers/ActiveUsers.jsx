import { useMemo } from "react";
import Table from "../../components/Table";
import { Box } from "@mui/material";
import moment from "moment/moment";
import Button from "./../../components/Button";
import ExportToExcel from "../../components/ExportToExcel";
import useUsers from "../../hooks/useUsers";
import { QueryClient } from "@tanstack/react-query";
import QueryVariables from "../../constants";

export default function Customers() {
  const queryClient = new QueryClient();
  const filterData = (list = []) => {
    if (!(list.length > 0)) return;
    const currentTime = new Date();
    const twentyFourHoursAgo = new Date(currentTime - 24 * 60 * 60 * 1000); // 24 hours ago in milliseconds

    const filteredUsers = list.filter((user) => {
      const creationTime = new Date(user.lastSignInTime);
      return creationTime > twentyFourHoursAgo;
    });

    return filteredUsers;
  };
  const { data, loading, error } = useUsers();
  // filtering for active users
  const users = filterData(data);

  const handleExportRows = (rows) => {
    const data = rows.map((row) => row.original);
    const excelRows = [
      ["Name", "Email", "CreationTime"],
      ...data.map((item) => [item.name, item.email, item.creationTime]),
    ];
    ExportToExcel(excelRows);
  };

  const renderTopToolbarCustomActions = ({ table }) => (
    <Box sx={{ display: "flex", gap: "1rem", p: "0.5rem", flexWrap: "wrap" }}>
      <Button
        disabled={table.getPrePaginationRowModel().rows.length === 0}
        //export all rows, including from the next page, (still respects filtering and sorting)
        onClick={() => handleExportRows(table.getPrePaginationRowModel().rows)}
        title={`Export`}
      />
    </Box>
  );
  const columns = useMemo(
    () => [
      {
        accessorKey: "profile",
        size: 50,
        header: "User Profile",
        Cell: ({ renderedCellValue, row }) => (
          <img
            src={renderedCellValue}
            alt="profile"
            loading="lazy"
            height={50}
            width={50}
            style={{ borderRadius: "30%" }}
          />
        ),
      },
      {
        accessorKey: "name",
        header: "Name",
        size: 50,
        Cell: ({ renderedCellValue, row }) =>
          renderedCellValue ? renderedCellValue : "Not Found",
      },
      {
        accessorKey: "email",
        header: "Email",
        size: 50,
        Cell: ({ renderedCellValue, row }) =>
          renderedCellValue ? renderedCellValue : "Not Found",
      },
      {
        accessorKey: "creationTime",
        header: "Creation Time",
        size: 50,
        Cell: ({ renderedCellValue, row }) =>
          renderedCellValue
            ? moment(renderedCellValue).format("MMM Do YY")
            : "Not Found",
      },
    ],
    []
  );
  return (
    <>
      <div className="row ">
        <div className="col-12 d-block pb-4">
          <h2 className=" fw-semibold">Active Users</h2>
          <p className=" fs-3 text-dark mt-n1 fw-normal ">
            List of active users in last 24 Hours.{" "}
          </p>
        </div>
      </div>
      <div className="row mx-2">
        <div className="col-12 d-block pb-4">
          <div className="d-flex justify-content-between px-3">
            <div>
              <h2 className=" fw-semibold">Active Users</h2>
              <p className=" fs-3 text-dark mt-n1 fw-normal ">
                List of active users in last 24 Hours.{" "}
              </p>
            </div>
            <div>
              <Button
                onClick={() => {
                  queryClient.invalidateQueries({
                    queryKey: [QueryVariables.USERS],
                  });
                }}
                title="Clear Cache"
              />
            </div>
          </div>
        </div>
        <div className="col-12">
          {error && <h6 className="mx-2">{error.message}</h6>}
          <div className="table-responsive">
            <Table
              columns={columns}
              data={users}
              isLoading={loading}
              renderTopToolbarCustomActions={renderTopToolbarCustomActions}
            />
          </div>
        </div>
      </div>
    </>
  );
}
