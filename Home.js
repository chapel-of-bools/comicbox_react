'use strict';
import React, {Component} from 'react';
var ComicList = require('./ComicList');

import {
  NavigatorIOS,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicator,
  Image
} from 'react-native'

var styles = {
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 25,
    textAlign: 'center'
  },
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC'
  },
    image: {
    margin: 10,
    width: 217,
    height: 157
  }
}

let data = [
  { title: 'Swamp Thing',
    issue_no: 35,
    author: 'Alan Moore'
}
]

class Home extends Component {
  showComics(){
    console.log(this.props);
    this.props.navigator.push({
      title: 'Comics',
      component: ComicList,
      passProps: {data: data}
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Comic Box</Text>
        <Image source={require('./resources/pow.jpg')} style={styles.image}/>
        <TouchableHighlight style={styles.button}
          underlayColor='#99d9f4'
          onPress={this.showComics.bind(this)}>
            <Text style={styles.buttonText}>View Comic Collection</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button}
          underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Add New Comic</Text>
        </TouchableHighlight>
    </View>
    );
  }
}

module.exports = Home;
