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
    let result;
    if (operator === "+") {
      result = (
        parseFloat(previousValue) + parseFloat(displayValue)
      ).toString();
    } else if (operator === "-") {
      result = (
        parseFloat(previousValue) - parseFloat(displayValue)
      ).toString();
    } else if (operator === "*") {
      result = (
        parseFloat(previousValue) * parseFloat(displayValue)
      ).toString();
    } else if (operator === "/") {
      result = (
        parseFloat(previousValue) / parseFloat(displayValue)
      ).toString();
    } else if (operator === "%") {
      result = (parseFloat(previousValue) / 100).toString();
    } else if (operator === "+-") {
      result = (-parseFloat(previousValue)).toString();
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
