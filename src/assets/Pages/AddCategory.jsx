import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Slidebar from "../Components/Slidebar";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { userRequest } from "../../axiosReqMethods";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
function AddCategory() {
  const [categorydata, setcategorydata] = useState({ CategoryName: "" });
  const [categorylist, setcategorylist] = useState();


useEffect(() => {
  const dataget = async () => {
    try {
      const res = await userRequest.get(`/api/v1/CategoryName/getCategoryName`);
      setcategorylist(res.data.Category);
    } catch (error) {
      alert("Somthing Wrong!! Try Again")
    }
  };
  dataget();
}, []);

  function handleinput(e) {
    const name = e.target.name;
    const value = e.target.value;
    setcategorydata({ ...categorydata, [name]: value });
    
  }
  async function handlesubmit() {
    const res = await userRequest.post("/api/v1/CategoryName/addCategoryName", {
      categorydata,
    });
    try {
      const res = await userRequest.get(`/api/v1/CategoryName/getCategoryName`);
      setcategorylist(res.data.Category);
    } catch (error) {
      alert("Somthing Wrong!! Try Again");
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
      alert("Somthing Wrong!! Try Again");
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
          <div className="container">
            <div className="container">
              <div className="addcategory-container">
                <h1>Add New Category of Books</h1>
                <div className="addcategory-inputarea">
                  <label>Category Name </label>
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
                        <th>Category Name</th>
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

        {/* <Footer /> */}
      </div>
    </>
  );
}
export default AddCategory;
