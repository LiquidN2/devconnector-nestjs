import { User } from '../user/user.type';

export interface Experience {
  _id: string;
  company: string;
  position: string;
  from: Date;
  to: Date | null;
  location: string;
  description: string;
}

export interface Education {
  _id: string;
  school: string;
  qualification: string;
  from: Date;
  to: Date | null;
  location: string;
  description: string;
}

export interface Profile {
  user: User;
  _id: string;
  handle: string;
  created: Date;
  updated: Date;
  company: string;
  website: string;
  location: string;
  status: string;
  about: string;
  github: string;
  linkedIn: string;
  skills: string[]; // input format
  educations: Education[];
  experiences: Experience[];
}

export interface ExperienceData {
  type: 'experience';
  body: Partial<Experience>;
}

export interface EducationData {
  type: 'education';
  body: Partial<Education>;
}
