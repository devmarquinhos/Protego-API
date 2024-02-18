import { prisma } from "../database/prisma-client";
import { User, UserCreate, UserRepository } from "../interfaces/user.interface";

class UserRepositoryPrisma implements UserRepository {
    // Registra no banco de dados o usuário com os dados enviados no JSON
    async create(data: UserCreate): Promise<User> {
        const result = await prisma.user.create({
            data: {
                nome: data.nome,
                email: data.email,
                password: data.password,
                privilege: data.privilege,
            }
        })
        return result
    }
    // Busca o usuário pelo email
    async findByEmail(email: string): Promise<User | null> {
        const result = await prisma.user.findFirst({
            where: {
                email,
            }
        })
        return result || null
    }
} export { UserRepositoryPrisma };