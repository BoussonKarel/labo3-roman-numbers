import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";

import { Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import { headers, app, forms } from "../../styles/generic";
import { getRomanNumber } from "../../utils/roman-converter";

const Home = () => {
  const [arabic, setArabic] = useState("");
  const [roman, setRoman] = useState("XI");

  useEffect(() => {
    const parsedNumber = +arabic || 0;
    const {roman, details} = getRomanNumber(parsedNumber);

    setRoman(roman);
  }, [arabic])

  return (
    <SafeAreaView style={app.container}>
      <StatusBar style="auto" />

      <Text style={headers.large}>Roman number converter</Text>

      <TextInput
        style={forms.input}
        value={arabic}
        onChangeText={(text) => setArabic(text)}
        keyboardType="numeric"
        placeholder="eg. 728"
      />

      <Text style={forms.input}>{roman}</Text>

      <View style={app.results}>
        <Text style={headers.large}>In detail</Text>

        <Text style={app.resultText}>3 x 1000 = MM</Text>
        <Text style={app.resultText}>1 x 5 = C</Text>
        <Text style={app.resultText}>2 x 1 = II</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
