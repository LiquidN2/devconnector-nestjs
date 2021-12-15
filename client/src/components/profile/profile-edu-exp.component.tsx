import React from 'react';

import ContentBox from '../content-box/content-box.component';
import EducationExperienceItem from './education-experience-item.component';

import { useProfile } from '../../hooks/useProfile';

interface ProfileEduExpProps {
  type: 'experience' | 'education';
  profileId?: string;
}

const ProfileEduExp: React.FC<ProfileEduExpProps> = ({
  type,
  profileId = '',
}) => {
  const { data } = useProfile(profileId);

  const items = data && data[`${type}s`];

  return items && items.length !== 0 ? (
    <ContentBox heading={type}>
      {items.map((item, index) => {
        let title = '';
        if ('qualification' in item) title = item.qualification;
        if ('position' in item) title = item.position;

        let organization = '';
        if ('school' in item) organization = item.school;
        if ('company' in item) organization = item.company;

        return (
          <EducationExperienceItem
            key={index}
            type={type}
            id={item._id}
            title={title}
            organization={organization}
            location={item.location}
            from={item.from}
            to={item.to}
            description={item.description}
          />
        );
      })}
    </ContentBox>
  ) : null;
};

export default ProfileEduExp;
