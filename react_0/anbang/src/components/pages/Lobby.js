import { Link } from "react-router-dom";
// import { ListGroup } from 'react-bootstrap';
import Table from "react-bootstrap/Table";
import tmp from "../../img/dog.png";

function Lobby() {
  return (
    <div className="center">
      <h2> 대기실 </h2>
      <div className="waiting">
        {/* <ListGroup>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup> */}
        <Table striped bordered hover>
          <tbody>
            <tr>
              <td><img src={tmp} className="profile_img"/></td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </div>

      <div className="buttons">
        <Link to="/camera">
          <button className="button admission"> 입장 </button>
        </Link>
        <Link to="/invite">
          <button className="button invite">초대</button>
        </Link>
      </div>
    </div>
  );
}

export default Lobby;
