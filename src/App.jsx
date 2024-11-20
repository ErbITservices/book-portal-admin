import "./App.css";
import AddCategory from "./assets/Pages/AddCategory";
import AddScheme from "./assets/Pages/AddScheme";
import BookData from "./assets/Pages/BookData";
import Dashboard from "./assets/Pages/Dashboard";
import Login from "./assets/Pages/Login";
import {
  Routes,
  Route,
  Navigate,
  Outlet,
  BrowserRouter,
} from "react-router-dom";
import Userlist from "./assets/Pages/Userlist";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login title="Login" />} />
          <Route path="/" element={<Dashboard title="Dashboard" />} />
          <Route path="/AddScheme" element={<AddScheme title="AddScheme" />} />
          <Route path="/BookData" element={<BookData title="BookData" />} />
          <Route path="/Userlist" element={<Userlist title="Userlist" />} />
          <Route
            path="/AddCategory"
            element={<AddCategory title="AddCategory" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
