import React from 'react';

interface TitleProps {
    title: string;
    subtitle: string;
}

const Title: React.FC<TitleProps> = ({ title, subtitle }) => {
    return (
        <div className="bg-gray-950 p-8 rounded-lg relative overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-conic from-primary-500/20 via-secondary-500/20 to-primary-500/20 animate-spin-slow" />
            
            {/* Geometric decorative elements */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary-500/10 rounded-full blur-xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary-500/10 rounded-full blur-xl" />
            
            {/* Content container */}
            <div className="relative text-center space-y-4 animate-fade-in">
                <h1 className="font-display text-4xl font-bold">
                    {/* Gradient text overlay */}
                    <span className="bg-gradient-to-r from-primary-300 via-secondary-300 to-primary-300 bg-clip-text text-transparent">
                        {title}
                    </span>
                </h1>
                
                {/* Glowing subtitle */}
                <h2 className="font-mono text-lg text-gray-400 tracking-wide">
                    <span className="relative">
                        <span className="relative z-10">{subtitle}</span>
                        <span className="absolute inset-0 bg-primary-500/5 blur-sm rounded" />
                    </span>
                </h2>

                {/* Decorative line */}
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent mx-auto mt-4" />
            </div>
        </div>
    );
};

export default Title;