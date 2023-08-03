import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'shams-text-input',
  styleUrl: 'shams-text-input.css',
  shadow: true,
})
export class ShamsTextInput {
  /**
   * Label for the input
   */
  @Prop({ reflect: true }) label: string | null | undefined = null;
  /**
   * Placeholder value
   */
  @Prop({ reflect: true }) placeholder: string | null | undefined = null;
  /**
   *  Value
   */
  @Prop({ reflect: true }) value: string | null | undefined = null;
  /**
   * Placeholder value
   */
  @Prop({ reflect: true }) errorMessage: string | null | undefined = null;
  /**
   * On change handler for input
   */
  @Prop({ reflect: true }) onInputChange: (event: Event) => void;
  render() {
    return (
      <div>
        <label class={Boolean(this.errorMessage) ? "error" : null} htmlFor="shams-input">
          {Boolean(this.errorMessage)
            ? this.label + "- " + this.errorMessage
            : this.label}
        </label>
        <input
          value={this.value}
          onChange={this.onInputChange}
          class={Boolean(this.errorMessage) ? "error" : null}
          id="shams-input" type='text'
          placeholder={this.placeholder} />
      </div>
    );
  }

}
