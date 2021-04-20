import logo from "./Valo.jpg";
import "./MainPage.css";
function First() {
  return (
    <div id="grad1">
      <h1 align="center">vAloDot</h1>
      <h2 align="center"> VvIFS</h2>
      <h2 align="center"> 13-0</h2>
      <img src={logo} class="center" alt="Valorant_Image" />
      <div class="ghost">
      <a class="knowmore" href="#">Know More</a>
      </div>
      <div class="ghost">
        <a class="profiles" href="#">
          Profiless
        </a>
      </div>
    </div>
  );
}
export default First;
