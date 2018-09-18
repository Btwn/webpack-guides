function getComponent(){
    return import(/* webpackChunkName: "lodash" */ 'lodash')
        .then(({ default: _ }) => {
            let elelment = document.createElement('div')
            elelment.innerHTML = _.join(['Hello', 'webpack!'],' ')
            return elelment
        })
        .catch(error => 'An error occurred while loading the component')
}

getComponent().then(component => {
    document.body.appendChild(component())
})