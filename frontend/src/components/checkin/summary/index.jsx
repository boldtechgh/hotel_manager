import {
  faArrowAltCircleRight,
  faFileInvoice,
  faFileInvoiceDollar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import useLocalStorage from "../../../hooks/useLocalStorage";
import CustomButton from "../../custom-button/custom-button.component";
import { UserAuth } from "../../firebase/AuthContext";
import { db } from "../../firebase/firebase.utils";

const BookingSummary = () => {
  const [isLoading, setLoading] = useState(false);
  const [customer, setCustomer] = useLocalStorage("hm_customer_details", {});
  const [rooms, setRooms] = useLocalStorage("hm_booking_room_details", []);
  const [note, setNote] = useLocalStorage("hm_booking_note", null);
  const [billingAddress, setBillingAddress] = useLocalStorage(
    "hm_billing_address",
    {}
  );
  const { user } = UserAuth();
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(user);
    console.log("Submitting");
    console.log(rooms);
    setLoading(true);
    const userRef = doc(db, `users/${user.uid}`);
    const snapShot = await getDoc(userRef);

    if (snapShot.exists()) {
      console.log("Exist");
      const userRef2 = collection(db, "checkInData");
      try {
        await addDoc(userRef2, rooms).then(() => {
          console.log("Success");
          setLoading(false);
          document.location.href = "/dashboard/room-list";
        });
      } catch (error) {
        console.log("error creating user", error.message);
        setLoading(false);
      }
    }

    // setActive("");
  };

  const [totalCost, setTotalCost] = useState();
  const [nhil, setNhil] = useState();
  const [getFund, setGetFund] = useState();
  const [covid, setCovid] = useState();
  const [vat, setVat] = useState();
  const [subTotal, setSubTotal] = useState();
  const [grandTotal, setGrandTotal] = useState();

  useEffect(
    () => {
      let total = 0;

      rooms.map((room) => {
        let days =
          (Date.parse(room.departure) - Date.parse(room.arrival)) /
          (1000 * 60 * 60 * 24);
        let rate =
          Math.floor(days) * parseFloat(room.rate) - parseFloat(room.discount);
        total += rate;
      });

      let nhilLevy = 0.025 * total;
      let getFundLevy = 0.025 * total;
      let covidLevy = 0.01 * total;
      let subCost = total + nhilLevy + getFundLevy + covidLevy;
      let vatLevy = 0.15 * subCost;
      let granCost = subCost + vatLevy;

      setTotalCost(total);
      setNhil(nhilLevy);
      setGetFund(getFundLevy);
      setCovid(covidLevy);
      setSubTotal(subCost);
      setVat(vatLevy);
      setGrandTotal(granCost);
    },
    [rooms],
    [totalCost]
  );

  console.log("Total cost: " + totalCost);

  return (
    <div className="container-fluid" style={{ height: "auto", width: "100%" }}>
      <FontAwesomeIcon icon={faFileInvoice} />
      <p>Your booking summary</p>
      <h3>Customer Details</h3>

      <Table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Sex</th>
            <th>Nationality</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>City</th>
            <th>Region</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{customer.surname + " " + customer.othernames}</td>
            <td>{customer.gender}</td>
            <td>{customer.nationality}</td>
            <td>{customer.email}</td>
            <td>{customer.phone}</td>
            <td>{customer.address}</td>
            <td>{customer.city}</td>
            <td>{customer.region}</td>
            <td>{customer.country}</td>
          </tr>
        </tbody>
      </Table>
      <h3>Rooms Booked</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Room Number</th>
            <th>Room Type</th>
            <th>Rate per night</th>
            <th>Number of nights</th>
            <th>Rate</th>
            <th>Discount</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room) => (
            <tr>
              <td>{room.roomNumber}</td>
              <td>{room.roomType}</td>
              <td>GHc {room.rate}</td>
              <td align="center">
                {Math.floor(
                  (Date.parse(room.departure) - Date.parse(room.arrival)) /
                    (1000 * 60 * 60 * 24)
                )}
              </td>
              <td align="right">
                GHc{" "}
                {Math.floor(
                  (Date.parse(room.departure) - Date.parse(room.arrival)) /
                    (1000 * 60 * 60 * 24)
                ) * parseFloat(room.rate)}
              </td>
              <td align="right">GHc {room.discount}</td>
              <td align="right">
                GHc{" "}
                {Math.floor(
                  (Date.parse(room.departure) - Date.parse(room.arrival)) /
                    (1000 * 60 * 60 * 24)
                ) *
                  parseFloat(room.rate) -
                  parseFloat(room.discount)}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={5}></td>
            <td align="right">
              <b>Tax Exclusive Value</b>
            </td>
            <td align="right">
              <b>GHc {totalCost}</b>{" "}
            </td>
          </tr>
          <tr>
            <td colSpan={5}></td>
            <td align="right">NHIL (2.5%)</td>
            <td align="right">GHc {nhil}</td>
          </tr>
          <tr>
            <td colSpan={5}></td>
            <td align="right">GETFund Levy (2.5%)</td>
            <td align="right">GHc {getFund}</td>
          </tr>
          <tr>
            <td colSpan={5}></td>
            <td align="right">COVID-19 Levy (1%)</td>
            <td align="right">GHc {covid}</td>
          </tr>
          <tr>
            <td colSpan={5}></td>
            <td align="right">
              <b>Total Levy Inclusive</b>
            </td>
            <td align="right">
              <b>GHc {subTotal}</b>{" "}
            </td>
          </tr>
          <tr>
            <td colSpan={5}></td>
            <td align="right">VAT (15%)</td>
            <td align="right">GHc {vat} </td>
          </tr>
          <tr>
            <td colSpan={5}></td>
            <td align="right">
              <b>Total Tax Inclusive</b>
            </td>
            <td align="right">
              <b>GHc {grandTotal}</b>{" "}
            </td>
          </tr>
        </tfoot>
      </Table>
      <div className="d-flex">
        <CustomButton width="10%" onClick={handleSubmit}>
          {isLoading ? "Loading..." : "Save"}
        </CustomButton>
      </div>
    </div>
  );
};

export default BookingSummary;
