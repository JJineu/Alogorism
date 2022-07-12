import main_img from "../../img/dog.png";
import { Link } from "react-router-dom";

function Main() {
    return (
      <div className="center">
        <h1 className="main_title"> 안방네컷 </h1>
        <img className="main_img" src={main_img}/>
        <div className="buttons">
          <Link to="/sign_in">
            <button className="button sign_in"> 로그인 </button>
          </Link>
          <Link to="/sign_up">
            <button className="button sign_up">회원가입</button>
          </Link>
        </div>
      </div>
    );
}

export default Main;