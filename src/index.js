import _ from 'lodash'
import printMe from './print.js'
import './styles.css'

function component(){
    let elelment = document.createElement('div')
    elelment.innerHTML = _.join(['Hello', 'webpack!'],' ')

    var btn = document.createElement('button')
    btn.innerHTML = 'Click'
    btn.onclick = printMe
    elelment.appendChild(btn)

    return elelment
}

let element = component()
document.body.appendChild(element)

if(module.hot){
    module.hot.accept('./print.js', () => {
        console.log('Accepting the update printMe module!')
        document.body.removeChild(element)
        element = component
        document.body.appendChild(element)
    })
}
