import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Slidebar from "../Components/Slidebar"
import BackupTableOutlinedIcon from "@mui/icons-material/BackupTableOutlined";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { req } from "../../axiosReqMethods";
function Dashboard() {
  const [numberofbook, setnumberofbook] = useState();
  const [numberofscheme, setnumberofscheme] = useState();
  const [numberofuser, setnumberofuser] = useState();
  useEffect(() => {
    const dataget = async () => {
      try {
        const res1 = await req.get(`/api/v1/bookeEntry/getAllBook`);
        setnumberofbook(res1.data.bookEntry.length);
        const res2 = await req.get(`api/v1/scheam/getScheam`);
        setnumberofscheme(res2.data.allScheam.length);
        const res3 = await req.get(`/api/v1/admin/getAllUser`);
        setnumberofuser(res3.data.users.length);
        // console.log(numberofbook);
        console.log("mihir");
      } catch (error) {
        console.log(error);
      }
    };
    dataget();
  }, []);
    return (
      <>
        <div className="dashboard-container">
          <Navbar />
          <div className="dashboard-main-container">
            <Slidebar />
            <div className="card-container">
              <div className="info-cards">
                <h2> Total Active Schemes </h2>
                <h2>
                  <BackupTableOutlinedIcon />
                  {numberofscheme}
                </h2>
              </div>
              <div className="info-cards">
                <h2> Users </h2>
                <h2>
                  <PermIdentityOutlinedIcon />
                  {numberofuser}
                </h2>
              </div>
              <div className="info-cards">
                <h2> Total Books </h2>
                <h2>
                  <ImportContactsOutlinedIcon />
                  {numberofbook}
                </h2>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </>
    );
}
export default Dashboard;