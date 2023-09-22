import React from "react";

const Event = (props) => {
    return(
       <td className={"Event" + props.color}>
        <h5>{props.event}</h5>
        <p className="location">{props.location}</p>
       </td>
    );
}

export default Event;