// shows how to attach a shadow dom

class SimpleButton2 extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = '<button>Simple2</button>'
  }
}
window.customElements.define('simple-button-2', SimpleButton2)
