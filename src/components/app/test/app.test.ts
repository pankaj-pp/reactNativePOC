import {assert} from 'chai'
import {action} from '../../../lib/test-utils'
import {app} from '../App'

describe('app', () => {
  describe('update', () => {
    describe('inc', () => {
      it('should increment the count value in state', () => {
        const state = app.init()
        const actual = app.update(action(null, 'inc'), state)
        const expected = {
          count: 1
        }
        assert.deepEqual(actual, expected)
      })
    })
  })
})