import _ from 'lodash'
import numRef from './ref.json'

export function numToWord(num){
    return _.reduce(numRef, (accun, ref) => {
        return ref.num === num ? ref.word : accun
    }, '')
}

export function wordTuNum(word){
    return _.reduce(numRef, (accum, ref) => {
        return ref.word === word && word.toLowerCase() ? ref.num : accum
    }, -1)
}
