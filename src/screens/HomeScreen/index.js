import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class HomeScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp('5%'),
    backgroundColor: 'white'
  }
})
