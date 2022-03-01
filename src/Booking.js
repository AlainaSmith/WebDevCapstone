import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Booking = () => {
  const [bookingDate, setBookingDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [bookingTimes, setBookingTimes] = useState([]);

  const times = [
    "9:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 1:00",
    "1:00 - 2:00",
    "2:00 - 3:00",
    "3:00 - 4:00",
    "4:00 - 5:00",
  ];

  useEffect(() => {
    if (!bookingDate) return;

    setBookingTimes(times);
  }, [bookingDate]);

  const onDateChange = (e) => {
    // setSelectedTime(null);
    setBookingDate(e);
  };

  // const onSubmit = (e) => {
  //   e.preventDefault();

  //   axios
  //     .post("/book", {
  //       date,
  //     })
  //     .then((res) => {
  //       alert("Appointment booked successfully!");
  //       console.log(res.data);
  //     });
  // };

  return (
    <div className="k-my-8">
      <div className="k-mb-4 k-font-weight-bold">Book appointment</div>

      <div className="k-flex k-display-flex k-mb-4">
        <Calendar
          value={bookingDate}
          onChange={(value, event) => {
            // alert("new date is", value);
            onDateChange(value);
          }}
        />
        <div className="k-ml-4 k-display-flex k-flex-col">
          {!bookingDate
            ? null
            : times.map((time) => {
                return (
                  <button
                    key={time}
                    className="k-button k-mb-4"
                    onClick={(e) => setSelectedTime(e.target.value)}
                  >
                    {time}
                  </button>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default Booking