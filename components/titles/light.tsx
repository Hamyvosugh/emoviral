import React from 'react';

interface TitleProps {
    title: string;
    subtitle: string;
}

const Title: React.FC<TitleProps> = ({ title, subtitle }) => {
    return (
        <div className="text-center space-y-2 animate-fade-in mt-5 mb-5" id='title-1'>
            <h1 className="font-display text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                {title}
            </h1>
            <h2 className="font-sans text-lg text-gray-600 tracking-wide">
                {subtitle}
            </h2>
        </div>
    );
};

export default Title;