import React, {Component} from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";
import {Ionicons} from "@expo/vector-icons";

export default class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picker: 0,
      count: 13,
      menu: [
        {
          id: 0,
          title: "한상치탕"
        }, {
          id: 1,
          title: "한상치킨"
        }, {
          id: 2,
          title: "치즈범벅"
        }, {
          id: 3,
          title: "양념치즈범벅"
        }, {
          id: 4,
          title: "고추깐풍기"
        }, {
          id: 5,
          title: "고추똥집튀김"
        }
      ]
    };
  }
  render() {
    let _menu = [];
    for (let k = 0; k < this.state.menu.length; k++) {
      _menu.push(
        <TouchableOpacity key={this.state.menu[k].id}>
          <Text
            style={{
            fontSize: 20,
            margin: 10,
            color: "grey"
          }}>
            <Ionicons name="ios-add-circle-outline" size={20} color={"#CCC"}/> {this.state.menu[k].title}
          </Text>
        </TouchableOpacity>
      );
    }

    let _count = [];
    for (let m = 1; m <= this.state.count; m++) {
      _count.push({label: `${m}`, value: `${m}`, key: m});
    }

    return (
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>마슬랜 치킨</Text>
          <Text style={styles.subText}>서울특별시 서대문구 남가좌동</Text>
        </View>
        <Image
          style={styles.mainImg}
          source={require("./assets/masulan.jpg")}
        />
        <View style={styles.container}>
          <Text style={styles.mTitle}>메뉴 소개</Text>
          <ScrollView style={styles.menuItem}>{_menu}</ScrollView>
          <Text style={styles.mTitle}>인원 선택</Text>
          <View style={styles.picker}>
            <RNPickerSelect
              placeholder={{
                label: "0",
                value: 0,
                key: 0
              }}
              onValueChange={value => {
                this.setState({ picker: value });
              }}
              items={_count}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              this.setState({
                count: this.state.count - this.state.picker,
                picker: 0
              })
            }
          >
            <Text style={styles.buttonTitle}>
              {this.state.count}석 예약 가능
            </Text>
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
  headerContainer: {
    margin: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  headerText: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 5
  },
  subText: {
    fontSize: 16,
    fontWeight: "600",
    color: "grey",
    marginBottom: 5
  },
  mainImg: {
    width: "100%",
    height: 300
  },
  mTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20
  },
  menuItem: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    height: 200,
    marginBottom: 20
  },
  button: {
    backgroundColor: "#5600ff",
    width: "100%",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonTitle: {
    color: "white",
    fontSize: 16
  },
  picker: {
    borderColor: "#CCC",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    paddingVertical: 10,
    marginBottom: 20
  }
});
