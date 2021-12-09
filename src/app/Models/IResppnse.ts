import { Capacitacion } from "./Capacitacion";
import { usuario } from "./Usuario";

export class IResponse {
  success: boolean;
  message: string;
  data: usuario[];
}
