import React from 'react';
import { TouchableHighlight, Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { MaterialIcons } from '@expo/vector-icons';
export default class BackButton extends React.Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress} style={styles.btnContainer}>
       <MaterialIcons name="keyboard-backspace" size={30} color="black" />
      </TouchableHighlight>
    );
  }
}

BackButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string
};
