import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export const Header = () => {
  return (
    <View style={styles.body}>
      <Image
        source={require('../assets/images/Rectangle_4.png')}
        style={[styles.colorItem, {zIndex: 2}]}
      />
      <Image
        source={require('../assets/images/Rectangle_5.png')}
        style={[styles.colorItem, {zIndex: 1, height: 192}]}
      />
      <View />
      <Text style={styles.text}>Заметки</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    height: 200,
    width: 396,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorItem: {
    position: 'absolute',
    width: 396,
    height: 200,
  },
  text: {
    color: 'white',
    fontSize: 28,
    lineHeight: 32.87,
    zIndex: 3,
  },
});
