import React from 'react';

import ContentBox from '../content-box/content-box.component';
import EducationExperienceItem from './education-experience-item.component';

const ProfileEducation: React.FC = () => {
  const educations = [
    {
      _id: '32423',
      degree: 'Degree / qualification',
      school: 'School',
      location: 'Sydney NSW, Australia',
      time: 'Mar 1990 - June 2000',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit inventore dolor voluptates in deleniti, dicta ullam sapiente tempore reprehenderit reiciendis hic exceptu',
    },
    {
      _id: 'asdva',
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
        ({ _id, degree, school, location, time, description }, index) => (
          <EducationExperienceItem
            id={_id}
            key={index}
            type="education"
            title={degree}
            subtitle={school}
            location={location}
            description={description}
            from={null}
            to={null}
          />
        ),
      )}
    </ContentBox>
  ) : null;
};

export default ProfileEducation;
