import _ from 'lodash'
import './style.css'
import Icon from './icon.png'
import Data from './data.xml'

function component(){
    let elelment = document.createElement('div')
    elelment.innerHTML = _.join(['Hello', 'webpack!'],' ')
    elelment.classList.add('hello')
    var myIcon = new Image()
    myIcon.src = Icon
    elelment.appendChild(myIcon)
    console.log(Data)
    return elelment
}

document.body.appendChild(component())