import { storiesOf } from '@storybook/polymer';
import { html } from 'common-tags';

const arrowRight = html`
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="16" 
        height="16" 
        viewBox="0 0 24 24" 
        style="padding-left: 4px; transform: translateY(1px);fill:currentcolor;"
    >
        <path d="M22.707,11.293L15,3.586L13.586,5l6,6H2c-0.553,0-1,0.448-1,1s0.447,1,1,1h17.586l-6,6L15,20.414 l7.707-7.707C23.098,12.316,23.098,11.684,22.707,11.293z"></path>
    </svg>
`;

storiesOf('Atoms/Button', module)
    .add('different colors', () => html`
        <div class="STORYBOOK_grid-container">
            <comp-button variant="primary">Primary</comp-button>
            <comp-button variant="secondary">Secondary</comp-button>
            <comp-button variant="tertiary">Tertiary</comp-button>
            <comp-button variant="highlight">Highlight</comp-button>
            <comp-button variant="danger">Danger</comp-button>
            <comp-button variant="warning">Warning</comp-button>
            <comp-button variant="success">Success</comp-button>
        </div>
    `)
    .add('size variants', () => html`
        <div class="STORYBOOK_grid-list">
            <comp-button size="small">Small</comp-button>
            <comp-button size="regular">Regular</comp-button>
            <comp-button size="large">Large</comp-button>
            <comp-button size="extra-large">Extra Large</comp-button>
        </div>
    `)
    .add('with svg icon', () => html`
        <div class="STORYBOOK_grid-container">
            <comp-button variant="primary">Primary ${arrowRight}</comp-button>
            <comp-button variant="secondary">Secondary ${arrowRight}</comp-button>
            <comp-button variant="tertiary">Tertiary ${arrowRight}</comp-button>
            <comp-button variant="highlight">Highlight ${arrowRight}</comp-button>
            <comp-button variant="danger">Danger ${arrowRight}</comp-button>
            <comp-button variant="warning">Warning ${arrowRight}</comp-button>
            <comp-button variant="success">Success ${arrowRight}</comp-button>
        </div>
    `);