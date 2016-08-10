'use strict';
import React, {Component} from 'react';
var ComicList = require('./ComicList');
import * as firebase from 'firebase';

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
    image: {
    margin: 10,
    width: 217,
    height: 157
  }
}

const firebaseConfig = {
  apiKey: "AIzaSyDAvRg1RhFoFJNhBfbVu0zyn9By2zm2wTk",
  authDomain: "comicbox-60a41.firebaseapp.com",
  databaseURL: "https://comicbox-60a41.firebaseio.com",
  storageBucket: "comicbox-60a41.appspot.com",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

let data = [
  { id: 1,
    title: "The Vault of Horror",
    issueNo: 14,
    coverUrl: "https://d1466nnw0ex81e.cloudfront.net/n_iv/600/769927.jpg",
    author: "Johnny Craig",
    artist: "Johnny Craig"
  },
  { id: 2,
    title: "Judge Dredd",
    issueNo: 10,
    coverUrl: "https://s-media-cache-ak0.pinimg.com/564x/4f/40/94/4f4094402f98fab07c64b5523f2c0a02.jpg",
    author: "John Wagner",
    artist: "Brian Bolland"
  }
]

class Home extends Component {
  constructor(props) {
    super(props);
    this.comicsRef = firebaseApp.database().ref('/comics');
    this.state = { data: [] }
  }
  listenForComics(comicsRef) {

    comicsRef.on('value', snap => {
      var comics = [];
      snap.forEach(child => {
        comics.push({
          title: child.val().title,
          artist: child.val().artist,
          author: child.val().author,
          coverUrl: child.val().coverUrl,
          issueNo: child.val().issueNo,
          _key: child.key
        });
      })
      this.setState({
        data: comics
      });
    })
    // comicsRef.on('value', (snap) => {
    //   console.log(snap);
      // snap.forEach((child) => {
      //   console.log(child);
      //
    //   });
    //
    //   console.log(this);

    // })
  }

  componentDidMount(){
    this.listenForComics(this.comicsRef);
  }

  showComics(){
    this.props.navigator.push({
      title: 'All Comics',
      component: ComicList,
      passProps: {data: this.state.data}
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
