export type UserRole = 'ADMINISTRADOR' | 'CLIENTE';

export interface User {
  id: string;
  nombre: string;
  correo: string;
  password: string;
  rol: UserRole;
} 