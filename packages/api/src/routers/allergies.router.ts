import { FastifyPluginAsync, FastifyRequest, FastifyReply } from 'fastify';
import { Allergies } from "../models/Allergies.model";

type Myrequest = FastifyRequest<{
  Body: { types_Allergies: Array<String>; userId: User['_id'] };
  Params: { id: string };
}>;

export const users_router: FastifyPluginAsync = async (app) => {
  // Get all ingredients
  app.get('/', async () => {
    const allergies = await Allergies.find().lean();
    return allergies;
  });
  // Create a new ingredient
  app.post('/', async (request: Myrequest, reply: FastifyReply) => {
    const { name, quantity } = request.body;
    const allergies = new Allergies({ name, quantity });
    await allergies.save();
    return allergies;
  });
  app.get('/:id/delete', async (request: Myrequest, reply: FastifyReply) => {
    const { id } = request.params;
    await Allergies.findByIdAndDelete(id);
    return { status: 'delete' };
  });
};
