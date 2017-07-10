import expect from 'expect'
import Color from 'color'
import addModifer from '../addModifier'
import methods from '../colorMethods'

const selector = () => new Color('#2A2A2A').toString()

const testModifier = (modifier, ...args) => {
  const modified = addModifer(selector, modifier, ...args)
  expect(modified).toBeA('function')
  expect(modified()).toEqual(
    new Color(selector())[modifier](...args).toString()
  )
}

describe('addModifier', () => {
  it(`adds a mix modifier function`, () => {
    const otherSelector = () => new Color('#FF0000').toString()

    const modified = addModifer(selector, 'mix', otherSelector, 0.5)
    expect(modified).toBeA('function')
    expect(modified()).toEqual(new Color(selector()).mix(new Color(otherSelector()), 0.5))
  })

  methods.filter(m => m !== 'mix').forEach(method => {
    it(`adds a ${method} modifier function`, () => {
      testModifier(method, 0.1)
      testModifier(method, 0.5)
      testModifier(method, 0.9)
    })
  })
})
