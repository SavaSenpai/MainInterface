import { useState } from "react";
import "./Calculator.scss";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const calculateResult = () => {
    try {
      const safeResult = new Function("return " + input)();
      setResult(safeResult);
    } catch {
      setResult("Error");
    }
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  return (
    <div className="calculator">
      <h2 className="calculator__title">Calculator</h2>
      <input value={input} readOnly className="calculator__display" />
      <div className="calculator__buttons">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((btn) => (
          <button
            key={btn}
            onClick={() => (btn === "=" ? calculateResult() : handleButtonClick(btn))}
            className="calculator__button"
          >
            {btn}
          </button>
        ))}
      </div>
      <button onClick={clearInput} className="calculator__clear">Clear</button>
      {result !== "" && <p className="calculator__result">Result: {result}</p>}
    </div>
  );
};

export default Calculator;
