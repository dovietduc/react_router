import React from 'react';

function Route(props) {
    console.log('props', props);
    console.log('path name currrent click', window.location.pathname);
    const pathName = window.location.pathname;

    if(pathName === props.path) {
        return props.element;
    } else {
        return null;
    }

}

export default Route;
