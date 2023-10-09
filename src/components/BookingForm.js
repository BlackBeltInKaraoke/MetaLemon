import React, { useState } from "react";

const BookingForm = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    }
    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }
    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor="res-date">Reservation Date</label>
                            <input id="res-date" value={date} onChange={(e) => handleChange(e.target.value)} type="date" required/>
                        </div>

                        <div>
                        <label htmlFor="res-time">Reservation Time</label>
                        <select id="res-time>" value={time} onChange={(e) => setTime(e.target.value)}>
                            <option value="">Pick a Time</option>
                            {
                                props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})
                            }
                        </select>
                        </div>

                        <div>
                            <label htmlFor="res-guests">Guests</label>
                            <input id="res-guests" min="1" value={guests} onChange={(e) => setGuests(e.target.value)}/>
                        </div>

                        <div>
                        <label htmlFor="res-occasion">Occasion</label>
                        <select id="res-occasion" key={occasion} value={occasion} onChange={e => setOccasion (e.target.value)}>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                            <option>Graduation</option>
                            <option>Do we need a reason?!</option>
                        </select>
                        </div>

                        <div className="btnReceive">
                            <input aria-label="On Click" type="submit" value={"Confirm Reservation"}/>
                        </div>
                    </fieldset>

                </form>
            </section>
        </header>
    );
};

export default BookingForm;