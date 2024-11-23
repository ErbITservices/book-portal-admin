import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import CloseIcon from "@mui/icons-material/Close";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import CategoryIcon from "@mui/icons-material/Category";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
function Slidebar({ hideslidebar }) {
  const hideref = useRef();
  const [showbar, setshowbar] = useState(true);
 

  function handlehideslidebar() {
    
    hideref.current.style.display = "none";
    setshowbar(true)
  }
  function handleshowslidebar() {
    setshowbar(false)
      
    hideref.current.style.display = "block";
    
  }
  return (
    <>
      {/* {showbar && (
        // <div className="show-bar" onClick={handleshowslidebar}>
        //   <MenuIcon />
        // </div>
      )} */}

      <div className="slide-bar"  ref={hideref}>
        {/* <div className="close-icon"  onClick={handlehideslidebar}>
          <CloseIcon />
        </div> */}

        <ul>
          <Link to="/Dashboard" style={{ textDecoration: "none" }}>
            <li>
              <GridViewOutlinedIcon /> Dashboard
            </li>
          </Link>
          <Link to="/AddCategory" style={{ textDecoration: "none" }}>
            <li>
              <CategoryIcon /> Add Category
            </li>
          </Link>
          <Link to="/AddSubject" style={{ textDecoration: "none" }}>
            <li>
              <AddOutlinedIcon /> Add Subject
            </li>
          </Link>
          <Link to="/AddScheme" style={{ textDecoration: "none" }}>
            <li>
              <AddOutlinedIcon /> Add Scheme
            </li>
          </Link>

          <Link to="/Userlist" style={{ textDecoration: "none" }}>
            <li>
              <PeopleAltOutlinedIcon /> Users
            </li>
          </Link>

          <Link to="/BookData" style={{ textDecoration: "none" }}>
            <li>
              <AutoStoriesOutlinedIcon /> Book List
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}
export default Slidebar;
