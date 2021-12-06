import React from 'react';

import ContentBox from '../content-box/content-box.component';
import EducationExperienceItem from './education-experience-item.component';

const ProfileExperience: React.FC = () => {
  const experiences = [
    {
      title: 'Job title',
      company: 'Company',
      location: 'Sydney NSW, Australia',
      time: 'Mar 1990 - June 2000',
      excerpt:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit inventore dolor voluptates in deleniti, dicta ullam sapiente tempore reprehenderit reiciendis hic exceptu',
    },
    {
      title: 'Job title',
      company: 'Company',
      location: 'Sydney NSW, Australia',
      time: 'Mar 1990 - June 2000',
      excerpt:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit inventore dolor voluptates in deleniti, dicta ullam sapiente tempore reprehenderit reiciendis hic exceptu',
    },
  ];

  return experiences.length !== 0 ? (
    <ContentBox heading="Experiences">
      {experiences.map(({ title, company, location, time, excerpt }, index) => (
        <EducationExperienceItem
          key={index}
          type="experience"
          title={title}
          subtitle={company}
          location={location}
          time={time}
          description={excerpt}
        />
      ))}
    </ContentBox>
  ) : null;
};

export default ProfileExperience;
