import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, Platform, TouchableOpacity } from 'react-native';
import {Audio} from 'expo-av';
import { useEffect, useState } from 'react';
import Header from './src/components/header';
import Timer from './src/components/timer';
import Enlace from './src/components/footer';

const backgroundColors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"];

export default function App() {

  const [isRunning, setIsRunning] = useState(false);
  const [clock, setClock] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("WORK" | "SHORT" | "LONG");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
  
    if (isActive) {
      interval = setInterval(() => {
        setClock(clock - 1 );
      }, 1 );
    } else {
      clearInterval(interval);
    };

   if (clock === 0) {
    setIsActive(false);
    setIsRunning((prev) => !prev);
    setClock(isRunning ? 300 : 1500);
   }
  
    return () => clearInterval(interval);
  }, [isActive, clock]);

function btnStartStop() {
  playSound1();
  setIsActive(!isActive);
};

async function playSound1() {
  const {sound} = await Audio.Sound.createAsync(
    require('./assets/off-click.mp3')
  )
  await sound.playAsync();
};



  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: backgroundColors[currentTime] }]}>
      <View style={styles.valid}>
        <Text style={styles.text}>Contador</Text>
        <Header
          currentTime={currentTime}
          setClock={setClock}
          setCurrentTime={setCurrentTime}
        />
        <Timer
          clock={clock}
        />
      <TouchableOpacity onPress={btnStartStop} style={styles.btnSt}>
          <Text style={styles.btnTxt}>{isActive ? 'STOP' : 'START'}</Text>
        </TouchableOpacity>
        <Enlace/>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 32,
    fontWeight: "bold"
  },
  valid: {
    paddingTop: Platform.OS === "android" && 30,
    flex:1,
    paddingHorizontal: 15,
  },
  btnTxt:{
color: 'white',
fontWeight: 'bold'
  },
  btnSt:{
    backgroundColor: '#333333',
    padding: 15,
    marginTop: 15,
    borderRadius: 15,
    alignItems: 'center',
  }
});
