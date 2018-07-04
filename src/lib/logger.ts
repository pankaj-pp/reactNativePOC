import {isAction} from 'action-type'

const actionName = (action: any) => {
  let actionName: Array<string | number> = []
  while (isAction(action)) {
    actionName.push(action.type)
    action = action.value
  }
  return {type: actionName.join('/'), value: action}
}


export const consoleLogger = (p: {
  action: any
  preState: any
  currState: any
  command: any
}) => {
  const flatAction = actionName(p.action)
  /* tslint:disable */
  console.log(
    'INP:' +
    flatAction.type
  )
  console.log('PREVIOUS', p.preState)
  console.log('CURRENT', p.currState)
  /* tslint:enable */
}