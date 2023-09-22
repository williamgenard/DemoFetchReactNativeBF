import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import FirstComponent from './src/components/FirstComponent';
import SecondComponent from './src/components/SecondComponent';
import MemeItem from './src/components/MemeItem';

export default function App() {

  const [counter, setCounter] = useState(0)
  const [showFirstComponent, setShowFirstComponent] = useState(true)

  const [memes, setMemes] = useState([])

  useEffect(() => {
    console.log("hello use effect")
  }, [counter, showFirstComponent])

  useEffect(() => {
    fetch("https://meme-api.com/gimme/10")
      .then(res => res.json())
      .then(data => {
        setMemes(data.memes)
      })
  }, [])

  return (
    <View style={styles.container}>
      <Text>{counter}</Text>
      <Button title='+' onPress={() => setCounter(c => c + 1)}></Button>
      <Button title='Switch component' onPress={() => setShowFirstComponent(c => !c)}></Button>
      {showFirstComponent ? <FirstComponent/> : <SecondComponent/>}
      <FlatList
        data={memes}
        renderItem={({ item }) => (
          <MemeItem meme={item}></MemeItem>
        )}
        keyExtractor={item => item.postLink}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
