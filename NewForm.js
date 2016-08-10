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

var options = {
  fields: {
    issueNo: {
      label: 'Issue #'
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
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderColor: 'black',
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
    this.comicsRef.push({ value })
    }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Enter new comic information:</Text>
        <Form
          ref="form"
          type={NewComic}
          options={options}
        />
        <TouchableHighlight style={styles.button} onPress={this.onPress.bind(this)} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

module.exports = NewForm;
