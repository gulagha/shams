import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'shams-button',
  styleUrl: 'shams-button.css',
  shadow: true,
})
export class ShamsButton {
  /**
   * A props / attribute that makes the button primary
   */
  @Prop({reflect: true}) type : "primary" | "danger" | "primary-2";

  render() {
    return (
      <button class={this.type}>
        <slot />
      </button>
    );
  }

}
