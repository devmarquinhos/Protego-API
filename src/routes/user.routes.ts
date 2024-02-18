import { FastifyInstance, fastify } from "fastify";
import { UserUseCase } from "../usecases/user.usecase";
import { UserCreate } from "../interfaces/user.interface";

// Rota para criar usuário
export async function userRoutes(fastify: FastifyInstance) {
  const userUseCase = new UserUseCase();

  fastify.post<{ Body: UserCreate }>("/", async (req, reply) => {
    const { nome, email, password, privilege } = req.body;
    try {
      const data = await userUseCase.create({
        nome,
        email,
        password,
        privilege,
      });
      return reply.send(data);
    } catch (error) {
      reply.send(error);
    }
  });

  fastify.get("/", (req, reply) => {
    reply.send({ hello: "world" });
  });
}
