import React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';

import createStore from '../store';

import Comments from './comments';
import Form from './form';

const Content = styled.div`
  margin: auto;
  padding: 0 10px;
  text-align: left;
  width: 960px;
  background-color: #fff;
`;

export default function App() {
  return (
    <Provider store={createStore()}>
      <Content>
        <Comments />
        <hr />
        <Form />
      </Content>
    </Provider>
  );
}