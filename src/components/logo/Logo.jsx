import React from 'react';

const Logo = ({ type }) => {
    let logoSrc = '/images/logo.svg';
    if (type === 'muted') {
        logoSrc = '/images/logo-muted.svg';
    }

    return <img src={logoSrc} alt="Logo" />;
};

Logo.defaultProps = {
    type: 'default'
};

export default Logo;