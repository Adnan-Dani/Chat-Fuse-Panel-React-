export default function Questions() {
  const users = [
    {
      id: 1,
      userName: "Adnan Khan",
      email: "adnan@gmail.com",
      pic: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-733872.jpg&fm=jpg",
    },
    {
      id: 2,
      userName: "John Doe",
      email: "john.doe@example.com",
      pic: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-733872.jpg&fm=jpg",
    },
    {
      id: 3,
      userName: "Jane Smith",
      email: "jane.smith@example.com",
      pic: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-733872.jpg&fm=jpg",
    },
    {
      id: 4,
      userName: "Michael Johnson",
      email: "michael.johnson@example.com",
      pic: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-733872.jpg&fm=jpg",
    },
    {
      id: 5,
      userName: "Emily Williams",
      email: "emily.williams@example.com",
      pic: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-733872.jpg&fm=jpg",
    },
    {
      id: 6,
      userName: "Robert Brown",
      email: "robert.brown@example.com",
      pic: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-733872.jpg&fm=jpg",
    },
    {
      id: 7,
      userName: "Sophia Lee",
      email: "sophia.lee@example.com",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdZSsRW8ahClgpWbdmk1wKCv_6d5ZNEf_kuZLEmarGpS7KAd8cHuXo9UPSJOy_EESmpu8&usqp=CAU",
    },
    {
      id: 8,
      userName: "William Garcia",
      email: "william.garcia@example.com",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnS1o3mO3S_Nkfw1WAGaRJ6KaOGgODpfoOsA&usqp=CAU",
    },
    {
      id: 9,
      userName: "Olivia Rodriguez",
      email: "olivia.rodriguez@example.com",
      pic: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-733872.jpg&fm=jpg",
    },
    {
      id: 10,
      userName: "James Martinez",
      email: "james.martinez@example.com",
      pic: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    },
  ];
  return (
    <>
      <div className="row ">
        <div className="col-12 pb-4">
          <h2 className=" fw-semibold">Question Collections</h2>
          <p>List of all questions.</p>
        </div>
      </div>
      {users.map((user, index) => (
        <div key={index} className="row align-items-center">
          <div className="col-md-1">1</div>
          <div className="col-md-11">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-2">
                    <img
                      src={user.pic}
                      alt=""
                      height={50}
                      width={50}
                      style={{ borderRadius: "30%" }}
                    />
                  </div>
                  <div className="col-md-2">
                    <h6 className=" fw-semibold">Username</h6>
                    <p>Kamran Creation</p>
                  </div>
                  <div className="col-md-3">
                    <h6 className=" fw-semibold">Mobile Number</h6>
                    <p>Kamran Creation</p>
                  </div>
                  <div className="col-md-3">
                    <h6 className=" fw-semibold">Email</h6>
                    <p>Kamran Creation </p>
                  </div>
                  <div className="col-md-2">
                    <h6 className=" fw-semibold">Question List</h6>
                    <button
                      className="btn btn-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                     <i className="ti ti-arrow-down"> </i>
                    </button>
                  </div>
            
                </div>
              </div>
            </div>

            <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                      Some placeholder content for the collapse component. This
                      panel is hidden by default but revealed when the user
                      activates the relevant trigger.
                    </div>
                  </div>
          </div>
        </div>
      ))}
    </>
  );
}
