class toll extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      this.shadow.innerHTML = `
  <style>
    :host { 
      display: block; 
      width: 100%;
      height: 100%;
    }
  </style>
  <iframe src="components/test.html" frameborder="0"></iframe>
`;
    }
  }

// ✅ 必须注册自定义元素
customElements.define('my-toll', Toll); // 名称需包含短横线