// shows how to use an html template (works with css too)

class SimpleButton3 extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(
      document
        .getElementById('simple-button-3-content') // template
        .content // stuff inside my template
        .cloneNode(true) // deep clone of my template (in case someone else needs that template too)
    )
  }
}
window.customElements.define('simple-button-3', SimpleButton3)
