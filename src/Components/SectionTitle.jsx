import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='md:w-4/12 my-8 mx-auto text-center'>
            <p className='text-yellow-600 mb-2'>----{subHeading}----</p>
            <h2 className='text-3xl uppercase py-4 border-y-4'>{heading}</h2>
        </div>
    );
};

export default SectionTitle;