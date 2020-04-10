import React, { useState } from "react";
import { View, Text, Picker, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import axios from "axios";
import { Button } from "react-native-paper";
import Rigscores from "./rigscores";

const cpus = [{label: 'core i5', value: 'core i5'},{label: 'i3', value: 'i3'}]

export default function Pickercomp() {
  const [cpu, setcpu] = useState('cpu');
  const [gpu, setgpu] = useState('gpu');
  const [ram, setram] = useState('ram');
  const [cpuscorefinl, setcpuscorefinl] = useState(0)
  const [gpuscorefinl, setgpuscorefinl] = useState(0)
  const [ramscorefinl, setramscorefinl] = useState(0)

  const cpuscoreHandler = (cpu, gpu, ram) => {
    console.log(cpu)
    axios.get('https://warm-island-31012.herokuapp.com/cpuscoresfinl/'+ cpu)
    .then(response => {
      console.log(response)
      setcpuscorefinl(response.data.score)

    })

    axios.get('https://warm-island-31012.herokuapp.com/gpuscoresfinl/'+ gpu)
    .then(response => {
      console.log(response)
      setgpuscorefinl(response.data.score)

    })

    axios.get('https://warm-island-31012.herokuapp.com/ramscores/'+ ram )
    .then(response => {
      console.log(response)
      setramscorefinl(response.data.score)
    })
  }

  return (
    <View style={styles.screen}>
      <View style={styles.score}>
      {cpuscorefinl != 0 ? 
      <Rigscores
      topic = "Your rig scores" 
      cpuscore={(cpuscorefinl/ 1413)}
      gpuscore={(gpuscorefinl/9555)}
      ramscore={(ramscorefinl/16)}></Rigscores> : null }
      </View> 

    <View style={styles.container}>
  {/*  / <Text>Choose your cpu</Text> */}
  <Text>Test for your rig</Text>
      <Picker
        selectedValue={cpu}
        style={{ height: 50, width: 238 }}
        onValueChange={(itemValue, itemIndex) => setcpu(itemValue)}
      >
       <Picker.Item label="Intel Atom D525 1.8 GHz (2 cores)" value="Intel Atom D525 1.8 GHz (2 cores)" />
<Picker.Item label="Intel Atom N570 1.7 GHz (2 cores)" value="Intel Atom N570 1.7 GHz (2 cores)" />
<Picker.Item label="Intel Atom Z3795 1.6 GHz (4 cores)" value="Intel Atom Z3795 1.6 GHz (4 cores)" />
<Picker.Item label="Intel Atom x5-E8000 1.0 GHz (4 cores)" value="Intel Atom x5-E8000 1.0 GHz (4 cores)" />
<Picker.Item label="Intel Atom x5-Z8300 1.4 GHz (4 cores)" value="Intel Atom x5-Z8300 1.4 GHz (4 cores)" />
<Picker.Item label="Intel Atom x5-Z8350 1.4 GHz (4 cores)" value="Intel Atom x5-Z8350 1.4 GHz (4 cores)" />
<Picker.Item label="Intel Atom x5-Z8500 1.4 GHz (4 cores)" value="Intel Atom x5-Z8500 1.4 GHz (4 cores)" />
<Picker.Item label="Intel Atom x5-Z8550 1.4 GHz (4 cores)" value="Intel Atom x5-Z8550 1.4 GHz (4 cores)" />
<Picker.Item label="Intel Atom x7-E3950 1.6 GHz (4 cores)" value="Intel Atom x7-E3950 1.6 GHz (4 cores)" />
<Picker.Item label="Intel Atom x7-Z8700 1.6 GHz (4 cores)" value="Intel Atom x7-Z8700 1.6 GHz (4 cores)" />
<Picker.Item label="Intel Atom x7-Z8750 1.6 GHz (4 cores)" value="Intel Atom x7-Z8750 1.6 GHz (4 cores)" />
<Picker.Item label="Intel Celeron 1000M 1.8 GHz (2 cores)" value="Intel Celeron 1000M 1.8 GHz (2 cores)" />
<Picker.Item label="Intel Celeron 1005M 1.9 GHz (2 cores)" value="Intel Celeron 1005M 1.9 GHz (2 cores)" />
<Picker.Item label="Intel Celeron 1007U 1.5 GHz (2 cores)" value="Intel Celeron 1007U 1.5 GHz (2 cores)" />
<Picker.Item label="Intel Celeron 1017U 1.6 GHz (2 cores)" value="Intel Celeron 1017U 1.6 GHz (2 cores)" />
<Picker.Item label="Intel Celeron 1037U 1.8 GHz (2 cores)" value="Intel Celeron 1037U 1.8 GHz (2 cores)" />
<Picker.Item label="Intel Celeron 2955U 1.4 GHz (2 cores)" value="Intel Celeron 2955U 1.4 GHz (2 cores)" />
<Picker.Item label="Intel Celeron 3205U 1.5 GHz (2 cores)" value="Intel Celeron 3205U 1.5 GHz (2 cores)" />
<Picker.Item label="Intel Celeron 3215U 1.7 GHz (2 cores)" value="Intel Celeron 3215U 1.7 GHz (2 cores)" />
<Picker.Item label="Intel Celeron 3855U 1.6 GHz (2 cores)" value="Intel Celeron 3855U 1.6 GHz (2 cores)" />
<Picker.Item label="Intel Celeron 3865U 1.8 GHz (2 cores)" value="Intel Celeron 3865U 1.8 GHz (2 cores)" />
<Picker.Item label="Intel Celeron 3955U 2.0 GHz (2 cores)" value="Intel Celeron 3955U 2.0 GHz (2 cores)" />
<Picker.Item label="Intel Celeron 3965Y 1.5 GHz (2 cores)" value="Intel Celeron 3965Y 1.5 GHz (2 cores)" />
<Picker.Item label="Intel Celeron 847 1.1 GHz (2 cores)" value="Intel Celeron 847 1.1 GHz (2 cores)" />
<Picker.Item label="Intel Celeron 877 1.4 GHz (2 cores)" value="Intel Celeron 877 1.4 GHz (2 cores)" />
<Picker.Item label="Intel Celeron 900 2.2 GHz (1 core)" value="Intel Celeron 900 2.2 GHz (1 core)" />
<Picker.Item label="Intel Celeron B800 1.5 GHz (2 cores)" value="Intel Celeron B800 1.5 GHz (2 cores)" />
<Picker.Item label="Intel Celeron B815 1.6 GHz (2 cores)" value="Intel Celeron B815 1.6 GHz (2 cores)" />
<Picker.Item label="Intel Celeron B820 1.7 GHz (2 cores)" value="Intel Celeron B820 1.7 GHz (2 cores)" />
<Picker.Item label="Intel Celeron B830 1.8 GHz (2 cores)" value="Intel Celeron B830 1.8 GHz (2 cores)" />
<Picker.Item label="Intel Celeron E1500 2.2 GHz (2 cores)" value="Intel Celeron E1500 2.2 GHz (2 cores)" />
<Picker.Item label="Intel Celeron E3200 2.4 GHz (2 cores)" value="Intel Celeron E3200 2.4 GHz (2 cores)" />
<Picker.Item label="Intel Celeron E3400 2.6 GHz (2 cores)" value="Intel Celeron E3400 2.6 GHz (2 cores)" />
<Picker.Item label="Intel Celeron G1610 2.6 GHz (2 cores)" value="Intel Celeron G1610 2.6 GHz (2 cores)" />
<Picker.Item label="Intel Celeron G1620 2.7 GHz (2 cores)" value="Intel Celeron G1620 2.7 GHz (2 cores)" />
<Picker.Item label="Intel Celeron G1820 2.7 GHz (2 cores)" value="Intel Celeron G1820 2.7 GHz (2 cores)" />
<Picker.Item label="Intel Celeron G1840 2.8 GHz (2 cores)" value="Intel Celeron G1840 2.8 GHz (2 cores)" />
<Picker.Item label="Intel Celeron G1850 2.9 GHz (2 cores)" value="Intel Celeron G1850 2.9 GHz (2 cores)" />
<Picker.Item label="Intel Celeron G3900 2.8 GHz (2 cores)" value="Intel Celeron G3900 2.8 GHz (2 cores)" />
<Picker.Item label="Intel Celeron G3930 2.9 GHz (2 cores)" value="Intel Celeron G3930 2.9 GHz (2 cores)" />
<Picker.Item label="Intel Celeron G4900 3.1 GHz (2 cores)" value="Intel Celeron G4900 3.1 GHz (2 cores)" />
<Picker.Item label="Intel Celeron G530 2.4 GHz (2 cores)" value="Intel Celeron G530 2.4 GHz (2 cores)" />
<Picker.Item label="Intel Celeron G550 2.6 GHz (2 cores)" value="Intel Celeron G550 2.6 GHz (2 cores)" />
<Picker.Item label="Intel Celeron J1900 2.0 GHz (4 cores)" value="Intel Celeron J1900 2.0 GHz (4 cores)" />
<Picker.Item label="Intel Celeron J3060 1.6 GHz (2 cores)" value="Intel Celeron J3060 1.6 GHz (2 cores)" />
<Picker.Item label="Intel Celeron J3160 1.6 GHz (4 cores)" value="Intel Celeron J3160 1.6 GHz (4 cores)" />
<Picker.Item label="Intel Celeron J3355 2.0 GHz (2 cores)" value="Intel Celeron J3355 2.0 GHz (2 cores)" />
<Picker.Item label="Intel Celeron J3455 1.5 GHz (4 cores)" value="Intel Celeron J3455 1.5 GHz (4 cores)" />
<Picker.Item label="Intel Celeron J4005 2.0 GHz (2 cores)" value="Intel Celeron J4005 2.0 GHz (2 cores)" />
<Picker.Item label="Intel Celeron J4105 1.5 GHz (4 cores)" value="Intel Celeron J4105 1.5 GHz (4 cores)" />
<Picker.Item label="Intel Celeron N2815 1.9 GHz (2 cores)" value="Intel Celeron N2815 1.9 GHz (2 cores)" />
<Picker.Item label="Intel Celeron N2820 2.1 GHz (2 cores)" value="Intel Celeron N2820 2.1 GHz (2 cores)" />
<Picker.Item label="Intel Celeron N2830 2.2 GHz (2 cores)" value="Intel Celeron N2830 2.2 GHz (2 cores)" />
<Picker.Item label="Intel Celeron N2840 2.2 GHz (2 cores)" value="Intel Celeron N2840 2.2 GHz (2 cores)" />
<Picker.Item label="Intel Celeron N2930 1.8 GHz (4 cores)" value="Intel Celeron N2930 1.8 GHz (4 cores)" />
<Picker.Item label="Intel Celeron N2940 1.8 GHz (4 cores)" value="Intel Celeron N2940 1.8 GHz (4 cores)" />
<Picker.Item label="Intel Celeron N3000 1.0 GHz (2 cores)" value="Intel Celeron N3000 1.0 GHz (2 cores)" />
<Picker.Item label="Intel Celeron N3050 1.6 GHz (2 cores)" value="Intel Celeron N3050 1.6 GHz (2 cores)" />
<Picker.Item label="Intel Celeron N3150 1.6 GHz (4 cores)" value="Intel Celeron N3150 1.6 GHz (4 cores)" />
<Picker.Item label="Intel Celeron N3160 1.6 GHz (4 cores)" value="Intel Celeron N3160 1.6 GHz (4 cores)" />
<Picker.Item label="Intel Celeron N3350 1.1 GHz (2 cores)" value="Intel Celeron N3350 1.1 GHz (2 cores)" />
<Picker.Item label="Intel Celeron N3450 1.1 GHz (4 cores)" value="Intel Celeron N3450 1.1 GHz (4 cores)" />
<Picker.Item label="Intel Celeron N4000 1.1 GHz (2 cores)" value="Intel Celeron N4000 1.1 GHz (2 cores)" />
<Picker.Item label="Intel Celeron N4100 1.1 GHz (4 cores)" value="Intel Celeron N4100 1.1 GHz (4 cores)" />
<Picker.Item label="Intel Celeron SU2300 1.2 GHz (2 cores)" value="Intel Celeron SU2300 1.2 GHz (2 cores)" />
<Picker.Item label="Intel Celeron T3500 2.1 GHz (2 cores)" value="Intel Celeron T3500 2.1 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo E4300 1.8 GHz (2 cores)" value="Intel Core 2 Duo E4300 1.8 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo E4400 2.0 GHz (2 cores)" value="Intel Core 2 Duo E4400 2.0 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo E4500 2.2 GHz (2 cores)" value="Intel Core 2 Duo E4500 2.2 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo E4600 2.4 GHz (2 cores)" value="Intel Core 2 Duo E4600 2.4 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo E6300 1.9 GHz (2 cores)" value="Intel Core 2 Duo E6300 1.9 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo E6320 1.9 GHz (2 cores)" value="Intel Core 2 Duo E6320 1.9 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo E6400 2.1 GHz (2 cores)" value="Intel Core 2 Duo E6400 2.1 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo E6550 2.3 GHz (2 cores)" value="Intel Core 2 Duo E6550 2.3 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo E6600 2.4 GHz (2 cores)" value="Intel Core 2 Duo E6600 2.4 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo E6700 2.7 GHz (2 cores)" value="Intel Core 2 Duo E6700 2.7 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo E6750 2.7 GHz (2 cores)" value="Intel Core 2 Duo E6750 2.7 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo E6850 3.0 GHz (2 cores)" value="Intel Core 2 Duo E6850 3.0 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo E7200 2.5 GHz (2 cores)" value="Intel Core 2 Duo E7200 2.5 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo E7300 2.7 GHz (2 cores)" value="Intel Core 2 Duo E7300 2.7 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo E7400 2.8 GHz (2 cores)" value="Intel Core 2 Duo E7400 2.8 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo E7500 2.9 GHz (2 cores)" value="Intel Core 2 Duo E7500 2.9 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo E7600 3.1 GHz (2 cores)" value="Intel Core 2 Duo E7600 3.1 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo E8200 2.7 GHz (2 cores)" value="Intel Core 2 Duo E8200 2.7 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo E8300 2.8 GHz (2 cores)" value="Intel Core 2 Duo E8300 2.8 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo E8400 3.0 GHz (2 cores)" value="Intel Core 2 Duo E8400 3.0 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo E8500 3.2 GHz (2 cores)" value="Intel Core 2 Duo E8500 3.2 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo E8600 3.3 GHz (2 cores)" value="Intel Core 2 Duo E8600 3.3 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo L9400 1.9 GHz (2 cores)" value="Intel Core 2 Duo L9400 1.9 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo P7350 2.0 GHz (2 cores)" value="Intel Core 2 Duo P7350 2.0 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo P7450 2.1 GHz (2 cores)" value="Intel Core 2 Duo P7450 2.1 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo P7550 2.3 GHz (2 cores)" value="Intel Core 2 Duo P7550 2.3 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo P8400 2.3 GHz (2 cores)" value="Intel Core 2 Duo P8400 2.3 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo P8600 2.4 GHz (2 cores)" value="Intel Core 2 Duo P8600 2.4 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo P8700 2.5 GHz (2 cores)" value="Intel Core 2 Duo P8700 2.5 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo P8800 2.7 GHz (2 cores)" value="Intel Core 2 Duo P8800 2.7 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo P9400 2.4 GHz (2 cores)" value="Intel Core 2 Duo P9400 2.4 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo P9700 2.8 GHz (2 cores)" value="Intel Core 2 Duo P9700 2.8 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo SU7300 1.3 GHz (2 cores)" value="Intel Core 2 Duo SU7300 1.3 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo T5550 1.8 GHz (2 cores)" value="Intel Core 2 Duo T5550 1.8 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo T5750 2.0 GHz (2 cores)" value="Intel Core 2 Duo T5750 2.0 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo T5800 2.0 GHz (2 cores)" value="Intel Core 2 Duo T5800 2.0 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo T5850 2.2 GHz (2 cores)" value="Intel Core 2 Duo T5850 2.2 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo T5870 2.0 GHz (2 cores)" value="Intel Core 2 Duo T5870 2.0 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo T6400 2.0 GHz (2 cores)" value="Intel Core 2 Duo T6400 2.0 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo T6500 2.1 GHz (2 cores)" value="Intel Core 2 Duo T6500 2.1 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo T6570 2.1 GHz (2 cores)" value="Intel Core 2 Duo T6570 2.1 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo T6600 2.2 GHz (2 cores)" value="Intel Core 2 Duo T6600 2.2 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo T6670 2.2 GHz (2 cores)" value="Intel Core 2 Duo T6670 2.2 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo T7100 1.8 GHz (2 cores)" value="Intel Core 2 Duo T7100 1.8 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo T7200 2.0 GHz (2 cores)" value="Intel Core 2 Duo T7200 2.0 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo T7250 2.0 GHz (2 cores)" value="Intel Core 2 Duo T7250 2.0 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo T7300 2.0 GHz (2 cores)" value="Intel Core 2 Duo T7300 2.0 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo T7400 2.2 GHz (2 cores)" value="Intel Core 2 Duo T7400 2.2 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo T7500 2.2 GHz (2 cores)" value="Intel Core 2 Duo T7500 2.2 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo T7700 2.4 GHz (2 cores)" value="Intel Core 2 Duo T7700 2.4 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo T8100 2.1 GHz (2 cores)" value="Intel Core 2 Duo T8100 2.1 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo T8300 2.4 GHz (2 cores)" value="Intel Core 2 Duo T8300 2.4 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo T9300 2.5 GHz (2 cores)" value="Intel Core 2 Duo T9300 2.5 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo T9400 2.5 GHz (2 cores)" value="Intel Core 2 Duo T9400 2.5 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo T9500 2.6 GHz (2 cores)" value="Intel Core 2 Duo T9500 2.6 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo T9550 2.7 GHz (2 cores)" value="Intel Core 2 Duo T9550 2.7 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo T9600 2.8 GHz (2 cores)" value="Intel Core 2 Duo T9600 2.8 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo T9900 3.1 GHz (2 cores)" value="Intel Core 2 Duo T9900 3.1 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Duo U9400 1.4 GHz (2 cores)" value="Intel Core 2 Duo U9400 1.4 GHz (2 cores)" />
<Picker.Item label="Intel Core 2 Extreme Q9300 2.5 GHz (4 cores)" value="Intel Core 2 Extreme Q9300 2.5 GHz (4 cores)" />
<Picker.Item label="Intel Core 2 Extreme X9650 3.0 GHz (4 cores)" value="Intel Core 2 Extreme X9650 3.0 GHz (4 cores)" />
<Picker.Item label="Intel Core 2 Quad Q6600 2.4 GHz (4 cores)" value="Intel Core 2 Quad Q6600 2.4 GHz (4 cores)" />
<Picker.Item label="Intel Core 2 Quad Q6700 2.7 GHz (4 cores)" value="Intel Core 2 Quad Q6700 2.7 GHz (4 cores)" />
<Picker.Item label="Intel Core 2 Quad Q8200 2.3 GHz (4 cores)" value="Intel Core 2 Quad Q8200 2.3 GHz (4 cores)" />
<Picker.Item label="Intel Core 2 Quad Q8300 2.5 GHz (4 cores)" value="Intel Core 2 Quad Q8300 2.5 GHz (4 cores)" />
<Picker.Item label="Intel Core 2 Quad Q8400 2.7 GHz (4 cores)" value="Intel Core 2 Quad Q8400 2.7 GHz (4 cores)" />
<Picker.Item label="Intel Core 2 Quad Q9300 2.5 GHz (4 cores)" value="Intel Core 2 Quad Q9300 2.5 GHz (4 cores)" />
<Picker.Item label="Intel Core 2 Quad Q9400 2.7 GHz (4 cores)" value="Intel Core 2 Quad Q9400 2.7 GHz (4 cores)" />
<Picker.Item label="Intel Core 2 Quad Q9450 2.7 GHz (4 cores)" value="Intel Core 2 Quad Q9450 2.7 GHz (4 cores)" />
<Picker.Item label="Intel Core 2 Quad Q9500 2.8 GHz (4 cores)" value="Intel Core 2 Quad Q9500 2.8 GHz (4 cores)" />
<Picker.Item label="Intel Core 2 Quad Q9550 2.8 GHz (4 cores)" value="Intel Core 2 Quad Q9550 2.8 GHz (4 cores)" />
<Picker.Item label="Intel Core 2 Quad Q9650 3.0 GHz (4 cores)" value="Intel Core 2 Quad Q9650 3.0 GHz (4 cores)" />
<Picker.Item label="Intel Core M-5Y10 800 MHz (2 cores)" value="Intel Core M-5Y10 800 MHz (2 cores)" />
<Picker.Item label="Intel Core M-5Y10c 800 MHz (2 cores)" value="Intel Core M-5Y10c 800 MHz (2 cores)" />
<Picker.Item label="Intel Core M-5Y51 1.1 GHz (2 cores)" value="Intel Core M-5Y51 1.1 GHz (2 cores)" />
<Picker.Item label="Intel Core M-5Y70 1.1 GHz (2 cores)" value="Intel Core M-5Y70 1.1 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-2100 3.1 GHz (2 cores)" value="Intel Core i3-2100 3.1 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-2105 3.1 GHz (2 cores)" value="Intel Core i3-2105 3.1 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-2120 3.3 GHz (2 cores)" value="Intel Core i3-2120 3.3 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-2120T 2.6 GHz (2 cores)" value="Intel Core i3-2120T 2.6 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-2125 3.3 GHz (2 cores)" value="Intel Core i3-2125 3.3 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-2130 3.4 GHz (2 cores)" value="Intel Core i3-2130 3.4 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-2310M 2.1 GHz (2 cores)" value="Intel Core i3-2310M 2.1 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-2328M 2.2 GHz (2 cores)" value="Intel Core i3-2328M 2.2 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-2330M 2.2 GHz (2 cores)" value="Intel Core i3-2330M 2.2 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-2348M 2.3 GHz (2 cores)" value="Intel Core i3-2348M 2.3 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-2350M 2.3 GHz (2 cores)" value="Intel Core i3-2350M 2.3 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-2365M 1.4 GHz (2 cores)" value="Intel Core i3-2365M 1.4 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-2367M 1.4 GHz (2 cores)" value="Intel Core i3-2367M 1.4 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-2370M 2.4 GHz (2 cores)" value="Intel Core i3-2370M 2.4 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-2375M 1.5 GHz (2 cores)" value="Intel Core i3-2375M 1.5 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-2377M 1.5 GHz (2 cores)" value="Intel Core i3-2377M 1.5 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-3110M 2.4 GHz (2 cores)" value="Intel Core i3-3110M 2.4 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-3120M 2.5 GHz (2 cores)" value="Intel Core i3-3120M 2.5 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-3210 3.2 GHz (2 cores)" value="Intel Core i3-3210 3.2 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-3217U 1.8 GHz (2 cores)" value="Intel Core i3-3217U 1.8 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-3220 3.3 GHz (2 cores)" value="Intel Core i3-3220 3.3 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-3220T 2.8 GHz (2 cores)" value="Intel Core i3-3220T 2.8 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-3225 3.3 GHz (2 cores)" value="Intel Core i3-3225 3.3 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-3227U 1.9 GHz (2 cores)" value="Intel Core i3-3227U 1.9 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-3240 3.4 GHz (2 cores)" value="Intel Core i3-3240 3.4 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-3240T 2.9 GHz (2 cores)" value="Intel Core i3-3240T 2.9 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-3250 3.5 GHz (2 cores)" value="Intel Core i3-3250 3.5 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-330M 2.1 GHz (2 cores)" value="Intel Core i3-330M 2.1 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-350M 2.3 GHz (2 cores)" value="Intel Core i3-350M 2.3 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-370M 2.4 GHz (2 cores)" value="Intel Core i3-370M 2.4 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-380M 2.5 GHz (2 cores)" value="Intel Core i3-380M 2.5 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-380UM 1.3 GHz (2 cores)" value="Intel Core i3-380UM 1.3 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-390M 2.7 GHz (2 cores)" value="Intel Core i3-390M 2.7 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-4000M 2.4 GHz (2 cores)" value="Intel Core i3-4000M 2.4 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-4005U 1.7 GHz (2 cores)" value="Intel Core i3-4005U 1.7 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-4010U 1.7 GHz (2 cores)" value="Intel Core i3-4010U 1.7 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-4020Y 1.5 GHz (2 cores)" value="Intel Core i3-4020Y 1.5 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-4030U 1.9 GHz (2 cores)" value="Intel Core i3-4030U 1.9 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-4100M 2.5 GHz (2 cores)" value="Intel Core i3-4100M 2.5 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-4130 3.4 GHz (2 cores)" value="Intel Core i3-4130 3.4 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-4130T 2.9 GHz (2 cores)" value="Intel Core i3-4130T 2.9 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-4150 3.5 GHz (2 cores)" value="Intel Core i3-4150 3.5 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-4150T 3.0 GHz (2 cores)" value="Intel Core i3-4150T 3.0 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-4160 3.6 GHz (2 cores)" value="Intel Core i3-4160 3.6 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-4160T 3.1 GHz (2 cores)" value="Intel Core i3-4160T 3.1 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-4170 3.7 GHz (2 cores)" value="Intel Core i3-4170 3.7 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-4170T 3.2 GHz (2 cores)" value="Intel Core i3-4170T 3.2 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-4330 3.5 GHz (2 cores)" value="Intel Core i3-4330 3.5 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-4340 3.6 GHz (2 cores)" value="Intel Core i3-4340 3.6 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-4370 3.8 GHz (2 cores)" value="Intel Core i3-4370 3.8 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-5005U 2.0 GHz (2 cores)" value="Intel Core i3-5005U 2.0 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-5010U 2.1 GHz (2 cores)" value="Intel Core i3-5010U 2.1 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-5015U 2.1 GHz (2 cores)" value="Intel Core i3-5015U 2.1 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-5020U 2.2 GHz (2 cores)" value="Intel Core i3-5020U 2.2 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-5157U 2.5 GHz (2 cores)" value="Intel Core i3-5157U 2.5 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-530 2.9 GHz (2 cores)" value="Intel Core i3-530 2.9 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-540 3.1 GHz (2 cores)" value="Intel Core i3-540 3.1 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-550 3.2 GHz (2 cores)" value="Intel Core i3-550 3.2 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-6006U 2.0 GHz (2 cores)" value="Intel Core i3-6006U 2.0 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-6098P 3.6 GHz (2 cores)" value="Intel Core i3-6098P 3.6 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-6100 3.7 GHz (2 cores)" value="Intel Core i3-6100 3.7 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-6100H 2.7 GHz (2 cores)" value="Intel Core i3-6100H 2.7 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-6100T 3.2 GHz (2 cores)" value="Intel Core i3-6100T 3.2 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-6100U 2.3 GHz (2 cores)" value="Intel Core i3-6100U 2.3 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-6300 3.8 GHz (2 cores)" value="Intel Core i3-6300 3.8 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-6320 3.9 GHz (2 cores)" value="Intel Core i3-6320 3.9 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-7020U 2.3 GHz (2 cores)" value="Intel Core i3-7020U 2.3 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-7100 3.9 GHz (2 cores)" value="Intel Core i3-7100 3.9 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-7100T 3.4 GHz (2 cores)" value="Intel Core i3-7100T 3.4 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-7100U 2.4 GHz (2 cores)" value="Intel Core i3-7100U 2.4 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-7130U 2.7 GHz (2 cores)" value="Intel Core i3-7130U 2.7 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-7300 4.0 GHz (2 cores)" value="Intel Core i3-7300 4.0 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-7320 4.1 GHz (2 cores)" value="Intel Core i3-7320 4.1 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-7350K 4.2 GHz (2 cores)" value="Intel Core i3-7350K 4.2 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-8100 3.6 GHz (4 cores)" value="Intel Core i3-8100 3.6 GHz (4 cores)" />
<Picker.Item label="Intel Core i3-8100B 3.6 GHz (4 cores)" value="Intel Core i3-8100B 3.6 GHz (4 cores)" />
<Picker.Item label="Intel Core i3-8100T 3.1 GHz (4 cores)" value="Intel Core i3-8100T 3.1 GHz (4 cores)" />
<Picker.Item label="Intel Core i3-8109U 3.0 GHz (2 cores)" value="Intel Core i3-8109U 3.0 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-8130U 2.2 GHz (2 cores)" value="Intel Core i3-8130U 2.2 GHz (2 cores)" />
<Picker.Item label="Intel Core i3-8300 3.7 GHz (4 cores)" value="Intel Core i3-8300 3.7 GHz (4 cores)" />
<Picker.Item label="Intel Core i3-8350K 4.0 GHz (4 cores)" value="Intel Core i3-8350K 4.0 GHz (4 cores)" />
<Picker.Item label="Intel Core i3-9100 3.6 GHz (4 cores)" value="Intel Core i3-9100 3.6 GHz (4 cores)" />
<Picker.Item label="Intel Core i3-9100F 3.6 GHz (4 cores)" value="Intel Core i3-9100F 3.6 GHz (4 cores)" />
<Picker.Item label="Intel Core i4-4690T 2.5 GHz (4 cores)" value="Intel Core i4-4690T 2.5 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-2300 2.8 GHz (4 cores)" value="Intel Core i5-2300 2.8 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-2310 2.9 GHz (4 cores)" value="Intel Core i5-2310 2.9 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-2320 3.0 GHz (4 cores)" value="Intel Core i5-2320 3.0 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-2400 3.1 GHz (4 cores)" value="Intel Core i5-2400 3.1 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-2400S 2.5 GHz (4 cores)" value="Intel Core i5-2400S 2.5 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-2405S 2.5 GHz (4 cores)" value="Intel Core i5-2405S 2.5 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-2410M 2.3 GHz (2 cores)" value="Intel Core i5-2410M 2.3 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-2415M 2.3 GHz (2 cores)" value="Intel Core i5-2415M 2.3 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-2430M 2.4 GHz (2 cores)" value="Intel Core i5-2430M 2.4 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-2435M 2.4 GHz (2 cores)" value="Intel Core i5-2435M 2.4 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-2450M 2.5 GHz (2 cores)" value="Intel Core i5-2450M 2.5 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-2467M 1.6 GHz (2 cores)" value="Intel Core i5-2467M 1.6 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-2500 3.3 GHz (4 cores)" value="Intel Core i5-2500 3.3 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-2500K 3.3 GHz (4 cores)" value="Intel Core i5-2500K 3.3 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-2500S 2.7 GHz (4 cores)" value="Intel Core i5-2500S 2.7 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-2520M 2.5 GHz (2 cores)" value="Intel Core i5-2520M 2.5 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-2537M 1.4 GHz (2 cores)" value="Intel Core i5-2537M 1.4 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-2540M 2.6 GHz (2 cores)" value="Intel Core i5-2540M 2.6 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-2550K 3.4 GHz (4 cores)" value="Intel Core i5-2550K 3.4 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-2557M 1.7 GHz (2 cores)" value="Intel Core i5-2557M 1.7 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-3210M 2.5 GHz (2 cores)" value="Intel Core i5-3210M 2.5 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-3230M 2.6 GHz (2 cores)" value="Intel Core i5-3230M 2.6 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-3317U 1.7 GHz (2 cores)" value="Intel Core i5-3317U 1.7 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-3320M 2.6 GHz (2 cores)" value="Intel Core i5-3320M 2.6 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-3330 3.0 GHz (4 cores)" value="Intel Core i5-3330 3.0 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-3330S 2.7 GHz (4 cores)" value="Intel Core i5-3330S 2.7 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-3335S 2.7 GHz (4 cores)" value="Intel Core i5-3335S 2.7 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-3337U 1.8 GHz (2 cores)" value="Intel Core i5-3337U 1.8 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-3340 3.1 GHz (4 cores)" value="Intel Core i5-3340 3.1 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-3340M 2.7 GHz (2 cores)" value="Intel Core i5-3340M 2.7 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-3340S 2.8 GHz (4 cores)" value="Intel Core i5-3340S 2.8 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-3350P 3.1 GHz (4 cores)" value="Intel Core i5-3350P 3.1 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-3360M 2.8 GHz (2 cores)" value="Intel Core i5-3360M 2.8 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-3380M 2.9 GHz (2 cores)" value="Intel Core i5-3380M 2.9 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-3427U 1.8 GHz (2 cores)" value="Intel Core i5-3427U 1.8 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-3437U 1.9 GHz (2 cores)" value="Intel Core i5-3437U 1.9 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-3450 3.1 GHz (4 cores)" value="Intel Core i5-3450 3.1 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-3450S 2.8 GHz (4 cores)" value="Intel Core i5-3450S 2.8 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-3470 3.2 GHz (4 cores)" value="Intel Core i5-3470 3.2 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-3470S 2.9 GHz (4 cores)" value="Intel Core i5-3470S 2.9 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-3470T 2.9 GHz (2 cores)" value="Intel Core i5-3470T 2.9 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-3475S 2.9 GHz (4 cores)" value="Intel Core i5-3475S 2.9 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-3550 3.3 GHz (4 cores)" value="Intel Core i5-3550 3.3 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-3550S 3.0 GHz (4 cores)" value="Intel Core i5-3550S 3.0 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-3570 3.4 GHz (4 cores)" value="Intel Core i5-3570 3.4 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-3570K 3.4 GHz (4 cores)" value="Intel Core i5-3570K 3.4 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-3570S 3.1 GHz (4 cores)" value="Intel Core i5-3570S 3.1 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-3570T 2.3 GHz (4 cores)" value="Intel Core i5-3570T 2.3 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-4200H 2.8 GHz (2 cores)" value="Intel Core i5-4200H 2.8 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-4200M 2.5 GHz (2 cores)" value="Intel Core i5-4200M 2.5 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-4200U 1.6 GHz (2 cores)" value="Intel Core i5-4200U 1.6 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-4202Y 1.6 GHz (2 cores)" value="Intel Core i5-4202Y 1.6 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-4210H 2.9 GHz (2 cores)" value="Intel Core i5-4210H 2.9 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-4210M 2.6 GHz (2 cores)" value="Intel Core i5-4210M 2.6 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-4210U 1.7 GHz (2 cores)" value="Intel Core i5-4210U 1.7 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-4210Y 1.5 GHz (2 cores)" value="Intel Core i5-4210Y 1.5 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-4250U 1.3 GHz (2 cores)" value="Intel Core i5-4250U 1.3 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-4258U 2.4 GHz (2 cores)" value="Intel Core i5-4258U 2.4 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-4260U 1.4 GHz (2 cores)" value="Intel Core i5-4260U 1.4 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-4278U 2.6 GHz (2 cores)" value="Intel Core i5-4278U 2.6 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-4288U 2.6 GHz (2 cores)" value="Intel Core i5-4288U 2.6 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-4300M 2.6 GHz (2 cores)" value="Intel Core i5-4300M 2.6 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-4300U 1.9 GHz (2 cores)" value="Intel Core i5-4300U 1.9 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-4300Y 1.6 GHz (2 cores)" value="Intel Core i5-4300Y 1.6 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-4308U 2.8 GHz (2 cores)" value="Intel Core i5-4308U 2.8 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-430M 2.3 GHz (2 cores)" value="Intel Core i5-430M 2.3 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-4310M 2.7 GHz (2 cores)" value="Intel Core i5-4310M 2.7 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-4310U 2.0 GHz (2 cores)" value="Intel Core i5-4310U 2.0 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-4340M 2.9 GHz (2 cores)" value="Intel Core i5-4340M 2.9 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-4430 3.0 GHz (4 cores)" value="Intel Core i5-4430 3.0 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-4430S 2.7 GHz (4 cores)" value="Intel Core i5-4430S 2.7 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-4440 3.1 GHz (4 cores)" value="Intel Core i5-4440 3.1 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-4460 3.2 GHz (4 cores)" value="Intel Core i5-4460 3.2 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-4460S 2.9 GHz (4 cores)" value="Intel Core i5-4460S 2.9 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-4460T 1.9 GHz (4 cores)" value="Intel Core i5-4460T 1.9 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-450M 2.4 GHz (2 cores)" value="Intel Core i5-450M 2.4 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-4570 3.2 GHz (4 cores)" value="Intel Core i5-4570 3.2 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-4570R 2.7 GHz (4 cores)" value="Intel Core i5-4570R 2.7 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-4570S 2.9 GHz (4 cores)" value="Intel Core i5-4570S 2.9 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-4570T 2.9 GHz (2 cores)" value="Intel Core i5-4570T 2.9 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-4590 3.3 GHz (4 cores)" value="Intel Core i5-4590 3.3 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-4590S 3.0 GHz (4 cores)" value="Intel Core i5-4590S 3.0 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-4590T 2.0 GHz (4 cores)" value="Intel Core i5-4590T 2.0 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-460M 2.5 GHz (2 cores)" value="Intel Core i5-460M 2.5 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-4670 3.4 GHz (4 cores)" value="Intel Core i5-4670 3.4 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-4670K 3.4 GHz (4 cores)" value="Intel Core i5-4670K 3.4 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-4670S 3.1 GHz (4 cores)" value="Intel Core i5-4670S 3.1 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-4670T 2.3 GHz (4 cores)" value="Intel Core i5-4670T 2.3 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-4690 3.5 GHz (4 cores)" value="Intel Core i5-4690 3.5 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-4690K 3.5 GHz (4 cores)" value="Intel Core i5-4690K 3.5 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-4690S 3.2 GHz (4 cores)" value="Intel Core i5-4690S 3.2 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-470UM 1.3 GHz (2 cores)" value="Intel Core i5-470UM 1.3 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-480M 2.7 GHz (2 cores)" value="Intel Core i5-480M 2.7 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-5200U 2.2 GHz (2 cores)" value="Intel Core i5-5200U 2.2 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-520M 2.4 GHz (2 cores)" value="Intel Core i5-520M 2.4 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-5250U 1.6 GHz (2 cores)" value="Intel Core i5-5250U 1.6 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-5257U 2.7 GHz (2 cores)" value="Intel Core i5-5257U 2.7 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-5287U 2.9 GHz (2 cores)" value="Intel Core i5-5287U 2.9 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-5300U 2.3 GHz (2 cores)" value="Intel Core i5-5300U 2.3 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-5350U 1.8 GHz (2 cores)" value="Intel Core i5-5350U 1.8 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-540M 2.5 GHz (2 cores)" value="Intel Core i5-540M 2.5 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-560M 2.7 GHz (2 cores)" value="Intel Core i5-560M 2.7 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-5675C 3.1 GHz (4 cores)" value="Intel Core i5-5675C 3.1 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-580M 2.7 GHz (2 cores)" value="Intel Core i5-580M 2.7 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-6200U 2.3 GHz (2 cores)" value="Intel Core i5-6200U 2.3 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-6260U 1.8 GHz (2 cores)" value="Intel Core i5-6260U 1.8 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-6267U 2.9 GHz (2 cores)" value="Intel Core i5-6267U 2.9 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-6300HQ 2.3 GHz (4 cores)" value="Intel Core i5-6300HQ 2.3 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-6300U 2.4 GHz (2 cores)" value="Intel Core i5-6300U 2.4 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-6360U 2.0 GHz (2 cores)" value="Intel Core i5-6360U 2.0 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-6400 2.7 GHz (4 cores)" value="Intel Core i5-6400 2.7 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-6400T 2.2 GHz (4 cores)" value="Intel Core i5-6400T 2.2 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-6402P 2.8 GHz (4 cores)" value="Intel Core i5-6402P 2.8 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-6440HQ 2.6 GHz (4 cores)" value="Intel Core i5-6440HQ 2.6 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-650 3.2 GHz (2 cores)" value="Intel Core i5-650 3.2 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-6500 3.2 GHz (4 cores)" value="Intel Core i5-6500 3.2 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-6500T 2.5 GHz (4 cores)" value="Intel Core i5-6500T 2.5 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-6500TE 2.3 GHz (4 cores)" value="Intel Core i5-6500TE 2.3 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-660 3.3 GHz (2 cores)" value="Intel Core i5-660 3.3 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-6600 3.3 GHz (4 cores)" value="Intel Core i5-6600 3.3 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-6600K 3.5 GHz (4 cores)" value="Intel Core i5-6600K 3.5 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-6600T 2.7 GHz (4 cores)" value="Intel Core i5-6600T 2.7 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-661 3.3 GHz (2 cores)" value="Intel Core i5-661 3.3 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-670 3.5 GHz (2 cores)" value="Intel Core i5-670 3.5 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-680 3.6 GHz (2 cores)" value="Intel Core i5-680 3.6 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-7200U 2.5 GHz (2 cores)" value="Intel Core i5-7200U 2.5 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-7260U 2.2 GHz (2 cores)" value="Intel Core i5-7260U 2.2 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-7267U 3.1 GHz (2 cores)" value="Intel Core i5-7267U 3.1 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-7300HQ 2.5 GHz (4 cores)" value="Intel Core i5-7300HQ 2.5 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-7300U 2.6 GHz (2 cores)" value="Intel Core i5-7300U 2.6 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-7360U 2.3 GHz (2 cores)" value="Intel Core i5-7360U 2.3 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-7400 3.0 GHz (4 cores)" value="Intel Core i5-7400 3.0 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-7400T 2.4 GHz (4 cores)" value="Intel Core i5-7400T 2.4 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-7440HQ 2.8 GHz (4 cores)" value="Intel Core i5-7440HQ 2.8 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-750 2.7 GHz (4 cores)" value="Intel Core i5-750 2.7 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-7500 3.4 GHz (4 cores)" value="Intel Core i5-7500 3.4 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-7500T 2.7 GHz (4 cores)" value="Intel Core i5-7500T 2.7 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-760 2.8 GHz (4 cores)" value="Intel Core i5-760 2.8 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-7600 3.5 GHz (4 cores)" value="Intel Core i5-7600 3.5 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-7600K 3.8 GHz (4 cores)" value="Intel Core i5-7600K 3.8 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-7640X 4.0 GHz (4 cores)" value="Intel Core i5-7640X 4.0 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-8210Y 1.6 GHz (2 cores)" value="Intel Core i5-8210Y 1.6 GHz (2 cores)" />
<Picker.Item label="Intel Core i5-8250U 1.6 GHz (4 cores)" value="Intel Core i5-8250U 1.6 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-8257U 1.4 GHz (4 cores)" value="Intel Core i5-8257U 1.4 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-8259U 2.3 GHz (4 cores)" value="Intel Core i5-8259U 2.3 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-8279U 2.4 GHz (4 cores)" value="Intel Core i5-8279U 2.4 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-8300H 2.3 GHz (4 cores)" value="Intel Core i5-8300H 2.3 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-8305G 2.8 GHz (4 cores)" value="Intel Core i5-8305G 2.8 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-8400 2.8 GHz (6 cores)" value="Intel Core i5-8400 2.8 GHz (6 cores)" />
<Picker.Item label="Intel Core i5-8400H 2.5 GHz (4 cores)" value="Intel Core i5-8400H 2.5 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-8400T 1.7 GHz (6 cores)" value="Intel Core i5-8400T 1.7 GHz (6 cores)" />
<Picker.Item label="Intel Core i5-8500 3.0 GHz (6 cores)" value="Intel Core i5-8500 3.0 GHz (6 cores)" />
<Picker.Item label="Intel Core i5-8500B 3.0 GHz (6 cores)" value="Intel Core i5-8500B 3.0 GHz (6 cores)" />
<Picker.Item label="Intel Core i5-8500T 2.1 GHz (6 cores)" value="Intel Core i5-8500T 2.1 GHz (6 cores)" />
<Picker.Item label="Intel Core i5-8600 3.1 GHz (6 cores)" value="Intel Core i5-8600 3.1 GHz (6 cores)" />
<Picker.Item label="Intel Core i5-8600K 3.6 GHz (6 cores)" value="Intel Core i5-8600K 3.6 GHz (6 cores)" />
<Picker.Item label="Intel Core i5-9300H 2.4 GHz (4 cores)" value="Intel Core i5-9300H 2.4 GHz (4 cores)" />
<Picker.Item label="Intel Core i5-9400 2.9 GHz (6 cores)" value="Intel Core i5-9400 2.9 GHz (6 cores)" />
<Picker.Item label="Intel Core i5-9400F 2.9 GHz (6 cores)" value="Intel Core i5-9400F 2.9 GHz (6 cores)" />
<Picker.Item label="Intel Core i5-9500 3.0 GHz (6 cores)" value="Intel Core i5-9500 3.0 GHz (6 cores)" />
<Picker.Item label="Intel Core i5-9600K 3.7 GHz (6 cores)" value="Intel Core i5-9600K 3.7 GHz (6 cores)" />
<Picker.Item label="Intel Core i5-9600KF 3.7 GHz (6 cores)" value="Intel Core i5-9600KF 3.7 GHz (6 cores)" />
<Picker.Item label="Intel Core i7-2600 3.4 GHz (4 cores)" value="Intel Core i7-2600 3.4 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-2600K 3.4 GHz (4 cores)" value="Intel Core i7-2600K 3.4 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-2600S 2.8 GHz (4 cores)" value="Intel Core i7-2600S 2.8 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-2620M 2.7 GHz (2 cores)" value="Intel Core i7-2620M 2.7 GHz (2 cores)" />
<Picker.Item label="Intel Core i7-2630QM 2.0 GHz (4 cores)" value="Intel Core i7-2630QM 2.0 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-2635QM 2.0 GHz (4 cores)" value="Intel Core i7-2635QM 2.0 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-2637M 1.7 GHz (2 cores)" value="Intel Core i7-2637M 1.7 GHz (2 cores)" />
<Picker.Item label="Intel Core i7-2640M 2.8 GHz (2 cores)" value="Intel Core i7-2640M 2.8 GHz (2 cores)" />
<Picker.Item label="Intel Core i7-2670QM 2.2 GHz (4 cores)" value="Intel Core i7-2670QM 2.2 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-2675QM 2.2 GHz (4 cores)" value="Intel Core i7-2675QM 2.2 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-2677M 1.8 GHz (2 cores)" value="Intel Core i7-2677M 1.8 GHz (2 cores)" />
<Picker.Item label="Intel Core i7-2700K 3.5 GHz (4 cores)" value="Intel Core i7-2700K 3.5 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-2720QM 2.2 GHz (4 cores)" value="Intel Core i7-2720QM 2.2 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-2760QM 2.4 GHz (4 cores)" value="Intel Core i7-2760QM 2.4 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-2820QM 2.3 GHz (4 cores)" value="Intel Core i7-2820QM 2.3 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-2860QM 2.5 GHz (4 cores)" value="Intel Core i7-2860QM 2.5 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-2920XM 2.5 GHz (4 cores)" value="Intel Core i7-2920XM 2.5 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-2960XM 2.7 GHz (4 cores)" value="Intel Core i7-2960XM 2.7 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-3517U 1.9 GHz (2 cores)" value="Intel Core i7-3517U 1.9 GHz (2 cores)" />
<Picker.Item label="Intel Core i7-3520M 2.9 GHz (2 cores)" value="Intel Core i7-3520M 2.9 GHz (2 cores)" />
<Picker.Item label="Intel Core i7-3537U 2.0 GHz (2 cores)" value="Intel Core i7-3537U 2.0 GHz (2 cores)" />
<Picker.Item label="Intel Core i7-3540M 3.0 GHz (2 cores)" value="Intel Core i7-3540M 3.0 GHz (2 cores)" />
<Picker.Item label="Intel Core i7-3610QM 2.3 GHz (4 cores)" value="Intel Core i7-3610QM 2.3 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-3612QM 2.1 GHz (4 cores)" value="Intel Core i7-3612QM 2.1 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-3615QM 2.3 GHz (4 cores)" value="Intel Core i7-3615QM 2.3 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-3630QM 2.4 GHz (4 cores)" value="Intel Core i7-3630QM 2.4 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-3632QM 2.2 GHz (4 cores)" value="Intel Core i7-3632QM 2.2 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-3635QM 2.4 GHz (4 cores)" value="Intel Core i7-3635QM 2.4 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-3667U 2.0 GHz (2 cores)" value="Intel Core i7-3667U 2.0 GHz (2 cores)" />
<Picker.Item label="Intel Core i7-3687U 2.1 GHz (2 cores)" value="Intel Core i7-3687U 2.1 GHz (2 cores)" />
<Picker.Item label="Intel Core i7-3720QM 2.6 GHz (4 cores)" value="Intel Core i7-3720QM 2.6 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-3740QM 2.7 GHz (4 cores)" value="Intel Core i7-3740QM 2.7 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-3770 3.4 GHz (4 cores)" value="Intel Core i7-3770 3.4 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-3770K 3.5 GHz (4 cores)" value="Intel Core i7-3770K 3.5 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-3770S 3.1 GHz (4 cores)" value="Intel Core i7-3770S 3.1 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-3770T 2.5 GHz (4 cores)" value="Intel Core i7-3770T 2.5 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-3820 3.6 GHz (4 cores)" value="Intel Core i7-3820 3.6 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-3820QM 2.7 GHz (4 cores)" value="Intel Core i7-3820QM 2.7 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-3840QM 2.8 GHz (4 cores)" value="Intel Core i7-3840QM 2.8 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-3930K 3.2 GHz (6 cores)" value="Intel Core i7-3930K 3.2 GHz (6 cores)" />
<Picker.Item label="Intel Core i7-3940XM 3.0 GHz (4 cores)" value="Intel Core i7-3940XM 3.0 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-3960X 3.3 GHz (6 cores)" value="Intel Core i7-3960X 3.3 GHz (6 cores)" />
<Picker.Item label="Intel Core i7-3970X 3.5 GHz (6 cores)" value="Intel Core i7-3970X 3.5 GHz (6 cores)" />
<Picker.Item label="Intel Core i7-4500U 1.8 GHz (2 cores)" value="Intel Core i7-4500U 1.8 GHz (2 cores)" />
<Picker.Item label="Intel Core i7-4510U 2.0 GHz (2 cores)" value="Intel Core i7-4510U 2.0 GHz (2 cores)" />
<Picker.Item label="Intel Core i7-4558U 2.8 GHz (2 cores)" value="Intel Core i7-4558U 2.8 GHz (2 cores)" />
<Picker.Item label="Intel Core i7-4578U 3.0 GHz (2 cores)" value="Intel Core i7-4578U 3.0 GHz (2 cores)" />
<Picker.Item label="Intel Core i7-4600M 2.9 GHz (2 cores)" value="Intel Core i7-4600M 2.9 GHz (2 cores)" />
<Picker.Item label="Intel Core i7-4600U 2.1 GHz (2 cores)" value="Intel Core i7-4600U 2.1 GHz (2 cores)" />
<Picker.Item label="Intel Core i7-4610M 3.0 GHz (2 cores)" value="Intel Core i7-4610M 3.0 GHz (2 cores)" />
<Picker.Item label="Intel Core i7-4650U 1.7 GHz (2 cores)" value="Intel Core i7-4650U 1.7 GHz (2 cores)" />
<Picker.Item label="Intel Core i7-4700HQ 2.4 GHz (4 cores)" value="Intel Core i7-4700HQ 2.4 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-4700MQ 2.4 GHz (4 cores)" value="Intel Core i7-4700MQ 2.4 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-4702HQ 2.2 GHz (4 cores)" value="Intel Core i7-4702HQ 2.2 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-4702MQ 2.2 GHz (4 cores)" value="Intel Core i7-4702MQ 2.2 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-4710HQ 2.5 GHz (4 cores)" value="Intel Core i7-4710HQ 2.5 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-4710MQ 2.5 GHz (4 cores)" value="Intel Core i7-4710MQ 2.5 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-4712HQ 2.3 GHz (4 cores)" value="Intel Core i7-4712HQ 2.3 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-4712MQ 2.3 GHz (4 cores)" value="Intel Core i7-4712MQ 2.3 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-4720HQ 2.6 GHz (4 cores)" value="Intel Core i7-4720HQ 2.6 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-4750HQ 2.0 GHz (4 cores)" value="Intel Core i7-4750HQ 2.0 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-4765T 2.0 GHz (4 cores)" value="Intel Core i7-4765T 2.0 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-4770 3.4 GHz (4 cores)" value="Intel Core i7-4770 3.4 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-4770HQ 2.2 GHz (4 cores)" value="Intel Core i7-4770HQ 2.2 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-4770K 3.5 GHz (4 cores)" value="Intel Core i7-4770K 3.5 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-4770S 3.1 GHz (4 cores)" value="Intel Core i7-4770S 3.1 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-4770T 2.5 GHz (4 cores)" value="Intel Core i7-4770T 2.5 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-4771 3.5 GHz (4 cores)" value="Intel Core i7-4771 3.5 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-4785T 2.2 GHz (4 cores)" value="Intel Core i7-4785T 2.2 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-4790 3.6 GHz (4 cores)" value="Intel Core i7-4790 3.6 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-4790K 4.0 GHz (4 cores)" value="Intel Core i7-4790K 4.0 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-4790S 3.2 GHz (4 cores)" value="Intel Core i7-4790S 3.2 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-4790T 2.7 GHz (4 cores)" value="Intel Core i7-4790T 2.7 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-4800MQ 2.7 GHz (4 cores)" value="Intel Core i7-4800MQ 2.7 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-4810MQ 2.8 GHz (4 cores)" value="Intel Core i7-4810MQ 2.8 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-4820K 3.7 GHz (4 cores)" value="Intel Core i7-4820K 3.7 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-4850HQ 2.3 GHz (4 cores)" value="Intel Core i7-4850HQ 2.3 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-4860HQ 2.4 GHz (4 cores)" value="Intel Core i7-4860HQ 2.4 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-4870HQ 2.5 GHz (4 cores)" value="Intel Core i7-4870HQ 2.5 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-4900MQ 2.8 GHz (4 cores)" value="Intel Core i7-4900MQ 2.8 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-4910MQ 2.9 GHz (4 cores)" value="Intel Core i7-4910MQ 2.9 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-4930K 3.4 GHz (6 cores)" value="Intel Core i7-4930K 3.4 GHz (6 cores)" />
<Picker.Item label="Intel Core i7-4940MX 3.1 GHz (4 cores)" value="Intel Core i7-4940MX 3.1 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-4960HQ 2.6 GHz (4 cores)" value="Intel Core i7-4960HQ 2.6 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-4960X 3.6 GHz (6 cores)" value="Intel Core i7-4960X 3.6 GHz (6 cores)" />
<Picker.Item label="Intel Core i7-4980HQ 2.8 GHz (4 cores)" value="Intel Core i7-4980HQ 2.8 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-5500U 2.4 GHz (2 cores)" value="Intel Core i7-5500U 2.4 GHz (2 cores)" />
<Picker.Item label="Intel Core i7-5557U 3.1 GHz (2 cores)" value="Intel Core i7-5557U 3.1 GHz (2 cores)" />
<Picker.Item label="Intel Core i7-5600U 2.6 GHz (2 cores)" value="Intel Core i7-5600U 2.6 GHz (2 cores)" />
<Picker.Item label="Intel Core i7-5650U 2.2 GHz (2 cores)" value="Intel Core i7-5650U 2.2 GHz (2 cores)" />
<Picker.Item label="Intel Core i7-5700HQ 2.7 GHz (4 cores)" value="Intel Core i7-5700HQ 2.7 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-5775C 3.3 GHz (4 cores)" value="Intel Core i7-5775C 3.3 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-5775R 3.3 GHz (4 cores)" value="Intel Core i7-5775R 3.3 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-5820K 3.3 GHz (6 cores)" value="Intel Core i7-5820K 3.3 GHz (6 cores)" />
<Picker.Item label="Intel Core i7-5930K 3.5 GHz (6 cores)" value="Intel Core i7-5930K 3.5 GHz (6 cores)" />
<Picker.Item label="Intel Core i7-5950HQ 2.9 GHz (4 cores)" value="Intel Core i7-5950HQ 2.9 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-5960X 3.0 GHz (8 cores)" value="Intel Core i7-5960X 3.0 GHz (8 cores)" />
<Picker.Item label="Intel Core i7-620M 2.7 GHz (2 cores)" value="Intel Core i7-620M 2.7 GHz (2 cores)" />
<Picker.Item label="Intel Core i7-640LM 2.1 GHz (2 cores)" value="Intel Core i7-640LM 2.1 GHz (2 cores)" />
<Picker.Item label="Intel Core i7-640M 2.8 GHz (2 cores)" value="Intel Core i7-640M 2.8 GHz (2 cores)" />
<Picker.Item label="Intel Core i7-6560U 2.2 GHz (2 cores)" value="Intel Core i7-6560U 2.2 GHz (2 cores)" />
<Picker.Item label="Intel Core i7-6567U 3.3 GHz (2 cores)" value="Intel Core i7-6567U 3.3 GHz (2 cores)" />
<Picker.Item label="Intel Core i7-6650U 2.2 GHz (2 cores)" value="Intel Core i7-6650U 2.2 GHz (2 cores)" />
<Picker.Item label="Intel Core i7-6700 3.4 GHz (4 cores)" value="Intel Core i7-6700 3.4 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-6700HQ 2.6 GHz (4 cores)" value="Intel Core i7-6700HQ 2.6 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-6700K 4.0 GHz (4 cores)" value="Intel Core i7-6700K 4.0 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-6700T 2.8 GHz (4 cores)" value="Intel Core i7-6700T 2.8 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-6770HQ 2.6 GHz (4 cores)" value="Intel Core i7-6770HQ 2.6 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-6800K 3.4 GHz (6 cores)" value="Intel Core i7-6800K 3.4 GHz (6 cores)" />
<Picker.Item label="Intel Core i7-6820HK 2.7 GHz (4 cores)" value="Intel Core i7-6820HK 2.7 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-6820HQ 2.7 GHz (4 cores)" value="Intel Core i7-6820HQ 2.7 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-6850K 3.6 GHz (6 cores)" value="Intel Core i7-6850K 3.6 GHz (6 cores)" />
<Picker.Item label="Intel Core i7-6900K 3.2 GHz (8 cores)" value="Intel Core i7-6900K 3.2 GHz (8 cores)" />
<Picker.Item label="Intel Core i7-6920HQ 2.9 GHz (4 cores)" value="Intel Core i7-6920HQ 2.9 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-6950X 3.0 GHz (10 cores)" value="Intel Core i7-6950X 3.0 GHz (10 cores)" />
<Picker.Item label="Intel Core i7-720QM 1.6 GHz (4 cores)" value="Intel Core i7-720QM 1.6 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-740QM 1.7 GHz (4 cores)" value="Intel Core i7-740QM 1.7 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-7500U 2.7 GHz (2 cores)" value="Intel Core i7-7500U 2.7 GHz (2 cores)" />
<Picker.Item label="Intel Core i7-7560U 2.4 GHz (2 cores)" value="Intel Core i7-7560U 2.4 GHz (2 cores)" />
<Picker.Item label="Intel Core i7-7567U 3.5 GHz (2 cores)" value="Intel Core i7-7567U 3.5 GHz (2 cores)" />
<Picker.Item label="Intel Core i7-7600U 2.8 GHz (2 cores)" value="Intel Core i7-7600U 2.8 GHz (2 cores)" />
<Picker.Item label="Intel Core i7-7660U 2.5 GHz (2 cores)" value="Intel Core i7-7660U 2.5 GHz (2 cores)" />
<Picker.Item label="Intel Core i7-7700 3.6 GHz (4 cores)" value="Intel Core i7-7700 3.6 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-7700HQ 2.8 GHz (4 cores)" value="Intel Core i7-7700HQ 2.8 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-7700K 4.2 GHz (4 cores)" value="Intel Core i7-7700K 4.2 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-7700T 2.9 GHz (4 cores)" value="Intel Core i7-7700T 2.9 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-7740X 4.3 GHz (4 cores)" value="Intel Core i7-7740X 4.3 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-7800X 3.5 GHz (6 cores)" value="Intel Core i7-7800X 3.5 GHz (6 cores)" />
<Picker.Item label="Intel Core i7-7820HK 2.9 GHz (4 cores)" value="Intel Core i7-7820HK 2.9 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-7820HQ 2.9 GHz (4 cores)" value="Intel Core i7-7820HQ 2.9 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-7820X 3.6 GHz (8 cores)" value="Intel Core i7-7820X 3.6 GHz (8 cores)" />
<Picker.Item label="Intel Core i7-7920HQ 3.1 GHz (4 cores)" value="Intel Core i7-7920HQ 3.1 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-8086K 4.0 GHz (6 cores)" value="Intel Core i7-8086K 4.0 GHz (6 cores)" />
<Picker.Item label="Intel Core i7-820QM 1.7 GHz (4 cores)" value="Intel Core i7-820QM 1.7 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-840QM 1.9 GHz (4 cores)" value="Intel Core i7-840QM 1.9 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-8550U 1.8 GHz (4 cores)" value="Intel Core i7-8550U 1.8 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-8559U 2.7 GHz (4 cores)" value="Intel Core i7-8559U 2.7 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-8569U 2.8 GHz (4 cores)" value="Intel Core i7-8569U 2.8 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-860 2.8 GHz (4 cores)" value="Intel Core i7-860 2.8 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-8650U 1.9 GHz (4 cores)" value="Intel Core i7-8650U 1.9 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-8665U 1.9 GHz (4 cores)" value="Intel Core i7-8665U 1.9 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-870 2.9 GHz (4 cores)" value="Intel Core i7-870 2.9 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-8700 3.2 GHz (6 cores)" value="Intel Core i7-8700 3.2 GHz (6 cores)" />
<Picker.Item label="Intel Core i7-8700B 3.2 GHz (6 cores)" value="Intel Core i7-8700B 3.2 GHz (6 cores)" />
<Picker.Item label="Intel Core i7-8700K 3.7 GHz (6 cores)" value="Intel Core i7-8700K 3.7 GHz (6 cores)" />
<Picker.Item label="Intel Core i7-8700T 2.4 GHz (6 cores)" value="Intel Core i7-8700T 2.4 GHz (6 cores)" />
<Picker.Item label="Intel Core i7-8705G 3.1 GHz (4 cores)" value="Intel Core i7-8705G 3.1 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-8750H 2.2 GHz (6 cores)" value="Intel Core i7-8750H 2.2 GHz (6 cores)" />
<Picker.Item label="Intel Core i7-875K 2.9 GHz (4 cores)" value="Intel Core i7-875K 2.9 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-8809G 3.1 GHz (4 cores)" value="Intel Core i7-8809G 3.1 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-8850H 2.6 GHz (6 cores)" value="Intel Core i7-8850H 2.6 GHz (6 cores)" />
<Picker.Item label="Intel Core i7-920 2.7 GHz (4 cores)" value="Intel Core i7-920 2.7 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-920XM 2.0 GHz (4 cores)" value="Intel Core i7-920XM 2.0 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-930 2.8 GHz (4 cores)" value="Intel Core i7-930 2.8 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-940 2.9 GHz (4 cores)" value="Intel Core i7-940 2.9 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-940XM 2.1 GHz (4 cores)" value="Intel Core i7-940XM 2.1 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-950 3.1 GHz (4 cores)" value="Intel Core i7-950 3.1 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-960 3.2 GHz (4 cores)" value="Intel Core i7-960 3.2 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-965 3.2 GHz (4 cores)" value="Intel Core i7-965 3.2 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-970 3.2 GHz (6 cores)" value="Intel Core i7-970 3.2 GHz (6 cores)" />
<Picker.Item label="Intel Core i7-9700 3.0 GHz (8 cores)" value="Intel Core i7-9700 3.0 GHz (8 cores)" />
<Picker.Item label="Intel Core i7-9700F 3.0 GHz (8 cores)" value="Intel Core i7-9700F 3.0 GHz (8 cores)" />
<Picker.Item label="Intel Core i7-9700K 3.6 GHz (8 cores)" value="Intel Core i7-9700K 3.6 GHz (8 cores)" />
<Picker.Item label="Intel Core i7-9700KF 3.6 GHz (8 cores)" value="Intel Core i7-9700KF 3.6 GHz (8 cores)" />
<Picker.Item label="Intel Core i7-975 3.3 GHz (4 cores)" value="Intel Core i7-975 3.3 GHz (4 cores)" />
<Picker.Item label="Intel Core i7-9750H 2.6 GHz (6 cores)" value="Intel Core i7-9750H 2.6 GHz (6 cores)" />
<Picker.Item label="Intel Core i7-9800X 3.8 GHz (8 cores)" value="Intel Core i7-9800X 3.8 GHz (8 cores)" />
<Picker.Item label="Intel Core i7-980X 3.3 GHz (6 cores)" value="Intel Core i7-980X 3.3 GHz (6 cores)" />
<Picker.Item label="Intel Core i7-9850H 2.6 GHz (6 cores)" value="Intel Core i7-9850H 2.6 GHz (6 cores)" />
<Picker.Item label="Intel Core i7-990X 3.5 GHz (6 cores)" value="Intel Core i7-990X 3.5 GHz (6 cores)" />
<Picker.Item label="Intel Core i9-10900X 3.7 GHz (10 cores)" value="Intel Core i9-10900X 3.7 GHz (10 cores)" />
<Picker.Item label="Intel Core i9-10920X 3.5 GHz (12 cores)" value="Intel Core i9-10920X 3.5 GHz (12 cores)" />
<Picker.Item label="Intel Core i9-10940X 3.3 GHz (14 cores)" value="Intel Core i9-10940X 3.3 GHz (14 cores)" />
<Picker.Item label="Intel Core i9-10980XE 3.0 GHz (18 cores)" value="Intel Core i9-10980XE 3.0 GHz (18 cores)" />
<Picker.Item label="Intel Core i9-7900X 3.3 GHz (10 cores)" value="Intel Core i9-7900X 3.3 GHz (10 cores)" />
<Picker.Item label="Intel Core i9-7920X 2.9 GHz (12 cores)" value="Intel Core i9-7920X 2.9 GHz (12 cores)" />
<Picker.Item label="Intel Core i9-7940X 3.1 GHz (14 cores)" value="Intel Core i9-7940X 3.1 GHz (14 cores)" />
<Picker.Item label="Intel Core i9-7960X 2.8 GHz (16 cores)" value="Intel Core i9-7960X 2.8 GHz (16 cores)" />
<Picker.Item label="Intel Core i9-7980XE 2.6 GHz (18 cores)" value="Intel Core i9-7980XE 2.6 GHz (18 cores)" />
<Picker.Item label="Intel Core i9-8950HK 2.9 GHz (6 cores)" value="Intel Core i9-8950HK 2.9 GHz (6 cores)" />
<Picker.Item label="Intel Core i9-9880H 2.3 GHz (8 cores)" value="Intel Core i9-9880H 2.3 GHz (8 cores)" />
<Picker.Item label="Intel Core i9-9900 3.1 GHz (8 cores)" value="Intel Core i9-9900 3.1 GHz (8 cores)" />
<Picker.Item label="Intel Core i9-9900K 3.6 GHz (8 cores)" value="Intel Core i9-9900K 3.6 GHz (8 cores)" />
<Picker.Item label="Intel Core i9-9900KF 3.6 GHz (8 cores)" value="Intel Core i9-9900KF 3.6 GHz (8 cores)" />
<Picker.Item label="Intel Core i9-9900KS 4.0 GHz (8 cores)" value="Intel Core i9-9900KS 4.0 GHz (8 cores)" />
<Picker.Item label="Intel Core i9-9900X 3.5 GHz (10 cores)" value="Intel Core i9-9900X 3.5 GHz (10 cores)" />
<Picker.Item label="Intel Core i9-9920X 3.5 GHz (12 cores)" value="Intel Core i9-9920X 3.5 GHz (12 cores)" />
<Picker.Item label="Intel Core i9-9940X 3.3 GHz (14 cores)" value="Intel Core i9-9940X 3.3 GHz (14 cores)" />
<Picker.Item label="Intel Core i9-9960X 3.1 GHz (16 cores)" value="Intel Core i9-9960X 3.1 GHz (16 cores)" />
<Picker.Item label="Intel Core i9-9980HK 2.4 GHz (8 cores)" value="Intel Core i9-9980HK 2.4 GHz (8 cores)" />
<Picker.Item label="Intel Core i9-9980XE 3.0 GHz (18 cores)" value="Intel Core i9-9980XE 3.0 GHz (18 cores)" />
<Picker.Item label="Intel Pentium 2020M 2.4 GHz (2 cores)" value="Intel Pentium 2020M 2.4 GHz (2 cores)" />
<Picker.Item label="Intel Pentium 2117U 1.8 GHz (2 cores)" value="Intel Pentium 2117U 1.8 GHz (2 cores)" />
<Picker.Item label="Intel Pentium 2127U 1.9 GHz (2 cores)" value="Intel Pentium 2127U 1.9 GHz (2 cores)" />
<Picker.Item label="Intel Pentium 3556U 1.7 GHz (2 cores)" value="Intel Pentium 3556U 1.7 GHz (2 cores)" />
<Picker.Item label="Intel Pentium 3805U 1.9 GHz (2 cores)" value="Intel Pentium 3805U 1.9 GHz (2 cores)" />
<Picker.Item label="Intel Pentium 3825U 1.9 GHz (2 cores)" value="Intel Pentium 3825U 1.9 GHz (2 cores)" />
<Picker.Item label="Intel Pentium 4 531/630 3.0 GHz (1 core)" value="Intel Pentium 4 531/630 3.0 GHz (1 core)" />
<Picker.Item label="Intel Pentium 4 540/541 3.2 GHz (1 core)" value="Intel Pentium 4 540/541 3.2 GHz (1 core)" />
<Picker.Item label="Intel Pentium 4405U 2.1 GHz (2 cores)" value="Intel Pentium 4405U 2.1 GHz (2 cores)" />
<Picker.Item label="Intel Pentium 4405Y 1.5 GHz (2 cores)" value="Intel Pentium 4405Y 1.5 GHz (2 cores)" />
<Picker.Item label="Intel Pentium 4410Y 1.5 GHz (2 cores)" value="Intel Pentium 4410Y 1.5 GHz (2 cores)" />
<Picker.Item label="Intel Pentium 4415U 2.3 GHz (2 cores)" value="Intel Pentium 4415U 2.3 GHz (2 cores)" />
<Picker.Item label="Intel Pentium 4415Y 1.6 GHz (2 cores)" value="Intel Pentium 4415Y 1.6 GHz (2 cores)" />
<Picker.Item label="Intel Pentium 987 1.5 GHz (2 cores)" value="Intel Pentium 987 1.5 GHz (2 cores)" />
<Picker.Item label="Intel Pentium 997 1.6 GHz (2 cores)" value="Intel Pentium 997 1.6 GHz (2 cores)" />
<Picker.Item label="Intel Pentium B940 2.0 GHz (2 cores)" value="Intel Pentium B940 2.0 GHz (2 cores)" />
<Picker.Item label="Intel Pentium B950 2.1 GHz (2 cores)" value="Intel Pentium B950 2.1 GHz (2 cores)" />
<Picker.Item label="Intel Pentium B960 2.2 GHz (2 cores)" value="Intel Pentium B960 2.2 GHz (2 cores)" />
<Picker.Item label="Intel Pentium B970 2.3 GHz (2 cores)" value="Intel Pentium B970 2.3 GHz (2 cores)" />
<Picker.Item label="Intel Pentium B980 2.4 GHz (2 cores)" value="Intel Pentium B980 2.4 GHz (2 cores)" />
<Picker.Item label="Intel Pentium D 820/915/920 2.8 GHz (2 cores)" value="Intel Pentium D 820/915/920 2.8 GHz (2 cores)" />
<Picker.Item label="Intel Pentium D 830/925/930 3.0 GHz (2 cores)" value="Intel Pentium D 830/925/930 3.0 GHz (2 cores)" />
<Picker.Item label="Intel Pentium D 945/950 3.4 GHz (2 cores)" value="Intel Pentium D 945/950 3.4 GHz (2 cores)" />
<Picker.Item label="Intel Pentium E2140 1.6 GHz (2 cores)" value="Intel Pentium E2140 1.6 GHz (2 cores)" />
<Picker.Item label="Intel Pentium E2160 1.8 GHz (2 cores)" value="Intel Pentium E2160 1.8 GHz (2 cores)" />
<Picker.Item label="Intel Pentium E2180 2.0 GHz (2 cores)" value="Intel Pentium E2180 2.0 GHz (2 cores)" />
<Picker.Item label="Intel Pentium E2200 2.2 GHz (2 cores)" value="Intel Pentium E2200 2.2 GHz (2 cores)" />
<Picker.Item label="Intel Pentium E2220 2.4 GHz (2 cores)" value="Intel Pentium E2220 2.4 GHz (2 cores)" />
<Picker.Item label="Intel Pentium E5200 2.5 GHz (2 cores)" value="Intel Pentium E5200 2.5 GHz (2 cores)" />
<Picker.Item label="Intel Pentium E5300 2.6 GHz (2 cores)" value="Intel Pentium E5300 2.6 GHz (2 cores)" />
<Picker.Item label="Intel Pentium E5400 2.7 GHz (2 cores)" value="Intel Pentium E5400 2.7 GHz (2 cores)" />
<Picker.Item label="Intel Pentium E5500 2.8 GHz (2 cores)" value="Intel Pentium E5500 2.8 GHz (2 cores)" />
<Picker.Item label="Intel Pentium E5700 3.0 GHz (2 cores)" value="Intel Pentium E5700 3.0 GHz (2 cores)" />
<Picker.Item label="Intel Pentium E5800 3.2 GHz (2 cores)" value="Intel Pentium E5800 3.2 GHz (2 cores)" />
<Picker.Item label="Intel Pentium E6300 2.8 GHz (2 cores)" value="Intel Pentium E6300 2.8 GHz (2 cores)" />
<Picker.Item label="Intel Pentium E6500 2.9 GHz (2 cores)" value="Intel Pentium E6500 2.9 GHz (2 cores)" />
<Picker.Item label="Intel Pentium E6600 3.1 GHz (2 cores)" value="Intel Pentium E6600 3.1 GHz (2 cores)" />
<Picker.Item label="Intel Pentium E6700 3.2 GHz (2 cores)" value="Intel Pentium E6700 3.2 GHz (2 cores)" />
<Picker.Item label="Intel Pentium G2010 2.8 GHz (2 cores)" value="Intel Pentium G2010 2.8 GHz (2 cores)" />
<Picker.Item label="Intel Pentium G2020 2.9 GHz (2 cores)" value="Intel Pentium G2020 2.9 GHz (2 cores)" />
<Picker.Item label="Intel Pentium G2030 3.0 GHz (2 cores)" value="Intel Pentium G2030 3.0 GHz (2 cores)" />
<Picker.Item label="Intel Pentium G2120 3.1 GHz (2 cores)" value="Intel Pentium G2120 3.1 GHz (2 cores)" />
<Picker.Item label="Intel Pentium G2130 3.2 GHz (2 cores)" value="Intel Pentium G2130 3.2 GHz (2 cores)" />
<Picker.Item label="Intel Pentium G3220 3.0 GHz (2 cores)" value="Intel Pentium G3220 3.0 GHz (2 cores)" />
<Picker.Item label="Intel Pentium G3220T 2.6 GHz (2 cores)" value="Intel Pentium G3220T 2.6 GHz (2 cores)" />
<Picker.Item label="Intel Pentium G3240 3.1 GHz (2 cores)" value="Intel Pentium G3240 3.1 GHz (2 cores)" />
<Picker.Item label="Intel Pentium G3250 3.2 GHz (2 cores)" value="Intel Pentium G3250 3.2 GHz (2 cores)" />
<Picker.Item label="Intel Pentium G3258 3.2 GHz (2 cores)" value="Intel Pentium G3258 3.2 GHz (2 cores)" />
<Picker.Item label="Intel Pentium G3260 3.3 GHz (2 cores)" value="Intel Pentium G3260 3.3 GHz (2 cores)" />
<Picker.Item label="Intel Pentium G3420 3.2 GHz (2 cores)" value="Intel Pentium G3420 3.2 GHz (2 cores)" />
<Picker.Item label="Intel Pentium G3440 3.3 GHz (2 cores)" value="Intel Pentium G3440 3.3 GHz (2 cores)" />
<Picker.Item label="Intel Pentium G4400 3.3 GHz (2 cores)" value="Intel Pentium G4400 3.3 GHz (2 cores)" />
<Picker.Item label="Intel Pentium G4400T 2.9 GHz (2 cores)" value="Intel Pentium G4400T 2.9 GHz (2 cores)" />
<Picker.Item label="Intel Pentium G4500 3.5 GHz (2 cores)" value="Intel Pentium G4500 3.5 GHz (2 cores)" />
<Picker.Item label="Intel Pentium G4560 3.5 GHz (2 cores)" value="Intel Pentium G4560 3.5 GHz (2 cores)" />
<Picker.Item label="Intel Pentium G4600 3.6 GHz (2 cores)" value="Intel Pentium G4600 3.6 GHz (2 cores)" />
<Picker.Item label="Intel Pentium G4620 3.7 GHz (2 cores)" value="Intel Pentium G4620 3.7 GHz (2 cores)" />
<Picker.Item label="Intel Pentium G5600 3.9 GHz (2 cores)" value="Intel Pentium G5600 3.9 GHz (2 cores)" />
<Picker.Item label="Intel Pentium G620 2.6 GHz (2 cores)" value="Intel Pentium G620 2.6 GHz (2 cores)" />
<Picker.Item label="Intel Pentium G630 2.7 GHz (2 cores)" value="Intel Pentium G630 2.7 GHz (2 cores)" />
<Picker.Item label="Intel Pentium G640 2.8 GHz (2 cores)" value="Intel Pentium G640 2.8 GHz (2 cores)" />
<Picker.Item label="Intel Pentium G645 2.9 GHz (2 cores)" value="Intel Pentium G645 2.9 GHz (2 cores)" />
<Picker.Item label="Intel Pentium G840 2.8 GHz (2 cores)" value="Intel Pentium G840 2.8 GHz (2 cores)" />
<Picker.Item label="Intel Pentium G850 2.9 GHz (2 cores)" value="Intel Pentium G850 2.9 GHz (2 cores)" />
<Picker.Item label="Intel Pentium G860 3.0 GHz (2 cores)" value="Intel Pentium G860 3.0 GHz (2 cores)" />
<Picker.Item label="Intel Pentium G870 3.1 GHz (2 cores)" value="Intel Pentium G870 3.1 GHz (2 cores)" />
<Picker.Item label="Intel Pentium Gold G5400 3.7 GHz (2 cores)" value="Intel Pentium Gold G5400 3.7 GHz (2 cores)" />
<Picker.Item label="Intel Pentium Gold G5500 3.8 GHz (2 cores)" value="Intel Pentium Gold G5500 3.8 GHz (2 cores)" />
<Picker.Item label="Intel Pentium J3710 1.6 GHz (4 cores)" value="Intel Pentium J3710 1.6 GHz (4 cores)" />
<Picker.Item label="Intel Pentium J4205 1.5 GHz (4 cores)" value="Intel Pentium J4205 1.5 GHz (4 cores)" />
<Picker.Item label="Intel Pentium N3520 2.2 GHz (4 cores)" value="Intel Pentium N3520 2.2 GHz (4 cores)" />
<Picker.Item label="Intel Pentium N3530 2.2 GHz (4 cores)" value="Intel Pentium N3530 2.2 GHz (4 cores)" />
<Picker.Item label="Intel Pentium N3540 2.2 GHz (4 cores)" value="Intel Pentium N3540 2.2 GHz (4 cores)" />
<Picker.Item label="Intel Pentium N3700 1.6 GHz (4 cores)" value="Intel Pentium N3700 1.6 GHz (4 cores)" />
<Picker.Item label="Intel Pentium N4200 1.1 GHz (4 cores)" value="Intel Pentium N4200 1.1 GHz (4 cores)" />
<Picker.Item label="Intel Pentium P6000 1.9 GHz (2 cores)" value="Intel Pentium P6000 1.9 GHz (2 cores)" />
<Picker.Item label="Intel Pentium P6100 2.0 GHz (2 cores)" value="Intel Pentium P6100 2.0 GHz (2 cores)" />
<Picker.Item label="Intel Pentium P6200 2.1 GHz (2 cores)" value="Intel Pentium P6200 2.1 GHz (2 cores)" />
<Picker.Item label="Intel Pentium SU4100 1.3 GHz (2 cores)" value="Intel Pentium SU4100 1.3 GHz (2 cores)" />
<Picker.Item label="Intel Pentium Silver J5005 1.5 GHz (4 cores)" value="Intel Pentium Silver J5005 1.5 GHz (4 cores)" />
<Picker.Item label="Intel Pentium Silver N5000 1.1 GHz (4 cores)" value="Intel Pentium Silver N5000 1.1 GHz (4 cores)" />
<Picker.Item label="Intel Pentium T2390 1.9 GHz (2 cores)" value="Intel Pentium T2390 1.9 GHz (2 cores)" />
<Picker.Item label="Intel Pentium T3200 2.0 GHz (2 cores)" value="Intel Pentium T3200 2.0 GHz (2 cores)" />
<Picker.Item label="Intel Pentium T3400 2.2 GHz (2 cores)" value="Intel Pentium T3400 2.2 GHz (2 cores)" />
<Picker.Item label="Intel Pentium T4200 2.0 GHz (2 cores)" value="Intel Pentium T4200 2.0 GHz (2 cores)" />
<Picker.Item label="Intel Pentium T4300 2.1 GHz (2 cores)" value="Intel Pentium T4300 2.1 GHz (2 cores)" />
<Picker.Item label="Intel Pentium T4400 2.2 GHz (2 cores)" value="Intel Pentium T4400 2.2 GHz (2 cores)" />
<Picker.Item label="Intel Pentium T4500 2.3 GHz (2 cores)" value="Intel Pentium T4500 2.3 GHz (2 cores)" />
<Picker.Item label="Intel Xeon 2.2 GHz (4 cores)" value="Intel Xeon 2.2 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E-2176M 2.7 GHz (6 cores)" value="Intel Xeon E-2176M 2.7 GHz (6 cores)" />
<Picker.Item label="Intel Xeon E3-1220 3.1 GHz (4 cores)" value="Intel Xeon E3-1220 3.1 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E3-1220 v2 3.1 GHz (4 cores)" value="Intel Xeon E3-1220 v2 3.1 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E3-1220 v3 3.1 GHz (4 cores)" value="Intel Xeon E3-1220 v3 3.1 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E3-1220 v5 3.0 GHz (4 cores)" value="Intel Xeon E3-1220 v5 3.0 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E3-1220 v6 3.0 GHz (4 cores)" value="Intel Xeon E3-1220 v6 3.0 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E3-1225 3.1 GHz (4 cores)" value="Intel Xeon E3-1225 3.1 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E3-1225 V2 3.2 GHz (4 cores)" value="Intel Xeon E3-1225 V2 3.2 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E3-1225 v3 3.2 GHz (4 cores)" value="Intel Xeon E3-1225 v3 3.2 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E3-1225 v5 3.3 GHz (4 cores)" value="Intel Xeon E3-1225 v5 3.3 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E3-1226 v3 3.3 GHz (4 cores)" value="Intel Xeon E3-1226 v3 3.3 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E3-1230 3.2 GHz (4 cores)" value="Intel Xeon E3-1230 3.2 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E3-1230 v3 3.3 GHz (4 cores)" value="Intel Xeon E3-1230 v3 3.3 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E3-1230 v5 3.4 GHz (4 cores)" value="Intel Xeon E3-1230 v5 3.4 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E3-1230 v6 3.5 GHz (4 cores)" value="Intel Xeon E3-1230 v6 3.5 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E3-1230V2 3.3 GHz (4 cores)" value="Intel Xeon E3-1230V2 3.3 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E3-1231 v3 3.4 GHz (4 cores)" value="Intel Xeon E3-1231 v3 3.4 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E3-1240 3.3 GHz (4 cores)" value="Intel Xeon E3-1240 3.3 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E3-1240 v2 3.4 GHz (4 cores)" value="Intel Xeon E3-1240 v2 3.4 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E3-1240 v3 3.4 GHz (4 cores)" value="Intel Xeon E3-1240 v3 3.4 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E3-1240 v5 3.5 GHz (4 cores)" value="Intel Xeon E3-1240 v5 3.5 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E3-1240 v6 3.7 GHz (4 cores)" value="Intel Xeon E3-1240 v6 3.7 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E3-1241 v3 3.5 GHz (4 cores)" value="Intel Xeon E3-1241 v3 3.5 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E3-1245 3.3 GHz (4 cores)" value="Intel Xeon E3-1245 3.3 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E3-1245 V2 3.4 GHz (4 cores)" value="Intel Xeon E3-1245 V2 3.4 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E3-1245 v3 3.4 GHz (4 cores)" value="Intel Xeon E3-1245 v3 3.4 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E3-1245 v5 3.5 GHz (4 cores)" value="Intel Xeon E3-1245 v5 3.5 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E3-1245 v6 3.7 GHz (4 cores)" value="Intel Xeon E3-1245 v6 3.7 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E3-1246 v3 3.5 GHz (4 cores)" value="Intel Xeon E3-1246 v3 3.5 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E3-1265L v2 2.5 GHz (4 cores)" value="Intel Xeon E3-1265L v2 2.5 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E3-1270 3.4 GHz (4 cores)" value="Intel Xeon E3-1270 3.4 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E3-1270 V2 3.5 GHz (4 cores)" value="Intel Xeon E3-1270 V2 3.5 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E3-1270 v3 3.5 GHz (4 cores)" value="Intel Xeon E3-1270 v3 3.5 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E3-1270 v5 3.6 GHz (4 cores)" value="Intel Xeon E3-1270 v5 3.6 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E3-1270 v6 3.8 GHz (4 cores)" value="Intel Xeon E3-1270 v6 3.8 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E3-1271 v3 3.6 GHz (4 cores)" value="Intel Xeon E3-1271 v3 3.6 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E3-1275 v2 3.5 GHz (4 cores)" value="Intel Xeon E3-1275 v2 3.5 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E3-1275 v3 3.5 GHz (4 cores)" value="Intel Xeon E3-1275 v3 3.5 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E3-1275 v5 3.6 GHz (4 cores)" value="Intel Xeon E3-1275 v5 3.6 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E3-1275 v6 3.8 GHz (4 cores)" value="Intel Xeon E3-1275 v6 3.8 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E3-1275L v3 2.7 GHz (4 cores)" value="Intel Xeon E3-1275L v3 2.7 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E3-1280 3.5 GHz (4 cores)" value="Intel Xeon E3-1280 3.5 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E3-1280 V2 3.6 GHz (4 cores)" value="Intel Xeon E3-1280 V2 3.6 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E3-1281 v3 3.7 GHz (4 cores)" value="Intel Xeon E3-1281 v3 3.7 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E3-1290 v2 3.7 GHz (4 cores)" value="Intel Xeon E3-1290 v2 3.7 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E3-1505M v5 2.8 GHz (4 cores)" value="Intel Xeon E3-1505M v5 2.8 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E3-1505M v6 3.0 GHz (4 cores)" value="Intel Xeon E3-1505M v6 3.0 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E3-1535M v5 2.9 GHz (4 cores)" value="Intel Xeon E3-1535M v5 2.9 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E3-1535M v6 3.1 GHz (4 cores)" value="Intel Xeon E3-1535M v6 3.1 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E3-1545M v5 2.9 GHz (4 cores)" value="Intel Xeon E3-1545M v5 2.9 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E3110 3.0 GHz (2 cores)" value="Intel Xeon E3110 3.0 GHz (2 cores)" />
<Picker.Item label="Intel Xeon E5-1603 2.8 GHz (4 cores)" value="Intel Xeon E5-1603 2.8 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E5-1607 3.0 GHz (4 cores)" value="Intel Xeon E5-1607 3.0 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E5-1607 v2 3.0 GHz (4 cores)" value="Intel Xeon E5-1607 v2 3.0 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E5-1607 v3 3.1 GHz (4 cores)" value="Intel Xeon E5-1607 v3 3.1 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E5-1620 3.6 GHz (4 cores)" value="Intel Xeon E5-1620 3.6 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E5-1620 v2 3.7 GHz (4 cores)" value="Intel Xeon E5-1620 v2 3.7 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E5-1620 v3 3.5 GHz (4 cores)" value="Intel Xeon E5-1620 v3 3.5 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E5-1620 v4 3.5 GHz (4 cores)" value="Intel Xeon E5-1620 v4 3.5 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E5-1630 v3 3.7 GHz (4 cores)" value="Intel Xeon E5-1630 v3 3.7 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E5-1630 v4 3.7 GHz (4 cores)" value="Intel Xeon E5-1630 v4 3.7 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E5-1650 3.2 GHz (6 cores)" value="Intel Xeon E5-1650 3.2 GHz (6 cores)" />
<Picker.Item label="Intel Xeon E5-1650 v2 3.5 GHz (6 cores)" value="Intel Xeon E5-1650 v2 3.5 GHz (6 cores)" />
<Picker.Item label="Intel Xeon E5-1650 v3 3.5 GHz (6 cores)" value="Intel Xeon E5-1650 v3 3.5 GHz (6 cores)" />
<Picker.Item label="Intel Xeon E5-1650 v4 3.6 GHz (6 cores)" value="Intel Xeon E5-1650 v4 3.6 GHz (6 cores)" />
<Picker.Item label="Intel Xeon E5-1660 3.3 GHz (6 cores)" value="Intel Xeon E5-1660 3.3 GHz (6 cores)" />
<Picker.Item label="Intel Xeon E5-1660 v2 3.7 GHz (6 cores)" value="Intel Xeon E5-1660 v2 3.7 GHz (6 cores)" />
<Picker.Item label="Intel Xeon E5-1660 v3 3.0 GHz (8 cores)" value="Intel Xeon E5-1660 v3 3.0 GHz (8 cores)" />
<Picker.Item label="Intel Xeon E5-1660 v4 3.2 GHz (8 cores)" value="Intel Xeon E5-1660 v4 3.2 GHz (8 cores)" />
<Picker.Item label="Intel Xeon E5-1680 v2 3.0 GHz (8 cores)" value="Intel Xeon E5-1680 v2 3.0 GHz (8 cores)" />
<Picker.Item label="Intel Xeon E5-2420 1.9 GHz (6 cores)" value="Intel Xeon E5-2420 1.9 GHz (6 cores)" />
<Picker.Item label="Intel Xeon E5-2420 v2 2.2 GHz (6 cores)" value="Intel Xeon E5-2420 v2 2.2 GHz (6 cores)" />
<Picker.Item label="Intel Xeon E5-2430 2.2 GHz (6 cores)" value="Intel Xeon E5-2430 2.2 GHz (6 cores)" />
<Picker.Item label="Intel Xeon E5-2603 v3 1.6 GHz (6 cores)" value="Intel Xeon E5-2603 v3 1.6 GHz (6 cores)" />
<Picker.Item label="Intel Xeon E5-2603 v4 1.7 GHz (6 cores)" value="Intel Xeon E5-2603 v4 1.7 GHz (6 cores)" />
<Picker.Item label="Intel Xeon E5-2609 2.4 GHz (4 cores)" value="Intel Xeon E5-2609 2.4 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E5-2620 2.0 GHz (6 cores)" value="Intel Xeon E5-2620 2.0 GHz (6 cores)" />
<Picker.Item label="Intel Xeon E5-2620 v2 2.1 GHz (6 cores)" value="Intel Xeon E5-2620 v2 2.1 GHz (6 cores)" />
<Picker.Item label="Intel Xeon E5-2620 v3 2.4 GHz (6 cores)" value="Intel Xeon E5-2620 v3 2.4 GHz (6 cores)" />
<Picker.Item label="Intel Xeon E5-2620 v4 2.1 GHz (8 cores)" value="Intel Xeon E5-2620 v4 2.1 GHz (8 cores)" />
<Picker.Item label="Intel Xeon E5-2623 v4 2.6 GHz (4 cores)" value="Intel Xeon E5-2623 v4 2.6 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E5-2630 2.3 GHz (6 cores)" value="Intel Xeon E5-2630 2.3 GHz (6 cores)" />
<Picker.Item label="Intel Xeon E5-2630 v2 2.6 GHz (6 cores)" value="Intel Xeon E5-2630 v2 2.6 GHz (6 cores)" />
<Picker.Item label="Intel Xeon E5-2630 v3 2.4 GHz (8 cores)" value="Intel Xeon E5-2630 v3 2.4 GHz (8 cores)" />
<Picker.Item label="Intel Xeon E5-2630 v4 2.2 GHz (10 cores)" value="Intel Xeon E5-2630 v4 2.2 GHz (10 cores)" />
<Picker.Item label="Intel Xeon E5-2630L v2 2.4 GHz (6 cores)" value="Intel Xeon E5-2630L v2 2.4 GHz (6 cores)" />
<Picker.Item label="Intel Xeon E5-2637 v2 3.5 GHz (4 cores)" value="Intel Xeon E5-2637 v2 3.5 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E5-2637 v3 3.5 GHz (4 cores)" value="Intel Xeon E5-2637 v3 3.5 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E5-2640 2.5 GHz (6 cores)" value="Intel Xeon E5-2640 2.5 GHz (6 cores)" />
<Picker.Item label="Intel Xeon E5-2640 v3 2.6 GHz (8 cores)" value="Intel Xeon E5-2640 v3 2.6 GHz (8 cores)" />
<Picker.Item label="Intel Xeon E5-2640 v4 2.4 GHz (10 cores)" value="Intel Xeon E5-2640 v4 2.4 GHz (10 cores)" />
<Picker.Item label="Intel Xeon E5-2643 3.3 GHz (4 cores)" value="Intel Xeon E5-2643 3.3 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E5-2650 2.0 GHz (8 cores)" value="Intel Xeon E5-2650 2.0 GHz (8 cores)" />
<Picker.Item label="Intel Xeon E5-2650 v2 2.6 GHz (8 cores)" value="Intel Xeon E5-2650 v2 2.6 GHz (8 cores)" />
<Picker.Item label="Intel Xeon E5-2650 v3 2.3 GHz (10 cores)" value="Intel Xeon E5-2650 v3 2.3 GHz (10 cores)" />
<Picker.Item label="Intel Xeon E5-2660 2.2 GHz (8 cores)" value="Intel Xeon E5-2660 2.2 GHz (8 cores)" />
<Picker.Item label="Intel Xeon E5-2660 v2 2.2 GHz (10 cores)" value="Intel Xeon E5-2660 v2 2.2 GHz (10 cores)" />
<Picker.Item label="Intel Xeon E5-2665 2.4 GHz (8 cores)" value="Intel Xeon E5-2665 2.4 GHz (8 cores)" />
<Picker.Item label="Intel Xeon E5-2667 2.9 GHz (6 cores)" value="Intel Xeon E5-2667 2.9 GHz (6 cores)" />
<Picker.Item label="Intel Xeon E5-2667 v2 3.3 GHz (8 cores)" value="Intel Xeon E5-2667 v2 3.3 GHz (8 cores)" />
<Picker.Item label="Intel Xeon E5-2667 v3 3.2 GHz (8 cores)" value="Intel Xeon E5-2667 v3 3.2 GHz (8 cores)" />
<Picker.Item label="Intel Xeon E5-2670 2.6 GHz (8 cores)" value="Intel Xeon E5-2670 2.6 GHz (8 cores)" />
<Picker.Item label="Intel Xeon E5-2670 v3 2.3 GHz (12 cores)" value="Intel Xeon E5-2670 v3 2.3 GHz (12 cores)" />
<Picker.Item label="Intel Xeon E5-2678 v3 2.5 GHz (12 cores)" value="Intel Xeon E5-2678 v3 2.5 GHz (12 cores)" />
<Picker.Item label="Intel Xeon E5-2680 2.7 GHz (8 cores)" value="Intel Xeon E5-2680 2.7 GHz (8 cores)" />
<Picker.Item label="Intel Xeon E5-2680 v2 2.8 GHz (10 cores)" value="Intel Xeon E5-2680 v2 2.8 GHz (10 cores)" />
<Picker.Item label="Intel Xeon E5-2680 v3 2.5 GHz (12 cores)" value="Intel Xeon E5-2680 v3 2.5 GHz (12 cores)" />
<Picker.Item label="Intel Xeon E5-2683 v3 2.0 GHz (14 cores)" value="Intel Xeon E5-2683 v3 2.0 GHz (14 cores)" />
<Picker.Item label="Intel Xeon E5-2686 v4 2.3 GHz (8 cores)" value="Intel Xeon E5-2686 v4 2.3 GHz (8 cores)" />
<Picker.Item label="Intel Xeon E5-2687W 3.1 GHz (8 cores)" value="Intel Xeon E5-2687W 3.1 GHz (8 cores)" />
<Picker.Item label="Intel Xeon E5-2687W v2 3.4 GHz (8 cores)" value="Intel Xeon E5-2687W v2 3.4 GHz (8 cores)" />
<Picker.Item label="Intel Xeon E5-2690 2.9 GHz (8 cores)" value="Intel Xeon E5-2690 2.9 GHz (8 cores)" />
<Picker.Item label="Intel Xeon E5-2690 v2 3.0 GHz (10 cores)" value="Intel Xeon E5-2690 v2 3.0 GHz (10 cores)" />
<Picker.Item label="Intel Xeon E5-2690 v3 2.6 GHz (12 cores)" value="Intel Xeon E5-2690 v3 2.6 GHz (12 cores)" />
<Picker.Item label="Intel Xeon E5-2690 v4 2.6 GHz (14 cores)" value="Intel Xeon E5-2690 v4 2.6 GHz (14 cores)" />
<Picker.Item label="Intel Xeon E5-2695 v2 2.4 GHz (12 cores)" value="Intel Xeon E5-2695 v2 2.4 GHz (12 cores)" />
<Picker.Item label="Intel Xeon E5-2696 v3 2.3 GHz (18 cores)" value="Intel Xeon E5-2696 v3 2.3 GHz (18 cores)" />
<Picker.Item label="Intel Xeon E5-2696 v4 2.2 GHz (22 cores)" value="Intel Xeon E5-2696 v4 2.2 GHz (22 cores)" />
<Picker.Item label="Intel Xeon E5-2697 v2 2.7 GHz (12 cores)" value="Intel Xeon E5-2697 v2 2.7 GHz (12 cores)" />
<Picker.Item label="Intel Xeon E5-2697 v3 2.6 GHz (14 cores)" value="Intel Xeon E5-2697 v3 2.6 GHz (14 cores)" />
<Picker.Item label="Intel Xeon E5405 2.0 GHz (4 cores)" value="Intel Xeon E5405 2.0 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E5430 2.7 GHz (4 cores)" value="Intel Xeon E5430 2.7 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E5440 2.8 GHz (4 cores)" value="Intel Xeon E5440 2.8 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E5450 3.0 GHz (4 cores)" value="Intel Xeon E5450 3.0 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E5462 2.8 GHz (4 cores)" value="Intel Xeon E5462 2.8 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E5472 3.0 GHz (4 cores)" value="Intel Xeon E5472 3.0 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E5520 2.3 GHz (4 cores)" value="Intel Xeon E5520 2.3 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E5540 2.5 GHz (4 cores)" value="Intel Xeon E5540 2.5 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E5620 2.4 GHz (4 cores)" value="Intel Xeon E5620 2.4 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E5640 2.7 GHz (4 cores)" value="Intel Xeon E5640 2.7 GHz (4 cores)" />
<Picker.Item label="Intel Xeon E5645 2.4 GHz (6 cores)" value="Intel Xeon E5645 2.4 GHz (6 cores)" />
<Picker.Item label="Intel Xeon E5649 2.5 GHz (6 cores)" value="Intel Xeon E5649 2.5 GHz (6 cores)" />
<Picker.Item label="Intel Xeon Gold 5122 3.6 GHz (4 cores)" value="Intel Xeon Gold 5122 3.6 GHz (4 cores)" />
<Picker.Item label="Intel Xeon Gold 6134 3.2 GHz (8 cores)" value="Intel Xeon Gold 6134 3.2 GHz (8 cores)" />
<Picker.Item label="Intel Xeon L5420 2.5 GHz (4 cores)" value="Intel Xeon L5420 2.5 GHz (4 cores)" />
<Picker.Item label="Intel Xeon L5640 2.3 GHz (6 cores)" value="Intel Xeon L5640 2.3 GHz (6 cores)" />
<Picker.Item label="Intel Xeon Processor E5-1680 v3 3.2 GHz (8 cores)" value="Intel Xeon Processor E5-1680 v3 3.2 GHz (8 cores)" />
<Picker.Item label="Intel Xeon Silver 4108 1.8 GHz (8 cores)" value="Intel Xeon Silver 4108 1.8 GHz (8 cores)" />
<Picker.Item label="Intel Xeon Silver 4110 2.1 GHz (8 cores)" value="Intel Xeon Silver 4110 2.1 GHz (8 cores)" />
<Picker.Item label="Intel Xeon Silver 4112 2.6 GHz (4 cores)" value="Intel Xeon Silver 4112 2.6 GHz (4 cores)" />
<Picker.Item label="Intel Xeon Silver 4114 2.2 GHz (10 cores)" value="Intel Xeon Silver 4114 2.2 GHz (10 cores)" />
<Picker.Item label="Intel Xeon Silver 4116 2.1 GHz (12 cores)" value="Intel Xeon Silver 4116 2.1 GHz (12 cores)" />
<Picker.Item label="Intel Xeon W-2123 3.6 GHz (4 cores)" value="Intel Xeon W-2123 3.6 GHz (4 cores)" />
<Picker.Item label="Intel Xeon W-2125 4.0 GHz (4 cores)" value="Intel Xeon W-2125 4.0 GHz (4 cores)" />
<Picker.Item label="Intel Xeon W-2133 3.6 GHz (6 cores)" value="Intel Xeon W-2133 3.6 GHz (6 cores)" />
<Picker.Item label="Intel Xeon W-2135 3.7 GHz (6 cores)" value="Intel Xeon W-2135 3.7 GHz (6 cores)" />
<Picker.Item label="Intel Xeon W-2140B 3.2 GHz (8 cores)" value="Intel Xeon W-2140B 3.2 GHz (8 cores)" />
<Picker.Item label="Intel Xeon W-2145 3.7 GHz (8 cores)" value="Intel Xeon W-2145 3.7 GHz (8 cores)" />
<Picker.Item label="Intel Xeon W-2150B 3.0 GHz (10 cores)" value="Intel Xeon W-2150B 3.0 GHz (10 cores)" />
<Picker.Item label="Intel Xeon W-2155 3.3 GHz (10 cores)" value="Intel Xeon W-2155 3.3 GHz (10 cores)" />
<Picker.Item label="Intel Xeon W-2191B 2.3 GHz (18 cores)" value="Intel Xeon W-2191B 2.3 GHz (18 cores)" />
<Picker.Item label="Intel Xeon W-3175X 3.1 GHz (28 cores)" value="Intel Xeon W-3175X 3.1 GHz (28 cores)" />
<Picker.Item label="Intel Xeon W-3223 3.5 GHz (8 cores)" value="Intel Xeon W-3223 3.5 GHz (8 cores)" />
<Picker.Item label="Intel Xeon W-3235 3.3 GHz (12 cores)" value="Intel Xeon W-3235 3.3 GHz (12 cores)" />
<Picker.Item label="Intel Xeon W-3245 3.2 GHz (16 cores)" value="Intel Xeon W-3245 3.2 GHz (16 cores)" />
<Picker.Item label="Intel Xeon W-3275M 2.5 GHz (28 cores)" value="Intel Xeon W-3275M 2.5 GHz (28 cores)" />
<Picker.Item label="Intel Xeon W3520 2.7 GHz (4 cores)" value="Intel Xeon W3520 2.7 GHz (4 cores)" />
<Picker.Item label="Intel Xeon W3530 2.8 GHz (4 cores)" value="Intel Xeon W3530 2.8 GHz (4 cores)" />
<Picker.Item label="Intel Xeon W3540 2.9 GHz (4 cores)" value="Intel Xeon W3540 2.9 GHz (4 cores)" />
<Picker.Item label="Intel Xeon W3550 3.1 GHz (4 cores)" value="Intel Xeon W3550 3.1 GHz (4 cores)" />

       
      </Picker>

      <Text>Chosse your gpu</Text>
      <Picker
        selectedValue={gpu}
        style={{ height: 50, width: 238 }}
        onValueChange={(itemValue, itemIndex) => setgpu(itemValue)}
      >
     
     <Picker.Item label="7900 MOD - Radeon HD 6520G" value="7900 MOD - Radeon HD 6520G" />
<Picker.Item label="7900 MOD - Radeon HD 6550D" value="7900 MOD - Radeon HD 6550D" />
<Picker.Item label="A10-8700P" value="A10-8700P" />
<Picker.Item label="A6 Micro-6500T Quad-Core APU with RadeonR4" value="A6 Micro-6500T Quad-Core APU with RadeonR4" />
<Picker.Item label="B8DKMDAP" value="B8DKMDAP" />
<Picker.Item label="Barco MXRT 2600" value="Barco MXRT 2600" />
<Picker.Item label="Barco MXRT 5400" value="Barco MXRT 5400" />
<Picker.Item label="Barco MXRT 5450" value="Barco MXRT 5450" />
<Picker.Item label="Barco MXRT 5500" value="Barco MXRT 5500" />
<Picker.Item label="Barco MXRT 7400" value="Barco MXRT 7400" />
<Picker.Item label="Barco MXRT 7500" value="Barco MXRT 7500" />
<Picker.Item label="Barco MXRT 7600" value="Barco MXRT 7600" />
<Picker.Item label="EIZO Quadro MED-XN51LP" value="EIZO Quadro MED-XN51LP" />
<Picker.Item label="Embedded Radeon E9173" value="Embedded Radeon E9173" />
<Picker.Item label="FirePro 2270" value="FirePro 2270" />
<Picker.Item label="FirePro 3D V3800" value="FirePro 3D V3800" />
<Picker.Item label="FirePro 3D V4800" value="FirePro 3D V4800" />
<Picker.Item label="FirePro 3D V5800" value="FirePro 3D V5800" />
<Picker.Item label="FirePro 3D V7800" value="FirePro 3D V7800" />
<Picker.Item label="FirePro 3D V8800" value="FirePro 3D V8800" />
<Picker.Item label="FirePro 3D V9800" value="FirePro 3D V9800" />
<Picker.Item label="FirePro M2000" value="FirePro M2000" />
<Picker.Item label="FirePro M4000" value="FirePro M4000" />
<Picker.Item label="FirePro M4000 Mobility Pro" value="FirePro M4000 Mobility Pro" />
<Picker.Item label="FirePro M40003" value="FirePro M40003" />
<Picker.Item label="FirePro M4150" value="FirePro M4150" />
<Picker.Item label="FirePro M5100" value="FirePro M5100" />
<Picker.Item label="FirePro M5100 FireGL V" value="FirePro M5100 FireGL V" />
<Picker.Item label="FirePro M6000" value="FirePro M6000" />
<Picker.Item label="FirePro M6000 Mobility Pro" value="FirePro M6000 Mobility Pro" />
<Picker.Item label="FirePro M6100" value="FirePro M6100" />
<Picker.Item label="FirePro M6100 FireGL V" value="FirePro M6100 FireGL V" />
<Picker.Item label="FirePro S7000" value="FirePro S7000" />
<Picker.Item label="FirePro S9000" value="FirePro S9000" />
<Picker.Item label="FirePro V3800" value="FirePro V3800" />
<Picker.Item label="FirePro V3900" value="FirePro V3900" />
<Picker.Item label="FirePro V4900" value="FirePro V4900" />
<Picker.Item label="FirePro V5800" value="FirePro V5800" />
<Picker.Item label="FirePro V5900" value="FirePro V5900" />
<Picker.Item label="FirePro V7000 Adapter" value="FirePro V7000 Adapter" />
<Picker.Item label="FirePro V7900" value="FirePro V7900" />
<Picker.Item label="FirePro V9800 Adapter" value="FirePro V9800 Adapter" />
<Picker.Item label="FirePro W2100" value="FirePro W2100" />
<Picker.Item label="FirePro W4100" value="FirePro W4100" />
<Picker.Item label="FirePro W4100 Adapter" value="FirePro W4100 Adapter" />
<Picker.Item label="FirePro W4170M" value="FirePro W4170M" />
<Picker.Item label="FirePro W4300" value="FirePro W4300" />
<Picker.Item label="FirePro W5000" value="FirePro W5000" />
<Picker.Item label="FirePro W5100" value="FirePro W5100" />
<Picker.Item label="FirePro W5130M" value="FirePro W5130M" />
<Picker.Item label="FirePro W600" value="FirePro W600" />
<Picker.Item label="FirePro W7000" value="FirePro W7000" />
<Picker.Item label="FirePro W7000 Adapter" value="FirePro W7000 Adapter" />
<Picker.Item label="FirePro W7100" value="FirePro W7100" />
<Picker.Item label="FirePro W7100 Adapter" value="FirePro W7100 Adapter" />
<Picker.Item label="FirePro W7170M" value="FirePro W7170M" />
<Picker.Item label="FirePro W8000" value="FirePro W8000" />
<Picker.Item label="FirePro W8000 Adapter" value="FirePro W8000 Adapter" />
<Picker.Item label="FirePro W8100" value="FirePro W8100" />
<Picker.Item label="FirePro W8100 Graphic Adapter" value="FirePro W8100 Graphic Adapter" />
<Picker.Item label="FirePro W9000" value="FirePro W9000" />
<Picker.Item label="FirePro W9100" value="FirePro W9100" />
<Picker.Item label="Firepro W5170M" value="Firepro W5170M" />
<Picker.Item label="GRID K1" value="GRID K1" />
<Picker.Item label="GRID K120Q" value="GRID K120Q" />
<Picker.Item label="GRID K140Q" value="GRID K140Q" />
<Picker.Item label="GRID K160Q" value="GRID K160Q" />
<Picker.Item label="GRID K180Q" value="GRID K180Q" />
<Picker.Item label="GRID K2" value="GRID K2" />
<Picker.Item label="GRID K220Q" value="GRID K220Q" />
<Picker.Item label="GRID K240Q" value="GRID K240Q" />
<Picker.Item label="GRID K280Q" value="GRID K280Q" />
<Picker.Item label="GRID K520" value="GRID K520" />
<Picker.Item label="GRID M10-0Q" value="GRID M10-0Q" />
<Picker.Item label="GRID M10-1B" value="GRID M10-1B" />
<Picker.Item label="GRID M10-1Q" value="GRID M10-1Q" />
<Picker.Item label="GRID M10-2B" value="GRID M10-2B" />
<Picker.Item label="GRID M10-4Q" value="GRID M10-4Q" />
<Picker.Item label="GRID M10-8Q" value="GRID M10-8Q" />
<Picker.Item label="GRID M6-8Q" value="GRID M6-8Q" />
<Picker.Item label="GRID M60-0B" value="GRID M60-0B" />
<Picker.Item label="GRID M60-1Q" value="GRID M60-1Q" />
<Picker.Item label="GRID M60-2B" value="GRID M60-2B" />
<Picker.Item label="GRID M60-2Q" value="GRID M60-2Q" />
<Picker.Item label="GRID M60-4Q" value="GRID M60-4Q" />
<Picker.Item label="GRID M60-8A" value="GRID M60-8A" />
<Picker.Item label="GRID M60-8Q" value="GRID M60-8Q" />
<Picker.Item label="GRID P100-16Q" value="GRID P100-16Q" />
<Picker.Item label="GRID P100-1B" value="GRID P100-1B" />
<Picker.Item label="GRID P100-8Q" value="GRID P100-8Q" />
<Picker.Item label="GRID P4-2Q" value="GRID P4-2Q" />
<Picker.Item label="GRID P40-24Q" value="GRID P40-24Q" />
<Picker.Item label="GRID P40-2B" value="GRID P40-2B" />
<Picker.Item label="GRID P40-2Q" value="GRID P40-2Q" />
<Picker.Item label="GRID P40-3Q" value="GRID P40-3Q" />
<Picker.Item label="GRID P40-4Q" value="GRID P40-4Q" />
<Picker.Item label="GRID P6-2Q" value="GRID P6-2Q" />
<Picker.Item label="GRID P6-4Q" value="GRID P6-4Q" />
<Picker.Item label="GRID V100-8Q" value="GRID V100-8Q" />
<Picker.Item label="GRID V100D-8Q" value="GRID V100D-8Q" />
<Picker.Item label="GeForce 210" value="GeForce 210" />
<Picker.Item label="GeForce 410M" value="GeForce 410M" />
<Picker.Item label="GeForce 510" value="GeForce 510" />
<Picker.Item label="GeForce 605" value="GeForce 605" />
<Picker.Item label="GeForce 610M" value="GeForce 610M" />
<Picker.Item label="GeForce 615" value="GeForce 615" />
<Picker.Item label="GeForce 710A" value="GeForce 710A" />
<Picker.Item label="GeForce 710M" value="GeForce 710M" />
<Picker.Item label="GeForce 800A" value="GeForce 800A" />
<Picker.Item label="GeForce 800M" value="GeForce 800M" />
<Picker.Item label="GeForce 810M" value="GeForce 810M" />
<Picker.Item label="GeForce 820M" value="GeForce 820M" />
<Picker.Item label="GeForce 825M" value="GeForce 825M" />
<Picker.Item label="GeForce 830M" value="GeForce 830M" />
<Picker.Item label="GeForce 840M" value="GeForce 840M" />
<Picker.Item label="GeForce 8800 GTS 512" value="GeForce 8800 GTS 512" />
<Picker.Item label="GeForce 8800 GTX" value="GeForce 8800 GTX" />
<Picker.Item label="GeForce 920M" value="GeForce 920M" />
<Picker.Item label="GeForce 920MX" value="GeForce 920MX" />
<Picker.Item label="GeForce 930A" value="GeForce 930A" />
<Picker.Item label="GeForce 930M" value="GeForce 930M" />
<Picker.Item label="GeForce 930MX" value="GeForce 930MX" />
<Picker.Item label="GeForce 940M" value="GeForce 940M" />
<Picker.Item label="GeForce 940MX" value="GeForce 940MX" />
<Picker.Item label="GeForce 945M" value="GeForce 945M" />
<Picker.Item label="GeForce GT 1030" value="GeForce GT 1030" />
<Picker.Item label="GeForce GT 240" value="GeForce GT 240" />
<Picker.Item label="GeForce GT 420" value="GeForce GT 420" />
<Picker.Item label="GeForce GT 420M" value="GeForce GT 420M" />
<Picker.Item label="GeForce GT 425M" value="GeForce GT 425M" />
<Picker.Item label="GeForce GT 430" value="GeForce GT 430" />
<Picker.Item label="GeForce GT 435M" value="GeForce GT 435M" />
<Picker.Item label="GeForce GT 440" value="GeForce GT 440" />
<Picker.Item label="GeForce GT 445M" value="GeForce GT 445M" />
<Picker.Item label="GeForce GT 520" value="GeForce GT 520" />
<Picker.Item label="GeForce GT 520M" value="GeForce GT 520M" />
<Picker.Item label="GeForce GT 520MX" value="GeForce GT 520MX" />
<Picker.Item label="GeForce GT 525M" value="GeForce GT 525M" />
<Picker.Item label="GeForce GT 530" value="GeForce GT 530" />
<Picker.Item label="GeForce GT 540M" value="GeForce GT 540M" />
<Picker.Item label="GeForce GT 545" value="GeForce GT 545" />
<Picker.Item label="GeForce GT 550M" value="GeForce GT 550M" />
<Picker.Item label="GeForce GT 555M" value="GeForce GT 555M" />
<Picker.Item label="GeForce GT 610" value="GeForce GT 610" />
<Picker.Item label="GeForce GT 620" value="GeForce GT 620" />
<Picker.Item label="GeForce GT 620M" value="GeForce GT 620M" />
<Picker.Item label="GeForce GT 625" value="GeForce GT 625" />
<Picker.Item label="GeForce GT 630" value="GeForce GT 630" />
<Picker.Item label="GeForce GT 630M" value="GeForce GT 630M" />
<Picker.Item label="GeForce GT 635" value="GeForce GT 635" />
<Picker.Item label="GeForce GT 635M" value="GeForce GT 635M" />
<Picker.Item label="GeForce GT 640" value="GeForce GT 640" />
<Picker.Item label="GeForce GT 640M" value="GeForce GT 640M" />
<Picker.Item label="GeForce GT 640M LE" value="GeForce GT 640M LE" />
<Picker.Item label="GeForce GT 645" value="GeForce GT 645" />
<Picker.Item label="GeForce GT 645M" value="GeForce GT 645M" />
<Picker.Item label="GeForce GT 650M" value="GeForce GT 650M" />
<Picker.Item label="GeForce GT 705" value="GeForce GT 705" />
<Picker.Item label="GeForce GT 710" value="GeForce GT 710" />
<Picker.Item label="GeForce GT 710B" value="GeForce GT 710B" />
<Picker.Item label="GeForce GT 710M" value="GeForce GT 710M" />
<Picker.Item label="GeForce GT 720" value="GeForce GT 720" />
<Picker.Item label="GeForce GT 720M" value="GeForce GT 720M" />
<Picker.Item label="GeForce GT 730" value="GeForce GT 730" />
<Picker.Item label="GeForce GT 730M" value="GeForce GT 730M" />
<Picker.Item label="GeForce GT 735M" value="GeForce GT 735M" />
<Picker.Item label="GeForce GT 740" value="GeForce GT 740" />
<Picker.Item label="GeForce GT 740M" value="GeForce GT 740M" />
<Picker.Item label="GeForce GT 745M" value="GeForce GT 745M" />
<Picker.Item label="GeForce GT 750M" value="GeForce GT 750M" />
<Picker.Item label="GeForce GT 755M" value="GeForce GT 755M" />
<Picker.Item label="GeForce GT 820M" value="GeForce GT 820M" />
<Picker.Item label="GeForce GTS 250" value="GeForce GTS 250" />
<Picker.Item label="GeForce GTS 450" value="GeForce GTS 450" />
<Picker.Item label="GeForce GTX 1050" value="GeForce GTX 1050" />
<Picker.Item label="GeForce GTX 1050 (Mobile)" value="GeForce GTX 1050 (Mobile)" />
<Picker.Item label="GeForce GTX 1050 Ti" value="GeForce GTX 1050 Ti" />
<Picker.Item label="GeForce GTX 1050 Ti (Mobile)" value="GeForce GTX 1050 Ti (Mobile)" />
<Picker.Item label="GeForce GTX 1050 Ti with Max-Q Design" value="GeForce GTX 1050 Ti with Max-Q Design" />
<Picker.Item label="GeForce GTX 1050 with Max-Q Design" value="GeForce GTX 1050 with Max-Q Design" />
<Picker.Item label="GeForce GTX 1060" value="GeForce GTX 1060" />
<Picker.Item label="GeForce GTX 1060 (Mobile)" value="GeForce GTX 1060 (Mobile)" />
<Picker.Item label="GeForce GTX 1060 3GB" value="GeForce GTX 1060 3GB" />
<Picker.Item label="GeForce GTX 1060 5GB" value="GeForce GTX 1060 5GB" />
<Picker.Item label="GeForce GTX 1060 with Max-Q Design" value="GeForce GTX 1060 with Max-Q Design" />
<Picker.Item label="GeForce GTX 1070" value="GeForce GTX 1070" />
<Picker.Item label="GeForce GTX 1070 (Mobile)" value="GeForce GTX 1070 (Mobile)" />
<Picker.Item label="GeForce GTX 1070 Ti" value="GeForce GTX 1070 Ti" />
<Picker.Item label="GeForce GTX 1070 with Max-Q Design" value="GeForce GTX 1070 with Max-Q Design" />
<Picker.Item label="GeForce GTX 1080" value="GeForce GTX 1080" />
<Picker.Item label="GeForce GTX 1080 Ti" value="GeForce GTX 1080 Ti" />
<Picker.Item label="GeForce GTX 1080 with Max-Q Design" value="GeForce GTX 1080 with Max-Q Design" />
<Picker.Item label="GeForce GTX 1650" value="GeForce GTX 1650" />
<Picker.Item label="GeForce GTX 1650 (Mobile)" value="GeForce GTX 1650 (Mobile)" />
<Picker.Item label="GeForce GTX 1650 SUPER" value="GeForce GTX 1650 SUPER" />
<Picker.Item label="GeForce GTX 1660" value="GeForce GTX 1660" />
<Picker.Item label="GeForce GTX 1660 SUPER" value="GeForce GTX 1660 SUPER" />
<Picker.Item label="GeForce GTX 1660 Ti" value="GeForce GTX 1660 Ti" />
<Picker.Item label="GeForce GTX 1660 Ti (Mobile)" value="GeForce GTX 1660 Ti (Mobile)" />
<Picker.Item label="GeForce GTX 460" value="GeForce GTX 460" />
<Picker.Item label="GeForce GTX 460 SE" value="GeForce GTX 460 SE" />
<Picker.Item label="GeForce GTX 460 v2" value="GeForce GTX 460 v2" />
<Picker.Item label="GeForce GTX 460M" value="GeForce GTX 460M" />
<Picker.Item label="GeForce GTX 465" value="GeForce GTX 465" />
<Picker.Item label="GeForce GTX 470" value="GeForce GTX 470" />
<Picker.Item label="GeForce GTX 470M" value="GeForce GTX 470M" />
<Picker.Item label="GeForce GTX 480" value="GeForce GTX 480" />
<Picker.Item label="GeForce GTX 480M" value="GeForce GTX 480M" />
<Picker.Item label="GeForce GTX 485M" value="GeForce GTX 485M" />
<Picker.Item label="GeForce GTX 550 Ti" value="GeForce GTX 550 Ti" />
<Picker.Item label="GeForce GTX 555" value="GeForce GTX 555" />
<Picker.Item label="GeForce GTX 560" value="GeForce GTX 560" />
<Picker.Item label="GeForce GTX 560 SE" value="GeForce GTX 560 SE" />
<Picker.Item label="GeForce GTX 560 Ti" value="GeForce GTX 560 Ti" />
<Picker.Item label="GeForce GTX 560M" value="GeForce GTX 560M" />
<Picker.Item label="GeForce GTX 570" value="GeForce GTX 570" />
<Picker.Item label="GeForce GTX 570M" value="GeForce GTX 570M" />
<Picker.Item label="GeForce GTX 580" value="GeForce GTX 580" />
<Picker.Item label="GeForce GTX 580M" value="GeForce GTX 580M" />
<Picker.Item label="GeForce GTX 590" value="GeForce GTX 590" />
<Picker.Item label="GeForce GTX 645" value="GeForce GTX 645" />
<Picker.Item label="GeForce GTX 650" value="GeForce GTX 650" />
<Picker.Item label="GeForce GTX 650 Ti" value="GeForce GTX 650 Ti" />
<Picker.Item label="GeForce GTX 650 Ti BOOST" value="GeForce GTX 650 Ti BOOST" />
<Picker.Item label="GeForce GTX 660" value="GeForce GTX 660" />
<Picker.Item label="GeForce GTX 660 Ti" value="GeForce GTX 660 Ti" />
<Picker.Item label="GeForce GTX 660M" value="GeForce GTX 660M" />
<Picker.Item label="GeForce GTX 670" value="GeForce GTX 670" />
<Picker.Item label="GeForce GTX 670M" value="GeForce GTX 670M" />
<Picker.Item label="GeForce GTX 670MX" value="GeForce GTX 670MX" />
<Picker.Item label="GeForce GTX 675M" value="GeForce GTX 675M" />
<Picker.Item label="GeForce GTX 675MX" value="GeForce GTX 675MX" />
<Picker.Item label="GeForce GTX 680" value="GeForce GTX 680" />
<Picker.Item label="GeForce GTX 680M" value="GeForce GTX 680M" />
<Picker.Item label="GeForce GTX 680M KY_Bullet Edition" value="GeForce GTX 680M KY_Bullet Edition" />
<Picker.Item label="GeForce GTX 680MX" value="GeForce GTX 680MX" />
<Picker.Item label="GeForce GTX 690" value="GeForce GTX 690" />
<Picker.Item label="GeForce GTX 745" value="GeForce GTX 745" />
<Picker.Item label="GeForce GTX 750" value="GeForce GTX 750" />
<Picker.Item label="GeForce GTX 750 Ti" value="GeForce GTX 750 Ti" />
<Picker.Item label="GeForce GTX 760" value="GeForce GTX 760" />
<Picker.Item label="GeForce GTX 760 Ti" value="GeForce GTX 760 Ti" />
<Picker.Item label="GeForce GTX 760 Ti OEM" value="GeForce GTX 760 Ti OEM" />
<Picker.Item label="GeForce GTX 760M" value="GeForce GTX 760M" />
<Picker.Item label="GeForce GTX 765M" value="GeForce GTX 765M" />
<Picker.Item label="GeForce GTX 770" value="GeForce GTX 770" />
<Picker.Item label="GeForce GTX 770M" value="GeForce GTX 770M" />
<Picker.Item label="GeForce GTX 775M" value="GeForce GTX 775M" />
<Picker.Item label="GeForce GTX 780" value="GeForce GTX 780" />
<Picker.Item label="GeForce GTX 780 Ti" value="GeForce GTX 780 Ti" />
<Picker.Item label="GeForce GTX 780M" value="GeForce GTX 780M" />
<Picker.Item label="GeForce GTX 850M" value="GeForce GTX 850M" />
<Picker.Item label="GeForce GTX 860M" value="GeForce GTX 860M" />
<Picker.Item label="GeForce GTX 870M" value="GeForce GTX 870M" />
<Picker.Item label="GeForce GTX 880M" value="GeForce GTX 880M" />
<Picker.Item label="GeForce GTX 950" value="GeForce GTX 950" />
<Picker.Item label="GeForce GTX 950M" value="GeForce GTX 950M" />
<Picker.Item label="GeForce GTX 960" value="GeForce GTX 960" />
<Picker.Item label="GeForce GTX 960A" value="GeForce GTX 960A" />
<Picker.Item label="GeForce GTX 960M" value="GeForce GTX 960M" />
<Picker.Item label="GeForce GTX 965M" value="GeForce GTX 965M" />
<Picker.Item label="GeForce GTX 970" value="GeForce GTX 970" />
<Picker.Item label="GeForce GTX 970M" value="GeForce GTX 970M" />
<Picker.Item label="GeForce GTX 980" value="GeForce GTX 980" />
<Picker.Item label="GeForce GTX 980 Ti" value="GeForce GTX 980 Ti" />
<Picker.Item label="GeForce GTX 980M" value="GeForce GTX 980M" />
<Picker.Item label="GeForce GTX TITAN Black" value="GeForce GTX TITAN Black" />
<Picker.Item label="GeForce GTX TITAN X" value="GeForce GTX TITAN X" />
<Picker.Item label="GeForce GTX TITAN Z" value="GeForce GTX TITAN Z" />
<Picker.Item label="GeForce GTX Titan" value="GeForce GTX Titan" />
<Picker.Item label="GeForce MX110" value="GeForce MX110" />
<Picker.Item label="GeForce MX130" value="GeForce MX130" />
<Picker.Item label="GeForce MX150" value="GeForce MX150" />
<Picker.Item label="GeForce RTX 2060" value="GeForce RTX 2060" />
<Picker.Item label="GeForce RTX 2060 (Mobile)" value="GeForce RTX 2060 (Mobile)" />
<Picker.Item label="GeForce RTX 2060 SUPER" value="GeForce RTX 2060 SUPER" />
<Picker.Item label="GeForce RTX 2070" value="GeForce RTX 2070" />
<Picker.Item label="GeForce RTX 2070 (Mobile)" value="GeForce RTX 2070 (Mobile)" />
<Picker.Item label="GeForce RTX 2070 SUPER" value="GeForce RTX 2070 SUPER" />
<Picker.Item label="GeForce RTX 2070 with Max-Q Design" value="GeForce RTX 2070 with Max-Q Design" />
<Picker.Item label="GeForce RTX 2080" value="GeForce RTX 2080" />
<Picker.Item label="GeForce RTX 2080 (Mobile)" value="GeForce RTX 2080 (Mobile)" />
<Picker.Item label="GeForce RTX 2080 SUPER" value="GeForce RTX 2080 SUPER" />
<Picker.Item label="GeForce RTX 2080 Ti" value="GeForce RTX 2080 Ti" />
<Picker.Item label="GeForce RTX 2080 with Max-Q Design" value="GeForce RTX 2080 with Max-Q Design" />
<Picker.Item label="HD6450" value="HD6450" />
<Picker.Item label="IncrediblE HD" value="IncrediblE HD" />
<Picker.Item label="IncrediblE HD 4000" value="IncrediblE HD 4000" />
<Picker.Item label="IncrediblE HD 4600" value="IncrediblE HD 4600" />
<Picker.Item label="Intel 4th Generation Haswell HD" value="Intel 4th Generation Haswell HD" />
<Picker.Item label="Intel 6th Gen Skylake HD 530" value="Intel 6th Gen Skylake HD 530" />
<Picker.Item label="Intel Coffee Lake UHD" value="Intel Coffee Lake UHD" />
<Picker.Item label="Intel HD 3000" value="Intel HD 3000" />
<Picker.Item label="Intel HD 4000" value="Intel HD 4000" />
<Picker.Item label="Intel HD 4400" value="Intel HD 4400" />
<Picker.Item label="Intel HD 4600" value="Intel HD 4600" />
<Picker.Item label="Intel HD 500" value="Intel HD 500" />
<Picker.Item label="Intel HD 5000" value="Intel HD 5000" />
<Picker.Item label="Intel HD 505" value="Intel HD 505" />
<Picker.Item label="Intel HD 510" value="Intel HD 510" />
<Picker.Item label="Intel HD 515" value="Intel HD 515" />
<Picker.Item label="Intel HD 520" value="Intel HD 520" />
<Picker.Item label="Intel HD 5200" value="Intel HD 5200" />
<Picker.Item label="Intel HD 530" value="Intel HD 530" />
<Picker.Item label="Intel HD 5300" value="Intel HD 5300" />
<Picker.Item label="Intel HD 5500" value="Intel HD 5500" />
<Picker.Item label="Intel HD 5600" value="Intel HD 5600" />
<Picker.Item label="Intel HD 6000" value="Intel HD 6000" />
<Picker.Item label="Intel HD 610" value="Intel HD 610" />
<Picker.Item label="Intel HD 615" value="Intel HD 615" />
<Picker.Item label="Intel HD 630" value="Intel HD 630" />
<Picker.Item label="Intel HD Family" value="Intel HD Family" />
<Picker.Item label="Intel HD Graphics 620" value="Intel HD Graphics 620" />
<Picker.Item label="Intel HD P4000" value="Intel HD P4000" />
<Picker.Item label="Intel HD P4600" value="Intel HD P4600" />
<Picker.Item label="Intel HD P4600/P4700" value="Intel HD P4600/P4700" />
<Picker.Item label="Intel HD P530" value="Intel HD P530" />
<Picker.Item label="Intel HD P630" value="Intel HD P630" />
<Picker.Item label="Intel HD manual-gen9_2015-133271" value="Intel HD manual-gen9_2015-133271" />
<Picker.Item label="Intel Iris 5100" value="Intel Iris 5100" />
<Picker.Item label="Intel Iris 540" value="Intel Iris 540" />
<Picker.Item label="Intel Iris 550" value="Intel Iris 550" />
<Picker.Item label="Intel Iris 6100" value="Intel Iris 6100" />
<Picker.Item label="Intel Iris 650" value="Intel Iris 650" />
<Picker.Item label="Intel Iris Plus" value="Intel Iris Plus" />
<Picker.Item label="Intel Iris Plus 640" value="Intel Iris Plus 640" />
<Picker.Item label="Intel Iris Plus 645" value="Intel Iris Plus 645" />
<Picker.Item label="Intel Iris Plus 650" value="Intel Iris Plus 650" />
<Picker.Item label="Intel Iris Plus 655" value="Intel Iris Plus 655" />
<Picker.Item label="Intel Iris Pro 5200" value="Intel Iris Pro 5200" />
<Picker.Item label="Intel Iris Pro 580" value="Intel Iris Pro 580" />
<Picker.Item label="Intel Iris Pro 6100" value="Intel Iris Pro 6100" />
<Picker.Item label="Intel Iris Pro Graphics 6200" value="Intel Iris Pro Graphics 6200" />
<Picker.Item label="Intel Iris Pro P580" value="Intel Iris Pro P580" />
<Picker.Item label="Intel Iris Pro P6300" value="Intel Iris Pro P6300" />
<Picker.Item label="Intel Media Accelerator HD" value="Intel Media Accelerator HD" />
<Picker.Item label="Intel Poison Ivy" value="Intel Poison Ivy" />
<Picker.Item label="Intel Skylake HD DT GT2" value="Intel Skylake HD DT GT2" />
<Picker.Item label="Intel UHD" value="Intel UHD" />
<Picker.Item label="Intel UHD 600" value="Intel UHD 600" />
<Picker.Item label="Intel UHD 605" value="Intel UHD 605" />
<Picker.Item label="Intel UHD 610" value="Intel UHD 610" />
<Picker.Item label="Intel UHD 615" value="Intel UHD 615" />
<Picker.Item label="Intel UHD 617" value="Intel UHD 617" />
<Picker.Item label="Intel UHD 620" value="Intel UHD 620" />
<Picker.Item label="Intel UHD 630" value="Intel UHD 630" />
<Picker.Item label="Intel UHD Graphics 620" value="Intel UHD Graphics 620" />
<Picker.Item label="Intel UHD P630" value="Intel UHD P630" />
<Picker.Item label="M880G with Mobility Radeon HD 4250" value="M880G with Mobility Radeon HD 4250" />
<Picker.Item label="MONSTER GeForce GTX 675M" value="MONSTER GeForce GTX 675M" />
<Picker.Item label="Matrox C420 LP PCIe x16" value="Matrox C420 LP PCIe x16" />
<Picker.Item label="Matrox C680 PCIe x16" value="Matrox C680 PCIe x16" />
<Picker.Item label="Matrox C900 PCIe x16" value="Matrox C900 PCIe x16" />
<Picker.Item label="Matrox G200e WDDM 2.0" value="Matrox G200e WDDM 2.0" />
<Picker.Item label="Matrox G200eR WDDM 2.0" value="Matrox G200eR WDDM 2.0" />
<Picker.Item label="Matrox G200eW3 WDDM 2.0" value="Matrox G200eW3 WDDM 2.0" />
<Picker.Item label="Matrox G200eh WDDM 2.0" value="Matrox G200eh WDDM 2.0" />
<Picker.Item label="Mobile Intel HD" value="Mobile Intel HD" />
<Picker.Item label="Mobility Radeon HD 4250" value="Mobility Radeon HD 4250" />
<Picker.Item label="Mobility Radeon HD 5000" value="Mobility Radeon HD 5000" />
<Picker.Item label="Mobility Radeon HD 5000 Serisi" value="Mobility Radeon HD 5000 Serisi" />
<Picker.Item label="Mobility Radeon HD 5570" value="Mobility Radeon HD 5570" />
<Picker.Item label="Mobility Radeon HD 5650" value="Mobility Radeon HD 5650" />
<Picker.Item label="Mobility Radeon HD 5730" value="Mobility Radeon HD 5730" />
<Picker.Item label="Mobility Radeon HD 5850" value="Mobility Radeon HD 5850" />
<Picker.Item label="Mobility Radeon HD 5870" value="Mobility Radeon HD 5870" />
<Picker.Item label="Mobility/Radeon HD 5000/5400/5450/R5 220" value="Mobility/Radeon HD 5000/5400/5450/R5 220" />
<Picker.Item label="MxGPU" value="MxGPU" />
<Picker.Item label="NVIDIA TITAN X" value="NVIDIA TITAN X" />
<Picker.Item label="NVIDIA TITAN Xp" value="NVIDIA TITAN Xp" />
<Picker.Item label="NVS 310" value="NVS 310" />
<Picker.Item label="NVS 315" value="NVS 315" />
<Picker.Item label="NVS 4200M" value="NVS 4200M" />
<Picker.Item label="NVS 510" value="NVS 510" />
<Picker.Item label="NVS 5200M" value="NVS 5200M" />
<Picker.Item label="NVS 5400M" value="NVS 5400M" />
<Picker.Item label="NVS 810" value="NVS 810" />
<Picker.Item label="OpenXT Display Driver" value="OpenXT Display Driver" />
<Picker.Item label="PHDGD Ivy 4" value="PHDGD Ivy 4" />
<Picker.Item label="PHDGD Ivy 5" value="PHDGD Ivy 5" />
<Picker.Item label="Professional HD Driver" value="Professional HD Driver" />
<Picker.Item label="Q12U-1" value="Q12U-1" />
<Picker.Item label="QXL KMDOD" value="QXL KMDOD" />
<Picker.Item label="Quadro 1000M" value="Quadro 1000M" />
<Picker.Item label="Quadro 2000" value="Quadro 2000" />
<Picker.Item label="Quadro 2000 D" value="Quadro 2000 D" />
<Picker.Item label="Quadro 2000D" value="Quadro 2000D" />
<Picker.Item label="Quadro 2000M" value="Quadro 2000M" />
<Picker.Item label="Quadro 3000M" value="Quadro 3000M" />
<Picker.Item label="Quadro 4000" value="Quadro 4000" />
<Picker.Item label="Quadro 4000M" value="Quadro 4000M" />
<Picker.Item label="Quadro 410" value="Quadro 410" />
<Picker.Item label="Quadro 5000" value="Quadro 5000" />
<Picker.Item label="Quadro 5000M" value="Quadro 5000M" />
<Picker.Item label="Quadro 500M" value="Quadro 500M" />
<Picker.Item label="Quadro 5010M" value="Quadro 5010M" />
<Picker.Item label="Quadro 600" value="Quadro 600" />
<Picker.Item label="Quadro 6000" value="Quadro 6000" />
<Picker.Item label="Quadro 7000" value="Quadro 7000" />
<Picker.Item label="Quadro FX 580" value="Quadro FX 580" />
<Picker.Item label="Quadro GP100" value="Quadro GP100" />
<Picker.Item label="Quadro GV100" value="Quadro GV100" />
<Picker.Item label="Quadro K1000M" value="Quadro K1000M" />
<Picker.Item label="Quadro K1100M" value="Quadro K1100M" />
<Picker.Item label="Quadro K1200" value="Quadro K1200" />
<Picker.Item label="Quadro K2000" value="Quadro K2000" />
<Picker.Item label="Quadro K2000D" value="Quadro K2000D" />
<Picker.Item label="Quadro K2000M" value="Quadro K2000M" />
<Picker.Item label="Quadro K2100M" value="Quadro K2100M" />
<Picker.Item label="Quadro K2200" value="Quadro K2200" />
<Picker.Item label="Quadro K2200M" value="Quadro K2200M" />
<Picker.Item label="Quadro K3000M" value="Quadro K3000M" />
<Picker.Item label="Quadro K3100M" value="Quadro K3100M" />
<Picker.Item label="Quadro K4000" value="Quadro K4000" />
<Picker.Item label="Quadro K4000M" value="Quadro K4000M" />
<Picker.Item label="Quadro K4100M" value="Quadro K4100M" />
<Picker.Item label="Quadro K420" value="Quadro K420" />
<Picker.Item label="Quadro K4200" value="Quadro K4200" />
<Picker.Item label="Quadro K5000" value="Quadro K5000" />
<Picker.Item label="Quadro K5000M" value="Quadro K5000M" />
<Picker.Item label="Quadro K5100M" value="Quadro K5100M" />
<Picker.Item label="Quadro K5200" value="Quadro K5200" />
<Picker.Item label="Quadro K600" value="Quadro K600" />
<Picker.Item label="Quadro K6000" value="Quadro K6000" />
<Picker.Item label="Quadro K610M" value="Quadro K610M" />
<Picker.Item label="Quadro K620" value="Quadro K620" />
<Picker.Item label="Quadro K620M" value="Quadro K620M" />
<Picker.Item label="Quadro M1000M" value="Quadro M1000M" />
<Picker.Item label="Quadro M1200" value="Quadro M1200" />
<Picker.Item label="Quadro M2000" value="Quadro M2000" />
<Picker.Item label="Quadro M2000M" value="Quadro M2000M" />
<Picker.Item label="Quadro M2200" value="Quadro M2200" />
<Picker.Item label="Quadro M3000M" value="Quadro M3000M" />
<Picker.Item label="Quadro M4000" value="Quadro M4000" />
<Picker.Item label="Quadro M4000M" value="Quadro M4000M" />
<Picker.Item label="Quadro M5000" value="Quadro M5000" />
<Picker.Item label="Quadro M5000M" value="Quadro M5000M" />
<Picker.Item label="Quadro M520" value="Quadro M520" />
<Picker.Item label="Quadro M5500" value="Quadro M5500" />
<Picker.Item label="Quadro M6000" value="Quadro M6000" />
<Picker.Item label="Quadro M6000 24GB" value="Quadro M6000 24GB" />
<Picker.Item label="Quadro M600M" value="Quadro M600M" />
<Picker.Item label="Quadro M620" value="Quadro M620" />
<Picker.Item label="Quadro P1000" value="Quadro P1000" />
<Picker.Item label="Quadro P2000" value="Quadro P2000" />
<Picker.Item label="Quadro P2000 with Max-Q Design" value="Quadro P2000 with Max-Q Design" />
<Picker.Item label="Quadro P2200" value="Quadro P2200" />
<Picker.Item label="Quadro P3000" value="Quadro P3000" />
<Picker.Item label="Quadro P3200" value="Quadro P3200" />
<Picker.Item label="Quadro P3200 with Max-Q Design" value="Quadro P3200 with Max-Q Design" />
<Picker.Item label="Quadro P400" value="Quadro P400" />
<Picker.Item label="Quadro P4000" value="Quadro P4000" />
<Picker.Item label="Quadro P4200" value="Quadro P4200" />
<Picker.Item label="Quadro P4200 with Max-Q Design" value="Quadro P4200 with Max-Q Design" />
<Picker.Item label="Quadro P5000" value="Quadro P5000" />
<Picker.Item label="Quadro P5200" value="Quadro P5200" />
<Picker.Item label="Quadro P5200 with Max-Q Design" value="Quadro P5200 with Max-Q Design" />
<Picker.Item label="Quadro P600" value="Quadro P600" />
<Picker.Item label="Quadro P6000" value="Quadro P6000" />
<Picker.Item label="Quadro P620" value="Quadro P620" />
<Picker.Item label="Quadro RTX 3000" value="Quadro RTX 3000" />
<Picker.Item label="Quadro RTX 4000" value="Quadro RTX 4000" />
<Picker.Item label="Quadro RTX 5000" value="Quadro RTX 5000" />
<Picker.Item label="Quadro RTX 5000 (Mobile)" value="Quadro RTX 5000 (Mobile)" />
<Picker.Item label="Quadro RTX 6000" value="Quadro RTX 6000" />
<Picker.Item label="Quadro RTX 8000" value="Quadro RTX 8000" />
<Picker.Item label="Quadro T1000" value="Quadro T1000" />
<Picker.Item label="Quadro T2000" value="Quadro T2000" />
<Picker.Item label="Qualcomm Adreno 630 GPU" value="Qualcomm Adreno 630 GPU" />
<Picker.Item label="RADEON HD 6350" value="RADEON HD 6350" />
<Picker.Item label="RADEON HD6370D" value="RADEON HD6370D" />
<Picker.Item label="RADEON HD6410D" value="RADEON HD6410D" />
<Picker.Item label="RADEON HD6530D" value="RADEON HD6530D" />
<Picker.Item label="Radeon 520" value="Radeon 520" />
<Picker.Item label="Radeon 530" value="Radeon 530" />
<Picker.Item label="Radeon 540" value="Radeon 540" />
<Picker.Item label="Radeon 6600M" value="Radeon 6600M" />
<Picker.Item label="Radeon E6460" value="Radeon E6460" />
<Picker.Item label="Radeon E6760" value="Radeon E6760" />
<Picker.Item label="Radeon E8860" value="Radeon E8860" />
<Picker.Item label="Radeon E8870PCIe" value="Radeon E8870PCIe" />
<Picker.Item label="Radeon HD 4650" value="Radeon HD 4650" />
<Picker.Item label="Radeon HD 5550" value="Radeon HD 5550" />
<Picker.Item label="Radeon HD 5570" value="Radeon HD 5570" />
<Picker.Item label="Radeon HD 5600/5700" value="Radeon HD 5600/5700" />
<Picker.Item label="Radeon HD 5670" value="Radeon HD 5670" />
<Picker.Item label="Radeon HD 5750" value="Radeon HD 5750" />
<Picker.Item label="Radeon HD 5770" value="Radeon HD 5770" />
<Picker.Item label="Radeon HD 5830" value="Radeon HD 5830" />
<Picker.Item label="Radeon HD 5850" value="Radeon HD 5850" />
<Picker.Item label="Radeon HD 5870" value="Radeon HD 5870" />
<Picker.Item label="Radeon HD 5970" value="Radeon HD 5970" />
<Picker.Item label="Radeon HD 6250" value="Radeon HD 6250" />
<Picker.Item label="Radeon HD 6290" value="Radeon HD 6290" />
<Picker.Item label="Radeon HD 6320 Graphic" value="Radeon HD 6320 Graphic" />
<Picker.Item label="Radeon HD 6370D" value="Radeon HD 6370D" />
<Picker.Item label="Radeon HD 6410D" value="Radeon HD 6410D" />
<Picker.Item label="Radeon HD 6430M" value="Radeon HD 6430M" />
<Picker.Item label="Radeon HD 6450" value="Radeon HD 6450" />
<Picker.Item label="Radeon HD 6450A" value="Radeon HD 6450A" />
<Picker.Item label="Radeon HD 6470M" value="Radeon HD 6470M" />
<Picker.Item label="Radeon HD 6480G" value="Radeon HD 6480G" />
<Picker.Item label="Radeon HD 6520G" value="Radeon HD 6520G" />
<Picker.Item label="Radeon HD 6530D" value="Radeon HD 6530D" />
<Picker.Item label="Radeon HD 6550A" value="Radeon HD 6550A" />
<Picker.Item label="Radeon HD 6550D" value="Radeon HD 6550D" />
<Picker.Item label="Radeon HD 6570" value="Radeon HD 6570" />
<Picker.Item label="Radeon HD 6620G" value="Radeon HD 6620G" />
<Picker.Item label="Radeon HD 6650A" value="Radeon HD 6650A" />
<Picker.Item label="Radeon HD 6650M" value="Radeon HD 6650M" />
<Picker.Item label="Radeon HD 6670" value="Radeon HD 6670" />
<Picker.Item label="Radeon HD 6670 + 6670 Dual" value="Radeon HD 6670 + 6670 Dual" />
<Picker.Item label="Radeon HD 6700M" value="Radeon HD 6700M" />
<Picker.Item label="Radeon HD 6750" value="Radeon HD 6750" />
<Picker.Item label="Radeon HD 6770" value="Radeon HD 6770" />
<Picker.Item label="Radeon HD 6790" value="Radeon HD 6790" />
<Picker.Item label="Radeon HD 6800M" value="Radeon HD 6800M" />
<Picker.Item label="Radeon HD 6850" value="Radeon HD 6850" />
<Picker.Item label="Radeon HD 6870" value="Radeon HD 6870" />
<Picker.Item label="Radeon HD 6900M" value="Radeon HD 6900M" />
<Picker.Item label="Radeon HD 6950" value="Radeon HD 6950" />
<Picker.Item label="Radeon HD 6970" value="Radeon HD 6970" />
<Picker.Item label="Radeon HD 6990" value="Radeon HD 6990" />
<Picker.Item label="Radeon HD 7310M" value="Radeon HD 7310M" />
<Picker.Item label="Radeon HD 7340" value="Radeon HD 7340" />
<Picker.Item label="Radeon HD 7340M" value="Radeon HD 7340M" />
<Picker.Item label="Radeon HD 7400G" value="Radeon HD 7400G" />
<Picker.Item label="Radeon HD 7420G" value="Radeon HD 7420G" />
<Picker.Item label="Radeon HD 7450" value="Radeon HD 7450" />
<Picker.Item label="Radeon HD 7450A" value="Radeon HD 7450A" />
<Picker.Item label="Radeon HD 7470" value="Radeon HD 7470" />
<Picker.Item label="Radeon HD 7480D" value="Radeon HD 7480D" />
<Picker.Item label="Radeon HD 7500G" value="Radeon HD 7500G" />
<Picker.Item label="Radeon HD 7500G + 7500M/7600M Dual" value="Radeon HD 7500G + 7500M/7600M Dual" />
<Picker.Item label="Radeon HD 7500G + 7550M Dual" value="Radeon HD 7500G + 7550M Dual" />
<Picker.Item label="Radeon HD 7520G" value="Radeon HD 7520G" />
<Picker.Item label="Radeon HD 7520G + 7470M Dual" value="Radeon HD 7520G + 7470M Dual" />
<Picker.Item label="Radeon HD 7520G + 7500/7600 Dual" value="Radeon HD 7520G + 7500/7600 Dual" />
<Picker.Item label="Radeon HD 7520G + 7600M Dual" value="Radeon HD 7520G + 7600M Dual" />
<Picker.Item label="Radeon HD 7520G + 7610M Dual" value="Radeon HD 7520G + 7610M Dual" />
<Picker.Item label="Radeon HD 7520G + 7650M Dual" value="Radeon HD 7520G + 7650M Dual" />
<Picker.Item label="Radeon HD 7520G + 7670M Dual" value="Radeon HD 7520G + 7670M Dual" />
<Picker.Item label="Radeon HD 7520G + 7700M Dual" value="Radeon HD 7520G + 7700M Dual" />
<Picker.Item label="Radeon HD 7520G + 8750M Dual" value="Radeon HD 7520G + 8750M Dual" />
<Picker.Item label="Radeon HD 7520G + HD 7400M Dual" value="Radeon HD 7520G + HD 7400M Dual" />
<Picker.Item label="Radeon HD 7520G + HD 7600M Dual" value="Radeon HD 7520G + HD 7600M Dual" />
<Picker.Item label="Radeon HD 7520G + HD 8600/8700M Dual" value="Radeon HD 7520G + HD 8600/8700M Dual" />
<Picker.Item label="Radeon HD 7520G + HD 8750M Dual" value="Radeon HD 7520G + HD 8750M Dual" />
<Picker.Item label="Radeon HD 7520G N HD 7520G + HD 7500/7600 7500/760" value="Radeon HD 7520G N HD 7520G + HD 7500/7600 7500/760" />
<Picker.Item label="Radeon HD 7520G N HD 7520G + HD 7600M N HD 7600M D" value="Radeon HD 7520G N HD 7520G + HD 7600M N HD 7600M D" />
<Picker.Item label="Radeon HD 7540D" value="Radeon HD 7540D" />
<Picker.Item label="Radeon HD 7540D + 6570 Dual" value="Radeon HD 7540D + 6570 Dual" />
<Picker.Item label="Radeon HD 7540D + 7500 Dual" value="Radeon HD 7540D + 7500 Dual" />
<Picker.Item label="Radeon HD 7540D + HD 6450 Dual" value="Radeon HD 7540D + HD 6450 Dual" />
<Picker.Item label="Radeon HD 7550M" value="Radeon HD 7550M" />
<Picker.Item label="Radeon HD 7550M/7650M" value="Radeon HD 7550M/7650M" />
<Picker.Item label="Radeon HD 7560D" value="Radeon HD 7560D" />
<Picker.Item label="Radeon HD 7560D + 6450 Dual" value="Radeon HD 7560D + 6450 Dual" />
<Picker.Item label="Radeon HD 7560D + 6570 Dual" value="Radeon HD 7560D + 6570 Dual" />
<Picker.Item label="Radeon HD 7560D + 6670 Dual" value="Radeon HD 7560D + 6670 Dual" />
<Picker.Item label="Radeon HD 7560D + 7560D Dual" value="Radeon HD 7560D + 7560D Dual" />
<Picker.Item label="Radeon HD 7560D + 7570 Dual" value="Radeon HD 7560D + 7570 Dual" />
<Picker.Item label="Radeon HD 7560D + 7670 Dual" value="Radeon HD 7560D + 7670 Dual" />
<Picker.Item label="Radeon HD 7560D + 7700 Dual" value="Radeon HD 7560D + 7700 Dual" />
<Picker.Item label="Radeon HD 7560D + HD 6570 Dual" value="Radeon HD 7560D + HD 6570 Dual" />
<Picker.Item label="Radeon HD 7560D + HD 6670 Dual" value="Radeon HD 7560D + HD 6670 Dual" />
<Picker.Item label="Radeon HD 7560D + HD 7000 Dual" value="Radeon HD 7560D + HD 7000 Dual" />
<Picker.Item label="Radeon HD 7560D + HD 7670 Dual" value="Radeon HD 7560D + HD 7670 Dual" />
<Picker.Item label="Radeon HD 7560D + HD 8570 Dual" value="Radeon HD 7560D + HD 8570 Dual" />
<Picker.Item label="Radeon HD 7560D + R5 235 Dual" value="Radeon HD 7560D + R5 235 Dual" />
<Picker.Item label="Radeon HD 7570" value="Radeon HD 7570" />
<Picker.Item label="Radeon HD 7570M" value="Radeon HD 7570M" />
<Picker.Item label="Radeon HD 7580D" value="Radeon HD 7580D" />
<Picker.Item label="Radeon HD 7600G" value="Radeon HD 7600G" />
<Picker.Item label="Radeon HD 7600G + 6400M Dual" value="Radeon HD 7600G + 6400M Dual" />
<Picker.Item label="Radeon HD 7600G + 7450M Dual" value="Radeon HD 7600G + 7450M Dual" />
<Picker.Item label="Radeon HD 7600G + 7500M/7600M Dual" value="Radeon HD 7600G + 7500M/7600M Dual" />
<Picker.Item label="Radeon HD 7600G + 7550M Dual" value="Radeon HD 7600G + 7550M Dual" />
<Picker.Item label="Radeon HD 7600G + 8500M/8700M Dual" value="Radeon HD 7600G + 8500M/8700M Dual" />
<Picker.Item label="Radeon HD 7600G + HD Dual" value="Radeon HD 7600G + HD Dual" />
<Picker.Item label="Radeon HD 7600M + 7600M Dual" value="Radeon HD 7600M + 7600M Dual" />
<Picker.Item label="Radeon HD 7610M" value="Radeon HD 7610M" />
<Picker.Item label="Radeon HD 7620G" value="Radeon HD 7620G" />
<Picker.Item label="Radeon HD 7620G + 8600M Dual" value="Radeon HD 7620G + 8600M Dual" />
<Picker.Item label="Radeon HD 7620G + 8670M Dual" value="Radeon HD 7620G + 8670M Dual" />
<Picker.Item label="Radeon HD 7620G + HD 8670M Dual" value="Radeon HD 7620G + HD 8670M Dual" />
<Picker.Item label="Radeon HD 7620G N HD 7620G + HD 8600M N HD 8600M D" value="Radeon HD 7620G N HD 7620G + HD 8600M N HD 8600M D" />
<Picker.Item label="Radeon HD 7640G" value="Radeon HD 7640G" />
<Picker.Item label="Radeon HD 7640G + 6400M Dual" value="Radeon HD 7640G + 6400M Dual" />
<Picker.Item label="Radeon HD 7640G + 7400M Dual" value="Radeon HD 7640G + 7400M Dual" />
<Picker.Item label="Radeon HD 7640G + 7450M Dual" value="Radeon HD 7640G + 7450M Dual" />
<Picker.Item label="Radeon HD 7640G + 7470M Dual" value="Radeon HD 7640G + 7470M Dual" />
<Picker.Item label="Radeon HD 7640G + 7500/7600 Dual" value="Radeon HD 7640G + 7500/7600 Dual" />
<Picker.Item label="Radeon HD 7640G + 7500M/7600M Dual" value="Radeon HD 7640G + 7500M/7600M Dual" />
<Picker.Item label="Radeon HD 7640G + 7600M Dual" value="Radeon HD 7640G + 7600M Dual" />
<Picker.Item label="Radeon HD 7640G + 7610M Dual" value="Radeon HD 7640G + 7610M Dual" />
<Picker.Item label="Radeon HD 7640G + 7650M Dual" value="Radeon HD 7640G + 7650M Dual" />
<Picker.Item label="Radeon HD 7640G + 7670M Dual" value="Radeon HD 7640G + 7670M Dual" />
<Picker.Item label="Radeon HD 7640G + 7690M Dual" value="Radeon HD 7640G + 7690M Dual" />
<Picker.Item label="Radeon HD 7640G + 7700M Dual" value="Radeon HD 7640G + 7700M Dual" />
<Picker.Item label="Radeon HD 7640G + 8500M Dual" value="Radeon HD 7640G + 8500M Dual" />
<Picker.Item label="Radeon HD 7640G + 8570M Dual" value="Radeon HD 7640G + 8570M Dual" />
<Picker.Item label="Radeon HD 7640G + 8600/8700M Dual" value="Radeon HD 7640G + 8600/8700M Dual" />
<Picker.Item label="Radeon HD 7640G + 8670M Dual" value="Radeon HD 7640G + 8670M Dual" />
<Picker.Item label="Radeon HD 7640G + 8750M Dual" value="Radeon HD 7640G + 8750M Dual" />
<Picker.Item label="Radeon HD 7640G + HD 7400M Dual" value="Radeon HD 7640G + HD 7400M Dual" />
<Picker.Item label="Radeon HD 7640G + HD 7600M Dual" value="Radeon HD 7640G + HD 7600M Dual" />
<Picker.Item label="Radeon HD 7640G + HD 7600M N HD 7600M Dual" value="Radeon HD 7640G + HD 7600M N HD 7600M Dual" />
<Picker.Item label="Radeon HD 7640G + HD 7670M Dual" value="Radeon HD 7640G + HD 7670M Dual" />
<Picker.Item label="Radeon HD 7640G + HD 8500M Dual" value="Radeon HD 7640G + HD 8500M Dual" />
<Picker.Item label="Radeon HD 7640G + HD 8500M N HD 8500M Dual" value="Radeon HD 7640G + HD 8500M N HD 8500M Dual" />
<Picker.Item label="Radeon HD 7640G + HD 8570M Dual" value="Radeon HD 7640G + HD 8570M Dual" />
<Picker.Item label="Radeon HD 7640G + HD 8600/8700M Dual" value="Radeon HD 7640G + HD 8600/8700M Dual" />
<Picker.Item label="Radeon HD 7640G + R5 M200 Dual" value="Radeon HD 7640G + R5 M200 Dual" />
<Picker.Item label="Radeon HD 7640G N HD 7640G + HD 7600M N HD 7600M D" value="Radeon HD 7640G N HD 7640G + HD 7600M N HD 7600M D" />
<Picker.Item label="Radeon HD 7640G N HD 7640G + HD 7670M Dual" value="Radeon HD 7640G N HD 7640G + HD 7670M Dual" />
<Picker.Item label="Radeon HD 7640G N HD 7640G + HD 8570M Dual" value="Radeon HD 7640G N HD 7640G + HD 8570M Dual" />
<Picker.Item label="Radeon HD 7650A" value="Radeon HD 7650A" />
<Picker.Item label="Radeon HD 7650M" value="Radeon HD 7650M" />
<Picker.Item label="Radeon HD 7660D" value="Radeon HD 7660D" />
<Picker.Item label="Radeon HD 7660D + 6570 Dual" value="Radeon HD 7660D + 6570 Dual" />
<Picker.Item label="Radeon HD 7660D + 6670 Dual" value="Radeon HD 7660D + 6670 Dual" />
<Picker.Item label="Radeon HD 7660D + 7470 Dual" value="Radeon HD 7660D + 7470 Dual" />
<Picker.Item label="Radeon HD 7660D + 7500 Dual" value="Radeon HD 7660D + 7500 Dual" />
<Picker.Item label="Radeon HD 7660D + 7540D Dual" value="Radeon HD 7660D + 7540D Dual" />
<Picker.Item label="Radeon HD 7660D + 7670 Dual" value="Radeon HD 7660D + 7670 Dual" />
<Picker.Item label="Radeon HD 7660D + HD 7000 Dual" value="Radeon HD 7660D + HD 7000 Dual" />
<Picker.Item label="Radeon HD 7660D + HD 7400 Dual" value="Radeon HD 7660D + HD 7400 Dual" />
<Picker.Item label="Radeon HD 7660D + R5 235 Dual" value="Radeon HD 7660D + R5 235 Dual" />
<Picker.Item label="Radeon HD 7660D + R7 240 Dual" value="Radeon HD 7660D + R7 240 Dual" />
<Picker.Item label="Radeon HD 7660G" value="Radeon HD 7660G" />
<Picker.Item label="Radeon HD 7660G + 7400M Dual" value="Radeon HD 7660G + 7400M Dual" />
<Picker.Item label="Radeon HD 7660G + 7470M Dual" value="Radeon HD 7660G + 7470M Dual" />
<Picker.Item label="Radeon HD 7660G + 7600M Dual" value="Radeon HD 7660G + 7600M Dual" />
<Picker.Item label="Radeon HD 7660G + 7610M Dual" value="Radeon HD 7660G + 7610M Dual" />
<Picker.Item label="Radeon HD 7660G + 7670M Dual" value="Radeon HD 7660G + 7670M Dual" />
<Picker.Item label="Radeon HD 7660G + 7700M Dual" value="Radeon HD 7660G + 7700M Dual" />
<Picker.Item label="Radeon HD 7660G + 7730M Dual" value="Radeon HD 7660G + 7730M Dual" />
<Picker.Item label="Radeon HD 7660G + 8600M Dual" value="Radeon HD 7660G + 8600M Dual" />
<Picker.Item label="Radeon HD 7660G + 8670M Dual" value="Radeon HD 7660G + 8670M Dual" />
<Picker.Item label="Radeon HD 7660G + HD 7500/7600 7500/7600 Dual" value="Radeon HD 7660G + HD 7500/7600 7500/7600 Dual" />
<Picker.Item label="Radeon HD 7660G + HD 7600M Dual" value="Radeon HD 7660G + HD 7600M Dual" />
<Picker.Item label="Radeon HD 7660G + HD 7600M N HD 7600M Dual" value="Radeon HD 7660G + HD 7600M N HD 7600M Dual" />
<Picker.Item label="Radeon HD 7660G + HD 7670M Dual" value="Radeon HD 7660G + HD 7670M Dual" />
<Picker.Item label="Radeon HD 7660G + HD 7700M Dual" value="Radeon HD 7660G + HD 7700M Dual" />
<Picker.Item label="Radeon HD 7660G + HD 8500M Dual" value="Radeon HD 7660G + HD 8500M Dual" />
<Picker.Item label="Radeon HD 7660G N HD 7660G + HD 7600M N HD 7600M D" value="Radeon HD 7660G N HD 7660G + HD 7600M N HD 7600M D" />
<Picker.Item label="Radeon HD 7660G N HD 7660G + HD 7670M Dual" value="Radeon HD 7660G N HD 7660G + HD 7670M Dual" />
<Picker.Item label="Radeon HD 7660G N HD 7660G + HD 7700M N HD 7700M D" value="Radeon HD 7660G N HD 7660G + HD 7700M N HD 7700M D" />
<Picker.Item label="Radeon HD 7670" value="Radeon HD 7670" />
<Picker.Item label="Radeon HD 7670A" value="Radeon HD 7670A" />
<Picker.Item label="Radeon HD 7670M" value="Radeon HD 7670M" />
<Picker.Item label="Radeon HD 7670M + 7670M Dual" value="Radeon HD 7670M + 7670M Dual" />
<Picker.Item label="Radeon HD 7690M" value="Radeon HD 7690M" />
<Picker.Item label="Radeon HD 7700-serie" value="Radeon HD 7700-serie" />
<Picker.Item label="Radeon HD 7730" value="Radeon HD 7730" />
<Picker.Item label="Radeon HD 7730M" value="Radeon HD 7730M" />
<Picker.Item label="Radeon HD 7750" value="Radeon HD 7750" />
<Picker.Item label="Radeon HD 7750M" value="Radeon HD 7750M" />
<Picker.Item label="Radeon HD 7770" value="Radeon HD 7770" />
<Picker.Item label="Radeon HD 7790" value="Radeon HD 7790" />
<Picker.Item label="Radeon HD 7800-serie" value="Radeon HD 7800-serie" />
<Picker.Item label="Radeon HD 7850" value="Radeon HD 7850" />
<Picker.Item label="Radeon HD 7850M" value="Radeon HD 7850M" />
<Picker.Item label="Radeon HD 7870" value="Radeon HD 7870" />
<Picker.Item label="Radeon HD 7870 XT" value="Radeon HD 7870 XT" />
<Picker.Item label="Radeon HD 7870M" value="Radeon HD 7870M" />
<Picker.Item label="Radeon HD 7950 / R9 280" value="Radeon HD 7950 / R9 280" />
<Picker.Item label="Radeon HD 7970 / R9 280X" value="Radeon HD 7970 / R9 280X" />
<Picker.Item label="Radeon HD 7970M" value="Radeon HD 7970M" />
<Picker.Item label="Radeon HD 7990" value="Radeon HD 7990" />
<Picker.Item label="Radeon HD 8240" value="Radeon HD 8240" />
<Picker.Item label="Radeon HD 8250" value="Radeon HD 8250" />
<Picker.Item label="Radeon HD 8280" value="Radeon HD 8280" />
<Picker.Item label="Radeon HD 8280E" value="Radeon HD 8280E" />
<Picker.Item label="Radeon HD 8280G" value="Radeon HD 8280G" />
<Picker.Item label="Radeon HD 8310E" value="Radeon HD 8310E" />
<Picker.Item label="Radeon HD 8330" value="Radeon HD 8330" />
<Picker.Item label="Radeon HD 8330E" value="Radeon HD 8330E" />
<Picker.Item label="Radeon HD 8350" value="Radeon HD 8350" />
<Picker.Item label="Radeon HD 8350G" value="Radeon HD 8350G" />
<Picker.Item label="Radeon HD 8370D" value="Radeon HD 8370D" />
<Picker.Item label="Radeon HD 8400" value="Radeon HD 8400" />
<Picker.Item label="Radeon HD 8400E" value="Radeon HD 8400E" />
<Picker.Item label="Radeon HD 8410G" value="Radeon HD 8410G" />
<Picker.Item label="Radeon HD 8450G" value="Radeon HD 8450G" />
<Picker.Item label="Radeon HD 8450G + 8600/8700M Dual" value="Radeon HD 8450G + 8600/8700M Dual" />
<Picker.Item label="Radeon HD 8450G + 8600M Dual" value="Radeon HD 8450G + 8600M Dual" />
<Picker.Item label="Radeon HD 8450G + 8670M Dual" value="Radeon HD 8450G + 8670M Dual" />
<Picker.Item label="Radeon HD 8450G + 8750M Dual" value="Radeon HD 8450G + 8750M Dual" />
<Picker.Item label="Radeon HD 8470" value="Radeon HD 8470" />
<Picker.Item label="Radeon HD 8470D" value="Radeon HD 8470D" />
<Picker.Item label="Radeon HD 8470D + 6450 Dual" value="Radeon HD 8470D + 6450 Dual" />
<Picker.Item label="Radeon HD 8470D + 6570 Dual" value="Radeon HD 8470D + 6570 Dual" />
<Picker.Item label="Radeon HD 8470D + HD 6450 Dual" value="Radeon HD 8470D + HD 6450 Dual" />
<Picker.Item label="Radeon HD 8470D + HD 7500 Dual" value="Radeon HD 8470D + HD 7500 Dual" />
<Picker.Item label="Radeon HD 8490" value="Radeon HD 8490" />
<Picker.Item label="Radeon HD 8510G" value="Radeon HD 8510G" />
<Picker.Item label="Radeon HD 8510G + 8500M Dual" value="Radeon HD 8510G + 8500M Dual" />
<Picker.Item label="Radeon HD 8550D" value="Radeon HD 8550D" />
<Picker.Item label="Radeon HD 8550G" value="Radeon HD 8550G" />
<Picker.Item label="Radeon HD 8550G + 8500M Dual" value="Radeon HD 8550G + 8500M Dual" />
<Picker.Item label="Radeon HD 8550G + 8570M Dual" value="Radeon HD 8550G + 8570M Dual" />
<Picker.Item label="Radeon HD 8550G + 8600/8700M Dual" value="Radeon HD 8550G + 8600/8700M Dual" />
<Picker.Item label="Radeon HD 8550G + 8600M Dual" value="Radeon HD 8550G + 8600M Dual" />
<Picker.Item label="Radeon HD 8550G + 8670M Dual" value="Radeon HD 8550G + 8670M Dual" />
<Picker.Item label="Radeon HD 8550G + 8690M Dual" value="Radeon HD 8550G + 8690M Dual" />
<Picker.Item label="Radeon HD 8550G + 8750M Dual" value="Radeon HD 8550G + 8750M Dual" />
<Picker.Item label="Radeon HD 8550G + HD 8600M Dual" value="Radeon HD 8550G + HD 8600M Dual" />
<Picker.Item label="Radeon HD 8550G + HD 8750M Dual" value="Radeon HD 8550G + HD 8750M Dual" />
<Picker.Item label="Radeon HD 8550G + R5 M200 Dual" value="Radeon HD 8550G + R5 M200 Dual" />
<Picker.Item label="Radeon HD 8570" value="Radeon HD 8570" />
<Picker.Item label="Radeon HD 8570 + 8670D Dual" value="Radeon HD 8570 + 8670D Dual" />
<Picker.Item label="Radeon HD 8570 + HD 7660D Dual" value="Radeon HD 8570 + HD 7660D Dual" />
<Picker.Item label="Radeon HD 8570D" value="Radeon HD 8570D" />
<Picker.Item label="Radeon HD 8570D + 6570 Dual" value="Radeon HD 8570D + 6570 Dual" />
<Picker.Item label="Radeon HD 8570D + 6670 Dual" value="Radeon HD 8570D + 6670 Dual" />
<Picker.Item label="Radeon HD 8570D + HD 6570 Dual" value="Radeon HD 8570D + HD 6570 Dual" />
<Picker.Item label="Radeon HD 8570D + HD 6670 Dual" value="Radeon HD 8570D + HD 6670 Dual" />
<Picker.Item label="Radeon HD 8570D + HD 7000 Dual" value="Radeon HD 8570D + HD 7000 Dual" />
<Picker.Item label="Radeon HD 8570D + HD 8470 Dual" value="Radeon HD 8570D + HD 8470 Dual" />
<Picker.Item label="Radeon HD 8570D + HD 8570 Dual" value="Radeon HD 8570D + HD 8570 Dual" />
<Picker.Item label="Radeon HD 8570D + HD8490 Dual" value="Radeon HD 8570D + HD8490 Dual" />
<Picker.Item label="Radeon HD 8570D + R5 235 Dual" value="Radeon HD 8570D + R5 235 Dual" />
<Picker.Item label="Radeon HD 8570D + R7 200 Dual" value="Radeon HD 8570D + R7 200 Dual" />
<Picker.Item label="Radeon HD 8570D + R7 240 Dual" value="Radeon HD 8570D + R7 240 Dual" />
<Picker.Item label="Radeon HD 8610G" value="Radeon HD 8610G" />
<Picker.Item label="Radeon HD 8610G + 8500M Dual" value="Radeon HD 8610G + 8500M Dual" />
<Picker.Item label="Radeon HD 8610G + 8600M Dual" value="Radeon HD 8610G + 8600M Dual" />
<Picker.Item label="Radeon HD 8610G + 8670M Dual" value="Radeon HD 8610G + 8670M Dual" />
<Picker.Item label="Radeon HD 8610G + HD 8500M Dual" value="Radeon HD 8610G + HD 8500M Dual" />
<Picker.Item label="Radeon HD 8610G + HD 8670M Dual" value="Radeon HD 8610G + HD 8670M Dual" />
<Picker.Item label="Radeon HD 8610G + R5 M200 Dual" value="Radeon HD 8610G + R5 M200 Dual" />
<Picker.Item label="Radeon HD 8650D" value="Radeon HD 8650D" />
<Picker.Item label="Radeon HD 8650G" value="Radeon HD 8650G" />
<Picker.Item label="Radeon HD 8650G + 7600M Dual" value="Radeon HD 8650G + 7600M Dual" />
<Picker.Item label="Radeon HD 8650G + 7670M Dual" value="Radeon HD 8650G + 7670M Dual" />
<Picker.Item label="Radeon HD 8650G + 7700M Dual" value="Radeon HD 8650G + 7700M Dual" />
<Picker.Item label="Radeon HD 8650G + 8500M Dual" value="Radeon HD 8650G + 8500M Dual" />
<Picker.Item label="Radeon HD 8650G + 8570M Dual" value="Radeon HD 8650G + 8570M Dual" />
<Picker.Item label="Radeon HD 8650G + 8600/8700M Dual" value="Radeon HD 8650G + 8600/8700M Dual" />
<Picker.Item label="Radeon HD 8650G + 8600M Dual" value="Radeon HD 8650G + 8600M Dual" />
<Picker.Item label="Radeon HD 8650G + 8670M Dual" value="Radeon HD 8650G + 8670M Dual" />
<Picker.Item label="Radeon HD 8650G + 8750M Dual" value="Radeon HD 8650G + 8750M Dual" />
<Picker.Item label="Radeon HD 8650G + HD 8570M Dual" value="Radeon HD 8650G + HD 8570M Dual" />
<Picker.Item label="Radeon HD 8650G + HD 8600/8700M Dual" value="Radeon HD 8650G + HD 8600/8700M Dual" />
<Picker.Item label="Radeon HD 8650G + HD 8600M Dual" value="Radeon HD 8650G + HD 8600M Dual" />
<Picker.Item label="Radeon HD 8650G + HD 8600M N HD 8600M Dual" value="Radeon HD 8650G + HD 8600M N HD 8600M Dual" />
<Picker.Item label="Radeon HD 8650G + HD 8670M Dual" value="Radeon HD 8650G + HD 8670M Dual" />
<Picker.Item label="Radeon HD 8650G + HD 8750M Dual" value="Radeon HD 8650G + HD 8750M Dual" />
<Picker.Item label="Radeon HD 8650G + R5 M230 Dual" value="Radeon HD 8650G + R5 M230 Dual" />
<Picker.Item label="Radeon HD 8650G N HD 8650G + HD 8570M Dual" value="Radeon HD 8650G N HD 8650G + HD 8570M Dual" />
<Picker.Item label="Radeon HD 8650G N HD 8650G + HD 8600/8700M Dual" value="Radeon HD 8650G N HD 8650G + HD 8600/8700M Dual" />
<Picker.Item label="Radeon HD 8650G N HD 8650G + HD 8600M N HD 8600M D" value="Radeon HD 8650G N HD 8650G + HD 8600M N HD 8600M D" />
<Picker.Item label="Radeon HD 8670D" value="Radeon HD 8670D" />
<Picker.Item label="Radeon HD 8670D + 6670 Dual" value="Radeon HD 8670D + 6670 Dual" />
<Picker.Item label="Radeon HD 8670D + 7000 Dual" value="Radeon HD 8670D + 7000 Dual" />
<Picker.Item label="Radeon HD 8670D + 7700 Dual" value="Radeon HD 8670D + 7700 Dual" />
<Picker.Item label="Radeon HD 8670D + 8570 Dual" value="Radeon HD 8670D + 8570 Dual" />
<Picker.Item label="Radeon HD 8670D + HD 6670 Dual" value="Radeon HD 8670D + HD 6670 Dual" />
<Picker.Item label="Radeon HD 8670D + HD 7000 Dual" value="Radeon HD 8670D + HD 7000 Dual" />
<Picker.Item label="Radeon HD 8670D + HD 7600 Dual" value="Radeon HD 8670D + HD 7600 Dual" />
<Picker.Item label="Radeon HD 8670D + R5 235 Dual" value="Radeon HD 8670D + R5 235 Dual" />
<Picker.Item label="Radeon HD 8670D + R7 200 Dual" value="Radeon HD 8670D + R7 200 Dual" />
<Picker.Item label="Radeon HD 8670D + R7 240 Dual" value="Radeon HD 8670D + R7 240 Dual" />
<Picker.Item label="Radeon HD 8670D N HD 8670D + HD 8670D Dual" value="Radeon HD 8670D N HD 8670D + HD 8670D Dual" />
<Picker.Item label="Radeon HD 8690A" value="Radeon HD 8690A" />
<Picker.Item label="Radeon HD 8730M" value="Radeon HD 8730M" />
<Picker.Item label="Radeon HD 8750M" value="Radeon HD 8750M" />
<Picker.Item label="Radeon HD 8870M" value="Radeon HD 8870M" />
<Picker.Item label="Radeon HD 8870M / R9 M270X / M370X" value="Radeon HD 8870M / R9 M270X / M370X" />
<Picker.Item label="Radeon HD 8950" value="Radeon HD 8950" />
<Picker.Item label="Radeon HD 8970M" value="Radeon HD 8970M" />
<Picker.Item label="Radeon HD 8990" value="Radeon HD 8990" />
<Picker.Item label="Radeon HD HD7850M" value="Radeon HD HD7850M" />
<Picker.Item label="Radeon HD7570" value="Radeon HD7570" />
<Picker.Item label="Radeon HD8490" value="Radeon HD8490" />
<Picker.Item label="Radeon HD8970M" value="Radeon HD8970M" />
<Picker.Item label="Radeon Instinct MI25 MxGPU" value="Radeon Instinct MI25 MxGPU" />
<Picker.Item label="Radeon PRO WX 8200" value="Radeon PRO WX 8200" />
<Picker.Item label="Radeon Pro 450" value="Radeon Pro 450" />
<Picker.Item label="Radeon Pro 455" value="Radeon Pro 455" />
<Picker.Item label="Radeon Pro 460" value="Radeon Pro 460" />
<Picker.Item label="Radeon Pro 465" value="Radeon Pro 465" />
<Picker.Item label="Radeon Pro 5300M" value="Radeon Pro 5300M" />
<Picker.Item label="Radeon Pro 5500M" value="Radeon Pro 5500M" />
<Picker.Item label="Radeon Pro 555" value="Radeon Pro 555" />
<Picker.Item label="Radeon Pro 560" value="Radeon Pro 560" />
<Picker.Item label="Radeon Pro 560X" value="Radeon Pro 560X" />
<Picker.Item label="Radeon Pro 570" value="Radeon Pro 570" />
<Picker.Item label="Radeon Pro 570X" value="Radeon Pro 570X" />
<Picker.Item label="Radeon Pro 580" value="Radeon Pro 580" />
<Picker.Item label="Radeon Pro 580X" value="Radeon Pro 580X" />
<Picker.Item label="Radeon Pro Duo" value="Radeon Pro Duo" />
<Picker.Item label="Radeon Pro SSG" value="Radeon Pro SSG" />
<Picker.Item label="Radeon Pro Vega 16" value="Radeon Pro Vega 16" />
<Picker.Item label="Radeon Pro Vega 20" value="Radeon Pro Vega 20" />
<Picker.Item label="Radeon Pro Vega 48" value="Radeon Pro Vega 48" />
<Picker.Item label="Radeon Pro Vega 56" value="Radeon Pro Vega 56" />
<Picker.Item label="Radeon Pro Vega 64" value="Radeon Pro Vega 64" />
<Picker.Item label="Radeon Pro Vega II" value="Radeon Pro Vega II" />
<Picker.Item label="Radeon Pro W5500" value="Radeon Pro W5500" />
<Picker.Item label="Radeon Pro W5700" value="Radeon Pro W5700" />
<Picker.Item label="Radeon Pro WX 2100" value="Radeon Pro WX 2100" />
<Picker.Item label="Radeon Pro WX 3100" value="Radeon Pro WX 3100" />
<Picker.Item label="Radeon Pro WX 4100" value="Radeon Pro WX 4100" />
<Picker.Item label="Radeon Pro WX 4130" value="Radeon Pro WX 4130" />
<Picker.Item label="Radeon Pro WX 4150" value="Radeon Pro WX 4150" />
<Picker.Item label="Radeon Pro WX 5100" value="Radeon Pro WX 5100" />
<Picker.Item label="Radeon Pro WX 7100" value="Radeon Pro WX 7100" />
<Picker.Item label="Radeon Pro WX 9100" value="Radeon Pro WX 9100" />
<Picker.Item label="Radeon Pro WX4100" value="Radeon Pro WX4100" />
<Picker.Item label="Radeon R1E" value="Radeon R1E" />
<Picker.Item label="Radeon R2" value="Radeon R2" />
<Picker.Item label="Radeon R2E" value="Radeon R2E" />
<Picker.Item label="Radeon R3" value="Radeon R3" />
<Picker.Item label="Radeon R4" value="Radeon R4" />
<Picker.Item label="Radeon R4E" value="Radeon R4E" />
<Picker.Item label="Radeon R5 230" value="Radeon R5 230" />
<Picker.Item label="Radeon R5 235" value="Radeon R5 235" />
<Picker.Item label="Radeon R5 235 + HD 7560D Dual" value="Radeon R5 235 + HD 7560D Dual" />
<Picker.Item label="Radeon R5 235X" value="Radeon R5 235X" />
<Picker.Item label="Radeon R5 240" value="Radeon R5 240" />
<Picker.Item label="Radeon R5 310" value="Radeon R5 310" />
<Picker.Item label="Radeon R5 330" value="Radeon R5 330" />
<Picker.Item label="Radeon R5 340" value="Radeon R5 340" />
<Picker.Item label="Radeon R5 420" value="Radeon R5 420" />
<Picker.Item label="Radeon R5 430" value="Radeon R5 430" />
<Picker.Item label="Radeon R5 A10-9600P 4C+6G" value="Radeon R5 A10-9600P 4C+6G" />
<Picker.Item label="Radeon R5 A10-9620P 4C+6G" value="Radeon R5 A10-9620P 4C+6G" />
<Picker.Item label="Radeon R5 A10-9630P 4C+6G" value="Radeon R5 A10-9630P 4C+6G" />
<Picker.Item label="Radeon R5 A6-7480" value="Radeon R5 A6-7480" />
<Picker.Item label="Radeon R5 A6-8500P" value="Radeon R5 A6-8500P" />
<Picker.Item label="Radeon R5 A6-9400 RADEON R5, 6 COMPUTE CORES 2C+4G" value="Radeon R5 A6-9400 RADEON R5, 6 COMPUTE CORES 2C+4G" />
<Picker.Item label="Radeon R5 A6-9500 2C+6G" value="Radeon R5 A6-9500 2C+6G" />
<Picker.Item label="Radeon R5 A6-9500E 2C+4G" value="Radeon R5 A6-9500E 2C+4G" />
<Picker.Item label="Radeon R5 M240" value="Radeon R5 M240" />
<Picker.Item label="Radeon R5 M435" value="Radeon R5 M435" />
<Picker.Item label="Radeon R5 Opteron X3216" value="Radeon R5 Opteron X3216" />
<Picker.Item label="Radeon R5 PRO A10-8730B 4C+6G" value="Radeon R5 PRO A10-8730B 4C+6G" />
<Picker.Item label="Radeon R5 PRO A6-8500B 2C+4G" value="Radeon R5 PRO A6-8500B 2C+4G" />
<Picker.Item label="Radeon R5 PRO A6-8530B 2C+4G" value="Radeon R5 PRO A6-8530B 2C+4G" />
<Picker.Item label="Radeon R5 PRO A6-8570 2C+6G" value="Radeon R5 PRO A6-8570 2C+6G" />
<Picker.Item label="Radeon R5 PRO A6-8570E 2C+4G" value="Radeon R5 PRO A6-8570E 2C+4G" />
<Picker.Item label="Radeon R5 PRO A6-9500 2C+6G" value="Radeon R5 PRO A6-9500 2C+6G" />
<Picker.Item label="Radeon R5 PRO A6-9500B 2C+4G" value="Radeon R5 PRO A6-9500B 2C+4G" />
<Picker.Item label="Radeon R5 PRO A6-9500E 2C+4G" value="Radeon R5 PRO A6-9500E 2C+4G" />
<Picker.Item label="Radeon R5 PRO A8-9600B 4C+6G" value="Radeon R5 PRO A8-9600B 4C+6G" />
<Picker.Item label="Radeon R5E" value="Radeon R5E" />
<Picker.Item label="Radeon R6" value="Radeon R6" />
<Picker.Item label="Radeon R6 A10-8700P" value="Radeon R6 A10-8700P" />
<Picker.Item label="Radeon R6 A8-8600P" value="Radeon R6 A8-8600P" />
<Picker.Item label="Radeon R6 Opteron X3418" value="Radeon R6 Opteron X3418" />
<Picker.Item label="Radeon R6 PRO A10-8700B 4C+6G" value="Radeon R6 PRO A10-8700B 4C+6G" />
<Picker.Item label="Radeon R6 PRO A8-8600B 4C+6G" value="Radeon R6 PRO A8-8600B 4C+6G" />
<Picker.Item label="Radeon R7 + R5 435 Dual A10-9700 RADEON" value="Radeon R7 + R5 435 Dual A10-9700 RADEON" />
<Picker.Item label="Radeon R7 + R7 200 Dual" value="Radeon R7 + R7 200 Dual" />
<Picker.Item label="Radeon R7 + R7 240 Dual" value="Radeon R7 + R7 240 Dual" />
<Picker.Item label="Radeon R7 +8G" value="Radeon R7 +8G" />
<Picker.Item label="Radeon R7 240" value="Radeon R7 240" />
<Picker.Item label="Radeon R7 240 + HD 8570D Dual" value="Radeon R7 240 + HD 8570D Dual" />
<Picker.Item label="Radeon R7 240 + HD 8670D Dual" value="Radeon R7 240 + HD 8670D Dual" />
<Picker.Item label="Radeon R7 250" value="Radeon R7 250" />
<Picker.Item label="Radeon R7 260" value="Radeon R7 260" />
<Picker.Item label="Radeon R7 260X" value="Radeon R7 260X" />
<Picker.Item label="Radeon R7 340" value="Radeon R7 340" />
<Picker.Item label="Radeon R7 360" value="Radeon R7 360" />
<Picker.Item label="Radeon R7 370" value="Radeon R7 370" />
<Picker.Item label="Radeon R7 430" value="Radeon R7 430" />
<Picker.Item label="Radeon R7 450" value="Radeon R7 450" />
<Picker.Item label="Radeon R7 7850A10-7850K" value="Radeon R7 7850A10-7850K" />
<Picker.Item label="Radeon R7 A10 PRO-7800B" value="Radeon R7 A10 PRO-7800B" />
<Picker.Item label="Radeon R7 A10 PRO-7850B" value="Radeon R7 A10 PRO-7850B" />
<Picker.Item label="Radeon R7 A10-7700K" value="Radeon R7 A10-7700K" />
<Picker.Item label="Radeon R7 A10-7800" value="Radeon R7 A10-7800" />
<Picker.Item label="Radeon R7 A10-7850K" value="Radeon R7 A10-7850K" />
<Picker.Item label="Radeon R7 A10-7860K" value="Radeon R7 A10-7860K" />
<Picker.Item label="Radeon R7 A10-7870K" value="Radeon R7 A10-7870K" />
<Picker.Item label="Radeon R7 A10-7890K" value="Radeon R7 A10-7890K" />
<Picker.Item label="Radeon R7 A10-8750" value="Radeon R7 A10-8750" />
<Picker.Item label="Radeon R7 A10-9700 RADEON" value="Radeon R7 A10-9700 RADEON" />
<Picker.Item label="Radeon R7 A10-9700E RADEON" value="Radeon R7 A10-9700E RADEON" />
<Picker.Item label="Radeon R7 A12-9700P RADEON" value="Radeon R7 A12-9700P RADEON" />
<Picker.Item label="Radeon R7 A12-9720P RADEON" value="Radeon R7 A12-9720P RADEON" />
<Picker.Item label="Radeon R7 A12-9730P RADEON" value="Radeon R7 A12-9730P RADEON" />
<Picker.Item label="Radeon R7 A12-9800 RADEON" value="Radeon R7 A12-9800 RADEON" />
<Picker.Item label="Radeon R7 A12-9800E RADEON" value="Radeon R7 A12-9800E RADEON" />
<Picker.Item label="Radeon R7 A8 PRO-7600B" value="Radeon R7 A8 PRO-7600B" />
<Picker.Item label="Radeon R7 A8-7500" value="Radeon R7 A8-7500" />
<Picker.Item label="Radeon R7 A8-7500 4C+6G" value="Radeon R7 A8-7500 4C+6G" />
<Picker.Item label="Radeon R7 A8-7600" value="Radeon R7 A8-7600" />
<Picker.Item label="Radeon R7 A8-7650K" value="Radeon R7 A8-7650K" />
<Picker.Item label="Radeon R7 A8-7670K" value="Radeon R7 A8-7670K" />
<Picker.Item label="Radeon R7 A8-7680" value="Radeon R7 A8-7680" />
<Picker.Item label="Radeon R7 A8-8650" value="Radeon R7 A8-8650" />
<Picker.Item label="Radeon R7 A8-9600 RADEON" value="Radeon R7 A8-9600 RADEON" />
<Picker.Item label="Radeon R7 FX-8800P" value="Radeon R7 FX-8800P" />
<Picker.Item label="Radeon R7 FX-9800P RADEON" value="Radeon R7 FX-9800P RADEON" />
<Picker.Item label="Radeon R7 FX-9830P RADEON" value="Radeon R7 FX-9830P RADEON" />
<Picker.Item label="Radeon R7 G" value="Radeon R7 G" />
<Picker.Item label="Radeon R7 M350" value="Radeon R7 M350" />
<Picker.Item label="Radeon R7 M365X" value="Radeon R7 M365X" />
<Picker.Item label="Radeon R7 M440" value="Radeon R7 M440" />
<Picker.Item label="Radeon R7 M465" value="Radeon R7 M465" />
<Picker.Item label="Radeon R7 Opteron X3421" value="Radeon R7 Opteron X3421" />
<Picker.Item label="Radeon R7 PRO A10-8750B" value="Radeon R7 PRO A10-8750B" />
<Picker.Item label="Radeon R7 PRO A10-8770" value="Radeon R7 PRO A10-8770" />
<Picker.Item label="Radeon R7 PRO A10-8770E" value="Radeon R7 PRO A10-8770E" />
<Picker.Item label="Radeon R7 PRO A10-8850B" value="Radeon R7 PRO A10-8850B" />
<Picker.Item label="Radeon R7 PRO A10-9700" value="Radeon R7 PRO A10-9700" />
<Picker.Item label="Radeon R7 PRO A10-9700B" value="Radeon R7 PRO A10-9700B" />
<Picker.Item label="Radeon R7 PRO A10-9700E" value="Radeon R7 PRO A10-9700E" />
<Picker.Item label="Radeon R7 PRO A12-8800B" value="Radeon R7 PRO A12-8800B" />
<Picker.Item label="Radeon R7 PRO A12-8830B" value="Radeon R7 PRO A12-8830B" />
<Picker.Item label="Radeon R7 PRO A12-8870" value="Radeon R7 PRO A12-8870" />
<Picker.Item label="Radeon R7 PRO A12-8870E" value="Radeon R7 PRO A12-8870E" />
<Picker.Item label="Radeon R7 PRO A12-9800" value="Radeon R7 PRO A12-9800" />
<Picker.Item label="Radeon R7 PRO A12-9800B" value="Radeon R7 PRO A12-9800B" />
<Picker.Item label="Radeon R7 PRO A12-9800E" value="Radeon R7 PRO A12-9800E" />
<Picker.Item label="Radeon R7 PRO A6-9500 2C+6G" value="Radeon R7 PRO A6-9500 2C+6G" />
<Picker.Item label="Radeon R7 PRO A8-8650B" value="Radeon R7 PRO A8-8650B" />
<Picker.Item label="Radeon R7 PRO A8-8670E" value="Radeon R7 PRO A8-8670E" />
<Picker.Item label="Radeon R7 PRO A8-9600" value="Radeon R7 PRO A8-9600" />
<Picker.Item label="Radeon R7E" value="Radeon R7E" />
<Picker.Item label="Radeon R9 255" value="Radeon R9 255" />
<Picker.Item label="Radeon R9 260" value="Radeon R9 260" />
<Picker.Item label="Radeon R9 270 / R7 370" value="Radeon R9 270 / R7 370" />
<Picker.Item label="Radeon R9 270X" value="Radeon R9 270X" />
<Picker.Item label="Radeon R9 280" value="Radeon R9 280" />
<Picker.Item label="Radeon R9 280X" value="Radeon R9 280X" />
<Picker.Item label="Radeon R9 285 / 380" value="Radeon R9 285 / 380" />
<Picker.Item label="Radeon R9 290 / 390" value="Radeon R9 290 / 390" />
<Picker.Item label="Radeon R9 290X / 390X" value="Radeon R9 290X / 390X" />
<Picker.Item label="Radeon R9 295X2" value="Radeon R9 295X2" />
<Picker.Item label="Radeon R9 350" value="Radeon R9 350" />
<Picker.Item label="Radeon R9 360" value="Radeon R9 360" />
<Picker.Item label="Radeon R9 370" value="Radeon R9 370" />
<Picker.Item label="Radeon R9 380" value="Radeon R9 380" />
<Picker.Item label="Radeon R9 380X" value="Radeon R9 380X" />
<Picker.Item label="Radeon R9 390" value="Radeon R9 390" />
<Picker.Item label="Radeon R9 390X" value="Radeon R9 390X" />
<Picker.Item label="Radeon R9 Fury" value="Radeon R9 Fury" />
<Picker.Item label="Radeon R9 Fury + Fury X" value="Radeon R9 Fury + Fury X" />
<Picker.Item label="Radeon R9 M265X" value="Radeon R9 M265X" />
<Picker.Item label="Radeon R9 M270X" value="Radeon R9 M270X" />
<Picker.Item label="Radeon R9 M275X / M375" value="Radeon R9 M275X / M375" />
<Picker.Item label="Radeon R9 M290X" value="Radeon R9 M290X" />
<Picker.Item label="Radeon R9 M295X" value="Radeon R9 M295X" />
<Picker.Item label="Radeon R9 M360" value="Radeon R9 M360" />
<Picker.Item label="Radeon R9 M370X" value="Radeon R9 M370X" />
<Picker.Item label="Radeon R9 M375X" value="Radeon R9 M375X" />
<Picker.Item label="Radeon R9 M380" value="Radeon R9 M380" />
<Picker.Item label="Radeon R9 M390X" value="Radeon R9 M390X" />
<Picker.Item label="Radeon R9 M395" value="Radeon R9 M395" />
<Picker.Item label="Radeon R9 M395X" value="Radeon R9 M395X" />
<Picker.Item label="Radeon R9 M470X" value="Radeon R9 M470X" />
<Picker.Item label="Radeon RX 460" value="Radeon RX 460" />
<Picker.Item label="Radeon RX 470" value="Radeon RX 470" />
<Picker.Item label="Radeon RX 480" value="Radeon RX 480" />
<Picker.Item label="Radeon RX 540" value="Radeon RX 540" />
<Picker.Item label="Radeon RX 550" value="Radeon RX 550" />
<Picker.Item label="Radeon RX 5500" value="Radeon RX 5500" />
<Picker.Item label="Radeon RX 5500 XT" value="Radeon RX 5500 XT" />
<Picker.Item label="Radeon RX 550X" value="Radeon RX 550X" />
<Picker.Item label="Radeon RX 560" value="Radeon RX 560" />
<Picker.Item label="Radeon RX 5600 XT" value="Radeon RX 5600 XT" />
<Picker.Item label="Radeon RX 560X" value="Radeon RX 560X" />
<Picker.Item label="Radeon RX 570" value="Radeon RX 570" />
<Picker.Item label="Radeon RX 5700" value="Radeon RX 5700" />
<Picker.Item label="Radeon RX 5700 XT" value="Radeon RX 5700 XT" />
<Picker.Item label="Radeon RX 5700 XT 50th Anniversary" value="Radeon RX 5700 XT 50th Anniversary" />
<Picker.Item label="Radeon RX 580" value="Radeon RX 580" />
<Picker.Item label="Radeon RX 580 2048SP" value="Radeon RX 580 2048SP" />
<Picker.Item label="Radeon RX 580X" value="Radeon RX 580X" />
<Picker.Item label="Radeon RX 590" value="Radeon RX 590" />
<Picker.Item label="Radeon RX 640" value="Radeon RX 640" />
<Picker.Item label="Radeon RX Vega 10" value="Radeon RX Vega 10" />
<Picker.Item label="Radeon RX Vega 11" value="Radeon RX Vega 11" />
<Picker.Item label="Radeon RX Vega 11 PRD" value="Radeon RX Vega 11 PRD" />
<Picker.Item label="Radeon RX Vega 56" value="Radeon RX Vega 56" />
<Picker.Item label="Radeon RX Vega 64" value="Radeon RX Vega 64" />
<Picker.Item label="Radeon RX Vega 8" value="Radeon RX Vega 8" />
<Picker.Item label="Radeon RX Vega M GH" value="Radeon RX Vega M GH" />
<Picker.Item label="Radeon RX Vega M GL" value="Radeon RX Vega M GL" />
<Picker.Item label="Radeon RX Vega11" value="Radeon RX Vega11" />
<Picker.Item label="Radeon Sky 500" value="Radeon Sky 500" />
<Picker.Item label="Radeon TM R9 A360" value="Radeon TM R9 A360" />
<Picker.Item label="Radeon VII" value="Radeon VII" />
<Picker.Item label="Radeon Vega 10" value="Radeon Vega 10" />
<Picker.Item label="Radeon Vega 10 Mobile" value="Radeon Vega 10 Mobile" />
<Picker.Item label="Radeon Vega 11" value="Radeon Vega 11" />
<Picker.Item label="Radeon Vega 3" value="Radeon Vega 3" />
<Picker.Item label="Radeon Vega 3 Mobile" value="Radeon Vega 3 Mobile" />
<Picker.Item label="Radeon Vega 6" value="Radeon Vega 6" />
<Picker.Item label="Radeon Vega 8" value="Radeon Vega 8" />
<Picker.Item label="Radeon Vega 8 Mobile" value="Radeon Vega 8 Mobile" />
<Picker.Item label="Radeon Vega 9" value="Radeon Vega 9" />
<Picker.Item label="Radeon Vega Frontier Edition" value="Radeon Vega Frontier Edition" />
<Picker.Item label="RadeonT R5 430" value="RadeonT R5 430" />
<Picker.Item label="RadeonT R7 450" value="RadeonT R7 450" />
<Picker.Item label="Red Hat QXL controller" value="Red Hat QXL controller" />
<Picker.Item label="Ryzen 5 2500U with Radeon Vega" value="Ryzen 5 2500U with Radeon Vega" />
<Picker.Item label="Ryzen 7 2700U with Radeon Vega" value="Ryzen 7 2700U with Radeon Vega" />
<Picker.Item label="SUMO 9640" value="SUMO 9640" />
<Picker.Item label="SUMO 9644" value="SUMO 9644" />
<Picker.Item label="SUMO 964A" value="SUMO 964A" />
<Picker.Item label="Seria Radeon HD 7700" value="Seria Radeon HD 7700" />
<Picker.Item label="TENSOR 1.0 Driver Intel HD 630" value="TENSOR 1.0 Driver Intel HD 630" />
<Picker.Item label="TITAN RTX" value="TITAN RTX" />
<Picker.Item label="TITAN V" value="TITAN V" />
<Picker.Item label="TITAN Xp COLLECTORS EDITION" value="TITAN Xp COLLECTORS EDITION" />
<Picker.Item label="Tesla C2050" value="Tesla C2050" />
<Picker.Item label="Tesla C2050 / C2070" value="Tesla C2050 / C2070" />
<Picker.Item label="Tesla C2070" value="Tesla C2070" />
<Picker.Item label="Tesla C2075" value="Tesla C2075" />
<Picker.Item label="Tesla M60" value="Tesla M60" />
<Picker.Item label="Tesla P100-PCIE-16GB" value="Tesla P100-PCIE-16GB" />
<Picker.Item label="Tesla V100-SXM2-16GB" value="Tesla V100-SXM2-16GB" />

        
       
      
      </Picker>

      <Text>Chosse your ram</Text>
      <Picker
        selectedValue={ram}
        style={{ height: 50, width: 238 }}
        onValueChange={(itemValue, itemIndex) => setram(itemValue)}
      >
        <Picker.Item label="1GB" value="1GB" />
        <Picker.Item label="2GB" value="2GB" />
        <Picker.Item label="3GB" value="3GB" />
        <Picker.Item label="4GB" value="4GB" />
        <Picker.Item label="5GB" value="5GB" />
        <Picker.Item label="6GB" value="6GB" />
        <Picker.Item label="7GB" value="7GB" />
        <Picker.Item label="8GB" value="8GB" />
        <Picker.Item label="9GB" value="9GB" />
        <Picker.Item label="10GB" value="10GB" />
        <Picker.Item label="11GB" value="11GB" />
        <Picker.Item label="12GB" value="12GB" />
        <Picker.Item label="13GB" value="13GB" />
        <Picker.Item label="14GB" value="14GB" />
        <Picker.Item label="15GB" value="15GB" />
        <Picker.Item label="16GB" value="16GB" />
      </Picker>
      <Button onPress={cpuscoreHandler(cpu, gpu, ram)}>test</Button>
     <Text>cpuscore : {cpuscorefinl}</Text>
     <Text>gpuscore : {gpuscorefinl}</Text>
     <Text>ramscore : {ramscorefinl}</Text>

    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  score: {
    width: 356,
    alignItems: 'center',
    marginTop: 8
  },
    container: {
    //  flex: 1,
      
     // alignItems: "center",
    
      backgroundColor: 'white',
      borderRadius: 6,
      padding: 10,
      width: 256,
      marginTop: 10
    },
    screen: {
      alignItems: 'center',
      flex: 1,
    width: 256,
    marginBottom: 400
    }
  });
  