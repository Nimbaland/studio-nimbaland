import { localeString, localeText, recipeImage, seo } from "./shared";
import { recipe } from "./recipe";
import { product } from "./product";
import { category, tag } from "./taxonomy";

export const schemaTypes = [localeString, localeText, recipeImage, seo, recipe, product, category, tag];
