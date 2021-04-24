import logo from "./Valo.jpg";
import "./MainPage.css";
function First() {
  return (
    <div id="grad1">
      <div className="nav">
        <a className="active" href="#home">
          Home
        </a>
        <a href="#profile">Profiles</a>
        <a href="#contact">Contact Us</a>
        <a href="#settings">Settings</a>
      </div>
      <h1 align="center">vAloDot</h1>
      <h2 align="center"> VvIFS</h2>
      <h2 align="center"> 13-0</h2>
      <img src={logo} className="center" alt="Valorant_Image" />
      <div className="ghost">
        <a className="knowmore" href="#knowmore">
          Know More
        </a>
      </div>
      <div className="ghost">
        <a className="profiles" href="#profiles">
          Profiless
        </a>
      </div>
    </div>
  );
}
export default First;
