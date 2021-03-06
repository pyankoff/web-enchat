import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactGA, { OutboundLink } from 'react-ga'

import Constants from './Constants'
import logo from './static/icon.png'
import itunes from './static/app_store.svg'
import gplay from './static/google_play.png'
import Privacy from './components/Privacy'
import Terms from './components/Terms'

ReactGA.initialize('UA-57252107-15');
ReactGA.pageview(window.location.pathname + window.location.search)

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
          Enchat
        </Text>
        <Text style={{fontSize: 20, lineHeight: 32, fontWeight: '400', marginVertical: 15, marginLeft: 2, marginRight: 20,}}>
          Chat and learn English
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10,}}>
          <OutboundLink
            eventLabel="AppStore"
            to='https://itunes.apple.com/app/id1403194839&referrer=www'
            target="_blank">
            <Image
              source={itunes}
              style={{width: 120, height: 40}}
            />
          </OutboundLink>
          <OutboundLink
            eventLabel="GooglePlay"
            to='https://play.google.com/store/apps/details?id=app.enchat&referrer=www'
            target="_blank">
            <Image
              source={gplay}
              style={{width: 156, height: 50}}
            />
          </OutboundLink>
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
