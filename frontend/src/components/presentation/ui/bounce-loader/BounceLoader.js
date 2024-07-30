import React, {memo} from 'react';
import PropTypes from 'prop-types';

const BounceLoader = memo(() => {
    return (
        <div className={`bounce`}>
            <ul className={'bounce__container'}>
                <li/>
                <li/>
                <li/>
                <li/>
                <li/>
                <li/>
            </ul>
        </div>
    );
});

// BounceLoader.propTypes = {
//     className: PropTypes.string,
// };

export default BounceLoader;