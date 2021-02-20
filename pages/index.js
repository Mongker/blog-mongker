import React from 'react';
// import PropTypes from 'prop-types';
import absoluteUrl from 'next-absolute-url';

// JSX
import VanKelly from '../components/VanKelly';

function Index() {
    const { origin } = absoluteUrl();
    let component = <div>NUL</div>;
    switch (origin) {
        case 'https://vankelly.cf':
            component = <VanKelly />;
            break;
        case 'http://localhost:2000':
            component = <div>Mong</div>;
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
