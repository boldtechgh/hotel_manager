import React from "react";
import './info-card.styles.scss';

const InfoCard = (props) => {
    const {icon, name, value, bgColor, color} = props;
    return (
        <div className="info-card" style={{backgroundColor: bgColor ? bgColor : 'blue', color: color ? color : '#fff'}}>
            <div className="name-icon">
                <div className="icon">{icon}</div>
                <div className="name">{name}</div>
            </div>
            <div className="value">{value}</div>
        </div>
    )
}

export default InfoCard;