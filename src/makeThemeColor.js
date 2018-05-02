import decorateSelector from './decorateSelector'

const makeThemeColor = (...propsPath) =>
  decorateSelector(props => {
    propsPath.forEach(key => props = props[key])
    return props
  })


export default makeThemeColor
