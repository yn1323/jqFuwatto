import { JQFuwattoOptions } from 'types/JQFuwatto'
import { SLIDE_PATTTERNS } from './options'

const TEMPLATE = '[jqFuwatto] Option Parameter error'
const isNumber = (value: any) => typeof value === 'number' && isFinite(value)
const matchSlidePatterns = (value: any) => SLIDE_PATTTERNS.includes(value)

export const checkOptionError = ({
  duration,
  distance,
  slide,
}: JQFuwattoOptions) => {
  if (!isNumber(duration) && duration < 0) {
    return `${TEMPLATE} [duration]`
  }
  if (!isNumber(distance) && distance < 0) {
    return `${TEMPLATE} [distance]`
  }
  if (!matchSlidePatterns(slide)) {
    return `${TEMPLATE} [slide]`
  }
  return ''
}
