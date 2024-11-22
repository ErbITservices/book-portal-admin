import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Slidebar from "../Components/Slidebar";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { userRequest } from "../../axiosReqMethods";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
function AddSubject() {
  const [categorydata, setcategorydata] = useState({ CategoryName: "" });
  const [categorylist, setcategorylist] = useState();


useEffect(() => {
  const dataget = async () => {
    try {
      const res = await userRequest.get(`/api/v1/CategoryName/getCategoryName`);
      setcategorylist(res.data.Category);
      console.log(categorylist);
      console.log(res.data.Category);
    } catch (error) {
      console.log(error);
    }
  };
  dataget();
}, []);

  function handleinput(e) {
    const name = e.target.name;
    const value = e.target.value;
    setcategorydata({ ...categorydata, [name]: value });
    console.log(categorydata);
    
  }
  async function handlesubmit() {
    const res = await userRequest.post("/api/v1/CategoryName/addCategoryName", {
      categorydata,
    });
    try {
      const res = await userRequest.get(`/api/v1/CategoryName/getCategoryName`);
      setcategorylist(res.data.Category);
      console.log(categorylist);
      console.log(res.data.Category);
    } catch (error) {
      console.log(error);
    }
    if (res.status === 200) {
      setcategorydata({
        CategoryName:""
      });
    }
    else {
      alert("Category Name Must Be Unique");
    }
  }
  async function handledelete(id) {
    try {
      const res1 = await userRequest.delete(`/api/v1/CategoryName/deleteCategoryName/${id}`);
      setcategorylist(res1.data.Category);
      
    } catch (error) {
      console.log(error);
    }
    const res2 = await userRequest.get(`/api/v1/CategoryName/getCategoryName`);
      setcategorylist(res2.data.Category);
  }
  return (
    <>
      <div className="dashboard-container">
        <Navbar />
        <div className="dashboard-main-container">
          <Slidebar />
          <div className="addsheam-container">
            <div className="container">
              <div className="addsheam-container">
                <h1>Add New Subject of Books</h1>
                <div className="addsheam-inputarea">
                  <label>Subject Name </label>
                  <input
                    className="login-input"
                    type="text"
                    name="CategoryName"
                    value={categorydata.CategoryName}
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
                      {categorylist?.map((i) => (
                        <tr>
                          <td key={i.CategoryName}> {i.CategoryName}</td>
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

        <Footer />
      </div>
    </>
  );
}
export default AddSubject;
