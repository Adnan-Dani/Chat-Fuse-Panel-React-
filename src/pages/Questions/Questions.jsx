import { useMemo } from "react";
import { Box } from "@mui/material";
import { QueryClient } from "@tanstack/react-query";

// Custom Components
import Table from "../../components/Table";
import Button from "../../components/Button";
import ExportToExcel from "../../components/ExportToExcel";
import useQuestions from "../../hooks/useQuestions";
import QueryVariables from "../../constants";

export default function Questions() {
  const queryClient = new QueryClient();
  const { data, loading, error } = useQuestions();
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
    ],
    []
  );
  const handleExportRows = (rows) => {
    const data = rows.map((row) => row.original);
    const excelRows = [
      [
        "Name",
        "Email",
        "Question 1",
        "Answer 1",
        "Question 2",
        "Answer 2",
        "Question 3",
        "Answer 3",
        "Question 4",
        "Answer 4",
      ],
      ...data.map((item) => [
        item.name,
        item.email,
        item.question1,
        item.answer1,
        item.question2,
        item.answer2,
        item.question3,
        item.answer3,
        item.question4,
        item.answer4,
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
          <h2 className=" fw-semibold">Question Collections</h2>
          <p>List of all questions.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 pb-4">
          <div className="d-flex justify-content-between px-3">
            <div>
              <h2 className=" fw-semibold">Question Collections</h2>
              <p>List of all questions.</p>
            </div>
            <div>
              <Button
                onClick={() => {
                  queryClient.invalidateQueries({
                    queryKey: [QueryVariables.QUESTIONS],
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
              data={data}
              isLoading={loading}
              renderTopToolbarCustomActions={renderTopToolbarCustomActions}
              renderDetailPanel={({ row }) => (
                <div className="card card-body">
                  {console.log(row.original)}
                  <p>
                    <b>Question 1:</b> {row.original["Question 1"] ?? ""}
                  </p>
                  <p>
                    <b>Answer 1:</b> {row.original["Answer 1"] ?? ""}
                  </p>
                  <br></br>
                  <p>
                    <b>Question 2:</b> {row.original["Question 2"] ?? ""}
                  </p>
                  <p>
                    <b>Answer 2:</b> {row.original["Answer 2"] ?? ""}
                  </p>
                  <br></br>
                  <p>
                    <b>Question 3:</b> {row.original["Question 3"] ?? ""}
                  </p>
                  <p>
                    <b>Answer 3:</b> {row.original["Answer 3"] ?? ""}
                  </p>
                  <br></br>
                  <p>
                    <b>Question 4:</b> {row.original["Question 4"] ?? ""}
                  </p>
                  <p>
                    <b>Answer 4:</b> {row.original["Answer 4"] ?? ""}
                  </p>
                  <br></br>
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </>
  );
}
