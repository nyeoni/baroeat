import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class LoginScreen extends Component {

  static navigationOptions = {
    header: null
  };

  _doLogin() {
    this
      .props
      .navigation
      .replace('TabNavigator')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleArea}>
          <Text style={styles.title}>바로잇</Text>
        </View>
        <View style={styles.formArea}>
          <TextInput style={styles.textForm} placeholder={"아이디"}/>
          <TextInput style={styles.textForm} placeholder={"비밀번호"}/>
        </View>
        <View style={styles.buttonArea}>
          <TouchableOpacity
            style={styles.button}
            onPress={this
            ._doLogin
            .bind(this)}>
            <Text style={styles.buttonTitle}>로그인</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingLeft: wp("10%"),
    paddingRight: wp("10%"),
    justifyContent: "center"
  },
  titleArea: {
    width: "100%",
    padding: wp("10%"),
    alignItems: "center"
  },
  title: {
    fontSize: wp("10%")
  },
  formArea: {
    width: "100%",
    paddingBottom: wp("10%")
  },
  textForm: {
    borderWidth: 0.5,
    borderColor: "#888",
    borderRadius: 10,
    width: "100%",
    height: hp("5%"),
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 5
  },
  buttonArea: {
    width: "100%",
    height: hp("5%")
  },
  button: {
    backgroundColor: "#5600ff",
    width: "100%",
    height: "100%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonTitle: {
    color: "white"
  }
});
