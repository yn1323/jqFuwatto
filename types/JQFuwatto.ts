interface JQFuwattoOptions {
  outputColor?: string
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
