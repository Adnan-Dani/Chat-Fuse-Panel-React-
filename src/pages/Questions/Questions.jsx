import { useEffect, useMemo, useState } from "react";
import http from "./../../services/HttpService";
import moment from "moment";
import Table from "../../components/Table";
import Button from "../../components/Button";
import ExportToExcel from "../../components/ExportToExcel";
import { Box } from "@mui/material";

export default function Questions() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);

  const totalPages = Math.ceil(users.length / recordsPerPage);

  const cacheKey = "answers";
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
  const getList = () => {
    setUsers([]);
    setLoading(true);
    const isCache = localStorage.getItem(cacheKey);

    if (!isCache) {
      http.get(cacheKey).then((res) => {
        console.log(res.data[0].userInfo);
        const resp = res.data.map((d) => ({
          id: d.id,
          name: d.userInfo ? d.userInfo.name : "N/A",
          email: d.userInfo ? d.userInfo.email : "N/A",
          profile: d.userInfo ? d.userInfo.profile : "N/A",
          question1: d["Question 1"],
          question2: d["Question 2"],
          question3: d["Question 3"],
          question4: d["Question 4"],
          answer1: d["Answer 1"],
          answer2: d["Answer 2"],
          answer3: d["Answer 3"],
          answer4: d["Answer 4"],
        }));
        localStorage.setItem(cacheKey, JSON.stringify(resp));
        setUsers(resp || []);
        setLoading(false);
      });
    } else {
      setUsers(JSON.parse(isCache));
      setLoading(false);
    }
  };
  useEffect(() => {
    getList();
  }, []);
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
                  localStorage.removeItem(cacheKey);
                  getList();
                }}
                title="Clear Cache"
              />
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card w-100">
            <div className="card-body p-4">
              <div className="table-responsive">
                <Table
                  columns={columns}
                  data={users}
                  renderTopToolbarCustomActions={renderTopToolbarCustomActions}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
