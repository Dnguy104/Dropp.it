import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PostCards from '../SharedComponents/PostCards.js';
import PostForm from '../SharedComponents/PostForm.js'
import Element from '../SharedComponents/Element.js';
import styled from 'styled-components';
import theme from '../../utils/theme.js';


const MainPage = props => {
  const { className } = props;

  return (
    <div className={`${className}`}>
      <Element>
        <PostForm />
      </Element>
      <PostCards />
    </div>
  );
};

MainPage.propTypes = {

};

const StyledMainPage = styled(MainPage)`
  background-color: ${props => theme.themes[props.globalTheme].background};
  height: auto;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 15px;
  overflow: auto;

  &.fixed {
    overflow: hidden;
  }

`
const mapStateToProps = state => ({
  globalTheme: state.global.theme,
});

export default connect(mapStateToProps)(StyledMainPage);
