import { JQFuwattoOptions } from 'types/JQFuwatto'

export const SLIDE_PATTTERNS = [
  '',
  'left-right',
  'right-left',
  'bottom-top',
  'top-bottom',
] as const

export const DEFAULT_OPTIONS: JQFuwattoOptions = {
  duration: 2000,
  slide: '',
  distance: 500,
  adjustment: {
    top: 0,
    left: 0,
  },
}
