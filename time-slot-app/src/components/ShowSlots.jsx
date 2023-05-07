import React from "react";

export const ShowSlots = ({ slots, bookedSlots, onSlotSelect }) => {
  const [selectedSlots, setSelectedSlots] = React.useState([]);
  const slotstoShow = slots.filter((s) => !bookedSlots.includes(s));
  if (slotstoShow.length <= 0) {
    return null;
  }
  return (
    <div>
      {slotstoShow.map((slot) => (
        <button
          className="btn"
          key={slot}
          style={{
            border: selectedSlots.includes(slot) ? "5px solid black" : "",
          }}
          onClick={() => {
            setSelectedSlots([...selectedSlots, slot]);
          }}
        >
          {slot}
        </button>
      ))}

      <button
        className="btn-2"
        onClick={(e) => {
          e.preventDefault();
          for (let slot of selectedSlots) {
            onSlotSelect(slot);
          }
        }}
      >
        Book Slot
      </button>
    </div>
  );
};
