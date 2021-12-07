import React from 'react';

import { Paragraph } from '../UI/paragraph.component';

import IconBriefCase from '../icons/icon-briefcase.component';
import IconBuilding from '../icons/icon-building.component';
import IconMapMarker from '../icons/icon-mapmarker.component';
import IconCalendar from '../icons/icon-calendar.component';
import IconGradCap from '../icons/icon-grad-cap.component';
import IconSchool from '../icons/icon-school.component';
import IconEdit from '../icons/icon-edit.component';
import IconTrash from '../icons/icon-trash.component';

import {
  Container,
  Heading,
  SubHeading,
  Location,
  Time,
  Description,
  ButtonEdit,
  ButtonDelete,
} from './education-experience-item.styles';

interface EducationExperienceItemProps {
  type: 'experience' | 'education';
  title: string;
  subtitle: string;
  location: string;
  time: string;
  description: string;
  editable?: boolean;
}

const EducationExperienceItem: React.FC<EducationExperienceItemProps> = ({
  type,
  title,
  subtitle,
  location,
  time,
  description,
  editable = false,
}) => {
  const renderHeadingIcon = () => {
    switch (type) {
      case 'education':
        return <IconGradCap className="col-1" />;

      default:
      case 'experience':
        return <IconBriefCase className="col-1" />;
    }
  };

  const renderSubHeadingIcon = () => {
    switch (type) {
      case 'education':
        return <IconSchool className="col-1" />;

      case 'experience':
      default:
        return <IconBuilding className="col-1" />;
    }
  };

  return (
    <Container>
      {renderHeadingIcon()}
      <Heading>{title}</Heading>

      {renderSubHeadingIcon()}
      <SubHeading>{subtitle}</SubHeading>

      <IconMapMarker className="col-1" />
      <Location>{location}</Location>

      <IconCalendar className="col-1" />
      <Time>{time}</Time>

      {editable && (
        <ButtonEdit>
          <IconEdit />
        </ButtonEdit>
      )}

      {editable && (
        <ButtonDelete>
          <IconTrash />
        </ButtonDelete>
      )}

      <Description>{description}</Description>
    </Container>
  );
};

export default EducationExperienceItem;
