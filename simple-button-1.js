/* SHOWS
 * handling incoming attributes
 * handling changes in attributes with attributeChangedCallback and observedAttributes
 * setters and getters are not required, just the callback and observedAttributes
 */

class SimpleButton1 extends HTMLElement {
  constructor() {
    super()
  }

  set buttonContent(newValue) {
    this.setAttribute('button-content', newValue)
  }

  get buttonContent() {
    return this.getAttribute('button-content')
  }

  connectedCallback() {
    this.innerHTML = `<button>${this.buttonContent}</button>`
  }

  static get observedAttributes() {
    return ['button-content']
  }
  attributeChangedCallback(name, oldValue, newValue) {
    this.innerHTML = `<button>${this.buttonContent}</button>`
  }
}
window.customElements.define('simple-button-1', SimpleButton1)
