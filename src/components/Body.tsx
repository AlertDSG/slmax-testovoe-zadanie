import React from 'react';
import {Header} from './Header';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Todo} from './Todo';
import {AddItemForm} from './AddItemForm';

export const Body = () => {
  return (
    <View>
      <Header />
      <ScrollView style={styles.container}>
        <Todo title={'bla'} content={'scscscscscscscsc'} />
        <AddItemForm />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
  },
});
