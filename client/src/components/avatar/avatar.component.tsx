import React from 'react';

import { Image } from './avatar.styles';

interface AvatarProps {
  src: string;
  alt?: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt = 'user' }) => {
  return <Image src={src} alt={alt} />;
};

export default Avatar;
