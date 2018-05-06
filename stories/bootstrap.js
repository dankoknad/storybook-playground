import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action, configureActions } from '@storybook/addon-actions';
import { withKnobs, text, number, object } from '@storybook/addon-knobs/react';

import Toggle from '../src/Toggle';

import { 
  Col,
  Button,
  Progress
} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css'; 

storiesOf('Reactstrap', module)
.addDecorator(withKnobs)
.add('with a Toggle', () => (
  <Toggle />
))
.add('reactstrap buttons',
  withInfo()(() => {
    const myprops = {
      color: "primary",
      active: false,
      block: true,
      disabled: false,
      size: 'lg'
    }
    let props = object('Props', myprops, 'group1');

    return (
      <Col>
        <Button { ...props } >with editable props</Button>
        <br/><br/>
        <Button color="primary">primary</Button>{' '}
        <Button color="secondary">secondary</Button>{' '}
        <Button color="success">success</Button>{' '}
        <Button color="info">info</Button>{' '}
        <Button color="warning">warning</Button>{' '}
        <Button color="danger">danger</Button>{' '}
        <Button color="link">link</Button>
      </Col>
    )
  }
))
.add('reactstrap progress',
  withInfo()(() => {
    const myprops = {
      multi: false,
      bar: false,
      value: 44,
      max: 100,
      animated: true,
      striped: true,
      color: 'warning',
      className: '',
      barClassName: ''
    }

    let props = object('Props', myprops, 'group1');

    return (
      <Col>
        <div className="text-center">Editable progess bar (just a first one)</div>
        <Progress { ...props }/>
        <div className="text-center">0%</div>
        <Progress />
        <div className="text-center">25%</div>
        <Progress value="25" />
        <div className="text-center">50%</div>
        <Progress value={50} />
        <div className="text-center">75%</div>
        <Progress value={75} />
        <div className="text-center">100%</div>
        <Progress value="100" />
        <div className="text-center">Multiple bars</div>
        <Progress multi>
          <Progress bar value="15" />
          <Progress bar color="success" value="30" />
          <Progress bar color="info" value="25" />
          <Progress bar color="warning" value="20" />
          <Progress bar color="danger" value="5" />
        </Progress>
      </Col>
    )
  }
))
