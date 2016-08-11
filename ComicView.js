'use strict';
import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableHighlight,
  AlertIOS
} from 'react-native'
var NewForm = require('./NewForm');
var EditForm = require('./EditForm');

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
    margin: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  deleteButton: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FF0034',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    margin: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
};

class ComicView extends Component {
  warnMessage(){
    AlertIOS.alert(
 'Confirm',
 'Are you sure you wish to delete this comic?',
 [
   {text: 'Cancel', onPress: () => console.log('Cancelled'), style: 'cancel'},
   {text: 'Delete', onPress: () => console.log('Delete Pressed')},
 ],
);
  }
  editComic(){
    let {book, handleEdit} = this.props
    this.props.navigator.push({
      title: "Edit Comic",
      component: EditForm,
      passProps: {book: book, handleEdit: handleEdit}
    })
  }
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
        <TouchableHighlight style={styles.button}
          underlayColor='#99d9f4'
          onPress={this.editComic.bind(this)}>
            <Text style={styles.buttonText}>Edit Comic</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.deleteButton}
          underlayColor='#FF0034'
          onPress={this.warnMessage.bind(this)}>
            <Text style={styles.buttonText}>Delete Comic</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

module.exports = ComicView;
