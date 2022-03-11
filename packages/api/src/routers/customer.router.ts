import { FastifyPluginAsync, FastifyRequest, FastifyReply } from 'fastify';
import { Customer } from "../models/Customer.model";

type Myrequest = FastifyRequest<{
  Body: { name: string; quantity: string };
  Params: { id: string };
}>;

export const users_router: FastifyPluginAsync = async (app) => {
  // Get all ingredients
  app.get('/', async () => {
    const custormers = await Customer.find().lean();
    return custormers;
  });
  // Create a new ingredient
  app.post('/', async (request: Myrequest, reply: FastifyReply) => {
    const { name, quantity } = request.body;
    const custormers = new Customer({ name, quantity });
    await custormers.save();
    return custormers;
  });
  app.get('/:id/delete', async (request: Myrequest, reply: FastifyReply) => {
    const { id } = request.params;
    await Customer.findByIdAndDelete(id);
    return { status: 'delete' };
  });
};
