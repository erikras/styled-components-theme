import Color from 'color'

/**
 * Takes a selector that returns a color string and returns new decorated selector that calls the
 * original function to get the color and then modifies that color, ultimately returning another
 * color string.
 */
const addModifier = (fn, method, ...modifierArgs) => (...args) =>
  new Color(fn(...args))[method](...modifierArgs).hex()

export default addModifier
