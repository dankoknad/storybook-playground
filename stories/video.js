import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, object } from '@storybook/addon-knobs/react';

import { Player } from 'video-react';
import 'video-react/dist/video-react.css';

storiesOf('Video', module)
.addDecorator(withKnobs)
.add('videoplayer - fixed',
  withInfo()(() => {
      const myprops = {
          autoPlay: false,
          controls: true,
          width: 854,
          height: 480,
          fluid: false,
          poster: 'http://lorempixel.com/854/480/sports/',
          src: 'http://media.w3.org/2010/05/bunny/movie.mp4'
      };
      let props = object('Props', myprops, 'group1');
      return <Player {...props} />
  }))
.add('videoplayer - fluid',
  withInfo()(() => {
      const myprops = {
          autoPlay: false,
          controls: true,
          width: 854,
          height: 480,
          fluid: true,
          poster: 'http://lorempixel.com/854/480/sports/',
          src: 'http://media.w3.org/2010/05/bunny/movie.mp4'
      };
      let props = object('Props', myprops, 'group1');
      return <Player {...props} />
  })) 
  .add('videoplayer - autoplay',
  withInfo()(() => {
      const myprops = {
          autoPlay: true,
          controls: true,
          width: 854,
          height: 480,
          fluid: true,
          poster: 'http://lorempixel.com/854/480/sports/',
          src: 'http://media.w3.org/2010/05/bunny/movie.mp4'
      };
      let props = object('Props', myprops, 'group1');
      return <Player {...props} />
  }))    
  