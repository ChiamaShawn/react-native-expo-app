/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from "react";
import Expo from "expo";
import Ionicons from "@expo/vector-icons/fonts/Ionicons.ttf";
import App from "./src/App";

const { AppLoading, Font } = Expo;

export default class ExpoApp extends App {
  state = {
    isReady: false
  };

  componentWillMount() {
    this.loadFonts();
  }

  async loadFonts() {
    await Font.loadAsync({
      Ionicons
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return super.render();
  }
}
