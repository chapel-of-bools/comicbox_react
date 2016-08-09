'use strict';
import React, {Component} from 'react';
import {
  AppRegistry,
  NavigatorIOS,
  View,
  Text
} from 'react-native';
var Home = require('./Home');

var styles = {
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
}

class ComicBoxApp extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Comic Box',
          component: Home
        }}/>
    );
  }
}

AppRegistry.registerComponent('ComicBox', function() { return ComicBoxApp });
