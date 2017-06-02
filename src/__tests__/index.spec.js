import expect from 'expect'
import Color from 'color'
import makeTheme from '../index'

describe('makeTheme', () => {
  it('adds takes a theme of colors and generates selectors', () => {
    const colors = {
      gray: '#2A2A2A',
      red: '#9B1919'
    }
    const theme = makeTheme(...Object.keys(colors))

    const graySelector = theme.gray
    expect(graySelector).toBeA('function')
    expect(graySelector.length).toBe(1) // takes one argument (props)

    const redSelector = theme.red
    expect(redSelector).toBeA('function')
    expect(redSelector.length).toBe(1) // takes one argument (props)

    const themeFromProvider = {
      theme: {
        gray: '#2A2A2A',
        red: '#9B1919'
      }
    }

    expect(graySelector(themeFromProvider)).toBe(colors.gray)
    expect(redSelector(themeFromProvider)).toBe(colors.red)

    const lighterGray = graySelector.lighten(0.4)
    const darkerRed = redSelector.darken(0.1)

    expect(lighterGray(themeFromProvider)).toBe(
      new Color(colors.gray).lighten(0.4).hex()
    )
    expect(darkerRed(themeFromProvider)).toBe(
      new Color(colors.red).darken(0.1).hex()
    )
  })
})
