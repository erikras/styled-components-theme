import colorMethods from './colorMethods'
import addModifier from './addModifier'

/**
 * Add useful methods directly to selector function, as well as put an hex() call at the end
 * @param selector
 */
const decorateSelector = selector => {
  // add member functions to our selector
  colorMethods.forEach(method => {
    selector[method] = (...args) => decorateSelector(addModifier(selector, method, ...args))
  })
  return selector
}

export default decorateSelector
