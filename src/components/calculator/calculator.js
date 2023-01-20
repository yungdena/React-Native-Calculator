import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "../../styles/styles";
import { useCalculator } from "../../helpers/useCalculator";

export default function Calculator() {
  const {
    displayValue,
    handleDigitPress,
    handleOperatorPress,
    handleClearPress,
    handleEqualPress,
  } = useCalculator();

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayValue}>{displayValue}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.buttonLightGrey}
            onPress={() => handleClearPress()}
          >
            <Text style={styles.buttonTextDark}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonLightGrey}
            onPress={() => handleOperatorPress("+-")}
          >
            <Text style={styles.buttonTextDark}>+/-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonLightGrey}
            onPress={() => handleOperatorPress("%")}
          >
            <Text style={styles.buttonTextDark}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonOrange}
            onPress={() => handleOperatorPress("/")}
          >
            <Text style={styles.buttonTextLight}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.buttonDarkGrey}
            onPress={() => handleDigitPress("7")}
          >
            <Text style={styles.buttonTextLight}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonDarkGrey}
            onPress={() => handleDigitPress("8")}
          >
            <Text style={styles.buttonTextLight}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonDarkGrey}
            onPress={() => handleDigitPress("9")}
          >
            <Text style={styles.buttonTextLight}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonOrange}
            onPress={() => handleOperatorPress("*")}
          >
            <Text style={styles.buttonTextLight}>X</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.buttonDarkGrey}
            onPress={() => handleDigitPress("4")}
          >
            <Text style={styles.buttonTextLight}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonDarkGrey}
            onPress={() => handleDigitPress("5")}
          >
            <Text style={styles.buttonTextLight}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonDarkGrey}
            onPress={() => handleDigitPress("6")}
          >
            <Text style={styles.buttonTextLight}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonOrange}
            onPress={() => handleOperatorPress("-")}
          >
            <Text style={styles.buttonTextLight}>−</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.buttonDarkGrey}
            onPress={() => handleDigitPress("1")}
          >
            <Text style={styles.buttonTextLight}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonDarkGrey}
            onPress={() => handleDigitPress("2")}
          >
            <Text style={styles.buttonTextLight}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonDarkGrey}
            onPress={() => handleDigitPress("3")}
          >
            <Text style={styles.buttonTextLight}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonOrange}
            onPress={() => handleOperatorPress("+")}
          >
            <Text style={styles.buttonTextLight}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.buttonDarkGreyBig}
            onPress={() => handleDigitPress("0")}
          >
            <Text style={styles.buttonTextLight}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonDarkGrey}
            onPress={() => handleDigitPress(".")}
          >
            <Text style={styles.buttonTextLight}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonOrange}
            onPress={() => handleEqualPress("=")}
          >
            <Text style={styles.buttonTextLight}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
