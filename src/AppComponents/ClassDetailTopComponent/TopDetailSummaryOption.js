import React, { Component } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import TopDetailSummaryItem from "./TopDetailSummaryItem";
import data from "Data/classDetailData";

export default class DetailSummaryOption extends Component {
  state = {
    data: data.summaryData
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          horizontal={true}
          data={this.state.data}
          renderItem={({ item }) => (
            <TopDetailSummaryItem title={item.title} desc={item.desc} />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 16,
    width: "100%",
    paddingBottom: 18,
    paddingTop: 18,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: "#edeff0",
    borderBottomColor: "#edeff0"
  }
});