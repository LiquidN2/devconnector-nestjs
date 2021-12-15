import React, { MouseEventHandler } from 'react';

import { useAppSelector } from '../../hooks/useAppSelector';
import { selectAuthToken } from '../../redux/auth/auth.selector';
import { useDeleteExperienceOrEducationMutation } from '../../redux/profile/profile.api';
import { formatDate } from '../../utils/datetime-format.utils';

import LoadingSpinner from '../loading-spinner/loading-spinner.component';
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
  SpinnerContainer,
} from './education-experience-item.styles';

interface EducationExperienceItemProps {
  type: 'experience' | 'education';
  id: string;
  title: string;
  organization: string;
  location: string;
  from: Date | null;
  to: Date | null;
  description: string;
  editable?: boolean;
  handleEditItem?: (itemId: string) => void;
}

const EducationExperienceItem: React.FC<EducationExperienceItemProps> = ({
  type,
  id,
  title,
  organization,
  location,
  from = null,
  to = null,
  description,
  editable = false,
  handleEditItem,
}) => {
  const authToken = useAppSelector(selectAuthToken);
  const [deleteItem, { isLoading }] = useDeleteExperienceOrEducationMutation();

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

  const handleDeleteExperience: MouseEventHandler<HTMLElement> = () =>
    deleteItem({ token: authToken, type, id });

  const handleEditExperience: MouseEventHandler<HTMLElement> = () => {
    if (!handleEditItem) return;
    handleEditItem(id);
  };

  if (isLoading)
    return (
      <SpinnerContainer>
        <LoadingSpinner />
      </SpinnerContainer>
    );

  return (
    <Container>
      {renderHeadingIcon()}
      <Heading>{title}</Heading>

      {renderSubHeadingIcon()}
      <SubHeading>{organization}</SubHeading>

      <IconMapMarker className="col-1" />
      <Location>{location}</Location>

      <IconCalendar className="col-1" />
      <Time>
        {formatDate(from)} - {to ? formatDate(to) : 'present'}
      </Time>

      {editable && (
        <ButtonEdit onClick={handleEditExperience}>
          <IconEdit />
        </ButtonEdit>
      )}

      {editable && (
        <ButtonDelete onClick={handleDeleteExperience}>
          <IconTrash />
        </ButtonDelete>
      )}

      <Description>{description}</Description>
    </Container>
  );
};

export default EducationExperienceItem;
