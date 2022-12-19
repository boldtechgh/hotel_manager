import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";
import ComponentTitle, { SubTitle } from "../../components/component-title";
import Layout from "../../components/layout/layout.component";
import RoomTypeList from "../../components/rooms-components/room-types";

const RoomType = () => {
    return (
        <Layout>
            <ComponentTitle>
                <h1>Room Types</h1>
                <div className="add-booking">
                <Button className="btn btn-success" title="Add room type"><FontAwesomeIcon icon={faAdd} /></Button>
            </div>
            </ComponentTitle>
            <SubTitle>Here is our various room types</SubTitle>
            <RoomTypeList />
        </Layout>
    )
}

export default RoomType;