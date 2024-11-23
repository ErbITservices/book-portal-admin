import { useEffect, useRef, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Slidebar from "../Components/Slidebar";
import { req } from "../../axiosReqMethods";

import { useDownloadExcel } from "react-export-table-to-excel";

function BookData() {
    const [booklist, setbooklist] = useState();
    // useEffect(async () => {
    // //   const res = await userRequest.get("/api/v1/bookeEntry/getAllBook");
    // //   setbooklist(res);
      // console.log(booklist);
    // }, []);
    const xls = useRef();
    const { onDownload } = useDownloadExcel({
      currentTableRef: xls.current,
      filename: "Bookdata",
      sheet: "Users"
    });
    
    useEffect(() => {
    const dataget = async () => {
      try {
        
        const res = await req.get(`/api/v1/bookeEntry/getAllBook`); setbooklist(res.data.bookEntry);
        console.log(booklist);
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

            <div className="userlist-container">
              <h1>All Book List</h1>
              <table ref={xls}>
                <thead>
                  <tr>
                   
                    <th> ISBN</th>
                    <th>Book Name</th>
                    <th>Book Name Guj</th>
                    <th> Category</th>
                    <th> Language</th>
                    <th> PublisherName</th>
                    <th> Size</th>
                    <th> Subject</th>
                    <th> Weight</th>
                    <th> Binding</th>
                    <th> AuthorName</th>
                    <th> AuthorNameGuj</th>
                    <th> Discribption</th>
                  </tr>
                </thead>
                <tbody>
                  {booklist &&
                    booklist.map((i) => (
                      <tr>
                        
                        
                        <td key={i.ISBN}> {i.ISBN}</td>
                        <td key={i.BookName}> {i.BookName}</td>

                        <td key={i.BookNameGuj}> {i.BookNameGuj}</td>
                        <td key={i.Category}> {i.Category}</td>
                        <td key={i.Language}> {i.Language}</td>
                        <td key={i.PublisherName}> {i.PublisherName}</td>
                        <td key={i.Size}> {i.Size}</td>
                        <td key={i.Subject}> {i.Subject}</td>
                        <td key={i.Weight}> {i.Weight}</td>
                        <td key={i.Binding}> {i.Binding}</td>
                        <td key={i.AuthorName}> {i.AuthorName}</td>
                        <td key={i.AuthorNameGuj}> {i.AuthorNameGuj}</td>
                        <td key={i.Discribption}> {i.Discribption}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
              <div className="btn-container"><button className="btn" onClick={onDownload}> Download Xls</button></div>
            </div>
          </div>

          <Footer />
        </div>
      </>
    );
}
export default BookData;