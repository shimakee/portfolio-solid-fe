import { Resource as SolidResource } from "solid-js";
interface sanityBase {
  _id: string;
}

export interface Identity extends sanityBase {
  alias: string;
  useAlias: boolean;
  prefix?: string;
  first: string;
  middle?: string;
  last: string;
  suffix?: string;
}

export interface Contact extends sanityBase {
  preferredContact: "mobile" | "email";
  mobile?: string;
  email?: string;
}

export interface Skill extends sanityBase {
  image?: string;
  type: string;
  title: string;
  description?: any[];
}

export interface Social extends sanityBase {
  icon?: string;
  name: string;
  href: string;
}

export interface Profile extends sanityBase {
  profileImage?: string;
  identity: Identity;
  contact?: Contact;
  skills?: Skill[];
  socials?: Social[];
}

export interface Project extends sanityBase {
  title: string;
  details: any[];
  skills?: Skill[];
  projectLinks?: Social[];
}

export interface Resource extends sanityBase {
  title: string;
  details?: any[];
  resourceLinks?: Social[];
}

export interface Work extends sanityBase {
  startDate?: Date;
  endDate?: Date;
  company: string;
  position: string;
  details?: any[];
  skills?: Skill[];
  workLinks?: Social[];
}
