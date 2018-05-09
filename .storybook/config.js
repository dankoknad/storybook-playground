import { configure } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';

//addon info
setDefaults({
    inline: true
});

function loadStories() {
  // You can require as many stories as you need.
  require('../stories/reactstrap.js');
  require('../stories/index.js');
  require('../stories/video.js');
  require('../stories/app.js');
}

configure(loadStories, module);
