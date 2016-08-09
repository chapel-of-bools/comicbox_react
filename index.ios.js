'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
  Text,
  View
} from 'react-native';

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

class ComicBox extends Component {
  render() {
    return <Text style={styles.text}>"Comic Box"</Text>
  }
}


AppRegistry.registerComponent('ComicBox', () => ComicBox);
