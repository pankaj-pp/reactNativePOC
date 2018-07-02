/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {matchActionR, matchActionC} from '../../lib/component'

interface App {
  flag: boolean
}

interface AppParams {
}

const init = (): App => {
  return  {
    flag: false
  }
}

const update = matchActionR({
})

const command = matchActionC({
  
})

const view = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Functional Programming with React Native
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

export const app = {init, update, command, view}




