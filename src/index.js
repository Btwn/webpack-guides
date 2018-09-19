import _ from 'lodash'

function component(){
    let elelment = document.createElement('div')
    let button = document.createElement('button')
    button.innerHTML = 'Click'
    let br = document.createElement('br')
    elelment.innerHTML = _.join(['Hello', 'webpack!'],' ')
    elelment.appendChild(br)
    elelment.appendChild(button)

    button.onclick = e => import('./print.js').then(module => {
        let print = module.default
        print()
    })
    return elelment
}

document.body.appendChild(component())
