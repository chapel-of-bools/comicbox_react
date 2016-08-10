'use strict';
import React, {Component} from 'react';
import {
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

var NewComic = t.struct({
  title: t.String,
  issueNo: t.Number,
  artist: t.String,
  author: t.String,
  coverUrl: t.String
});

var options = {};

var styles = {
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
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
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
}

class NewForm extends Component {
  onPress(){
    var value = this.refs.form.getValue();

    }
  render() {
    return (
      <View style={styles.container}>
        <Form
          ref="form"
          type={NewComic}
          options={options}
        />
        <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

module.exports = NewForm;
