'use strict';
import React, {Component} from 'react';
var ComicView = require('./ComicView');

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

var styles = StyleSheet.create({
  thumb: {
    width: 80,
    height: 125,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  text: {
    fontSize: 20,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  }
});

class ComicList extends Component {
  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1.guid !== r2.guid});
    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.data)
    };
  }
  rowPressed(bookKey) {
    var book = this.props.data.filter(book => book._key === bookKey)[0];
    let {handleEdit, handleDelete} = this.props
    this.props.navigator.push({
      title: "View Comic",
      component: ComicView,
      passProps: {book: book,
                  handleEdit: handleEdit,
                  handleDelete: handleDelete
                }
    });
  }
  renderRow(rowData, sectionID, rowID) {
    return (
      <TouchableHighlight onPress={() => this.rowPressed(rowData._key)}
          underlayColor='#dddddd'>
        <View>
          <View style={styles.rowContainer}>
            <Image style={styles.thumb} source={{ uri: rowData.coverUrl }}/>
            <View style={styles.textContainer}>
              <Text style={styles.text}
                    numberOfLines={1}>{rowData.title}
              </Text>
              <Text style={styles.text}
                    numberOfLines={1}>Issue # {rowData.issueNo}
              </Text>
              <Text style={styles.text}
                    numberOfLines={1}>Author: {rowData.author}
              </Text>
              <Text style={styles.text}
                    numberOfLines={1}>Artist: {rowData.artist}
              </Text>
          </View>
        </View>
        <View style={styles.separator}/>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}/>
    );
  }
}

module.exports = ComicList;
