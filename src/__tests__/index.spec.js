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
      new Color(colors.gray).lighten(0.4).toString()
    )
    expect(darkerRed(themeFromProvider)).toBe(
      new Color(colors.red).darken(0.1).toString()
    )
  })
  
  it('extracts theme structure', () => {
    const exampleTheme = {
      background: 'white',
      color: 'red',
      ui: {
        background: 'gray',
        color: 'red'
      }
    }

    const theme = makeTheme(exampleTheme)
 
    const colorSelector = theme.color
    expect(colorSelector).toBeA('function')
    expect(colorSelector.length).toBe(1)
  
   const uiColorSelector = theme.ui.color
   expect(uiColorSelector).toBeA('function')
   expect(uiColorSelector.length).toBe(1)
      
   const themeFromProvider = {
     theme: {
       background: '#FFFFFF',
       color: '#2A2A2A',
       ui: {
         background: '#000000',
         color: '#9B1919'
       }
     }
   }
   
   expect(colorSelector(themeFromProvider))
       .toBe(themeFromProvider.theme.color)
   expect(uiColorSelector(themeFromProvider))
       .toBe(themeFromProvider.theme.ui.color)

   const darkerColor = colorSelector.darken(0.1)
   const lighterUIColor = uiColorSelector.lighten(0.4)

   expect(darkerColor(themeFromProvider)).toBe(
     new Color(themeFromProvider.theme.color).darken(0.1).toString()
   )
   expect(lighterUIColor(themeFromProvider)).toBe(
     new Color(themeFromProvider.theme.ui.color).lighten(0.4).toString()
   )
  })
})
