import { Link } from "react-router-dom";
// import chooes_back from "../../img/chooes_back.png";
// import chooes_effect from "../../img/chooes_effect.png";
// import chooes_deco from "../../img/chooes_deco.png";
import shutter from "../../img/shutter.png";
import change_camera from "../../img/change_camera.png";
import { useState } from "react";


function Camera() {
  let [탭, 탭변경] = useState(0)

  return (
    <div>
      {/* <Tab_content 탭={탭}/>
      <div class="wrapper">
        <Link to="">
          <div className="chooes_back" onClick={ ()=>{ 탭변경(0) }}>
            <img src={chooes_back} />
          </div>
        </Link>
        <Link to="effect">
          <div className="chooes_effect" onClick={ ()=>{ 탭변경(1) }}>
            <img src={chooes_effect} />
          </div>
        </Link>
        <Link to="deco">
          <div className="chooes_deco" onClick={ ()=>{ 탭변경(2) }}>
            <img src={chooes_deco} />
          </div>
        </Link>
      </div> */}


      <div class="wrapper">
          <div className="shutter_num">
            
          </div>
          <div className="shutter">
            <img src={shutter} />
          </div>
          <div className="change_camera">
            <img src={change_camera} />
          </div>
      </div>

    </div>
  );
}

// function Tab_content(props){
//   if (props.탭 == 0){
//     return <div> </div>
//   }
//   if (props.탭 == 1){
//     return <div> </div>
//   }
//   if (props.탭 == 2){
//     return <div> </div>
//   }
// }

{/* <Navbar bg="light" variant="light">
<Container>
  <Nav className="me-auto">
    <Nav.Link href="#home">Home</Nav.Link>
    <Nav.Link href="#features">Features</Nav.Link>
    <Nav.Link href="#pricing">Pricing</Nav.Link>
  </Nav>
</Container>
</Navbar> */}

export default Camera;
