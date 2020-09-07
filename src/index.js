async function getComponent() {
    const element = document.createElement('div');
    const {
        default: _
    } = await import(
        /* webpackChunkName: "lodash" */
        'lodash'
    );
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
}

getComponent().then((component) => {
    document.body.appendChild(component);
});

async function logDay() {
    const {
        default: moment
    } = await import(
        /* webpackChunkName: "moment" */
        'moment'
    );
    console.log(moment().day());
}
logDay();