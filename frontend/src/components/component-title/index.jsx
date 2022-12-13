import React, { Children } from "react";
import './title.styles.scss';

const ComponentTitle = ({children}) => {
    return (
        <h1>{children}</h1>
    )
}

export default ComponentTitle;