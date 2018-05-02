import makeThemeColor from './makeThemeColor'

const makeTheme = (theme, ...themePath) => {
  if (typeof(theme) !== 'object') {
    // compat mode
    // make theme object with keys of all arguments
    theme = [theme, ...themePath].reduce(
      (result, color) => {
        result[color] = ''
        return result
    }, {})
    return makeTheme(theme)
  }   

  themePath = themePath.length ? themePath : ['theme']

  return Object.entries(theme).reduce((result, [key, item]) => {
    if (typeof(item) === 'object') {
      result[key] = makeTheme(item, ...themePath, key)
    } else {
      result[key] = makeThemeColor(...themePath, key)
    }
    return result
  }, {})
} 


export default makeTheme
