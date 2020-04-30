import './assets'
import jquery from './assets/js/jquery'

(function ($) {
    $('button').click(e => {
        $('body').toggleClass('pushed')
    })
})(jquery)