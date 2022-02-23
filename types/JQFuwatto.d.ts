import { SLIDE_PATTTERNS } from 'src/options'

type JQFuwattoParmameter = {
  duration?: number
  slide?: typeof SLIDE_PATTTERNS[number]
  distance?: number
}

type JQFuwattoOptions = Required<JQFuwattoParmameter>

interface JQFuwattoFunction {
  (options?: JQFuwattoOptions): JQuery
}

interface JQFuwatto extends JQFuwattoParmameter, JQFuwattoFunction {}
