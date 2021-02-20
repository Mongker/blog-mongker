import React from 'react';
// import PropTypes from 'prop-types';

// JSX
import VanKelly from '../components/VanKelly';

function Index() {
    const hostname = typeof window !== 'undefined' && window.location.hostname ? window.location.hostname : '';
    console.log('hostname', hostname);
    let component = <div>NUL</div>;
    switch (hostname) {
        case 'vankelly.cf':
            component = <VanKelly />;
            break;
        case 'http://localhost:2000':
            component = <div>Mong 1</div>;
            break;
        default:
            component = <div>Mong 2</div>;
            break;
    }
    return component;
}

Index.propTypes = {};

Index.defaultProps = {};

export default Index;
