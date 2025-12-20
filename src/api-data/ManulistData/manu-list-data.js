let IdFoodMenu =  0;

const getIdFoodMenu = (title, suffix = "", ) => {
  const setFoodTittleId = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  IdFoodMenu++;
  return `${setFoodTittleId}${suffix}`;
};

let IdCategoryMenu =  0;

const getIdCategoryMenu = (categoryName, suffix = "", ) => {
  const setCategoryTittleId = categoryName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  IdCategoryMenu++;
  return `${setCategoryTittleId}${suffix}`;
};

export const createFoodMenu = (title, imageName, info, price, rating, categoryName,offer ) => {
  // Normalize category to an array if a single string is provided
  const categories = Array.isArray(categoryName) ? categoryName : [categoryName];
  const imagePath = `/images/menu/${categories[0].toLowerCase().replace(/\s+/g, "")}/${imageName}`;

  return {
    id: getIdFoodMenu(title),
    foodImage: imagePath,
    title,
    price,
    rating,
    info,
    FoodCategory: categories.map((item) => ({
      id: getIdCategoryMenu(categoryName,"-categories"),
      categoryName: item, 
    })),

   offer,
    
  };
};

// Example usage:
export const FOOD_MENU_DATA = [

  createFoodMenu(
    "Chicken Biryani",
    "launch-1.jpeg",
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
     centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    "508.99",
    4.8,
    "Launch",
    '20%'
  ),
  createFoodMenu(
    "Breakfast Special",
    "breakfast-2.jpg",
  `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
     centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    "108.99",
    4.8,
    "Breakfast",
    "30%"
  ),

  createFoodMenu(
    "Black Coffee",
    "breakfast-1.jpg",
  `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
     centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    "200.99",
    4.8,
    "Breakfast",
    "30%"
  ),

  createFoodMenu(
    "Pizza",
    "fastfood-1.jpg",
 `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
     centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    "117.99",
    4.6,
    "Fast Food",
    "30%"
  ),
  createFoodMenu(
    "Soup of the Day",
    "soup-1.jpg",
`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
     centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    "105.99",
    4.5,
    "Soup",
    "30%"
  ),
  createFoodMenu(
    "Orange Juice",
    "drinks-2.jpg",
`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
     centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    "103.99",
    4.7,
    "Drinks",
    "30%"
  ),
  createFoodMenu(
    "Lemon Juice",
    "drinks-1.jpg",
`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
     centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    "203.99",
    4.7,
    "Drinks",
    "30%"
  ),
  createFoodMenu(
    "Tandoori",
    "dinner-1.jpg",
`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
     centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    "113.99",
    4.7,
    "Dinner",
    "30%"
  ),

  createFoodMenu(
    "Chicken",
    "launch-2.jpg",
 `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
     centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    "508.99",
    4.8,
    "Launch",
    "30%"
  ),
  createFoodMenu(
    "Burger",
    "fastfood-2.jpg",
  `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
     centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    "217.99",
    4.6,
    "Fast Food",
    "30%"
  ),









];