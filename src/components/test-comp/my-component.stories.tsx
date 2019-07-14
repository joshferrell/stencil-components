import { storiesOf } from '@storybook/polymer';
const stories = storiesOf('Test component', module);
stories.add('default', () => (`<test-component first="John" last="'Don't call me a framework' JS"></test-component>`));