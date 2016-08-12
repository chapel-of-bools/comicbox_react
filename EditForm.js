'use strict';
import React, {Component} from 'react';

import {
  AlertIOS,
  NavigatorIOS,
  StyleSheet,
  Text,
  ListView,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicator,
  Image
} from 'react-native'

var t = require('tcomb-form-native');
var Form = t.form.Form;

var EditComic = t.struct({
  title: t.String,
  issueNo: t.Number,
  artist: t.String,
  author: t.String,
  coverUrl: t.String,
  _key: t.String
});

var options = {
  fields: {
    issueNo: {
      label: 'Issue #'
    },
    _key: {
      hidden: true
    }
  }
};

var styles = {
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  text: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
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
    borderColor: '#48BBEC',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  image: {
    alignSelf: 'center',
    width: 75,
    height: 75
  },
  deleteButton: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FF0034',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
}

class EditForm extends Component {
  warnMessage(){
    AlertIOS.alert(
     'Confirm',
     'Are you sure you wish to delete this comic?',
     [
       {text: 'Cancel', onPress: () => console.log('Cancelled'), style: 'cancel'},
       {text: 'Delete', onPress: () => this.onDelete() } ,
     ],
    );
  }

  onDelete() {
      var value = this.refs.form.getValue();
      this.props.handleDelete(value)
      this.props.navigator.popToTop(0)
  }

  editThisComic(){
    var value = this.refs.form.getValue();
    if (value) {
      this.props.handleEdit(value)
    }
    let {book} = this.props
    this.props.navigator.popToTop(0)
    }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Update comic information:</Text>
        <Form
          ref="form"
          type={EditComic}
          value={this.props.book}
          options={options}
        />
      <TouchableHighlight style={styles.button} onPress={this.editThisComic.bind(this)} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Save Updates</Text>
        </TouchableHighlight>
        <Text style={styles.text}>-or-</Text>
      <TouchableHighlight style={styles.deleteButton}
        underlayColor='#FF0034'
        onPress={this.warnMessage.bind(this)}>
          <Text style={styles.buttonText}>Delete Comic</Text>
      </TouchableHighlight>
      </View>
    );
  }
}

module.exports = EditForm;
