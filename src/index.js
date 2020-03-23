import _ from 'lodash'
function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    if (process.env.NODE_ENV !== 'production') {
        console.log('Looks like we are in development mode!');
    }
    return element;
}

document.body.appendChild(component());