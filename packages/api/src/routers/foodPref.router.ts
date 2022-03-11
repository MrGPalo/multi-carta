import { FastifyPluginAsync, FastifyRequest, FastifyReply } from 'fastify';
import { FoodPref } from '../models/FoodPref.model';

type Myrequest = FastifyRequest<{
  Body: { types_Allergies: Array<String>, userId: User['_id']};
  Params: { id: string };
}>;

export const users_router: FastifyPluginAsync = async (app) => {
  // Get all ingredients
  app.get('/', async () => {
    const foodPref = await FoodPref.find().lean();
    return foodPref;
  });
  // Create a new ingredient
  app.post('/', async (request: Myrequest, reply: FastifyReply) => {
    const { types_Allergies, userId } = request.body;
    const foodPref = new FoodPref({ types_Allergies, userId });
    await foodPref.save();
    return foodPref;
  });
  app.get('/:id/delete', async (request: Myrequest, reply: FastifyReply) => {
    const { id } = request.params;
    await FoodPref.findByIdAndDelete(id);
    return { status: 'delete' };
  });
};
