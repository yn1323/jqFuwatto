import { JQFuwattoOptions } from 'types/JQFuwatto'

export const slideFromPosition = (
  options: JQFuwattoOptions,
  originalPosition: JQueryCoordinates
) => {
  const ret = { top: 0, left: 0 }

  if (options.slide === 'left-right') {
    ret.top = originalPosition.top
    ret.left = originalPosition.left - options.distance
  } else if (options.slide === 'right-left') {
    ret.top = originalPosition.top
    ret.left = originalPosition.left + options.distance
  } else if (options.slide === 'bottom-top') {
    ret.top = originalPosition.top + options.distance
    ret.left = originalPosition.left
  } else if (options.slide === 'top-bottom') {
    ret.top = originalPosition.top - options.distance
    ret.left = originalPosition.left
  }
  return ret
}
