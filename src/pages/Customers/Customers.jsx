export default function Customers() {
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
        <div className="col-12 d-block pb-4">
          <h2 className=" fw-semibold">Customers Collection</h2>
          <p className=" fs-3 text-dark mt-n1 fw-normal ">
            List of customers.{" "}
          </p>
        </div>
      </div>
      <div className="row">
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
                      <th className="border-bottom-0">
                        <h6 className="fw-semibold mb-0">Joined At</h6>
                      </th> 
                    </tr>
                  </thead>
                  <tbody>
                    {users.length < 1 ? (
                      <tr className="text-center">
                        <td></td>
                        <td>No users active</td>
                      </tr>
                    ) : (
                      users.map((user, index) => (
                        <tr key={index}>
                          <td className="border-bottom-0"> 
                          <img src={user.pic} alt="" height={50} width={50} style={{ borderRadius:"30%"   }} />
                          </td>
                          <td className="border-bottom-0">
                            <h6 className="fw-semibold mb-1">{user.userName}</h6> 
                          </td>
                          <td className="border-bottom-0">
                            <p className="mb-0 fw-normal">{user.email}</p>
                          </td>
                        
                          <td className="border-bottom-0">
                            <h6 className="fw-semibold mb-0 fs-4">01/02/2023 </h6>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
