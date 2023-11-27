import { useMemo } from "react";

// Custom Components
import Table from "../../components/Table";
import Button from "../../components/Button";

import ExportToExcel from "../../components/ExportToExcel";
import { Box } from "@mui/material";
import botPic from "./../../assets/images/bot.png";
import avatar from "./../../assets/images/user.png";
import formatTime from "../../utils/formateTime";
import prettifyContent from "../../utils/prettifyContent";
import QueryVariables from "../../constants";
import { QueryClient } from "@tanstack/react-query";
import useHistory from "../../hooks/useHistory";

export default function History() {
  const queryClient = new QueryClient();
  const { history, error, loading } = useHistory();
  console.log(history);
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
            onError={(e) => {
              e.target.src = avatar; // Provide a placeholder image URL
            }}
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
    ],
    []
  );

  const handleExportRows = (rows) => {
    const data = rows.map((row) => row.original);
    const excelRows = [
      ["Name", "Email", "Message History"],
      ...data.map((item) => [
        item.name,
        item.email,
        item.history
          ? item.history.map((message) => message.text).join("\n")
          : "",
      ]),
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

  return (
    <>
      <div className="row ">
        <div className="col-12 pb-4">
          <h2 className=" fw-semibold">User Chat History</h2>
          <p>List of all user chat history.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 pb-4">
          <div className="d-flex justify-content-between px-3">
            <div>
              <h2 className=" fw-semibold">User Chat History</h2>
              <p>List of all user chat history.</p>
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
              data={history}
              isLoading={loading}
              renderTopToolbarCustomActions={renderTopToolbarCustomActions}
              renderDetailPanel={({ row }) => (
                <div className="card card-body">
                  {row.original.history?.length == 0 && (
                    <p>Chat History is empty.</p>
                  )}

                  {row.original.history?.map((chat, index) => (
                    <div key={index}>
                      {chat.type === "bot" ? (
                        <div
                          className="bot d-flex align-items-center"
                          key={index}
                        >
                          <img
                            src={botPic}
                            height={50}
                            width={50}
                            style={{ borderRadius: "50%" }}
                            alt="Bot"
                          />
                          <div className="pt-3">
                            <div
                              className="bot-text mx-2 p-2 rounded text-dark"
                              style={{
                                fontFamily: "monospace",
                                whiteSpace: "pre-wrap",
                                backgroundColor: "#F2F2F7",
                                padding: "10px",
                              }}
                              dangerouslySetInnerHTML={prettifyContent(
                                chat.text
                              )}
                            ></div>

                            <div
                              className="text-right ml-auto mx-3"
                              style={{ textAlign: "right" }}
                            >
                              <small>{formatTime(chat.time)} </small>
                            </div>
                          </div>
                        </div>
                      ) : (
                        /* User Msg */
                        <div
                          className="user d-flex align-items-center justify-content-end"
                          key={index}
                        >
                          <div className="pt-3">
                            <div
                              className="bot-text mx-2 bg-primary p-2 rounded text-white"
                              style={{ fontFamily: "monospace" }}
                            >
                              {chat.text}
                            </div>
                            <div className="text-right ml-auto mx-3">
                              <small>{formatTime(chat.time)} </small>
                            </div>
                          </div>
                          <img
                            src={row.original.profile}
                            height={50}
                            width={50}
                            style={{ borderRadius: "50%" }}
                            alt="Bot"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </>
  );
}
