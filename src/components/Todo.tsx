import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

type TodoType = {
  title: string;
  content: string;
};

export const Todo: React.FC<TodoType> = ({title, content}) => {
  return (
    <View style={styles.body}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
      <Image source={require('../assets/images/arrowcircleright.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    position: 'relative',
    width: 333,
    height: 37,
    flexDirection: 'row',
    paddingHorizontal: 17,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#D2D2D2',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 16.44,
  },
  content: {
    fontWeight: '300',
    fontSize: 8,
    lineHeight: 9.39,
  },
});
