import React, { Component } from 'react';
import {
  Text, View, TextInput, Image, TouchableOpacity, KeyboardAvoidingView,
} from 'react-native';
import { connect } from 'react-redux';
import DatePicker from 'react-native-datepicker';
import styles from './styles';
import PostButton from '../PostButton';
import ToggleButton from '../ToggleButton';
import { titleChanged } from '../../../actions';

class CreateEvent extends Component {
    state = {
      isHidden: true,
      title: '',
      date: '',

    }

    onTitleChange(text) {
      this.props.titleChanged(text);
    }

    toggleHidden() {
      this.setState({
        isHidden: !this.state.isHidden, // eslint-disable-line
      });
    }



    render() {
      const {
        title, date, isHidden,
      } = this.state;
      if (isHidden) {
            return <Request toggleHidden={this.toggleHidden.bind(this)} />; // eslint-disable-line
      }

      return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.textStyle}>I am going for...</Text>
            <TouchableOpacity
              onPress={this.toggleHidden.bind(this)} // eslint-disable-line
            >
              <Image
                style={styles.closeButton}
                source={require('../../../assets/icons/close.png')}
              />
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.inputStyle}
            placeholder="Title of event"
            placeholderTextColor="#C8C8C8"
            onChangeText={this.onTitleChange.bind(this)}
            value={title}
            clearButtonMode="always"
          />
          <DatePicker
            date={date}
            mode="datetime"
            placeholder="Event date"
            format="YYYY-MM-DD"
            minDate="2016-05-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
              },
            }}
            onDateChange={(date) => { this.setState({ date }); }}
          />
          <PostButton
            onPress={() => console.log('pressed')}
            text="Post Event"
          />
        </KeyboardAvoidingView>
      );
    }
}

const Request = (props) => {
  const { toggleHidden } = props;
  return (
    <View>
      <ToggleButton
        onPress={toggleHidden}
        text="Create an Event"
        source={require('../../../assets/icons/alignUp.png')}
      />
    </View>
  );
};


export default connect(null, { titleChanged })(CreateEvent);
