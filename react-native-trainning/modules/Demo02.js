// import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
  Image,
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
  Alert
} from "react-native";

export default function Demo02() {
  return (
    <View style={styles.container}>
      <Text style={{ backgroundColor: "green", textAlign: "center" }}>
        Hello React Native2!
      </Text>
      <Text style={{ backgroundColor: "yellow" }}>Let's go!</Text>
      <View style={styles.imageWrapper}>
        <Image
          style={styles.image}
          source={require("../assets/images/robot-prod.png")}
        />
        <Image
          style={styles.image}
          source={{
            uri:
              "https://facebook.github.io/react-native/docs/assets/favicon.png"
          }}
        />
        <Image
          style={styles.image}
          source={{
            uri:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=="
          }}
        />
      </View>
      <TextInput
        style={{ width: 200, height: 40 }}
        placeholder="请输入"
        onChangeText={text => Alert.alert("change: " + text)}
      />
      <Button
        onPress={() => {
          Alert.alert("You tapped the button!");
        }}
        title="Press Me"
        color="red"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60
  },
  imageWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    marginTop: 20,
    width: 60,
    height: 60
  }
});
