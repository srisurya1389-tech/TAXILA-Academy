/**
 * Mock support.js for running Design Components (.dc.html) in standard browsers.
 */
class DCLogic {
  constructor() {
    this.state = {};
    this.props = {};
  }
  
  setState(newState, callback) {
    this.state = { ...this.state, ...newState };
    if (callback) callback();
  }
  
  componentDidMount() {}
  
  renderVals() {
    return {};
  }
}

window.DCLogic = DCLogic;

document.addEventListener("DOMContentLoaded", () => {
  // Find the Design Component script block
  const scriptTag = document.querySelector('script[type="text/x-dc"]');
  if (scriptTag) {
    const code = scriptTag.textContent;
    try {
      // Evaluate the component script to define the Component class
      const fn = new Function('DCLogic', `${code}; return Component;`);
      const ComponentClass = fn(DCLogic);
      
      // Instantiate and run the component
      const instance = new ComponentClass();
      instance.componentDidMount();
    } catch (e) {
      console.error("Error initializing Design Component:", e);
    }
  }
});
