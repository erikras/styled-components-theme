import decorateSelector from './decorateSelector'

const makeThemeColor = key => decorateSelector(props => props.theme[key])

export default makeThemeColor
