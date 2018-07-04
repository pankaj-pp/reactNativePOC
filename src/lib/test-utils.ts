import {action as actionType} from 'action-type'

export const action = <T>(value: T, ...type: string[]) => {
  let a: any = value
  for (let i = 0; i < type.length; ++i) {
    a = actionType(type[i], a)
  }
  return a
}