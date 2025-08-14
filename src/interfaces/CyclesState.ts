import type { Cycle } from './Cycle'

export interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}
