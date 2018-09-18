import _ from 'lodash'
import printMe from './print.js'

function component(){
    let elelment = document.createElement('div')
    elelment.innerHTML = _.join(['Hello', 'webpack!'],' ')

    var btn = document.createElement('button')
    btn.innerHTML = 'Click'
    btn.onclick = printMe
    elelment.appendChild(btn)

    return elelment
}

document.body.appendChild(component())