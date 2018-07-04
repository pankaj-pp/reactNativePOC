/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {Hoe} from 'hoe'
import * as R from 'ramda'
import * as React from 'react'
import {Button, Text, View} from 'react-native'
import {matchC, matchR} from 'update-function-types'
import {styles} from './app.styles'

export interface App {
  count: number
}

export interface AppParams {
}

const init = (): App => {
  return {
    count: 0
  }
}

const update = matchR({
  inc: R.compose(R.evolve({count: R.inc}), R.nthArg(1))
})

const command = matchC({})

const view = (e: Hoe, m: App, p: AppParams) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Current Count {m.count}
      </Text>
      <Button
        onPress={e.of('inc').emit as () => any}
        title= {m.count > 2 ? "inc " + m.count : "inc"}
        color="#841584"
      />
    </View>
  )
}

export const app = {init, update, command, view}




