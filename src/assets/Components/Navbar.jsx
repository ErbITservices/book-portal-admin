import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <div className="logo">
          {" "}
          <span>Book</span> Portel
        </div>
        <div className="login-info">
          <AccountCircleOutlinedIcon />
        </div>
      </div>
    </>
  );
}
export default Navbar;
