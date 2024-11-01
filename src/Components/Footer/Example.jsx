import React, { useEffect, useState } from "react";

const LocalStorageExample = () => {
  const [inputValue, setInputValue] = useState("");

  // Load saved value from localStorage on component mount
  useEffect(() => {
    const savedValue = localStorage.getItem("inputValue");
    if (savedValue) {
      setInputValue(savedValue);
    }
  }, []);

  // Save value to localStorage when input changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Save value to localStorage when the button is clicked
  const handleSave = () => {
    localStorage.setItem("inputValue", inputValue);
    alert("Value saved!");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type here"
        value={inputValue}
        onChange={handleInputChange}
        className="input input-bordered w-full max-w-xs"
      />
      <button onClick={handleSave} className="btn">
        Save
      </button>
    </div>
  );
};

export default LocalStorageExample;
