import expect from 'expect'
import Color from 'color'
import addModifer from '../addModifier'

const selector = () => new Color('#2A2A2A').rgbString()

const testModifier = (modifier, ...args) => {
  const modified = addModifer(selector, modifier, ...args)
  expect(modified).toBeA('function')
  expect(modified()).toEqual(new Color(selector())[modifier](...args).rgbString())
}

describe('addModifier', () => {
  it('adds a modifier function', () => {
    testModifier('lighten', 0.1)
    testModifier('lighten', 0.5)
    testModifier('lighten', 0.9)
    testModifier('darken', 0.1)
    testModifier('darken', 0.5)
    testModifier('darken', 0.9)
  })
})
