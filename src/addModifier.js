import Color from 'color'

/**
 * Takes a selector that returns a color string and returns new decorated selector that calls the
 * original function to get the color and then modifies that color, ultimately returning another
 * color string.
 */
const addModifier = (fn, method, ...modifierArgs) => (...args) => {
  if (method === 'mix') {
    // Mix takes another selector. To run the underlying Color method,
    // convert the selector into a Color by evaluating it with the props.
    modifierArgs = [].concat(modifierArgs)
    modifierArgs[0] = new Color(modifierArgs[0](...args));
  }
  return new Color(fn(...args))[method](...modifierArgs).toString()
}

export default addModifier
