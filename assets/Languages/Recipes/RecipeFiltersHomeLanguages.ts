const FRHL: any = {
  ES: {
    diet: {
      name: "Tipo dieta",
      values: [
        { Vegetariana: "leaf" },
        { Vegana: "heart" },
        { "Sin gluten": "corn-off" },
      ],
    },
    time: {
      name: "Time",
      values: [{ "Menos de": "clock-o" }],
    },
    calories: {
      name: "Calorías",
      values: [{ Calorías: "fire" }],
    },
  },
  EN: {
    diet: {
      name: "Diet Type",
      values: ["Veggie", "Vegan", "Gluten Free"],
    },
    time: { name: "Time", values: ["Veggie", "Vegan", "Gluten Free"] },
    calories: { name: "Calories", values: ["100", "10", "1000"] },
  },
};
export default FRHL;
