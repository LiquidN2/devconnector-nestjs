import React from 'react';

import { Paragraph } from '../UI/paragraph.component';

import IconBriefCase from '../icons/icon-briefcase.component';
import IconBuilding from '../icons/icon-building.component';
import IconMapMarker from '../icons/icon-mapmarker.component';
import IconCalendar from '../icons/icon-calendar.component';
import IconGradCap from '../icons/icon-grad-cap.component';
import IconSchool from '../icons/icon-school.component';

import {
  Container,
  Heading,
  SubHeading,
  Location,
  Time,
  Description,
} from './education-experience-item.styles';

interface EducationExperienceItemProps {
  type: 'experience' | 'education';
  title: string;
  subtitle: string;
  location: string;
  time: string;
  description: string;
}

const EducationExperienceItem: React.FC<EducationExperienceItemProps> = ({
  type,
  title,
  subtitle,
  location,
  time,
  description,
}) => {
  const renderHeadingIcon = () => {
    switch (type) {
      case 'education':
        return <IconGradCap />;

      default:
      case 'experience':
        return <IconBriefCase />;
    }
  };

  const renderSubHeadingIcon = () => {
    switch (type) {
      case 'education':
        return <IconSchool />;

      case 'experience':
      default:
        return <IconBuilding />;
    }
  };

  return (
    <Container>
      {renderHeadingIcon()}
      <Heading>{title}</Heading>

      {renderSubHeadingIcon()}
      <SubHeading>{subtitle}</SubHeading>

      <IconMapMarker />
      <Location>{location}</Location>

      <IconCalendar />
      <Time>{time}</Time>

      <Description>{description}</Description>
    </Container>
  );
};

export default EducationExperienceItem;
