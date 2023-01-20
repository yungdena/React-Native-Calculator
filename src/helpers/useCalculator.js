import { useState } from "react";

export const useCalculator = () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [operator, setOperator] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);

  const handleDigitPress = (digit) => {
    setDisplayValue(displayValue === "0" ? digit : displayValue + digit);
  };

  const handleOperatorPress = (operator) => {
    setPreviousValue(displayValue);
    setOperator(operator);
    setDisplayValue("0");
  };
  const handleClearPress = () => {
    setDisplayValue("0");
    setOperator(null);
    setPreviousValue(null);
  };

  const handleEqualPress = () => {
    let result = 0;

    switch (operator) {
      case "+":
        result = (parseFloat(previousValue) + parseFloat(displayValue)).toString();
        break;
      case "-":
        result = (parseFloat(previousValue) - parseFloat(displayValue)).toString();
        break;
      case "*":
        result = (parseFloat(previousValue) * parseFloat(displayValue)).toString();
        break;
      case "/":
        result = (parseFloat(previousValue) / parseFloat(displayValue)).toString();
        break;
      case "%":
        result = (parseFloat(previousValue) / 100).toString();
        break;
      case "+-":
        result = (-parseFloat(previousValue)).toString();
        break;
      default:
        result = "0";
    }

    setDisplayValue(result);
    setOperator(null);
    setPreviousValue(null);
  };

  return {
    displayValue,
    handleDigitPress,
    handleOperatorPress,
    handleClearPress,
    handleEqualPress,
  };
};
