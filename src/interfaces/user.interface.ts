export interface User {
  id: string;
  email: string;
  nome: string;
  password: string;
  privilege: string;
}

export interface UserCreate {
  email: string;
  nome: string;
  password: string;
  privilege: string;
}

// Funções relacionadas a User
export interface UserRepository {
  create(data: UserCreate): Promise<User>;
  findByEmail(email: string): Promise<User | null>
}
