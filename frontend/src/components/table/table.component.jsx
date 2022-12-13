import Table from 'react-bootstrap/Table';
import ModalComponent from '../modal/modal.component';
import PaginationComponent from './pagination.component';
import "./table.styles.scss";

function StaffPage() {
  const Fields = {
    id: 1,
    title: 'Add Staff',
    label1: "First Name",
    label2: "Last Name",
    label3: "Designation",
    label4: "Address",
    label5: "Contact",
    label6: "Email Address",
    label7: "Department",
    label8: "Hotel"
  }
  return (
      <div className='tablestyle'>
          <div className="">
        <ModalComponent {...Fields} />
          </div>
      <div className='tables'>
           <Table striped hover bordered variant="dark">
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
        </Table>
        <div className='pagination'>

      <PaginationComponent />
        </div>
          </div>
      </div>
  );
}

export default StaffPage;