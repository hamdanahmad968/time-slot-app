import React from "react";

export const SelectPerson = ({ allowedPersons, setSelectedPerson }) => {
  const [name, setName] = React.useState("");

  console.log(allowedPersons);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </form>
      <button
        className="btn"
        onClick={() => {
          name && allowedPersons.includes(name)
            ? setSelectedPerson(name)
            : null;
        }}
      >
        Find Slot
      </button>
    </div>
  );
};
