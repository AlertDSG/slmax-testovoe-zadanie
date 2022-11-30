import React from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';

export const AddItemForm = () => {
  return (
    <View style={styles.body}>
      {/*<View style={styles.container}>*/}
      <TextInput
        style={styles.inputTitle}
        placeholder={'Название'}
        placeholderTextColor="#000000"
      />
      <View style={styles.inputBody}>
        <TextInput
          style={styles.inputDescription}
          placeholder={'Текст описание'}
        />
        <Image source={require('../assets/images/Arrow.png')} />
      </View>

      <View style={styles.pseudo} />
      {/*</View>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    position: 'relative',
    width: 333,
    height: 82,
    paddingHorizontal: 17,
    paddingVertical: 17,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#D2D2D2',
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  inputTitle: {
    width: '100%',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 16,
    paddingLeft: 4,
    color: '#000000',
  },
  inputDescription: {
    fontWeight: '300',
    fontSize: 10,
    lineHeight: 14,
    paddingLeft: 4,
  },
  container: {
    width: '100%',
    marginHorizontal: 17,
    marginVertical: 40,
  },
  pseudo: {
    position: 'absolute',
    left: 17,
    right: 17,
    height: 1,
    top: 40,
    backgroundColor: '#D2D2D2',
  },
  inputBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
