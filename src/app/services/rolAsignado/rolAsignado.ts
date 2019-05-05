import { Usuario } from './usuario';
import { Red } from '../red/red';

export class RolAsignado {
  fechaInicio: string;
  fechaFin: string;
  rol: string;
  usuario: Usuario | undefined;
  red: Red | undefined;
}