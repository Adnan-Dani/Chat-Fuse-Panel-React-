import { useEffect, useState } from "react";
import http from "./../../services/HttpService";
export default function Customers() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);

  const totalPages = Math.ceil(users.length / recordsPerPage);
  const cacheKey = "users";
  const getList = () => {
    setLoading(true);
    const isCache = localStorage.getItem(cacheKey);
    if(!isCache){
      http.get(cacheKey).then((res) => {
        setUsers(res.data.users || []);
        localStorage.setItem(cacheKey, JSON.stringify(res.data.users));
        setLoading(false);
      });
    }else{
      setUsers(JSON.parse(isCache));
      setLoading(false);
    }
   
  };

  useEffect(() => {
    getList();
  }, []);
  const paginatedUsers = users.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };
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
          <h2 className=" fw-semibold">Customers Collection</h2>
          <p className=" fs-3 text-dark mt-n1 fw-normal ">
            List of customers.{" "} 
          </p>
        </div>
        <div className="col-12">
          <div className="card w-100">
            <div className="card-body p-4">
              <div className="table-responsive">
                <table
                  className="table text-nowrap mb-0 align-middle table-hover"
                  style={{ tableLayout: "fixed" }}
                >
                  <thead className="text-dark fs-4">
                    <tr>
                      <th className="border-bottom-0">
                        <h6 className="fw-semibold mb-0">Profile</h6>
                      </th>
                      <th className="border-bottom-0">
                        <h6 className="fw-semibold mb-0">Name</h6>
                      </th>
                      <th className="border-bottom-0">
                        <h6 className="fw-semibold mb-0">Email</h6>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      [1, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                        <tr key={index} className="placeholder-glow">
                          <td className="border-bottom-0">
                            <div
                              className="placeholder"
                              style={{
                                borderRadius: "30%",
                                height: "50px",
                                width: "50px",
                              }}
                            />
                          </td>
                          <td className="border-bottom-0">
                            <h6 className="fw-semibold mb-1 placeholder">
                            Username Username 
                            </h6>
                          </td>
                          <td className="border-bottom-0">
                            <p className="mb-0 fw-normal placeholder">
                              mail@mail.com mail@mail.com mail@mail.com
                            </p>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <>
                        {paginatedUsers.length < 1 ? (
                          <tr className="text-center">
                            <td></td>
                            <td>No users active</td>
                          </tr>
                        ) : (
                          paginatedUsers.map((user, index) => (
                            <>
                              <tr key={index}>
                                <td className="border-bottom-0">
                                  <img
                                    src={user.profile}
                                    alt=""
                                    height={50}
                                    width={50}
                                    style={{ borderRadius: "30%" }}
                                  />
                                </td>
                                <td className="border-bottom-0">
                                  <h6 className="fw-semibold mb-1">
                                    {user.name}
                                  </h6>
                                </td>
                                <td className="border-bottom-0">
                                  <p className="mb-0 fw-normal">{user.email}</p>
                                </td>
                              </tr>
                            </>
                          ))
                        )}
                      </>
                    )}
                  </tbody>
                </table>
                {/* Pagination Controls */}
                <div className="d-flex justify-content-center mt-4">
                  <button onClick={() => handlePageChange(currentPage - 1)}>
                    Previous
                  </button>
                  <span className="mx-3 pt-2">{currentPage}</span>
                  <button onClick={() => handlePageChange(currentPage + 1)}>
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
