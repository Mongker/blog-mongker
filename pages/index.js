import React from 'react';
// import PropTypes from 'prop-types';

// JSX
import VanKelly from '../components/VanKelly';
import MetaView from '../components/MetaView';

function Index() {
    const hostname = typeof window !== 'undefined' && window.location.hostname ? window.location.hostname : '';
    console.log('hostname: ', hostname);
    let component;
    let propsMeta;
    switch (hostname) {
        case 'vankelly.cf':
            component = <VanKelly />;
            break;
        case 'localhost':
            component = <VanKelly />;
            break;
        default:
            component = <div>Mong 2</div>;
            break;
    }
    return (
        <React.Fragment>
            <MetaView />
            {component}
        </React.Fragment>
    );
}

Index.propTypes = {};

Index.defaultProps = {};

export default Index;
