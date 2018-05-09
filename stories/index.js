import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action, configureActions } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import centered from '@storybook/addon-centered';
import { withNotes } from '@storybook/addon-notes';
import styles from "@sambego/storybook-styles";

import MyButton from '../src/MyButton';

import { 
  Col,
  Button,
  Progress
} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css'; 

const stories = storiesOf('Storybook Knobs', module);
 
action('button-click', {
  depth: 5 
})

storiesOf('Button and text', module)
  .addDecorator(centered)  
  .addDecorator(withKnobs)
  .addDecorator(styles({
    backgroundColor: '#639',
    height: '630px',
  }))
  .add('with a button', () => (
    <button
      className='btn btn-info'
      disabled={boolean('Disabled', false)}
    >
      {text('Label', 'My Precious Button')}
    </button>
  ))
  .add('as dynamic variables', () => {
    const name = text('Name', 'Arunoda Susiripala');
    const age = number('Age', 89);
    const style = {color: 'white', fontSize: 24}
  
    const content = `I am ${name} and I'm ${age} years old.`;
    return (<div style={style}>{content}</div>);
  })
  .add('with text', () => (
    <MyButton onClick={ action('button-click') }>Hello Button</MyButton>
  ))
  .add('with some emoji', () => (
    <MyButton onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></MyButton>
  ));   
  