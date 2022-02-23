import $ from 'jquery'
import { jqFuwatto } from './jqfuwatto'

const MODE = import.meta.env.MODE as 'development' | 'production'

if (MODE === 'development') {
  ;($.fn as any).fuwatto = jqFuwatto
  const testModule = import.meta.globEager('/test/index.js')
  testModule['/test/index.js'].exec($)
} else {
  ;(function ($: any) {
    $.fn.fuwatto = jqFuwatto
  })(jQuery)
}
