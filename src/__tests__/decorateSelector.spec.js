import expect from 'expect'
import Color from 'color'
import decorateSelector from '../decorateSelector'
import colorMethods from '../colorMethods'

const testHasAllMethods = selector =>
  colorMethods.forEach(method => expect(selector[method]).toBeA('function'))

describe('decorateSelector', () => {
  colorMethods.forEach(method => {
    it(`adds ${method} method`, () => {
      const selector = () => new Color('#2A2A2A').hex()
      decorateSelector(selector)
      expect(selector).toBeA('function')
      expect(selector[method]).toBeA('function')
      testHasAllMethods(selector[method]())
    })
  })
})
