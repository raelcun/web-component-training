// shows most basic web component

class SimpleButton0 extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = '<button>Simple0</button>'
  }
}
window.customElements.define('simple-button-0', SimpleButton0)

// can also allow consumers to tree shake and register WCs themself
// this is why MDS is so big, they don't export this function publicly
// export const registerSimpleButton0 = () =>
//   window.customElements.define(
//     'simple-button-0',
//     class SimpleButton0 extends HTMLElement {
//       constructor() {
//         super()
//       }

//       connectedCallback() {
//         this.innerHTML = '<button>Simple0</button>'
//       }
//     }
//   )
