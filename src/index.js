import { cube } from './math.js'

function component(){
    let elelment = document.createElement('pre')
    elelment.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n')
    return elelment
}

document.body.appendChild(component())