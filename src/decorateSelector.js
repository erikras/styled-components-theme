import colorMethods from './colorMethods'
import addModifier from './addModifier'
import aliases from './aliases'

/**
 * Add useful methods directly to selector function, as well as put an toString() call at the end
 * @param selector
 */
const decorateSelector = selector => {
  // add member functions to our selector
  colorMethods.forEach(method => {
    selector[method] = (...args) =>
      decorateSelector(addModifier(selector, method, ...args))
  })
  // add aliases
  Object.keys(aliases).forEach(method =>
    aliases[method].forEach(
      alias =>
        (selector[alias] = (...args) => {
          /* istanbul ignore else */
          if (
            process.env.NODE_ENV !== 'production' &&
            typeof console !== 'undefined'
          ) {
            console.warn(`${alias}() is deprecated. Use ${method}() instead.`)
          }
          return selector[method](...args)
        })
    )
  )
  return selector
}

export default decorateSelector
