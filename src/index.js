import makeThemeColor from './makeThemeColor'

const makeTheme = (...colors) =>
  colors.reduce((result, color) => {
    result[color] = makeThemeColor(color)
    return result
  }, {})

export {
  makeThemeColor
}

export default makeTheme
