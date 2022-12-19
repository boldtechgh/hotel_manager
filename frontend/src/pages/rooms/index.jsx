import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";
import ComponentTitle, { SubTitle } from "../../components/component-title";
import Layout from "../../components/layout/layout.component";
import RoomList from "../../components/rooms-components/rooms";

const Rooms = () => {
    return (
        <Layout>
            <ComponentTitle>
                <h1>Room List</h1>
                <div className="add-booking">
                <Button className="btn btn-success" title="Add room"><FontAwesomeIcon icon={faAdd} /></Button>
            </div>
            </ComponentTitle>
            <SubTitle>List of all rooms</SubTitle>
            <RoomList />
        </Layout>
    )
}

export default Rooms;