import React, {useState} from 'react';
import {View, TextInput, Animated, Button, StyleSheet} from 'react-native';

const App = () => {
  const [rotationValue, setRotationValue] = useState(null);
  const [rotation] = useState(new Animated.Value(0));

  const rotateImage = () => {
    const degrees = parseInt(rotationValue);
    if (!isNaN(degrees)) {
      Animated.timing(rotation, {
        toValue: degrees,
        duration: 2000,
        useNativeDriver: true,
      }).start();
    }
  };

  const animatedStyle = {
    transform: [
      {
        rotate: rotation.interpolate({
          inputRange: [0, 360],
          outputRange: ['0deg', '360deg'],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('./Compoents/Nature.jpeg')}
        style={[styles.image, animatedStyle]}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter rotation angle "
        onChangeText={text => setRotationValue(text)}
        value={rotationValue}
        keyboardType="numeric"
      />
      <Button title="Rotate" onPress={rotateImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF8DC',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 70,
    borderRadius: 250,
    borderWidth: 10,
    borderColor: '#7FFFD4',
  },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
    width: 200,
    textAlign: 'center',
  },
});

export default App;
