import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Constants from './Constants'
import logo from './static/icon_transparent_512.png'
import itunes from './static/app_store.svg'
import gplay from './static/google_play.png'
import Privacy from './components/Privacy'
import Terms from './components/Terms'

const Link = props => (
  <Text
    {...props}
    accessibilityRole="link"
    style={StyleSheet.compose(
        styles.link,
        props.style
    )}
  />
);

const Landing = () => (
  <View style={styles.app}>
    <View style={{maxWidth: 740, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap'}}>
      <Image
        source={logo}
        style={{width: 260, height: 260,}}
      />

      <View style={{flex: 1, minWidth: 300, alignItems: 'flex-start', paddingHorizontal: 10, }}>
        <Text
          accessibilityRole="heading"
          style={{fontSize: 72, fontWeight: '200', }}>
          Campfire
        </Text>
        <Text style={{fontSize: 20, lineHeight: 32, fontWeight: '400', marginVertical: 15, marginLeft: 2, marginRight: 20,}}>
          Discover interesting topics and join the conversation
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10,}}>
          <Image
            accessibilityRole="link"
            href='https://itunes.apple.com/app/id1451465193'
            source={itunes}
            style={{width: 120, height: 40}}
          />
          <Image
            accessibilityRole="link"
            href={'https://play.google.com/store/apps/details?id=app.campfire'}
            source={gplay}
            style={{width: 156, height: 50}}
          />
        </View>
      </View>
    </View>
  </View>
)

class App extends Component {
  render() {
    return (
      <Router>
        <View style={styles.container}>
          <Route exact path="/" component={Landing} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/terms" component={Terms} />
        </View>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Constants.back,
    flex: 1,
  },
  app: {
    flex: 1,
    marginHorizontal: 'auto',
    backgroundColor: Constants.back,
    maxWidth: 920,
    justifyContent: 'center',
  },
  logo: {
    height: 80
  },
  header: {
    padding: 20
  },
  title: {
    color: Constants.text,
    fontWeight: "bold",
    fontSize: "2rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  text: {
    color: Constants.text,
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  link: {
    color: "#1B95E0"
  },
  code: {
    fontFamily: "monospace, monospace"
  }
});

export default App;
