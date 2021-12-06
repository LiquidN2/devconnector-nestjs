import React from 'react';

import ContentBox from '../content-box/content-box.component';
import EducationExperienceItem from './education-experience-item.component';

const ProfileEducation: React.FC = () => {
  const educations = [
    {
      degree: 'Degree / qualification',
      school: 'School',
      location: 'Sydney NSW, Australia',
      time: 'Mar 1990 - June 2000',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit inventore dolor voluptates in deleniti, dicta ullam sapiente tempore reprehenderit reiciendis hic exceptu',
    },
    {
      degree: 'Degree / qualification',
      school: 'School',
      location: 'Sydney NSW, Australia',
      time: 'Mar 1990 - June 2000',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit inventore dolor voluptates in deleniti, dicta ullam sapiente tempore reprehenderit reiciendis hic exceptu',
    },
  ];

  return educations.length !== 0 ? (
    <ContentBox heading="Education">
      {educations.map(
        ({ degree, school, location, time, description }, index) => (
          <EducationExperienceItem
            key={index}
            type="education"
            title={degree}
            subtitle={school}
            location={location}
            time={time}
            description={description}
          />
        ),
      )}
    </ContentBox>
  ) : null;
};

export default ProfileEducation;
