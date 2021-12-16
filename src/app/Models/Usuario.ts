import { Observable } from "rxjs";
import { Rol } from "./Rol";

export class usuario {
  id_usuario: number;
  email:number;
  clave: number;
  roles:Rol[];
}
