interface Recipe {
  recipe_name: string;
  recipe_title: string;
  recipe_description_1: string;
  recipe_description_2: string;
  main_image: ImageItem;
  extra_image: ImageItem;
  ingredients: string[];
  side_note: string;
  steps: string[];
}