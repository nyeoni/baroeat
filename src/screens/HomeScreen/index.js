import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class HomeScreen extends Component {
  _navigate() {
    this
      .props
      .navigation
      .navigate("DetailScreen");
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>바로잇님,</Text>
          <Text style={styles.title}>오늘은 어떤 식당을 예약할까요?</Text>
          <View style={styles.formArea}>
            <TextInput style={styles.textForm} placeholder={"# 어떤 식당을 검색할까요?"}/>
          </View>
          <Text style={styles.fTitle}>주변 식당 추천</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={this
            ._navigate
            .bind(this)}>
            <Text style={styles.buttonTitle}>마슬랜 치킨</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp("5%"),
    backgroundColor: "white"
  },
  title: {
    fontSize: 26,
    fontWeight: "500",
    margin: 5
  },
  formArea: {
    width: "100%",
    paddingBottom: wp("10%")
  },
  textForm: {
    fontSize: 25,
    borderBottomWidth: 1,
    borderBottomColor: "#5600ff",
    width: "100%",
    height: hp("5%"),
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 30
  },
  button: {
    width: "100%",
    height: hp("30%"),
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#8900ff"
  },
  buttonTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white"
  },
  fTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 20
  }
});
