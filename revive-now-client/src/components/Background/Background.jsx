import React from 'react';

const Background = () => {
    return (
        <>
            <div className="absolute top-1/4 left-10 w-40 h-16 bg-white/5 rounded-full transform -rotate-45 opacity-50"></div>
            <div className="absolute bottom-1/4 right-20 w-64 h-24 bg-white/5 rounded-full transform rotate-45 opacity-50"></div>
            <div className="absolute top-20 right-1/3 w-32 h-12 bg-white/5 rounded-full transform -rotate-12 opacity-40"></div>
        </>
    );
};

export default Background;