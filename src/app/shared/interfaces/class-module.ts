import { Person } from "./person";

export interface ClassModule {
  id: number;
  name: string;
  description: string;
  members: Person[]
}
