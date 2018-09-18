async function getComponent(){
    let elelment = document.createElement('div')
    const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash')
    elelment.innerHTML = _.join(['Hello', 'webpack!'],' ')
    return elelment
}

getComponent().then(component => {
    document.body.appendChild(component())
})