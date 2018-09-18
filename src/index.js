import _ from 'lodash'
import printMe from './print.js'
console.log(process.env.NODE_ENV)

if(process.env.NODE_ENV !== 'production'){
    console.log('Looks like we are in development mode!')
}

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