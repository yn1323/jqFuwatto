import $ from 'jquery'
import { DEFAULT_OPTIONS } from './options'
import '../css/style.css'

type ShowElement = {
  id: number
  positionToShow: number
  elem: JQuery<HTMLElement>
  options: JQFuwattoOptions
}

let showElement: ShowElement[] = []
let windowHeight = window.innerHeight
$(window).on('resize', () => (windowHeight = window.innerHeight))

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
      target.elem.addClass('jq_fuwatto-show')
      showElement = showElement.filter(({ id }) => id !== target.id)
    })
  }
}

$(window).on('scroll', show)

$.fn.fuwatto = Object.assign<JQFuwattoFunction, JQFuwattoGlobalOptions>(
  function (this: JQuery, options = DEFAULT_OPTIONS.options): JQuery {
    options = $.extend({}, $.fn.fuwatto.options, options)

    this.addClass('jq_fuwatto')

    this.each((_, elem) => {
      showElement.push({
        id: Math.random(),
        positionToShow: this.offset()?.top ?? 0,
        elem: $(elem),
        options,
      })
    })
    show()

    // Return the jQuery object for chaining.
    return this
  },
  DEFAULT_OPTIONS
)

$('#icons').fuwatto()
$('#leftToRight').fuwatto({})
