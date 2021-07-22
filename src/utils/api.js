import axios from "axios";

const recipeApi = axios.create({
  baseURL: "https://api.edamam.com/api/recipes/v2",
});

export const getAllCod = async () => {
  const { data } = await recipeApi.get(
    "?type=public&q=cod&app_id=13655e2e&app_key=4cb1dd98fc61e30cd99fc3765f48978a"
  );
  return data.hits;
};
