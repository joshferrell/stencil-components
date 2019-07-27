import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';

@Component({
    tag: 'comp-button',
    shadow: false,
    styleUrl: 'button.scss'
})
export class CompButton {
    @Prop() variant: string = 'primary';
    @Prop() size: string = 'regular';

    render = () => {
        const btnClass = classNames(
            'btn',
            `btn__${this.variant}`,
            `btn-size__${this.size}`
        );

        return (
            <button class={btnClass}>
                <slot />
            </button>
        )
    }
}