import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Alert, StyleSheet} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class SettingScreen extends Component {
  _navigate() {
    this
      .props
      .navigation
      .navigate("AccountScreen");
  }

  _checkLogout() {
    Alert.alert("로그아웃", "정말 로그아웃 하실건가요?", [
      {
        text: '로그아웃',
        onPress: this
          ._logout
          .bind(this)
      }, {
        text: '취소',
        onPress: () => null
      }
    ], {cancelable: true})
  }

  _logout() {
    const resetAction = StackActions.reset({
      index: 0,
      key: null,
      actions: [NavigationActions.navigate({routeName: 'LoginScreen'})]
    });
    this
      .props
      .navigation
      .dispatch(resetAction);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.wrapButton}
          onPress={this
          ._navigate
          .bind(this)}>
          <Text style={styles.sTitle}>개인정보 수정</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.wrapButton}
          onPress={this
          ._checkLogout
          .bind(this)}>
          <Text style={styles.sTitle}>로그아웃</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  wrapButton: {
    width: wp("100%"),
    height: hp("8%"),
    paddingLeft: wp("8%"),
    justifyContent: "center",
    borderBottomWidth: 0.5,
    borderColor: "#ccc"
  },
  sTitle: {
    fontSize: 16,
    color: "grey"
  }
});
