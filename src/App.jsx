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
import AddSubject from "./assets/Pages/AddSubject";
import Protected from "./assets/Pages/Protected";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Protected Components={Login} />}></Route>
          <Route
            path="/Dashboard"
            element={<Protected Components={Dashboard} />}
          ></Route>
          <Route
            path="/AddScheme"
            element={<Protected Components={AddScheme} />}
          ></Route>
          <Route
            path="/BookData"
            element={<Protected Components={BookData} />}
          ></Route>
          <Route
            path="/Userlist"
            element={<Protected Components={Userlist} />}
          ></Route>
          <Route
            path="/AddCategory"
            element={<Protected Components={AddCategory} />}
          ></Route>
          <Route
            path="/AddSubject"
            element={<Protected Components={AddSubject} />}
          ></Route>
        </Routes>

        {/* <Route path="/" element={<Login title="Login" />} />
          <Route path="/Dashboard" element={<Dashboard title="Dashboard" />} />
          <Route path="/AddScheme" element={<AddScheme title="AddScheme" />} />
          <Route path="/BookData" element={<BookData title="BookData" />} />
          <Route path="/Userlist" element={<Userlist title="Userlist" />} />
          <Route
            path="/AddCategory"
            element={<AddCategory title="AddCategory" />}
          />
          <Route
            path="/AddSubject"
            element={<AddSubject title="AddSubject" />}
          /> */}
        {/* </Routes> */}
      </BrowserRouter>
    </>
  );
}

export default App;
