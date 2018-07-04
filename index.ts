import {create} from 'hoe'
import {Component} from 'react'
import {AppRegistry} from 'react-native'
import {App, app, AppParams} from './src/components/app/App'
import {consoleLogger} from './src/lib/logger'


class BootstrapComponent extends Component<AppParams, App> {
  private e = create((act: any) => {
    const nState = app.update(act, this.state)
    const cmd = app.command(act, this.state)
    consoleLogger({
      action: act,
      command: cmd,
      preState: this.state,
      currState: nState
    })
    console.log(cmd)
    this.setState(nState)
  })


  componentWillMount () {
    this.setState(app.init())
  }

  render () {
    const state = this.state as App
    return app.view(this.e, state, this.props)
  }
}

AppRegistry.registerComponent('reactNativePOC', () => BootstrapComponent)

