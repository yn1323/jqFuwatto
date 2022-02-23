const test = $ => {
  $('#icons').fuwatto({ duration: 3000 })
  $('#rightToLeft').fuwatto({ slide: 'right-left' })
  $('.jqFuwattoAsClass').fuwatto({ slide: 'left-right' })
  $('#doesnotExist').fuwatto()
  $('#doesnotExist').fuwatto({ slide: 'top-bottom' })
}

// static.html
if (window?.$?.fn?.fuwatto) {
  test(window.$)
}
// index.html
export const exec = $ => test($)
