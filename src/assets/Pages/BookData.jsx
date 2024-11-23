import { useEffect, useRef, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Slidebar from "../Components/Slidebar";
import { req } from "../../axiosReqMethods";

import { useDownloadExcel } from "react-export-table-to-excel";

function BookData() {
  const [booklist, setbooklist] = useState();
  const [schemelist, setschemelist] = useState();
  // useEffect(async () => {
  // //   const res = await userRequest.get("/api/v1/bookeEntry/getAllBook");
  // //   setbooklist(res);
  // console.log(booklist);
  // }, []);
  const xls = useRef();
  const { onDownload } = useDownloadExcel({
    currentTableRef: xls.current,
    filename: "Bookdata",
    sheet: "Users",
  });

  useEffect(() => {
    const dataget = async () => {
      try {
        // const res = await req.get(`/api/v1/bookeEntry/getAllBook`); setbooklist(res.data.bookEntry);
        console.log(booklist);
        console.log("mihir");
        const res2 = await req.get(`/api/v1/scheam/getScheam`);
        setschemelist(res2.data.allScheam);
        console.log(res2);
      } catch (error) {
        console.log(error);
      }
    };
    dataget();
  }, []);
  async function handleinput(e) {
    const value = e.target.value;
    setbooklist([]);
    const res = await req.get(`/api/v1/bookeEntry/getScheamBook/${value}`);
    console.log(res.data);

    setbooklist(res.data.bookEntry);
    // console.log(booklist);
  }
  return (
    <>
      <div className="dashboard-container">
        <Navbar />
        <div className="dashboard-main-container">
          <Slidebar />

          <div className="userlist-container">
            <h1>All Book List</h1>

            <div className="Addbook-inputarea">
              <label>Scheme </label>
              <select
                required
                className="input"
                type="text"
                onChange={handleinput}
              >
                <option value={""}>All</option>
                {schemelist &&
                  schemelist.map((i) => (
                    <option key={i.scheam_name}>{i.scheam_name}</option>
                  ))}
              </select>
            </div>
            <table ref={xls}>
              <thead>
                <tr>
                  <th> Sr no</th>
                  <th> ISBN</th>
                  <th> Book Name</th>
                  <th> Book Name (Guj)</th>
                  <th> Author Name</th>
                  <th> Author Name (Guj)</th>
                  <th> Publisher Name</th>
                  <th> Price</th>
                  <th> Pages</th>
                  <th> Size</th>
                  <th> Weight</th>
                  <th> Binding</th>
                  <th> Language</th>
                  <th> Category</th>
                  <th> Subject</th>
                  <th> Pub Year</th>
                  <th> Scheme Name</th>
                  <th> Discription</th>
                </tr>
              </thead>
              <tbody>
                {booklist &&
                  booklist.map((i, index) => (
                    <tr>
                      <td key={i.index + 1}> {index + 1}</td>
                      <td key={i.ISBN}> {i.ISBN}</td>
                      <td key={i.BookName}> {i.BookName}</td>
                      <td key={i.BookNameGuj}> {i.BookNameGuj}</td>
                      <td key={i.AuthorName}> {i.AuthorName}</td>
                      <td key={i.AuthorNameGuj}> {i.AuthorNameGuj}</td>
                      <td key={i.PublisherName}> {i.PublisherName}</td>
                      <td key={i.Price}> {i.Price}</td>
                      <td key={i.BookPages}> {i.BookPages}</td>
                      <td key={i.Size}> {i.Size}</td>
                      <td key={i.Weight}> {i.Weight}</td>
                      <td key={i.Binding}> {i.Binding}</td>
                      <td key={i.Language}> {i.Language}</td>
                      <td key={i.Category}> {i.Category}</td>
                      <td key={i.Subject}> {i.Subject}</td>
                      <td key={i.PubYear}> {i.PubYear}</td>
                      <td key={i.schemename}> {i.schemename}</td>
                      <td key={i.Discribption
}> {i.Discribption
}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div className="btn-container">
              <button className="btn" onClick={onDownload}>
                {" "}
                Download Xls
              </button>
            </div>
          </div>
        </div>

        {/* <Footer /> */}
      </div>
    </>
  );
}
export default BookData;
