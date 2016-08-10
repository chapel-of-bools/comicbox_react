'use strict';
import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text
} from 'react-native'

var styles = {
  container: {
    marginTop: 65
  },
  heading: {
    backgroundColor: '#F8F8F8',
  },
  separator: {
    height: 1,
    backgroundColor: '#DDDDDD'
  },
  image: {
    borderWidth: 1,
    borderColor: 'black',
    margin: 3,
    alignSelf: 'center',
    width: 200,
    height: 312
  },
  title: {
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    margin: 5,
    color: '#656565'
  },
  description: {
    alignSelf: 'center',
    fontSize: 18,
    color: '#656565'
  }
};

class ComicView extends Component {
  render() {
    var book = this.props.book;
    return (
      <View style={styles.container}>
        <Image style={styles.image}
          source={{ uri: book.coverUrl}}/>
        <View style={styles.heading}>
          <Text style={styles.title}>{book.title}</Text>
          <Text style={styles.description}>Issue #{book.issueNo}</Text>
          <View style={styles.separator}/>
        </View>
        <Text style={styles.description}>Written by {book.author}</Text>
        <Text style={styles.description}>Drawn by {book.artist}</Text>
      </View>
    );
  }
}

module.exports = ComicView;
