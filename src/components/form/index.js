import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';

const Row = styled.div`
  display: block;
  padding-bottom: 10px;
`;

const Textarea = styled.textarea`
  width: 600px;
  min-height: 200px;
`;

const defaultForm = { name: '', email: '', rating: undefined , comment: '' };

class Form extends React.PureComponent {
  state = {
    ...defaultForm,
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, rating, comment } = this.state;

    this.props.addComment({ name, email, rating, comment })

    this.setState({ ...defaultForm });
  };

  setName = ({ target: { value }}) => this.setState({ name: value });
  setEmail = ({ target: { value }}) => this.setState({ email: value });
  setRating = ({ target: { value }}) => this.setState({ rating: value });
  setComment = ({ target: { value }}) => this.setState({ comment: value });

  render() {
    const { name, email, rating, comment } = this.state;

    return (
      <div>
        <h2>Your comment:</h2>
        <form onSubmit={this.handleSubmit}>
          <Row>
            <label>
              Name <input value={name} type="text" onChange={this.setName} required />
            </label>
          </Row>
          <Row>
            <label>
              Email <input value={email} type="email" onChange={this.setEmail} required />
            </label>
          </Row>
          <Row>
            <select onChange={this.setRating} value={rating} required>
              <option></option>
              {[1,2,3,4,5].map(n => (
                <option key={n}>{n}</option>
              ))}
            </select>
          </Row>
          <Row>
            <Textarea onChange={this.setComment} value={comment} required />
          </Row>

          <Row>
            <input type="submit" />
          </Row>
        </form>
      </div>
    );
  }
}
export default connect(undefined, actions)(Form);