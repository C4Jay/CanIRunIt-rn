import React, { useState } from "react";
import { View, Text, Picker, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const cpus = [{label: 'core i5', value: 'core i5'},{label: 'i3', value: 'i3'}]

export default function Pickercomp() {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View style={styles.container}>
    <Text>Chosse your cpu</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 238 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
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
        selectedValue={selectedValue}
        style={{ height: 50, width: 238 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
     
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
        
       
      
      </Picker>

      <Text>Chosse your ram</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 238 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>


    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    //  flex: 1,
      
     // alignItems: "center",
      backgroundColor: 'white',
      borderRadius: 6,
      padding: 10,
      width: 256
    }
  });
  