import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alert extends Component {
  componentDidUpdate(prevProps) {
    // this.props.alert.show("it works");
    const { error, alert, message } = this.props

    if(error !== prevProps.error) {
      if(error.msg.author) alert.show(`Author: ${error.msg.author.join()}`);
      if(error.msg.title) alert.show(`Title: ${error.msg.title.join()}`);
      if(error.msg.content) alert.show(`Content: ${error.msg.content.join()}`);
      if(error.msg.non_field_errors) alert.show(error.msg.non_field_errors.join());

    }
     if(message !== prevProps.message) {
      if(message.deletePost) alert.show(message.deletePost);
      if(message.addPost) alert.show(message.addPost);
      if(message.passwordNotMatch) alert.show(message.passwordNotMatch);
    }
  }

  render() {
    return <div />
  }
}

Alert.propTypes = {
  error: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  error: state.errors,
  message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alert));