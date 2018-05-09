import React from 'react';
import { storiesOf } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes';

import App from '../src/App';

storiesOf('CRA - initiall wiev', module)
  .add('App component', withNotes('<em>This is the CRA <strong>main</strong> App coponent. I do not have an intention of editing or removing it.</em>')(() => <App />));
