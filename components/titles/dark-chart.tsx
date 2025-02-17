import React from 'react';

interface TitleProps {
    title: string;
    subtitle: string;
}

const Title: React.FC<TitleProps> = ({ title, subtitle }) => {
    return (
        <div className="bg-gray-900 p-6 rounded-lg">
            {/* Simple container with subtle border */}
            <div className="border border-gray-800 rounded-md p-8 relative">
                {/* Minimal accent line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-primary-500/50" />
                
                {/* Content */}
                <div className="text-center space-y-4 animate-fade-in">
                    <h1 className="font-display text-3xl font-light text-white tracking-wide">
                        {title}
                    </h1>
                    
                    <h2 className="font-sans text-sm text-gray-400 tracking-wider uppercase">
                        {subtitle}
                    </h2>
                </div>
                
                {/* Subtle corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-primary-500/20" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-primary-500/20" />
            </div>
        </div>
    );
};

export default Title;