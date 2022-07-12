import "./App.css";
import Main from "./components/pages/Main";
import Sign_in from "./components/pages/Signin";
import Sign_up from "./components/pages/Signup";
import Main2 from "./components/pages/Main2";
import Lobby from "./components/pages/Lobby";
import Album from "./components/pages/Album";
// import Admission from "./components/pages/Admission";
import Camera from "./components/pages/Camera";
import Invite from "./components/pages/Invite";
// import Save from "./components/pages/Save";
import Share from "./components/pages/Share";
// import Frame from "./components/pages/Frame";


import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<div> 404 NOT FOUND </div>} />
      <Route path="/sign_in" element={<Sign_in />} />
      <Route path="/sign_up" element={<Sign_up />} />
      <Route path="/main2" element={<Main2 />} />
      <Route path="/lobby" element={<Lobby />} />
      <Route path="/album" element={<Album />} />
      {/* <Route path="/admission" element={<Admission />} /> */}
      <Route path="/camera" element={<Camera />} />
      <Route path="/invite" element={<Invite />} />
      {/* <Route path="/save" element={<Save />} /> */}
      <Route path="/share" element={<Share />} />
      {/* <Route path="/frame" element={<Frame />} /> */}

    </Routes>
  );
}

export default App;
