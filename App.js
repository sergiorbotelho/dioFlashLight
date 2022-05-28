import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';
const App = () => {
  const [toggle, setToggle] = useState(false);

  const handChangeToggle = () => setToggle(oldToggle => !oldToggle);

  useEffect(() => {
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(() => {
    const subscription = RNShake.addListener(() => {
      setToggle(oldToggle => !oldToggle);
    });
    return () => subscription.remove();
  }, []);

  return (
    <View style={toggle ? style.containerLight : style.container}>
      <TouchableOpacity onPress={handChangeToggle}>
        <Image
          style={toggle ? style.lightingOn : style.lightingOff}
          source={
            toggle
              ? require('./assets/icons/png-clipart-ghost-ghost.png')
              : require('./assets/icons/logo-nautico-2048-lighting.png')
          }
        />
        <View>
          <Text style={style.fontText}>LA VEM A SERIE C</Text>
        </View>
        <Image
          style={style.dioLogo}
          source={
            toggle
              ? require('./assets/icons/logo-nautico-2048.png')
              : require('./assets/icons/lanterna.png')
          }
        />
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightingOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
  },
  lightingOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    // tintColor: 'white',
    width: 250,
    height: 250,
    // display: 'none',
  },
  dioLogo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
  },
  fontText: {
    width: '100%',
    fontSize: 30,
    color: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
