// @ts-nocheck
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState, useRef } from "react";

import { Text, View, Animated } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import { headers, app, forms } from "../../styles/generic";
import { getRomanNumber, numbers } from "../../utils/roman-converter";

const Home = () => {
  const [arabic, setArabic] = useState("");
  const [roman, setRoman] = useState("XI");
  // const [details, setDetails] = useState([<Text key={0}>Hello</Text>, <Text key={1}>dit</Text>, <Text key={2}>zijn</Text>, <Text key={3}>JSX</Text>, <Text key={4}>Elementen</Text>]);
  const [details, setDetails] = useState([]);

  const [invalid, setInvalid] = useState(false);

  // TODO: render de details (en fade deze een per een in)
  const renderDetails = (details: any) => {
    setDetails([]);
    const tempDetails = [];
    let delayIncrementer = 0;

    for (const key in details) {
      //console.log(`We have the key ${key}, with the value ${details[key]}`)
      const fadeInOpacity = new Animated.Value(0);

      tempDetails.push(
        <Animated.Text key={key} style={{ ...app.resultText, opacity: fadeInOpacity }}>
          {details[key]} x {numbers[key]} = {key.repeat(details[key])}
        </Animated.Text>
      );

      // TODO: start animatie vand eze variabele naar een 1 value
      Animated.timing(fadeInOpacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true, // probeer dit met de 'kracht' van de native animaties af te handelen
          delay: delayIncrementer * 200,
      }).start()

      delayIncrementer++;
    }

    setDetails(tempDetails);
  }
  // TODO: inline error handling: toon een rode rand rond eht input veld als er een verkeerde waarde ingevuld wordt
  // TODO: voorzie een dark mode

  // UITBREIDING: doe de omgekeerde conversie --> MMC = 2100

  const checkInput = () => {
    console.log('Checking input')
    console.log(+arabic)
    const input = +arabic; // Proberen parsen naar number met bitoperator(+)

    // TODO: tekst ipv getal (alhoewel lastig want toetsenbord is numeric)
    // TODO: getal boven de 9999
    if (isNaN(input) || arabic > 9999) {
      setInvalid(true);
      console.log(invalid);
    }
    else {
      setInvalid(false);
    }
    // TODO: getal met komma
  }

  useEffect(() => {
    const parsedNumber = +arabic || 0;
    const {roman, details} = getRomanNumber(parsedNumber);

    setRoman(roman);
    renderDetails(details);
    checkInput();
  }, [arabic])

  return (
    <SafeAreaView style={app.container}>
      <StatusBar style="auto" />

      <Text style={headers.large}>Roman number converter</Text>

      <TextInput
        style={[ forms.input, invalid ? forms.invalid : null ]}
        value={arabic}
        onChangeText={(text) => setArabic(text)}
        keyboardType="numeric"
        placeholder="eg. 728"
      />

      <Text style={ forms.input }>{roman}</Text>

      <View style={app.results}>
        <Text style={headers.large}>In detail</Text>
        
        {details}
        {/* <Text style={app.resultText}>3 x 1000 = MM</Text>
        <Text style={app.resultText}>1 x 5 = C</Text>
        <Text style={app.resultText}>2 x 1 = II</Text> */}
      </View>
    </SafeAreaView>
  );
};

export default Home;
