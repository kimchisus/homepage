import React from 'react';

interface ImageProps {
    src: string; 
}

export const Image: React.FC<ImageProps> = ({src, ...props}) => <img src={`${process.env.BASE_URL}${src}`} {...props} />;