interface JQFuwattoOptions {
  duration?: number
  slide?: '' | 'left-right' | 'right-left' | 'bottom-top' | 'top-bottom'
  distance?: number
}

interface JQFuwattoGlobalOptions {
  options: JQFuwattoOptions
}

interface JQFuwattoFunction {
  (options?: JQFuwattoOptions): JQuery
}

interface JQFuwatto extends JQFuwattoGlobalOptions, JQFuwattoFunction {}

interface JQuery {
  fuwatto: JQFuwatto
}
