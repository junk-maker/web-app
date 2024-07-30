import React, {memo} from 'react';

const BtnLoader = memo(() => {
    return (
        <div className={'btn-loader'}>
            <div className={'btn-loader__bounce-one'}/>
            <div className={'btn-loader__bounce-two'}/>
            <div className={'btn-loader__bounce-three'}/>
        </div>
    );
});

export default BtnLoader;