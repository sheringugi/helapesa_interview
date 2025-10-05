import { useState } from "react";

const FormInput = () => {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  const handleClick = () => {
    setGreeting(`Hello, ${name}!`);
  };

  return (
    <div className="form-input" >
      <label>Enter your name:</label>
      <input
        type="text"
        placeholder="Type your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleClick}>Click</button>
      {greeting && <p>{greeting}</p>}
    </div>
  );
};

export default FormInput;
