import React  from "react";
import './title.styles.scss';

const ComponentTitle = ({children}) => {
    return (
        <div className="component-title">
            {children}
        </div>
        
    )
}

export const SubTitle = ({children}) => {
    return (
        <div className="sub-title">
            <p>{children}</p>
        </div>
    )
}

export default ComponentTitle;