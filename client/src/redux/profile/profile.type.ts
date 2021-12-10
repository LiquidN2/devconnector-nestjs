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
  user: Partial<User>;
  _id: string;
  handle: string;
  created: Date;
  updated: Date;
  company: string;
  website: string;
  location: string;
  status: string;
  bio: string;
  githubUser: string;
  linkedIn: string;
  skills: string[];
  educations: Education[];
  experiences: Experience[];
}
