import { FastifyPluginAsync } from 'fastify';
import fastifyCors from 'fastify-cors';
import { conectDB } from './lib/db';
import { main_router } from './routers/main.router';
import { users_router } from './routers/customer.router';

export const main_app: FastifyPluginAsync = async (app) => {
  conectDB();

  // ALL URL
  // app.register(fastifyCors, {
  //   // put your options here
  // });

  app.register(fastifyCors, {
    origin: (origin, cb) => {
      if (/localhost/.test(origin)) {
        //  Request from localhost will pass
        cb(null, true);
        return;
      }
      // Generate an error on other origins, disabling access
      cb(null, false);
    },
  });

  app.register(main_router);
  app.register(users_router, { prefix: '/users' });
};
