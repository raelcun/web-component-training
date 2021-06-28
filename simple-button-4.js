/* SHOWS
 * encapsulating the template
 * using named slots to inject user content
 * default content for slots
 */

const template = document.createElement('template')
template.innerHTML = `
  <button><slot name='buttonContent'>Default Name</slot></button>
`

class SimpleButton4 extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}
window.customElements.define('simple-button-4', SimpleButton4)
