import { SLIDE_PATTTERNS } from 'src/options'

type Adjustment = {
  top?: number
  left?: number
}

type JQFuwattoParmameter = {
  duration?: number
  slide?: typeof SLIDE_PATTTERNS[number]
  distance?: number
  adjustment?: Adjustment
}

type JQFuwattoOptions = Required<JQFuwattoParmameter> & {
  adjustment: Required<Adjustment>
}

interface JQFuwattoFunction {
  (options?: JQFuwattoOptions): JQuery
}

interface JQFuwatto extends JQFuwattoParmameter, JQFuwattoFunction {}
interface JQuery {
  fuwatto: JQFuwatto
}
