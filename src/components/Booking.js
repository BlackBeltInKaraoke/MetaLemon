import React from "react";
import BookingForm from "./BookingForm";

const Booking = (props) => {
    return (
        <BookingForm initializeTimes={props.initializeTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>
    );
};

export default Booking