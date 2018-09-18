import _ from 'lodash'

function component(){
    let elelment = document.createElement('div')
    elelment.innerHTML = _.join(['Hello', 'webpack!'],' ')
    return elelment
}

document.body.appendChild(component())