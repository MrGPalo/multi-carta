import { conectDB } from '../lib/db';
import { Restaurant } from '../models/Restaurant.model';

(async () => {
  const { close } = await conectDB();
  try {
    await Restaurant.collection.drop();
  } catch (error) {
    console.log('There are no Restaurants to drop from db');
  }

  const restaurant = [
    {
      name: 'Core Restaurant',
      email: 'restaurant@example.com',
      adress: 'Calle Alegria, 23',
      url: 'www.example.com/',
      foodType: ['Vegan', 'Regular'],
      zip: 28000,
    },
    {
      name: 'Tester Restaurant',
      email: 'restaurant_tester@example.com',
      adress: 'Calle Ira, 23',
      url: 'www.example_tester.com/',
      foodType: ['Regular'],
      zip: 28001,
    },
  ];

  await Promise.all(
    restaurant.map(async (rest) => {
      console.log(Object.keys(rest)[0]);
      await Restaurant.create({
        name: rest.name,
        email: rest.email,
        adress: rest.adress,
        foodType: rest.foodType,
        zip: rest.zip,
      }).then((e) => console.log(`Create Restaurants ${e.name}`));
    }),
  );

  await close();
})();
