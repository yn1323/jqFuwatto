type JQFuwattoParmameter = {
  duration?: number
  slide?: '' | 'left-right' | 'right-left' | 'bottom-top' | 'top-bottom'
  distance?: number
}

type JQFuwattoOptions = Required<JQFuwattoParmameter>

interface JQFuwattoFunction {
  (options?: JQFuwattoOptions): JQuery
}

interface JQFuwatto extends JQFuwattoParmameter, JQFuwattoFunction {}

interface JQuery {
  fuwatto: JQFuwatto
}
