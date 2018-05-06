import React, { Component } from 'react';
import { Col, Button } from 'reactstrap'

const style = {
  color: 'brown',
  activeColor: 'red'
}

class Toggle extends Component {
  state = {
    color: 'secondary'
  }

  handleClick = () => {
    this.setState({color: this.state.color === 'secondary' ? 'success' : 'secondary'})
  }

  render() {
    return (
      <div style={{ paddingTop: 50, textAlign: 'center' }}>
        <Button onClick={this.handleClick} color={this.state.color}>Click me</Button>
      </div>
    );
  }
}

export default Toggle;