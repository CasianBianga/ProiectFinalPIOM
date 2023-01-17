import {Role} from "../enum/role.enum";
import {ThesisI} from "./thesis";

export interface UserI {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  role: Role;
  thesis: Array<ThesisI>;
}
