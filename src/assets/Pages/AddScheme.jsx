import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Slidebar from "../Components/Slidebar";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { userRequest } from "../../axiosReqMethods";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

import EditNoteIcon from "@mui/icons-material/EditNote";
function AddScheme() {
  const [schemedata, setschemedata] = useState({
    scheam_name: "",
    max_book_number: "",
    max_book_price: "",
    book_price: "",
    total_book_price: "",
    scheam_status: "",
  });
  const [schemelist, setschemelist] = useState();
  const [showedit,setshowedit] = useState(false);

useEffect(() => {
  const dataget = async () => {
    try {
      const res = await userRequest.get(`/api/v1/scheam/getScheam`);
      setschemelist(res.data.allScheam);
      // console.log(categorylist);
      console.log(res.data.allScheam);
    } catch (error) {
      console.log(error);
    }
  };
  dataget();
}, []);

  function handleinput(e) {
    const name = e.target.name;
    const value = e.target.value;
    setschemedata({ ...schemedata, [name]: value })
    console.log(schemedata);
    
  }
  async function handlesubmit() {
    const res = await userRequest.post("/api/v1/scheam/addScheam", {
      schemedata,
    });
    try {
      const res = await userRequest.get(`/api/v1/scheam/getScheam`);
      setschemelist(res.data.allScheam);
      // console.log(categorylist);
      console.log(res.data.allScheam);
    } catch (error) {
      console.log(error);
    }
    if (res.status === 200) {
      setschemedata({
        scheam_name: "",
        max_book_number: "",
        max_book_price: "",
        book_price: "",
        total_book_price: "",
        scheam_status: "",
      });
    }
  }
  async function handledelete({_id}) {
    try {
      const res1 = await userRequest.delete(`/api/v1/scheam/deleteScheam/${_id}`);
      // setcategorylist(res1.data.Category);
      
    } catch (error) {
      console.log(error);
    }
    const res2 = await userRequest.get(`/api/v1/scheam/getScheam`);
    setschemelist(res2.data.allScheam);
  }
  async function handleedit() {
    console.log(`/api/v1/scheam/putScheam/${schemedata._id}`);
    
    const res = await userRequest.put(`/api/v1/scheam/putScheam/${schemedata._id}`, {schemedata});
    console.log(res);
    if (res.status === 200) {
      setschemedata({
        scheam_name: "",
        max_book_number: "",
        max_book_price: "",
        book_price: "",
        total_book_price: "",
        scheam_status: "",
      });
      
      setshowedit(false)
    }
    setschemelist();
    const res2 = await userRequest.get(`/api/v1/scheam/getScheam`);
    setschemelist(res2.data.allScheam);
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
                <h1>Add New Scheme</h1>
                <div className="addsheam-inputarea">
                  <label>Scheme Name </label>
                  <input
                    className="login-input"
                    type="text"
                    onChange={handleinput}
                    value={schemedata.scheam_name}
                    name="scheam_name"
                  />
                </div>
                <div className="addsheam-inputarea">
                  <label>Number of books Allowed</label>
                  <input
                    className="login-input"
                    type="number"
                    onChange={handleinput}
                    value={schemedata.max_book_number}
                    name="max_book_number"
                  />
                </div>

                <div className="addsheam-inputarea">
                  <label>Max Total Value of Set</label>
                  <input
                    className="login-input"
                    type="number"
                    onChange={handleinput}
                    value={schemedata.total_book_price}
                    name="total_book_price"
                  />
                </div>

                <div className="addsheam-inputarea">
                  <label>Minimum Book Value </label>
                  <input
                    className="login-input"
                    type="number"
                    onChange={handleinput}
                    value={schemedata.book_price}
                    name="book_price"
                  />
                </div>

                <div className="addsheam-inputarea">
                  <label>Maximum Book Value </label>
                  <input
                    className="login-input"
                    type="number"
                    onChange={handleinput}
                    value={schemedata.max_book_price}
                    name="max_book_price"
                  />
                </div>

                <div className="addsheam-inputarea">
                  <label>Scheme Status </label>
                  <select
                    className=""
                    onChange={handleinput}
                    value={schemedata.scheam_status}
                    name="scheam_status"
                  >
                    <option value={""}>Select</option>
                    <option>Active</option>
                    <option>Diactiveted</option>
                  </select>
                </div>

                
                {!showedit && (
              <button onClick={handlesubmit} className="btn">
                <AddOutlinedIcon />
                Add
              </button>
            )}
            {showedit && (
              <button onClick={handleedit} className="btn">
                <EditNoteIcon />
                Edit
              </button>
            )}

                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>Category Name</th>
                        <th>Minimum Book Price</th>
                        <th>Maximum Book Price</th>
                        <th>Total Set Price</th>
                        <th>Number Of Book Allowed</th>
                        <th>Status</th>
                        <th>Delete Scheme</th>
                        <th>Edit Scheme</th>
                      </tr>
                    </thead>
                    <tbody>
                      {schemelist?.map((i) => (
                        <tr>
                          <td key={i.scheam_name}> {i.scheam_name}</td>
                          <td key={i.book_price}> {i.book_price}</td>
                          <td key={i.max_book_price}> {i.max_book_price}</td>
                          <td key={i.total_book_price}>{i.total_book_price}</td>
                          <td key={i.max_book_number}> {i.max_book_number}</td>
                          <td key={i.scheam_status}> {i.scheam_status}</td>
                          <td onClick={()=>handledelete(i)} className="delete">
                            <DeleteForeverOutlinedIcon />{" "}
                          </td>
                          <td onClick={()=>{setshowedit(true)
                            setschemedata(i)
                          }} className="edit">
                            <EditNoteIcon  />{" "}
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
export default AddScheme;
