  /**
 * Detects the runtime environment and dynamically loads the appropriate module (browser or Node.js version).
 * This function expects full paths to the respective environment-specific modules.
 * 
 * @module envDetect
 * @param {string} browserModulePath - The full path to the browser-specific module.
 * @param {string} nodeModulePath - The full path to the Node.js-specific module.
 * @returns {Promise} - A promise that resolves with the module appropriate for the detected environment.
 */
export function envDetect(browserModulePath, nodeModulePath) {
    if (typeof window !== 'undefined') {
      return import(browserModulePath);
    } else {
      return import(nodeModulePath);
    }
  }
  