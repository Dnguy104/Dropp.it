import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { register } from '../../../actions/auth.js'
import { createMessage } from '../../../actions/messages.js';
import styled from 'styled-components';
import { Title, Form, Input } from '../../SharedComponents';
import theme from '../../../utils/theme.js';

const Register = (props) => {
  const {
    register,
    createMessage,
    isAuthenticated,
    className,
    goToAuth
  } = props;

  // const [username, setUserName] = useState('');
  // const [password, setPassword] = useState('');
  // const [email, setEmail] = useState('');
  // const [password2, setPassword2] = useState('');

  const onSubmit = (request) => {
    const { username, email, password, password2 } = request;
    if(password !== password2) {
      createMessage({passwordNotMatch: "Passwords do not match"});
    } else {
      const newUser = {
        username,
        password,
        email
      }
      register(newUser);
    }
  }

  // if(isAuthenticated) {
  //   return <Redirect to="/" />
  // }
  return (
    <div className={className} onClick={e => e.stopPropagation()}>
      <div className='panel'></div>
      <div className='left-container'>
        <Title fontSize='xl' title='Sign up'/>
        <Form submitHandler={onSubmit} submit='SIGN UP' lg initialState={{'Email': '', 'username': '', 'password' : '', 'password2' : ''}}>
          <Input
            type="text"
            name="email"
            placeholder="EMAIL"
          />
          <Input
            type="text"
            name="username"
            placeholder="USERNAME"
          />
          <Input
            type="text"
            name="password"
            placeholder="PASSWORD"
          />
          <Input
            type="text"
            name="password2"
            placeholder="RE-PASSWORD"
          />
        </Form>
        <div>
          <p>Already have an account?</p>
          <p onClick={goToAuth} style={{color: 'blue', cursor: 'pointer'}}>Login</p>
        </div>
      </div>
    </div>
  );
}

Register.propTypes = {
  isAuthenticated: PropTypes.bool
};

const StyledRegister = styled(Register)`
  background-color: white;
  height: 650px;
  width: 850px;
  box-shadow: 0 1px 1px rgba(0,0,0,0.12),
              0 2px 2px rgba(0,0,0,0.12),
              0 4px 4px rgba(0,0,0,0.12),
              0 8px 8px rgba(0,0,0,0.12),
              0 16px 16px rgba(0,0,0,0.12);
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  .left-container {
    width: 280px;
    height: 300px;
    margin-left: 20px;
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .panel {
    background: url('/assets/panel.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height 100%;
    width: 150px;
  }
`

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  globalTheme: state.global.theme
})

export default compose(
  withRouter,
  connect(mapStateToProps, { register, createMessage })
)(StyledRegister);
