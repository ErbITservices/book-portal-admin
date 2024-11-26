import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Slidebar from "../Components/Slidebar";
import { req } from "../../axiosReqMethods";

import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

function Userlist() {
  const [userlist, setuserlist] = useState();
  // useEffect(async () => {
  // //   const res = await userRequest.get("/api/v1/bookeEntry/getAllBook");
  // //   setbooklist(res);
  // console.log(booklist);
  // }, []);

  useEffect(() => {
    const dataget = async () => {
      try {
        const res = await req.get(`/api/v1/admin/getAllUser`);
        setuserlist(res.data.users);
        console.log(userlist);
        console.log(res.data.users);
      } catch (error) {
        console.log(error);
      }
    };
    dataget();
  }, []);
   async function handledelete(id) {
     try {
       const res1 = await req.delete(`/api/v1/admin/deleteUser/${id}`);
     } catch (error) {
       console.log(error);
     }
     setuserlist([]);
     const res2 = await req.get(`/api/v1/admin/getAllUser`);
     setuserlist(res2.data.users);
   }
  return (
    <>
      <div className="dashboard-container">
        <Navbar />
        <div className="dashboard-main-container">
          <Slidebar />
          <div className="userlist-container">
            <h1>All Users</h1>
            <table>
              <thead>
                <tr>
                  <th>User Name</th>
                  <th>Company Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {userlist?.map((i) => (
                  <tr>
                    <td key={i.username}> {i.username}</td>

                    <td key={i.contect_name}> {i.contect_name}</td>
                    <td key={i.email}> {i.email}</td>
                    <td key={i.phone}> {i.phone}</td>
                    <td onClick={() => handledelete(i._id)} className="delete">
                      <DeleteForeverOutlinedIcon />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* <Footer /> */}
      </div>
    </>
  );
}
export default Userlist;
