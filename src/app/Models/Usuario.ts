import { Observable } from "rxjs";
import { Rol } from "./Rol";

export class usuario {
  id: number;
  email:number;
  clave: number;
  roles:Rol[];
}
