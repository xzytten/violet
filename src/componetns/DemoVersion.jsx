import React from 'react';
import '../scss/demo-version/demo-version.scss'
const DemoVersion = () => {
    return (
        <div className='demo'>
            <h2 className='`demo__title'>Want to help your patients access the care they deserve?</h2>
            <p className='demo__description'>Help us address inequities in the health care system by delivering inclusive care.</p>
            <button className='demo__button'>Request a demo</button>
        </div>
    );
};

export default DemoVersion;