import React from 'react';

import IconEmail from '../icons/icon-email.component';
import IconCode from '../icons/icon-code.component';
import IconGlobe from '../icons/icon-globe.component';
import IconGithub from '../icons/icon-github.component';
import IconLinkedIn from '../icons/icon-linkedin.component';

import { StyledSocialLink } from './social-link.styles';

interface SocialLinkProps {
  type: string;
  url: string;
  label: string;
}

const renderIcon = (type: string) => {
  const style = {
    height: '1.3rem',
    width: '1.3rem',
  };

  switch (type) {
    case 'handle':
      return <IconCode style={style} />;

    case 'email':
      return <IconEmail style={style} />;

    case 'website':
      return <IconGlobe style={style} />;

    case 'github':
      return <IconGithub style={style} />;

    case 'linkedin':
      return <IconLinkedIn style={style} />;
  }
};

const SocialLink: React.FC<SocialLinkProps> = ({ type, url, label }) => {
  return (
    <StyledSocialLink href={url}>
      {renderIcon(type)}
      <span>{label}</span>
    </StyledSocialLink>
  );
};

export default SocialLink;
