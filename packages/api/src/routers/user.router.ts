import { FastifyPluginAsync, FastifyRequest, FastifyReply } from 'fastify';
import { User } from "../models/User.model";

type Myrequest = FastifyRequest<{
  Body: { name: string; quantity: string };
  Params: { id: string };
}>;

export const users_router: FastifyPluginAsync = async (app) => {
  // Get all ingredients
  app.get('/', async () => {
    const users = await User.find().lean();
    return users;
  });
  // Create a new ingredient
  app.post('/', async (request: Myrequest, reply: FastifyReply) => {
    const { name, quantity } = request.body;
    const user = new User({ name, quantity });
    await user.save();
    return user;
  });
  app.get('/:id/delete', async (request: Myrequest, reply: FastifyReply) => {
    const { id } = request.params;
    await User.findByIdAndDelete(id);
    return { status: 'delete' };
  });
};
