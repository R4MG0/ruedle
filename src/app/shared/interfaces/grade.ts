import { User } from "./post-it-data";

export interface Grade {
  id:number;
  createdBy: User;
  forModule: any;
  grade: number;
  weight: number;
  testDate: Date;
  createdAt: Date;
  semester: number;
}
