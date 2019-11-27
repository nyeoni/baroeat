import React, {Component} from "react";
import {View, Text, ScrollView, TouchableOpacity, StyleSheet} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";

export default class SpecialScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      specials: [
        {
          id: 0,
          title: "먹으면 먹을 수록,\n캐시백 이벤트",
          color: "#8900ff"
        }, {
          id: 1,
          title: "킹콩 부대찌개가 만원?",
          color: "#ff6f61"
        }, {
          id: 2,
          title: "은화수 식당,\n지금 예약하면 15% 할인?",
          color: "#1abc9c"
        }
      ]
    };
  }

  render() {
    let _specials = [];
    for (let i = 0; i < this.state.specials.length; i++) {
      _specials.push(
        <TouchableOpacity
          key={this.state.specials[i].id}
          style={[
          styles.button, {
            backgroundColor: this.state.specials[i].color
          }
        ]}>
          <Text style={styles.buttonTitle}>{this.state.specials[i].title}</Text>
        </TouchableOpacity>
      );
    }
    return (
      <ScrollView>
        <View style={styles.container}>{_specials}</View>
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
  button: {
    width: "100%",
    height: hp("30%"),
    borderRadius: 10,
    justifyContent: "center",
    paddingLeft: 20,
    marginBottom: 20
  },
  buttonTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white"
  }
});
