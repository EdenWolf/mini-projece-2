const mongoose = require('mongoose')
const mongo = require('./mongo')
const Restaurant = require('./Restaurant')
const Menu = require('./Menu')

const kittySchema = new mongoose.Schema({
  name: String,
})

async function main() {
  mongo.conect()
  const silence = new Restaurant(mac)
  await mongo.saveRestaurant(silence)
  //   silence.save()
  const kittens = await Restaurant.find()

  console.log(kittens)
}

const mac = {
  image:
    'https://prod-wolt-venue-images-cdn.wolt.com/6061e28128a34ee462bb077c/4d6991ae-909a-11eb-bc4a-724226f699ff_mc_list.jpg',
  address: 'הדוגית 16, יבנה',
  location: [34.735896, 31.866917],
  name: "McDonald's® Rogovin Yavne",
  menu: [
    {
      name: '💙',
      description:
        "The full list of allergens of all McDonald's products can be found on the McDonald's website or app",
      vegan: true,
      image: null,
    },
    {
      name: 'New! Mc Chicken Meal',
      description:
        'Juicy chicken patty, with lettuce and mayonnaise sauce, served on a toasted bun\nThe meal is served with an XL french fries and 520 ml drink',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/624c0f907659cab7bd0429fc/11ec0b38-e56d-11ec-bb2a-c675030f8e22_1314_mcchicken_meal_1440x810.jpeg',
    },
    {
      name: 'New! Double Mc Chicken Meal',
      description:
        'Two juicy chicken patty, with lettuce and mayonnaise sauce, served on a toasted bun\nThe meal is served with an XL french fries and 520 ml drink',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/624c0f907659cab7bd0429fc/5c2c9dde-e56d-11ec-9160-c6e951fb99ba_1365_double_mcchicken_meal_1440x810.jpeg',
    },
    {
      name: 'New! McRoyal Onion Rings Meal',
      description:
        'McRoyal burger with premium lettuce, tomato, red onion, pickle slices, onion rings and Royal sauce \nThe meal is served with an XL french fries and 520 ml drink',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5f3e5dfd9fda9449a6a49648/6c3cddd0-7397-11ec-b7a2-ea1c272311be_1559_onion_mcroyal_meal_delivery_1440x810.jpeg',
    },
    {
      name: 'New! Double McRoyal Onion Rings Meal',
      description:
        '2 Patties in a bun with premium lettuce, tomato, red onion, pickle slices, onion rings and Royal sauce \nThe meal is served with an XL french fries and 520 ml drink',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5f3e5dfd9fda9449a6a49648/af3b0fca-7398-11ec-b47d-ea1c272311be_1564_double_onion_mcroyal_meal_delivery_1440x810.jpeg',
    },
    {
      name: 'New! Hot McRoyal Onion Rings Meal 🌶',
      description:
        'McRoyal burger with premium lettuce, tomato, red onion, pickle slices, onion rings and hot Royal sauce \nThe meal is served with an XL french fries and 520 ml drink',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5f3e5dfd9fda9449a6a49648/af0e7a9c-7851-11ec-883c-36a92daf307f_1569_hot_onion_mcroyal_meal_delivery_1440x810.jpeg',
    },
    {
      name: 'New! Hot Double McRoyal Onion Rings Meal 🌶',
      description:
        '2 Royal Hamburgers with premium lettuce, tomato, red onion, pickle slices, onion rings and hot Royal sauce \nThe meal is served with an XL french fries and 520 ml drink',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5f3e5dfd9fda9449a6a49648/36f61d8e-7852-11ec-8147-b6e43935e7ae_1574_hot_double_onion_mcroyal_meal_delivery_1440x810.jpeg',
    },
    {
      name: 'Big Premium Tokyo Meal',
      description:
        'Premium 250g before grilling with  mushrooms & Asian barbecue sauce\nThe meal is served with an XL french fries and 520 ml drink',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5f3e5dfd9fda9449a6a49648/16a411ba-73b3-11ec-977c-c66ea3db9a22_5509_delivery_1440x810__tokyo_meal_cup.jpeg',
    },
    {
      name: 'Big Premium New-York Meal',
      description:
        'Premium 250g before grilling. Served in a bun with lettuce tomatoes purple onions pickles and New-York sauce\nThe meal is served with an XL french fries and 520 ml drink',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5f3e5dfd9fda9449a6a49648/2badf404-73b3-11ec-9708-c66ea3db9a22_5554_new_york_meal_delivery_1440x810_cup.jpeg',
    },
    {
      name: 'Big Premium Hot New-York Meal 🌶',
      description:
        'Premium 250g before grilling. Served in a bun with lettuce tomatoes purple onions pickles and New-York sauce\nThe meal is served with an XL french fries and 520 ml drink',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5f3e5dfd9fda9449a6a49648/4904b16e-73b3-11ec-955d-c66ea3db9a22_5559_hot_new_york_meal_delivery_1440x810_cup.jpeg',
    },
    {
      name: 'Big Premium Amsterdam Meal',
      description:
        'Premium 250g before grilling with mayo and onion rings\nThe meal is served with an XL french fries and 520 ml drink',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5f3e5dfd9fda9449a6a49648/8bd6e1c4-73b3-11ec-9b78-ae57a506e396_5504_amsterdam_meal_delivery_1440x810_cup.jpeg',
    },
    {
      name: 'Big Premium Texas Meal',
      description:
        'Premium 250g before grilling. Served in a bun with lettuce tomatoes fried onions pickles and Texas sauce (BBQ& mustard)\nThe meal is served with an XL french fries and 520 ml drink',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5f3e5dfd9fda9449a6a49648/a4fce176-73b3-11ec-8bdd-c66ea3db9a22_5564_texas_meal_delivery_1440x810_cup.jpeg',
    },
    {
      name: 'Mega Mumbai Meal',
      description:
        'Crunchy chicken with pickle slices, tomato, premium lettuce, red onion, and curry-aioli sauce \nThe meal is served with an XL french fries and 520 ml drink',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5f3e5dfd9fda9449a6a49648/7f62d88a-76ba-11ec-af29-727b14de0f09_5446_delivery_1440x810_mumbai_meal_cup.jpeg',
    },
    {
      name: 'Classic Mumbai Meal',
      description:
        'Crunchy chicken & Curry aioli sauce\nThe meal is served with an XL french fries and 520 ml drink',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5f3e5dfd9fda9449a6a49648/da35b2a2-7442-11ec-a953-36a582f54614_5576_classic_mumbai_meal_delivery_1440x810_cup.jpeg',
    },
    {
      name: '5 Crunchies Meal',
      description:
        '5 pieces of crunchy chicken with 2 sauces in Asian flavors of your choice \nThe meal is served with an XL french fries and 520 ml drink',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5f3e5dfd9fda9449a6a49648/f05ec5f8-7444-11ec-b7c3-ca6025003d50_4916_delivery_1440x810_cranch_5pcs_meal_cup.jpeg',
    },
    {
      name: '11 Crunchies Meal',
      description:
        '11 pieces of crunchy chicken with 5 sauces in Asian flavors of your choice \nThe meal is served with an XL french fries and 520 ml drink',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5f3e5dfd9fda9449a6a49648/ff1597b6-7444-11ec-bb3b-36a582f54614_4856_delivery_1440x810_cranch_11pcs_meal_cup.jpeg',
    },
    {
      name: '9 Spicy McNuggets Meal 🌶',
      description:
        '9 Chicken nuggets with 2 sauces of your choice \nThe meal is served with an XL french fries and 520 ml drink',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5f3e5dfd9fda9449a6a49648/f81808b0-7442-11ec-a046-ca6025003d50_3936_9_spicymcnuggets_meal_1440x810.jpeg',
    },
    {
      name: '12 Spicy McNuggets Meal 🌶',
      description:
        '12 Chicken nuggets with 3 sauces of your choice \nThe meal is served with an XL french fries and 520 ml drink',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5f3e5dfd9fda9449a6a49648/4987fcc8-7443-11ec-9e28-36a582f54614_3941_12_spicymcnuggets_meal_1440x810.jpeg',
    },
    {
      name: '24 Spicy McNuggets Meal 🌶',
      description:
        '24 Chicken nuggets with 5 sauces of your choice \nThe meal is served with an XL french fries and 520 ml drink',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5f3e5dfd9fda9449a6a49648/bcfb5b00-7443-11ec-afb7-ca6025003d50_3946_24_spicymcnuggets_meal_1440x810.jpeg',
    },
    {
      name: '9 McNuggets Meal',
      description:
        '9 Chicken nuggets with 2 sauces of your choice \nThe meal is served with an XL french fries and 520 ml drink',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5f3e5dfd9fda9449a6a49648/d60572e8-7443-11ec-8d57-9ab123c8e493_1491_9_mcnuggets_meal_delivery_1440x810_cup.jpeg',
    },
    {
      name: '12 McNuggets Meal',
      description:
        '12 Chicken nuggets with 3 sauces of your choice \nThe meal is served with an XL french fries and 520 ml drink',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5f3e5dfd9fda9449a6a49648/e0d86bc6-7443-11ec-b7c3-ca6025003d50_1496_12_mcnuggets_meal_delivery_1440x810_cup.jpeg',
    },
    {
      name: '24 McNuggets Meal',
      description:
        '24 Chicken nuggets with 5 sauces of your choice \nThe meal is served with an XL french fries and 520 ml drink',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5f3e5dfd9fda9449a6a49648/ec1a51de-7443-11ec-8d57-9ab123c8e493_1415_24_mcnuggets_meal_delivery_1440x810_cup.jpeg',
    },
    {
      name: 'Big Mac Meal',
      description:
        '2 Patties in a bun with lettuce, chopped onion, pickle slices, and Big Mac sauce \nThe meal is served with an XL french fries and 520 ml drink',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5f3e5dfd9fda9449a6a49648/2fac48b2-7444-11ec-9537-ca6025003d50_1108_bigmac_delivery_meal_1440x810_cup.jpeg',
    },
    {
      name: 'Big Mac With Cheese Meal',
      description:
        '2 Patties in a bun with cheese, lettuce, chopped onion, pickle slices, and Big Mac sauce \nThe meal is served with an XL french fries and 520 ml drink',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5f3e5dfd9fda9449a6a49648/5a3a502e-7444-11ec-8b8a-9ab123c8e493_1108_bigmac_extra_cheese_meal_1440x810_cup.jpeg',
    },
    {
      name: 'McRoyal Meal',
      description:
        'McRoyal burger with premium lettuce, tomato, red onion, pickle slices, and Royal sauce \nThe meal is served with an XL french fries and 520 ml drink',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5f3e5dfd9fda9449a6a49648/6e1c0880-7444-11ec-a8d3-9ab123c8e493_1211_mcroyal_meal_delivery_1440x810_cup.jpeg',
    },
    {
      name: 'Spicy McRoyal Meal 🌶',
      description:
        'McRoyal burger with premium lettuce, tomato, red onion, pickle slices, and hot Royal sauce \nThe meal is served with an XL french fries and 520 ml drink',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5f3e5dfd9fda9449a6a49648/85786294-7444-11ec-ac5d-ca6025003d50_1232_hot_mcroyal_meal_delivery_1440x810_cup.jpeg',
    },
    {
      name: 'Spicy McRoyal with Mushrooms Meal 🌶',
      description:
        'Royal Hamburger in a bun with lettuce, purple onions, pickles, fried onions, fried mushrooms and hot Asian BBQ sauce\nThe meal is served with an XL french fries and 520 ml drink',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5f3e5dfd9fda9449a6a49648/9866cbac-7444-11ec-a953-36a582f54614_2346_hot_mcroyal_mushrooms_meal_delivery_1440x810_cup.jpeg',
    },
    {
      name: 'Double Spicy McRoyal with Mushrooms Meal 🌶',
      description:
        '2 Royal Hamburgers in a bun with lettuce, purple onions, pickles, fried onions, fried mushrooms and hot Asian BBQ sauce\nThe meal is served with an XL french fries and 520 ml drink',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5f3e5dfd9fda9449a6a49648/77b2bcec-76c2-11ec-b3b6-72160cfa574a_2391_hot_double_mcroyal_mushrooms_meal_delivery_1440x810.jpeg',
    },
    {
      name: 'McRoyal with Mushrooms Meal',
      description:
        'Royal Hamburger in a bun with lettuce, purple onions, pickles, fried onions, fried mushrooms and Asian BBQ sauce\nThe meal is served with an XL french fries and 520 ml drink',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5f3e5dfd9fda9449a6a49648/3debbe92-7446-11ec-8d57-9ab123c8e493_2341_mcroyal_mushrooms_meal_delivery_1440x810_cup.jpeg',
    },
    {
      name: 'Double McRoyal with Mushrooms Meal',
      description:
        '2 Royal Hamburgers in a bun with lettuce, purple onions, pickles, fried onions, fried mushrooms and Asian BBQ sauce\nThe meal is served with an XL french fries and 520 ml drink',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5f3e5dfd9fda9449a6a49648/882c7842-76c2-11ec-a066-72160cfa574a_2389_double_mcroyal_mushrooms_meal_delivery_1440x810.jpeg',
    },
    {
      name: 'Double McRoyal Meal',
      description:
        '2 Patties in a bun with premium lettuce, tomato, red onion, pickle slices, and Royal sauce \nThe meal is served with an XL french fries and 520 ml drink',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5f3e5dfd9fda9449a6a49648/e27ca55c-76b7-11ec-a936-727b14de0f09_1215_double_mcroyal_meal_delivery_1440x810_cup.jpeg',
    },
    {
      name: 'Spicy Double McRoyal Meal 🌶',
      description:
        '2 Patties in a bun with premium lettuce, tomato, red onion, pickle slices, and hot Royal sauce \nThe meal is served with an XL french fries and 520 ml drink',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5f3e5dfd9fda9449a6a49648/096db7c8-76b8-11ec-b3f2-727b14de0f09_1252_hot_double_mcroyal_meal_delivery_1440x810_cup.jpeg',
    },
    {
      name: 'Crispy Chicken Meal',
      description:
        'Crispy chicken breast in a bun with premium lettuce, tomato, and Royal sauce \nThe meal is served with an XL french fries and 520 ml drink',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5f3e5dfd9fda9449a6a49648/151463e2-76b8-11ec-93a1-16ad59334482_1376_crispy_chicken_meal_delivery_1440x810_cup.jpeg',
    },
    {
      name: 'Mega Crispy Chicken Meal',
      description:
        'Crispy chicken breast in a mega bun with premium lettuce, tomato, and Royal sauce \nThe meal is served with an XL french fries and 520 ml drink',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5f3e5dfd9fda9449a6a49648/1c8c1e6c-76b8-11ec-a936-727b14de0f09_1396_mega_crispy_chicken_meal_delivery_1440x810_cup.jpeg',
    },
    {
      name: 'Chicken Mix Meal',
      description:
        '6 McNuggets - chicken nuggets\n4 Chicken Select - chicken tenders with a spicy seasoning \nThe meal is served with an XL french fries and 520 ml drink',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5f3e5dfd9fda9449a6a49648/08c023e6-76b9-11ec-a656-727b14de0f09_4861_chicken_mix_4_6_meal_delivery_1440x810_cup.jpeg',
    },
    {
      name: '10 Corn Sticks Meal',
      description:
        '10 Crispy corn sticks with 2 sauces of your choice \nThe meal is served with an XL french fries and 520 ml drink',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5f3e5dfd9fda9449a6a49648/1d249434-76b9-11ec-a10b-72160cfa574a_1452_10_corn_sticks_meal_delivery_1440x810_cup.jpeg',
    },
    {
      name: '6 Chicken Selects Meal',
      description:
        '6 Chicken tenders with a spicy seasoning and 2 sauces of your choice \nThe meal is served with an XL french fries and 520 ml drink',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5f3e5dfd9fda9449a6a49648/2e67376a-76b9-11ec-8d7e-16ad59334482_4931_6_chicken_select_meal_delivery_1440x810_cup.jpeg',
    },
    {
      name: 'Double McFish Meal',
      description:
        '2 McFish in a bun with cheese, premium lettuce, tomato, red onion, pickle slices, and mayonnaise sauce \nThe meal is served with an XL french fries and 520 ml drink',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5f3e5dfd9fda9449a6a49648/436f8176-76b9-11ec-a936-727b14de0f09_1621_double_mcfish_wc_meal_delivery_1440x810_cup.jpeg',
    },
    {
      name: 'Double McFish without Cheese Meal ',
      description:
        '2 McFish in a bun with premium lettuce, tomato, red onion, pickle slices, and mayonnaise sauce \nThe meal is served with an XL french fries and 520 ml drink',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5f3e5dfd9fda9449a6a49648/4cae7ca6-76b9-11ec-a066-72160cfa574a_1626_double_mcfish_meal_delivery_1440x810_cup.jpeg',
    },
    {
      name: 'Chicken Steak Meal',
      description:
        'Juicy grilled chicken steak in a bun with lettuce tomatoes and Royal sauce\nThe meal is served with an XL french fries and 520 ml drink',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5f3e5dfd9fda9449a6a49648/ca6aad68-76b9-11ec-bb96-72160cfa574a_4775_chicken_steak_meal_delivery_1440x810_cup.jpeg',
    },
    {
      name: 'Mega Chicken Steak Meal',
      description:
        'Juicy grilled chicken steak in a bun with lettuce tomatoes and Royal sauce\nThe meal is served with an XL french fries and 520 ml drink',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5f3e5dfd9fda9449a6a49648/c1445180-76b9-11ec-8fef-16ad59334482_4776_mega_chicken_steak_new_york_meal_delivery_1440x810_cup.jpeg',
    },
    {
      name: 'Double Kebab Royal Meal',
      description:
        '2 Kebab bun with premium lettuce, tomato, red onion, pickle slices, and Royal sauce \nThe meal is served with a large french fries and 520 ml drink',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/624c0f907659cab7bd0429fc/836b0004-c3d3-11ec-936c-d62c5d5a6984_3479_mini_kabab_royal_meal_1440x810.jpeg',
    },
    {
      name: 'Mini Double Kebab with Mayonnaise Meal',
      description:
        '2 Kebab bun with premium lettuce, tomato, red onion, pickle slices, and Mayonnaise sauce \nThe meal is served with a large french fries and 520 ml drink',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/624c0f907659cab7bd0429fc/c0d8c2e6-c3d3-11ec-8b28-4695c8d2d404_3484_mini_kabab_meal_1440x810.jpeg',
    },
    {
      name: 'Hamburger Happy Meal',
      description:
        'Kids Burger with onion and ketchup \nThe meal is served with kids fries, 500 ml mineral water, carrots / apple squeeze, and a toy',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5f3e5dfd9fda9449a6a49648/9ea318bc-7dc3-11ec-9ea6-f68d2595ea14_1005_hamburger_hm_small_1440x810.jpeg',
    },
    {
      name: 'McNuggets Happy Meal',
      description:
        '4 Chicken nuggets with a sauce of your choice \nThe meal is served with kids fries, 500 ml mineral water, carrots / apple squeeze, and a toy',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5f3e5dfd9fda9449a6a49648/aa3809bc-7dc3-11ec-aaa9-c6a639d5f765_1440_mcnuggets_hm_small_1440x810.jpeg',
    },
    {
      name: 'MiniRoyal Happy Meal',
      description:
        'Kids Burger with premium lettuce, tomato and Royal sauce  \nThe meal is served with kids fries, 500 ml mineral water, carrots / apple squeeze, and a toy',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5f3e5dfd9fda9449a6a49648/b56b9d62-7dc3-11ec-96c4-8e30fce48826_1071_mini_royal_hm_small_1440x810.jpeg',
    },
    {
      name: 'Crispy Chicken Happy Meal',
      description:
        'Crispy chicken breast in a bun with premium lettuce and ketchup\nThe meal is served with kids fries, 500 ml mineral water, carrots / apple squeeze, and a toy',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5f3e5dfd9fda9449a6a49648/bf45e00e-7dc3-11ec-a102-f68d2595ea14_1309_crispy_chicken_hm_small_1440x810.jpeg',
    },
    {
      name: 'Fillet-O-Fish Happy Meal',
      description:
        'Fish fillet pattie in a bun with ketchup \nThe meal is served with kids fries, 500 ml mineral water, carrots / apple squeeze, and a toy',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5f3e5dfd9fda9449a6a49648/cb842556-7dc3-11ec-8852-c6a639d5f765_1612_mini_fish_hm_small_1440x810.jpeg',
    },
    {
      name: 'Corn Sticks Happy Meal',
      description:
        '6 Crispy corn sticks \nThe meal is served with kids fries, 500 ml mineral water, carrots / apple squeeze, and a toy',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5f3e5dfd9fda9449a6a49648/d693ac82-7dc3-11ec-b0da-8e30fce48826_1469_6_corn_sticks_hm_small_1440x810.jpeg',
    },
    {
      name: 'Siam salad with Chicken steak meal',
      description:
        'Asian salad in Siam sauce with a mixture of peanuts, sesame, crispy onions and Chicken steak\nThe meal is served with 520 ml drink',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5d776a18b557fac900e0409a/0b4c506a-c923-11eb-8524-2ef25636b587_3257_delivery_1440x810_salad_chicken_fille_meal.jpeg',
    },
    {
      name: 'Siam salad with Crunchies meal',
      description:
        'Asian salad in Siam sauce with a mixture of peanuts, sesame, crispy onions and Crunchies\nThe meal is served with 520 ml drink',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5d776a18b557fac900e0409a/14fce8a4-c923-11eb-85f1-2ef25636b587_3253_delivery_1440x810_salad_crunchy_meal.jpeg',
    },
    {
      name: '💙Allergens Symbles ',
      description: 'Allergens Symbles:\n 🥚 eggs, 🥛 milk, 🌾 gluten, 🌰  nuts',
      vegan: true,
      image: null,
    },
    {
      name: 'XL Oreo McFlurry',
      description: 'Contains 🌾, 🥛 ',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5d776a18b557fac900e0409a/757e6150-fb53-11eb-ab1e-06be97620c54_2663_oreo_cookies_walt_1440x810__1_.jpeg',
    },
    {
      name: 'XL McFlurry Italian chocolate and hazelnuts',
      description: 'Contains 🥛 ,🌰  and soy\n',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5d776a18b557fac900e0409a/7fda84b2-fb53-11eb-8a13-ee038458017c_2664_luz_1440x810.jpeg',
    },
    {
      name: 'Apple Pie',
      description: 'Contains 🌾, 🥚',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5d776a18b557fac900e0409a/99882e3c-1756-11eb-9025-c22bc50c0358_4100_apple_pie_1440x810.jpeg',
    },
    {
      name: 'New! Mc Chicken',
      description:
        'Juicy chicken patty, with lettuce and mayonnaise sauce, served on a toasted bun',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/624c0f907659cab7bd0429fc/610e0bf4-e56c-11ec-a50d-3aa287797f7f_1313_mcchicken_1440x810.jpeg',
    },
    {
      name: 'New! Double Mc Chicken',
      description:
        'Two juicy chicken patty, with lettuce and mayonnaise sauce, served on a toasted bun',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/624c0f907659cab7bd0429fc/bb4aa758-e56c-11ec-8a15-c68506ca47d6_1364_double_mcchicken_1440x810.jpeg',
    },
    {
      name: 'New! McRoyal Onion Rings',
      description:
        'Roayl Hamburger in a bun with premium lettuce, tomato, red onion, pickle slices, onion rings and Royal sauce',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/624c0f907659cab7bd0429fc/0575e6b0-d106-11ec-84eb-4ec7375c049c_whatsapp_image_2022_05_11_at_11.36.38.jpeg',
    },
    {
      name: 'New! Double McRoyal Onion Rings',
      description:
        '2 Patties in a bun with premium lettuce, tomato, red onion, pickle slices, onion rings and Royal sauce',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5f3e5dfd9fda9449a6a49648/5aef2a42-73b0-11ec-87c4-c66ea3db9a22_1549_double_onion_mcroyal_1440x810.jpeg',
    },
    {
      name: 'New! Hot McRoyal Onion Rings 🌶',
      description:
        'McRoyal burger with premium lettuce, tomato, red onion, pickle slices, onion rings and hot Royal sauce ',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5f3e5dfd9fda9449a6a49648/092e5b9a-7853-11ec-8850-8eb610c87885_1527_hot_onion_mcroyal_1440x810.jpeg',
    },
    {
      name: 'New! Hot Double McRoyal Onion Rings Meal 🌶',
      description:
        '2 Royal Hamburgers on open fire with premium lettuce, tomato, red onion, pickle slices, onion rings and hot Royal sauce',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5f3e5dfd9fda9449a6a49648/6f279236-7853-11ec-907d-e684ad8bc76f_1528_hot_double_onion_mcroyal_1440x810.jpeg',
    },
    {
      name: 'Big Premium Tokyo',
      description:
        'Premium 250g before grilling with  mushrooms & Asian barbecue sauce',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5d09eae2f00d7c2b761a3030/5428a7fa-cfd9-11ea-be1b-ca38646984b2_delivery_1440x810_mega_tokyo.jpeg',
    },
    {
      name: 'Big Premium New-York',
      description:
        'Premium 250g before grilling. Served in a bun with lettuce tomatoes purple onions pickles and New-York sauce',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/e396d452-09f0-11ea-b08a-0a586465c897_Mega_New_York_1440x810_copy.jpeg',
    },
    {
      name: 'Hot Big Premium New-York 🌶',
      description:
        'Premium 250g before grilling. Served in a bun with lettuce tomatoes purple onions pickles and hot New-York sauce',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/b6f24b24-0a19-11ea-b46e-0a5864674e39_hot_Mega_New_York_1440x810.jpeg',
    },
    {
      name: 'Big Premium Amsterdam',
      description: 'Premium 250g before grilling with mayo and onion rings',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/defde11a-09f0-11ea-967b-0a586466a735_mega_europe_1440x810_Amsterdam_copy.jpeg',
    },
    {
      name: 'Big Premium Texas',
      description:
        'Premium 250g before grilling. Served in a bun with lettuce tomatoes fried onions pickles and Texas sauce (BBQ& mustard)',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5d776a18b557fac900e0409a/2786d25c-28d1-11eb-8c96-e68853951e60_4760_mega_texas_delivery_1440x810.jpeg',
    },
    {
      name: 'Mega Mumbai',
      description:
        'Crunchy chicken with pickle slices, tomato, premium lettuce, red onion, and curry-aioli sauce ',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5d09eae2f00d7c2b761a3030/753273ea-cfd9-11ea-b6e6-f69cab8556cd_delivery_1440x810_mumbai.jpeg',
    },
    {
      name: 'Classic Mumbai',
      description: 'Crunchy chicken & Curry aioli sauce',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5d776a18b557fac900e0409a/3065217c-f58b-11ea-9d63-2ae8f9f05fd7_5575_delivery_1440x810_classic_mumbai.jpeg',
    },
    {
      name: 'Mini Mumbai',
      description: 'Crunchy chicken & Curry aioli sauce',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5d776a18b557fac900e0409a/6342a43a-f58a-11ea-91b1-b670ecdac093_1066_delivery_1440x810_mini_mumbai.jpeg',
    },
    {
      name: '5 Crunchies',
      description:
        '5 pieces of crunchy chicken with 2 sauces in Asian flavors of your choice \n',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/5e1d7c8037a805db728d0fa2/31462634-d170-11ea-830d-066ac05f7382_4779_1440x810_cranch_5pcs.jpeg',
    },
    {
      name: '11 Crunchies',
      description:
        '11 pieces of crunchy chicken with 5 sauces in Asian flavors of your choice \n',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/5e0dc569bbb04465092ba4ae/0330ade8-d6eb-11ea-9331-f2ee343c799a_delivery_1440x810_cranch_11pcs.jpeg',
    },
    {
      name: '9 Spicy McNuggets 🌶',
      description: '9 Chicken nuggets with 2 sauces of your choice',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5d776a18b557fac900e0409a/14fe5084-d99c-11eb-9f9d-ca859a62157c_3935_9_spicymcnuggets_1440x810.jpeg',
    },
    {
      name: '12 Spicy McNuggets 🌶',
      description: '12 Chicken nuggets with 3 sauces of your choice',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5d776a18b557fac900e0409a/4a5cf384-d99c-11eb-8063-e62980110cf4_3940_12_spicymcnuggets_1440x810.jpeg',
    },
    {
      name: '24 Spicy McNuggets 🌶',
      description: '24 Chicken nuggets with 5 sauces of your choice',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5d776a18b557fac900e0409a/880f244a-d99c-11eb-92a9-e62980110cf4_3945_24_spicymcnuggets_1440x810.jpeg',
    },
    {
      name: '9 McNuggets',
      description: '9 Chicken nuggets with 2 sauces of your choice',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/319695ba-09f2-11ea-a2bf-0a58646005ce_9_McNuggets_1440x810_copy.jpeg',
    },
    {
      name: '12 McNuggets',
      description: '12 Chicken nuggets with 3 sauces of your choice',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/3690c1a8-09f2-11ea-9c90-0a586465f465_12_McNuggets_1440x810_copy.jpeg',
    },
    {
      name: '24 McNuggets',
      description: '24 Chicken nuggets with 5 sauces of your choice',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/3ca3a010-09f2-11ea-8c83-0a5864601022_24_McNuggets_1440x810_copy.jpeg',
    },
    {
      name: 'McRoyal',
      description:
        'McRoyal burger with premium lettuce, tomato, red onion, pickle slices, and Royal sauce',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/05469a1a-09f1-11ea-a4f0-0a586466a735_McRoyal_1440x810_copy.jpeg',
    },
    {
      name: 'McRoyal 🌶',
      description:
        'McRoyal burger with premium lettuce, tomato, red onion, pickle slices, and hot Royal sauce',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/186ebc3a-09f1-11ea-90f9-0a586460070c_hot_McRoyal_1440x810_copy.jpeg',
    },
    {
      name: 'McRoyal with Mushrooms',
      description:
        'Royal Hamburger in a bun with lettuce, purple onions, pickles, fried onions, fried mushrooms and Asian BBQ sauce',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5d776a18b557fac900e0409a/c68320d2-f031-11ea-97e5-fef6dcec4379_mcroyal_mushrooms_1440x810__3_.jpeg',
    },
    {
      name: 'Double McRoyal with Mushrooms',
      description:
        '2 Royal Hamburgers in a bun with lettuce, purple onions, pickles, fried onions, fried mushrooms and Asian BBQ sauce',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5d776a18b557fac900e0409a/9810f0d2-5b54-11ec-8fe0-dee7c07d2181_2390_double_mcroyal_mushrooms_1440x810.jpeg',
    },
    {
      name: 'Spicy McRoyal with Mushrooms 🌶',
      description:
        'Royal Hamburger in a bun with lettuce, purple onions, pickles, fried onions, fried mushrooms and hot Asian BBQ sauce',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5d776a18b557fac900e0409a/bcef6d58-ec2d-11ea-be19-aecad4580d08_hot_mcroyal_mushrooms_1440x810.jpeg',
    },
    {
      name: 'Double Spicy McRoyal with Mushrooms 🌶',
      description:
        '2 Royal Hamburgers in a bun with lettuce, purple onions, pickles, fried onions, fried mushrooms and hot Asian BBQ sauce',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5d776a18b557fac900e0409a/c1620926-5b54-11ec-90c6-7ecc19eec1f7_2390_hot_double_mcroyal_mushrooms_1440x810.jpeg',
    },
    {
      name: 'Double McRoyal',
      description:
        '2 Patties in a bun with premium lettuce, tomato, red onion, pickle slices, and Royal sauce',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/59c8ca86-09f1-11ea-bca5-0a586460070d_Double_McRoyal_1440x810_copy.jpeg',
    },
    {
      name: 'Double McRoyal 🌶',
      description:
        '2 Patties in a bun with premium lettuce, tomato, red onion, pickle slices, and Royal sauce',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/6cfb4214-09f1-11ea-a1b9-0a586460070d_hot_Double_McRoyal_1440x810_copy.jpeg',
    },
    {
      name: 'Crispy Chicken',
      description:
        'Crispy chicken breast in a bun with premium lettuce, tomato, and Royal sauce',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/d1fd89e6-09f2-11ea-86c7-0a5864676d0c_Crispy_Chicken_Delivery_1440x810_copy.jpeg',
    },
    {
      name: 'Hamburger',
      description: 'Kids Burger with onion, pickle slices, and ketchup',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/ace58a00-0ae2-11ea-9439-0a58646005dd_mini_burger.jpeg',
    },
    {
      name: 'Mega Crispy Chicken',
      description:
        'Crispy chicken breast in a mega bun with premium lettuce, tomato, and Royal sauce',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/4edbf272-09f3-11ea-b2f9-0a5864601022_Mega_Crispy_Chicken_Delivery_1440x810_copy.jpeg',
    },
    {
      name: '6 Chicken Select',
      description:
        '6 Chicken tenders with a spicy seasoning and 2 sauces of your choice',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/5e1d7c8037a805db728d0fa2/8c8c6616-d170-11ea-a274-7e8c4388c9a7_4784_1440x810_6_chicken_selects.jpeg',
    },
    {
      name: '6 Corn Sticks',
      description: '6 Crispy corn sticks with a sauce of your choice',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/3357b5e4-09f4-11ea-bf48-0a58646005cc_6_Corn_Sticks_Delivery_1440x810_copy.jpeg',
    },
    {
      name: 'Big Mac',
      description:
        '2 Patties in a bun with lettuce, chopped onion, pickle slices, and Big Mac sauce',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/7ce450a8-09f1-11ea-9174-0a5864676d03_BigMac_1440x810_copy.jpeg',
    },
    {
      name: 'Big Mac With Cheese',
      description:
        '2 Patties in a bun with cheese, lettuce, chopped onion, pickle slices, and Big Mac sauce ',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/5e26ed9c876e326af44298dd/deea81e4-41f5-11ec-a1f1-b6ec42729eac_1108_bigmac_extra_cheese_1440x810.jpeg',
    },
    {
      name: 'Mini Royal',
      description:
        'Kids Burger with premium lettuce, tomato, red onion, pickle slices, and Royal sauce',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/9e1f03b6-0ae2-11ea-b9d5-0a586465c3f2_Mini_royal.jpeg',
    },
    {
      name: 'Mini Crispy Chicken',
      description:
        'Crispy chicken breast in a bun with premium lettuce and ketchup',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/b848b048-0ae2-11ea-b58a-0a586466be8f_mini_Crispy.jpeg',
    },
    {
      name: 'Chicken Mix',
      description:
        '6 McNuggets - chicken nuggets\n4 Chicken Select - chicken tenders with a spicy seasoning \n2 Sauces of your choice',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/df33e046-09f3-11ea-9b7a-0a586466e996_Chicken_Mix_4_6_Delivery_1440x810_copy.jpeg',
    },
    {
      name: 'Double McFish',
      description:
        '2 McFish in a bun with cheese, premium lettuce, tomato, red onion, pickle slices, and mayonnaise sauce \n',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/9fcb5048-620d-11ea-8c74-0a58647b377c_Double_mcfish_1440x810__1_.jpeg',
    },
    {
      name: 'Double McFish without Cheese',
      description:
        '2 McFish in a bun with premium lettuce, tomato, red onion, pickle slices, and mayonnaise sauce \n',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/5e26ed9c876e326af44298dd/62d5937a-9e5c-11ea-8155-0a5864735c4d_double_mcfish_no_cheese_1440x810.jpeg',
    },
    {
      name: 'Mini Fish',
      description: 'Fish fillet pattie in a bun with mayonnaise',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/c0fd2764-0ae2-11ea-a2ef-0a5864678f0e_mini_Fish.jpeg',
    },
    {
      name: 'Chicken steak',
      description:
        'Juicy grilled chicken steak in a bun with lettuce tomatoes and Royal sauce',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5d776a18b557fac900e0409a/a381c854-c20e-11eb-9a33-5a2c0c979759_4704_chicken_steak_new_york_1440x810.jpeg',
    },
    {
      name: 'Mega chicken steak',
      description:
        'Juicy grilled chicken steak in a bun with lettuce tomatoes and Royal sauce',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5d776a18b557fac900e0409a/f21b4174-c20f-11eb-a51a-9ad1b4a8a83a_4705_mega_chicken_steak_new_york_1440x810.jpeg',
    },
    {
      name: 'Mini Double Kebab with Mayonnaise',
      description:
        '2 Kebabs in a bun with premium lettuce, tomato, red onion, pickle slices, and Mayonnaise sauce',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/624c0f907659cab7bd0429fc/0d7c1992-c3d2-11ec-b5ea-5a22481bd2bf_3480_mini_kabab_walt_1440x810.jpeg',
    },
    {
      name: 'Mini Double Royal Kebab',
      description:
        '2 Kebabs in a bun with premium lettuce, tomato, red onion, pickle slices, and Royal sauce',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/624c0f907659cab7bd0429fc/f52c3a38-c3d2-11ec-ad6e-2292606a7f04_3475_mini_kabab_royal_walt_1440x810.jpeg',
    },
    {
      name: 'Oreo',
      description: 'Contains 🌾  and soy',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/612de94ed3002c0fb28a9132/2b1763f8-24ef-11ec-bf18-8a789e8bf481_4394_oreo_1440x810.jpeg',
    },
    {
      name: "M&M's",
      description: 'Contains🥛 and soy\nMay contain penuts',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/612de94ed3002c0fb28a9132/44e644e8-24ef-11ec-b2cc-a270b5ccec7f_4395_mnm_1440x810.jpeg',
    },
    {
      name: 'Chocolate Cream',
      description: 'Contains🥛 ',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/612de94ed3002c0fb28a9132/5ef4896c-24ef-11ec-bad0-ae8f08803c2d_4396_shokolad_1440x810.jpeg',
    },
    {
      name: 'Caramel Cream',
      description: 'Contains🥛',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/612de94ed3002c0fb28a9132/70d8fe42-24ef-11ec-836d-7e7286121d24_4397_caramel_1440x810.jpeg',
    },
    {
      name: 'Strawberry Cream',
      description: '',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/612de94ed3002c0fb28a9132/848ea4e6-24ef-11ec-a3ca-061eeb1ea4eb_4398_tut_1440x810.jpeg',
    },
    {
      name: '5 Mini Waffle Cones',
      description: 'Contains 🌾 and soy\nMay contain🌰  sesame and soy',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/612de94ed3002c0fb28a9132/7a841040-24f3-11ec-a8e0-badba8fae6f5_4399_5_cones__1_.jpeg',
    },
    {
      name: 'Siam salad with Chicken steak',
      description:
        'Asian salad in Siam sauce with a mixture of peanuts, sesame, crispy onions and Chicken steak\n',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5d776a18b557fac900e0409a/34593040-c923-11eb-b4cf-ce020dc66577_3256_delivery_1440x810_salad_chicken_fille.jpeg',
    },
    {
      name: 'Siam salad with Crunchies',
      description:
        'Asian salad in Siam sauce with a mixture of peanuts, sesame, crispy onions and Crunchies',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5d776a18b557fac900e0409a/3e4ed776-c923-11eb-a188-ce020dc66577_3252_delivery_1440x810_salad_crunchy.jpeg',
    },
    {
      name: 'XL French Fries',
      description: 'World famous fries',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5d776a18b557fac900e0409a/c68a1772-c923-11eb-b177-ce020dc66577_8100_fries_extra_large_1440x810.jpeg',
    },
    {
      name: 'Onion Rings',
      description: 'Crispy fried onion ring',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5d776a18b557fac900e0409a/bae080ce-c922-11eb-b7ea-2ef25636b587_6565_onion_rings_1440x810.jpeg',
    },
    {
      name: 'XL Potatoes',
      description: 'Crispy potato wedges',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5d776a18b557fac900e0409a/96a7a2be-c922-11eb-8dee-2ef25636b587_6600_wedges_extra_large_1440x810.jpeg',
    },
    {
      name: 'Small Green Salad',
      description: 'Green leaves salad with walnuts and a sauce of your choice',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5d776a18b557fac900e0409a/2cc8c7b6-c94e-11eb-aac6-b2348dd4a531_3043_small_green_salad_1440x810.jpeg',
    },
    {
      name: 'Apple Banana Squeeze',
      description: '',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5d776a18b557fac900e0409a/8476bcb2-c91b-11eb-8097-025ea8cf67c2_6392_apple_banana_squeeze_1440x810.jpeg',
    },
    {
      name: 'Carrot Snacks',
      description: '',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/88364eac-0a19-11ea-aa12-0a586466a73b_carrot_1440x810.jpeg',
    },
    {
      name: 'BBQ Sauce',
      description: '',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5f3e5dfd9fda9449a6a49648/9ad6d1f4-7dbb-11ec-8c34-72ebc0fa4ad1_7020_bbq_1440x810.jpeg',
    },
    {
      name: 'Sweet ‘N Sour Sauce',
      description: '',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5f3e5dfd9fda9449a6a49648/ae860ad0-7dbb-11ec-bd15-8221c2484856_7010_sweet_sour_1440x810.jpeg',
    },
    {
      name: 'Spicy Mustard Sauce',
      description: '',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5f3e5dfd9fda9449a6a49648/a34c558e-7dbb-11ec-83d7-6e29d21abfe3_7030_hot_mustard_1440x810.jpeg',
    },
    {
      name: 'Royal Sauce',
      description: '',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/fc01c6a4-0ae1-11ea-a711-0a5864601034_Royal_1440x810.jpeg',
    },
    {
      name: 'Hot Royal Sauce 🌶',
      description: '',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/08b72902-0ae2-11ea-95c2-0a586466be8f_Royal_hot_1440x810.jpeg',
    },
    {
      name: 'Sweet Chili Sauce',
      description: '',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5f3e5dfd9fda9449a6a49648/b717b8e2-7dbb-11ec-9049-8221c2484856_4941_sweet_chili_1440x810.jpeg',
    },
    {
      name: 'Thousand Island Sauce',
      description: '',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5d776a18b557fac900e0409a/7136f5e0-c91b-11eb-9153-0e60308d6288_c197_thousand_islands_1440x810.jpeg',
    },
    {
      name: 'Light Thousand Island Sauce',
      description: '',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5d776a18b557fac900e0409a/6952294e-c91b-11eb-90cb-025ea8cf67c2_c198_thousand_island_light_1440x810.jpeg',
    },
    {
      name: 'Vinaigrette Sauce',
      description: '',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5d776a18b557fac900e0409a/5d9ccfc8-c91b-11eb-9153-0e60308d6288_c199_vinaigrette_light_1440x810.jpeg',
    },
    {
      name: 'Olive Oil and Lemon Sauce',
      description: '',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5d776a18b557fac900e0409a/4d21e03e-c91b-11eb-9253-025ea8cf67c2_c089_olive_oil_lemon_1440x810.jpeg',
    },
    {
      name: 'Tokyo Sauce',
      description: '',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/5ec521bb7d595d48a919c919/3ced2bbe-e85d-11ea-ba04-727583a0ba23_7309_delivery_1440x810_barbecue_tokyo_sauce.jpeg',
    },
    {
      name: 'Mombai Sauce',
      description: '',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/5ec521bb7d595d48a919c919/55f47036-e85d-11ea-9932-86a6b653f805_7310_mumbai_sauce.jpeg',
    },
    {
      name: 'Big Mac Socks',
      description: '36-39',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/624c0f907659cab7bd0429fc/232b3bd0-ea77-11ec-94e9-ea519073f466_7234_bigmack_socks_wolt_1440x810.jpeg',
    },
    {
      name: 'Big Mac Socks',
      description: '42-45',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/624c0f907659cab7bd0429fc/17186714-ea77-11ec-9811-92323adf2eca_7235_bigmack_socks_wolt_1440x810.jpeg',
    },
    {
      name: 'Medium Mineral Water Bottle',
      description: '500 ml',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/086a3ffe-09f5-11ea-8f61-0a586460070c_Mineral_Water_500ml_Delivery_1440x810_copy.jpeg',
    },
    {
      name: 'Large Mineral Water',
      description: '750 ml',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/610bb9af4941197c8f244228/f4fdb96a-f911-11eb-ae03-d26edd038b40_2802_mineral_water_large_delivery_1440x810.jpeg',
    },
    {
      name: 'Large Mineral Water Bottle',
      description: '1 Liter',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/05dd69ee-0a1a-11ea-a597-0a586466676e_mey_eden_1L_1440x810.jpeg',
    },
    {
      name: 'Coca Cola Large Cup',
      description: '520 ml',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/5e778636087b6272859fb983/a4b40c68-25a1-11ec-aae2-eedcff18b190_5419_cola_walt_1440x810.jpeg',
    },
    {
      name: 'Cola Zero Large Cup',
      description: '520 ml',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/5e778636087b6272859fb983/bd42f53c-25a1-11ec-a2f3-26ba6c5d3ba3_5417_zero_walt_1440x810.jpeg',
    },
    {
      name: 'Sprite Large Cup',
      description: '520 ml',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/5e778636087b6272859fb983/d23d7b88-25a1-11ec-ac2d-e249bc16aeb3_5416_sprit_walt_1440x810.jpeg',
    },
    {
      name: 'Fanta Large Cup',
      description: '520 ml',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/5e778636087b6272859fb983/da0310bc-25a1-11ec-9766-06fae18aabda_5415_fanta_walt_1440x810.jpeg',
    },
    {
      name: 'Soda Large Cup',
      description: '520 ml',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/5e778636087b6272859fb983/e3ce8d24-25a1-11ec-9a40-b6bb1570bad4_5414_soda_walt_1440x810.jpeg',
    },
    {
      name: 'Grape Large Cup',
      description: '520 ml',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/5e778636087b6272859fb983/ea35b034-25a1-11ec-add8-d68c1c99d1d4_5412_grape_walt_1440x810.jpeg',
    },
    {
      name: 'Orange Juice Bottle',
      description: 'Primor brand\nBottle ',
      vegan: true,
      image:
        'https://wolt-menu-images-cdn.wolt.com/menu-images/b7cfd022-09f4-11ea-82ca-0a586466c040_primor_Squeezed_Orange_Delivery_1440x810_copy.jpeg',
    },
    {
      name: 'Fuze Tea Bottle',
      description: 'Peach',
      vegan: true,
      image:
        'https://image-resizer-proxy.development.dev.woltapi.com/wolt-dev-development-restaurant-api-menu-images/menu-images/5d776a18b557fac900e0409a/7db5cb8e-f51c-11eb-8d1e-feed6aaeb827_ft_peach_500ml.jpeg',
    },
  ],
}

main().catch((err) => console.log(err))
