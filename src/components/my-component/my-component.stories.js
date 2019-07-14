import { storiesOf } from '@storybook/polymer';
const stories = storiesOf('My component', module);
stories.add('default', () => (`<my-component first="John" last="'Don't call me a framework' JS"></my-component>`));