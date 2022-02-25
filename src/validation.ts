import { JQFuwattoOptions } from 'types/JQFuwatto'
import { SLIDE_PATTTERNS } from './options'

const TEMPLATE_ERROR = '[jqFuwatto] Option Parameter error'
const TEMPLATE_WARN = '[jqFuwatto] Option Parameter warning'
const isNumber = (value: any) => typeof value === 'number' && isFinite(value)
const matchSlidePatterns = (value: any) => SLIDE_PATTTERNS.includes(value)

export const checkOptionError = ({
  duration,
  distance,
  slide,
  adjustment: { top, left },
}: JQFuwattoOptions) => {
  if (!isNumber(duration) && duration < 0) {
    return `${TEMPLATE_ERROR} [duration]`
  }
  if (!isNumber(distance) && distance < 0) {
    return `${TEMPLATE_ERROR} [distance]`
  }
  if (!isNumber(top)) {
    return `${TEMPLATE_ERROR} [top]`
  }
  if (!isNumber(left)) {
    return `${TEMPLATE_ERROR} [left]`
  }
  if (!matchSlidePatterns(slide)) {
    return `${TEMPLATE_ERROR} [slide]`
  }
  return ''
}

export const checkOptionWarning = ({
  height,
}: {
  height: number
  width: number
}) => {
  if (height === 0) {
    return `${TEMPLATE_WARN} [Set height is recommended]`
  }

  return ''
}
