import Table from 'react-bootstrap/Table';
import PaginationComponent from './pagination.component';
import "./table.styles.scss";

function StaffPage() {
  return (
   
      <div className='tablestyle'>
          <div className="searchBox">
              
          </div>
      <div className='tables'>
           <Table striped bordered>
      <thead>
        <tr>
          <th>Staff ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Designation</th>
          <th>Address</th>
          <th>Contact</th>
          <th>Email Address</th>
          <th>Department</th>
          <th>Hotel</th>
        </tr>
      </thead>
      <tbody>
       <tr>
          <td>1</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>Thornton</td>
          <td>Thornton</td>
          <td>Thornton</td>
          <td>Thornton</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
      </tbody>
      <PaginationComponent />
      </Table>
          </div>
      </div>
  );
}

export default StaffPage;