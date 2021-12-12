import { User } from '../user/user.type';

interface Experience {
  company: string;
  position: string;
  from: Date;
  to: Date | null;
}

interface Education {
  school: string;
  qualification: string;
  from: Date;
  to: Date | null;
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
