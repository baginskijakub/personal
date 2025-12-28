import { Entry, Meal } from "./_components";

const mockMeals: Meal[] = [
  { title: "Oatmeal", calories: 200, protein: 10 },
  { title: "Chicken Salad", calories: 400, protein: 35 },
  { title: "Rice and Beans", calories: 350, protein: 15 },
  { title: "Protein Shake", calories: 150, protein: 25 },
  { title: "Steak and Veggies", calories: 550, protein: 45 },
  { title: "Smoothie", calories: 250, protein: 12 },
  { title: "Pasta with Sauce", calories: 450, protein: 18 },
  { title: "Yogurt with Berries", calories: 180, protein: 15 },
  { title: "Tuna Sandwich", calories: 300, protein: 28 },
  { title: "Soup and Bread", calories: 280, protein: 10 },
];

const generateRandomMeal = (): Meal => {
  const randomIndex = Math.floor(Math.random() * mockMeals.length);
  return { ...mockMeals[randomIndex] };
};

const generateMockEntry = (date: string): Entry => {
  const numberOfMeals = Math.floor(Math.random() * 4) + 2;
  const meals: Meal[] = Array.from(
    { length: numberOfMeals },
    generateRandomMeal,
  );

  const totalCalories = meals.reduce((sum, meal) => sum + meal.calories, 0);
  const totalProtein = meals.reduce((sum, meal) => sum + meal.protein, 0);

  return {
    date,
    calories: totalCalories,
    protein: totalProtein,
    meals,
  };
};

const getOrdinalSuffix = (n: number): string => {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

export const mockEntries: Entry[] = Array.from({ length: 20 }, (_, i) => {
  const day = i + 1;
  const date = new Date(2025, 0, day);
  const month = date.toLocaleString("en-US", { month: "long" });
  const formattedDate = `${getOrdinalSuffix(day)} ${month}`;
  return generateMockEntry(formattedDate);
});
