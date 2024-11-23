import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Slidebar from "../Components/Slidebar";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { userRequest } from "../../axiosReqMethods";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
function AddSubject() {
  const [Subjectdata, setSubjectdata] = useState({ SubjectName: "" });
  const [subjectlist, setsubjectlist] = useState();


useEffect(() => {
  const dataget = async () => {
    try {
      const res = await userRequest.get(`/api/v1/subject/getSubject`);
      setsubjectlist(res.data.Subject
      );
      console.log(subjectlist);
      console.log(res.data.Subject
      );
    } catch (error) {
      console.log(error);
    }
  };
  dataget();
}, []);

  function handleinput(e) {
    const name = e.target.name;
    const value = e.target.value;
    setSubjectdata({ ...Subjectdata, [name]: value });
    console.log(Subjectdata);
    
  }
  async function handlesubmit() {
    const res = await userRequest.post("/api/v1/subject/addSubject", {
      Subjectdata,
    });
    try {
      const res = await userRequest.get(`/api/v1/subject/getSubject`);
      setsubjectlist(res.data.Subject);
      console.log(subjectlist);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
    if (res.status === 200) {
      setSubjectdata({
        SubjectName:""
      });
    }
    else {
      alert("Category Name Must Be Unique");
    }
  }
  async function handledelete(id) {
    try {
      const res1 = await userRequest.delete(`/api/v1/subject/deleteSubject/${id}`);
      setsubjectlist(res1.data.Subject);
      
    } catch (error) {
      console.log(error);
    }
    const res2 = await userRequest.get(`/api/v1/subject/getSubject`);
      setsubjectlist(res2.data.Subject);
  }
  return (
    <>
      <div className="dashboard-container">
        <Navbar />
        <div className="dashboard-main-container">
          <Slidebar />
          <div className="container">
            <div className="container">
              <div className="addcategory-container">
                <h1>Add New Subject of Books</h1>
                <div className="addcategory-inputarea">
                  <label>Subject Name </label>
                  <input
                    className="login-input"
                    type="text"
                    name="SubjectName"
                    value={Subjectdata.SubjectName}
                    onChange={handleinput}
                  />
                </div>

                <button type="submit" onClick={handlesubmit} className="btn">
                  Add <AddOutlinedIcon />
                </button>
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>Subject Name</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {subjectlist?.map((i) => (
                        <tr>
                          <td key={i.SubjectName}> {i.SubjectName}</td>
                          <td onClick={()=>handledelete(i._id)} className="delete">
                            <DeleteForeverOutlinedIcon />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <Footer /> */}
      </div>
    </>
  );
}
export default AddSubject;
