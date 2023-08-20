import { useEffect,   useState } from "react";
import http from "./../../services/HttpService";

export default function Questions() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);
 
  const totalPages = Math.ceil(users.length / recordsPerPage);

  var cacheKey = "answers";
  const getList = () => {
    setLoading(true);
    const isCache = localStorage.getItem(cacheKey);

    if(!isCache){
      http.get(cacheKey).then((res) => { 
        localStorage.setItem(cacheKey, JSON.stringify(res.data));
        setUsers(res.data || []);
        setLoading(false);
      });
    }else{
      setUsers(JSON.parse(isCache))
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
             <button onClick={()=> {localStorage.removeItem(cacheKey);getList()}} className="btn btn-info">Clear Cache</button>
            </div>
          </div>
        </div>
        <div className="col-12">
          {loading
            ? [1, 3, 4, 5, 6, 7].map((item, index) => (
                <div key={index} className="row align-items-center">
                  <div className="col-md-1">{index + 1}</div>
                  <div className="col-md-11">
                    <div className="card">
                      <div className="card-body">
                        <div className="row placeholder-glow">
                          <div className="col-md-2 ">
                            <div
                              className="placeholder"
                              style={{
                                borderRadius: "30%",
                                height: "50px",
                                width: "50px",
                              }}
                            />
                          </div>
                          <div className="col-md-2">
                            <h6 className=" fw-semibold">Username</h6>
                            <p className="placeholder">Kamran Creation</p>
                          </div> 
                          <div className="col-md-5">
                            <h6 className=" fw-semibold">Email</h6>
                            <p className="placeholder">Kamran Creation Kamran Creation </p>
                          </div>
                          <div className="col-md-2">
                            <h6 className=" fw-semibold">Question List</h6>
                            <button
                              className="btn btn-primary placeholder"
                              type="button"
                              disabled
                            >
                              <i className="ti ti-arrow-down"> </i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : paginatedUsers.map((user, index) => (
                <div key={index} className="row align-items-center">
                  <div className="col-md-1">{index + 1}</div>
                  <div className="col-md-11">
                    <div className="card">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-2">
                            <img
                              src={user.userInfo?.profile}
                              alt=""
                              height={50}
                              width={50}
                              style={{ borderRadius: "30%" }}
                            />
                          </div>
                          <div className="col-md-2">
                            <h6 className=" fw-semibold">Username</h6>
                            <p>{user.userInfo?.name}</p>
                          </div> 
                          <div className="col-md-5">
                            <h6 className=" fw-semibold">Email</h6>
                            <p>{user.userInfo?.email}</p>
                          </div>
                          <div className="col-md-2">
                            <h6 className=" fw-semibold">Question List</h6>
                            <button
                              className="btn btn-primary"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#${user.id}`}
                              aria-expanded="false"
                              aria-controls="collapseExample"
                            >
                              <i className="ti ti-arrow-down"> </i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="collapse" id={user.id}>
                      <div className="card card-body">
                        <p>
                          <b>Question 1:</b> {user["Question 1"]}
                        </p>
                        <p>
                          <b>Answer 1:</b> {user["Answer 1"]}
                        </p>
                        <br></br>
                        <p>
                          <b>Question 2:</b> {user["Question 2"]}
                        </p>
                        <p>
                          <b>Answer 2:</b> {user["Answer 2"]}
                        </p>
                        <br></br>
                        <p>
                          <b>Question 3:</b> {user["Question 3"]}
                        </p>
                        <p>
                          <b>Answer 3:</b> {user["Answer 3"]}
                        </p>
                        <br></br>
                        <p>
                          <b>Question 4:</b> {user["Question 4"]}
                        </p>
                        <p>
                          <b>Answer 4:</b> {user["Answer 4"]}
                        </p>
                        <br></br>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          {/* Pagination Controls */}
          {!loading && (
            <div className="d-flex justify-content-center mt-4">
              <button onClick={() => handlePageChange(currentPage - 1)}>
                Previous
              </button>
              <span className="mx-3 pt-2">{currentPage}</span>
              <button onClick={() => handlePageChange(currentPage + 1)}>
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
