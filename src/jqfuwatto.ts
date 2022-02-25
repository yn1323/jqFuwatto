import $ from 'jquery'
import {
  JQFuwattoFunction,
  JQFuwattoOptions,
  JQFuwattoParmameter,
} from 'types/JQFuwatto'
import { DEFAULT_OPTIONS } from './options'
import { slideFromPosition } from './util'
import { checkOptionError, checkOptionWarning } from './validation'

type ShowElement = {
  id: number
  positionToShow: number
  elem: JQuery<HTMLElement>
  options: JQFuwattoOptions
  originalInfo: {
    top: number
    left: number
    height: number
    width: number
  }
  clone: JQuery<HTMLElement> | null
  side: boolean
}

let showElement: ShowElement[] = []
let windowHeight = window.innerHeight

const fadeIn = ({ elem, options }: ShowElement) => {
  elem.hide().fadeIn(options.duration)
}

const slideIn = ({ elem, clone, options, originalInfo }: ShowElement) => {
  if (clone) {
    $('body').css({ 'overflow-x': 'hidden' })
    clone.hide().fadeIn(options.duration).animate(
      {
        top: originalInfo.top,
        left: originalInfo.left,
      },
      { duration: options.duration, queue: false }
    )
  }
  setTimeout(() => {
    elem.css({ visibility: 'visible' })
    clone?.remove()
    $('body').css({ 'overflow-x': 'auto' })
  }, options.duration)
}

const show = () => {
  if (!showElement.length) {
    $(window).off()
  }

  const scrollPosition =
    window.pageYOffset || document.documentElement.scrollTop
  const currentPosition = windowHeight + scrollPosition

  const targets = showElement.filter(
    ({ positionToShow }) => currentPosition > positionToShow
  )

  if (targets.length) {
    targets.forEach(target => {
      target.side ? slideIn(target) : fadeIn(target)

      showElement = showElement.filter(({ id }) => id !== target.id)
    })
  }
}

export const jqFuwatto = Object.assign<JQFuwattoFunction, JQFuwattoParmameter>(
  function (this: JQuery, options = DEFAULT_OPTIONS): any {
    const adjustment = {
      ...DEFAULT_OPTIONS.adjustment,
      ...options.adjustment,
    }
    options = {
      ...DEFAULT_OPTIONS,
      ...options,
      adjustment,
    } as JQFuwattoOptions

    const errMsg = checkOptionError(options)
    if (errMsg) {
      console.error(errMsg)
      return this
    }

    this.each((_, elem) => {
      let clone: JQuery<HTMLElement> | null = null
      const position = $(elem).offset() as JQueryCoordinates
      const size = {
        height: $(elem).height() as number,
        width: $(elem).width() as number,
      }

      const warnMsg = checkOptionWarning(size)
      if (warnMsg) {
        console.warn(elem)
        console.warn(warnMsg)
      }

      if (options.slide) {
        const slideFrom = slideFromPosition(options, position)
        clone = $(elem)
          .clone(true, false)
          .appendTo('body')
          .css({
            display: 'none',
            position: 'absolute',
            top: slideFrom.top + options.adjustment.top,
            left: slideFrom.left + options.adjustment.left,
            width: size.width,
            height: size.height,
          })
        $(elem).css({ visibility: 'hidden' })
      }

      showElement.push({
        id: Math.random(),
        positionToShow: position.top,
        elem: $(elem),
        options,
        originalInfo: {
          top: position.top + options.adjustment.top,
          left: position.left + options.adjustment.left,
          height: size.height,
          width: size.width,
        },
        clone: clone,
        side: !!options.slide,
      })
      console.log(position)
    })
    show()

    // Return the jQuery object for chaining.
    return this
  },
  DEFAULT_OPTIONS
)

$(window).on('resize', () => (windowHeight = window.innerHeight))
$(window).on('scroll', show)
