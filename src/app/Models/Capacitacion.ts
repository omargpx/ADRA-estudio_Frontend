import { Sesion } from './Sesione';

export class Capacitacion {
  id_capacitacion: number;
  nombre_capacitacion: string;
  descripcion: string;
  portada: string;
  fecha_inicio: Date;
  fecha_fin: Date;
  sesion: Sesion[];
}
