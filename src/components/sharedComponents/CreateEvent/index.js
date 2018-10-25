import React, { Component } from 'react';
import {
  Text, View, TextInput, Image, TouchableOpacity, KeyboardAvoidingView, Modal,
} from 'react-native';
import { connect } from 'react-redux';
import DatePicker from 'react-native-datepicker';
import styles from './styles';
import PostButton from '../PostButton';
import ToggleButton from '../ToggleButton';
import { eventUpdate, eventCreate } from '../../../actions';

class CreateEvent extends Component {
    state = {
      modalVisible: false,
    }

    onButtonPress() {
      const { title, date } = this.props;
      this.props.eventCreate({ title, date }); //eslint-disable-line
    }

    setModalVisible(visible) {
      this.setState({ modalVisible: visible });
    }

    render() {
      const { modalVisible } = this.state;
      const { title, date } = this.props;
      return (
        <View style={{ flex: 1 }}>
          <Modal
            animationType="fade"
            transparent
            visible={modalVisible}
            presentationStyle="overFullScreen"
            onRequestClose={() => {
              this.setModalVisible(!modalVisible);
            }}
          >
            <View style={[{ flex: 1 }, modalVisible ? styles.overlay : '']}>
              <KeyboardAvoidingView
                style={styles.container}
                behavior="position"
              >
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.textStyle}>I am going for...</Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.setModalVisible(false);
                    }}
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
                  onChangeText={value => this.props.eventUpdate({ prop: 'title', value })}
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
                  onDateChange={value => this.props.eventUpdate({ prop: 'date', value })}
                />
                <PostButton
                  onPress={() => this.onButtonPress()}
                  text="Post Event"
                />
              </KeyboardAvoidingView>
            </View>
          </Modal>
          <View style={styles.toggleContainer}>
            <ToggleButton
              onPress={() => {
                this.setModalVisible(true);
              }}
              text="Create an Event"
              source={require('../../../assets/icons/alignUp.png')}
            />
          </View>
        </View>
      );
    }
}

const mapStateToProps = (state) => {
  const { title, date } = state.createEvent;
  return { title, date };
};

export default connect(mapStateToProps, { eventUpdate, eventCreate })(CreateEvent);
