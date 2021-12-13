import React from 'react';

import ContentBox from '../content-box/content-box.component';
import EducationExperienceItem from './education-experience-item.component';

import { useProfile } from '../../hooks/useProfile';

interface ProfileExperienceProps {
  profileId?: string;
}

const ProfileExperience: React.FC<ProfileExperienceProps> = ({
  profileId = '',
}) => {
  const { data } = useProfile(profileId);

  return data && data.experiences.length !== 0 ? (
    <ContentBox heading="Experiences">
      {data.experiences.map(
        (
          { _id, position, company, location, description, from, to },
          index,
        ) => (
          <EducationExperienceItem
            id={_id}
            key={index}
            type="experience"
            title={position}
            subtitle={company}
            location={location}
            from={from}
            to={to}
            // time={time}
            description={description}
          />
        ),
      )}
    </ContentBox>
  ) : null;
};

export default ProfileExperience;
