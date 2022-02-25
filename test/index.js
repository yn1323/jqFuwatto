const test = $ => {
  const adjustment = { top: -3 }

  $('#icons').fuwatto({ duration: 3000 })
  $('#rightToLeft').fuwatto({ slide: 'right-left', adjustment })
  $('.jqFuwattoAsClass').fuwatto({ slide: 'left-right', adjustment })
  $('#doesnotExist').fuwatto()
  $('#doesnotExist').fuwatto({ slide: 'top-bottom' })
}

// static.html
if (window?.$?.fn?.fuwatto) {
  test(window.$)
}
// index.html
export const exec = $ => test($)
