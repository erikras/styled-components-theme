import expect from 'expect'
import Color from 'color'
import decorateSelector from '../decorateSelector'
import colorMethods from '../colorMethods'
import aliases from '../aliases'

const testHasAllMethods = selector =>
  colorMethods.forEach(method => expect(selector[method]).toBeA('function'))

describe('decorateSelector', () => {
  colorMethods.forEach(method => {
    it(`adds ${method} method`, () => {
      const selector = () => new Color('#2A2A2A').toString()
      decorateSelector(selector)
      expect(selector[method]).toBeA('function')
      testHasAllMethods(selector[method]())
    })
  })
  Object.keys(aliases).forEach(method => {
    aliases[method].forEach(alias => {
      it(`adds ${alias} alias for ${method}`, () => {
        const selector = () => new Color('#2A2A2A').toString()
        decorateSelector(selector)
        expect(selector[alias]).toBeA('function')
        testHasAllMethods(selector[alias]())
      })
    })
  })
})
