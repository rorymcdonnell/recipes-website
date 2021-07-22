import React, { useEffect, useState } from "react";
import { getAllCod } from "../../utils/api";

const Test = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllCod().then((recipesFromApi) => {
      setRecipes(recipesFromApi);
    });

    setIsLoading(false);
  }, []);

  if (isLoading)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );

  return (
    <div className="topics-section">
      <h1>All Topics:</h1>
      <ul>
        {recipes.map(({ recipe }) => {
          return (
            <li className="items-details" key={recipe}>
              <h2>{recipe.label}</h2>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Test;
