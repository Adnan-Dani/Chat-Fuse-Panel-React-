import { useEffect, useMemo, useState } from "react";
import http from "./../../services/HttpService";
import Table from "../../components/Table";
import { Box } from "@mui/material"; 
import moment from "moment/moment";
import Button from "./../../components/Button";
export default function Customers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false); 
  const cacheKey = "users";
  const getList = () => {
    setLoading(true);
    const isCache = localStorage.getItem(cacheKey);
    if (!isCache) {
      http.get(cacheKey).then((res) => {
        setUsers(res.data || []);
        localStorage.setItem(cacheKey, JSON.stringify(res.data || []));
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

  const exportToExcel = (d) => {
    const sheetData = d.map(item => ({
      Name: item.name,
      Email: item.email,
      CreationTime: item.creationTime,
    }));
 
    var headers = [
      { label: 'Name', field: 'name' },
      { label: 'Email', field: 'email' },
      { label: 'CreationTime', field: 'creationTime' }
  ]
     // set replacement values (optional)
    //  toExcel.setReplace('Item 1 ', 'Item 1')

     toExcel.exportXLS(headers, sheetData, 'users');
  };
  const handleExportRows = (rows) => {
    const data = rows.map((row) => row.original);
    exportToExcel(data);
  };

  const handleExportData = () => {
    exportToExcel(users);
  }; 
  const renderTopToolbarCustomActions = ({ table }) => (
    <Box
      sx={{ display: 'flex', gap: '1rem', p: '0.5rem', flexWrap: 'wrap' }}
    >
      <Button
        color="primary"
        //export all data that is currently in the table (ignore pagination, sorting, filtering, etc.)
        onClick={()=> handleExportData(table)}
        title={`Export All Data`}
      >

      </Button>
      <Button
        disabled={table.getPrePaginationRowModel().rows.length === 0}
        //export all rows, including from the next page, (still respects filtering and sorting)
        onClick={() =>
          handleExportRows(table.getPrePaginationRowModel().rows)
        }
        title={`Export All Rows`}
      >
      </Button>
      <Button
        disabled={table.getRowModel().rows.length === 0}
        //export all rows as seen on the screen (respects pagination, sorting, filtering, etc.)
        onClick={() => handleExportRows(table.getRowModel().rows)}
        title={`Export Page Rows`}
      >
      </Button>
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
            alt=""
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
          <h2 className=" fw-semibold">Customers Collection</h2>
          <p className=" fs-3 text-dark mt-n1 fw-normal ">
            List of customers.{" "}
          </p>
        </div>
      </div>
      <div className="row mx-2">
        <div className="col-12 d-block pb-4">
          <div className="d-flex justify-content-between px-3">
            <div>
              <h2 className=" fw-semibold">Customers Collection</h2>
              <p className=" fs-3 text-dark mt-n1 fw-normal ">
                List of customers.{" "}
              </p>
            </div>
            <div>
              <button
                onClick={() => {
                  localStorage.removeItem(cacheKey);
                  getList();
                }}
                className="btn btn-info"
              >
                Clear Cache
              </button>
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
