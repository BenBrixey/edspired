import { useState } from 'react';

export default function useClub({ clubs, inputs }) {
  const [booking, setBooking] = useState([]);
  function addToBooking(bookedClub) {
    setOrder([...booking, bookedClub]);
  }

  function removeFromBooking(index) {
    setBooking([
      setBooking([...booking.slice(0, index), ...booking.slice(index + 1)]),
    ]);
  }
  return {
    booking,
    addToBooking,
    removeFromBooking,
  };
}
