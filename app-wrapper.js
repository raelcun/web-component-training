// ties together previous concepts
// oftentimes need to retarget events, can use https://www.npmjs.com/package/react-shadow-dom-retarget-events

const SimpleReactButton = ({ buttonName }) =>
  React.createElement('button', { onClick: (event) => console.log('react', event) }, buttonName || 'Default Value')

class AppWrapper extends HTMLElement {
  static get observedAttributes() {
    return ['button-name']
  }

  constructor() {
    super()
  }

  connectedCallback() {
    this.attachShadow({ mode: 'open' })
    this.root = ReactDOM.createRoot(this.shadowRoot)
    this.render(this.root)
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render(this.root)
  }

  render(root) {
    root.render(React.createElement(SimpleReactButton, { buttonName: this.getAttribute('button-name') }, null))
  }
}

window.customElements.define('app-wrapper', AppWrapper)
