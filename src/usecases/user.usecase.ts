import { UserCreate, UserRepository } from "../interfaces/user.interface";
import { UserRepositoryPrisma } from "../repositories/user.repository";

class UserUseCase {
  private userRepository: UserRepository;
  constructor() {
    this.userRepository = new UserRepositoryPrisma();
  }

  async create({
    nome,
    email,
    password,
    privilege,
  }: UserCreate): Promise<User> {
    const isRegistered = await this.userRepository.findByEmail(email);

    if (isRegistered) {
      throw new Error("Usuário já cadastrado.");
    }
    const result = await this.userRepository.create({
      nome,
      email,
      password,
      privilege,
    });

    return result;
  }
}
export { UserUseCase };
