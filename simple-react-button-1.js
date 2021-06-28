// shows the most basic web component wrapper around React

class SimpleReactButton1 extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.attachShadow({ mode: 'open' })
    ReactDOM.createRoot(this.shadowRoot).render(
      React.createElement('button', { onClick: (event) => console.log('react', event) }, 'Simple React')
      // equivalent to JSX: <button onClick={(e) => console.log('react', e)}>Simple React</button>"
    )
  }
}
window.customElements.define('simple-react-button-1', SimpleReactButton1)
