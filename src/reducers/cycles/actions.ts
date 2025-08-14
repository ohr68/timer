import { ActionTypes } from '../../enums/actionTypes'
import type { Cycle } from '../../interfaces/Cycle'

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      data: newCycle,
    },
  }
}

export function interruptCurrentCycleAction() {
  return {
    type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
  }
}

export function markCycleAsFinished() {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  }
}
