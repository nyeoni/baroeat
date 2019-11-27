import React, {Component} from "react";
import {View, Text, TouchableOpacity, ScrollView, StyleSheet} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";

export default class ReservationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reservations: [
        {
          id: 0,
          title: "마슬랜 치킨",
          color: "#5600ff"
        }, {
          id: 1,
          title: "부산스시",
          color: "grey"
        }
      ]
    };
  }
  render() {
    let _reservations = [];
    for (let j = 0; j < this.state.reservations.length; j++) {
      _reservations.push(
        <TouchableOpacity key={this.state.reservations[j].id} style={styles.wrapButton}>
          <Text
            style={[
            styles.rTitle, {
              color: this.state.reservations[j].color
            }
          ]}>
            {this.state.reservations[j].title}
          </Text>
        </TouchableOpacity>
      );
    }
    return (
      <ScrollView>
        {_reservations}
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
  wrapButton: {
    width: wp("100%"),
    height: hp("8%"),
    paddingLeft: wp("8%"),
    justifyContent: "center",
    borderBottomWidth: 0.5,
    borderColor: "#ccc"
  },
  rTitle: {
    fontSize: 16
  }
});
