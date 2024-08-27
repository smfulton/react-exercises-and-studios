import { useState } from 'react';
/*
Sushi Bake Onigiri (Rice Balls)
Rice balls filled with creamy imitation crab and shrimp
Rice, Imitation crab, shrimp, cream cheese, mirin
https://i0.wp.com/mariellamahal.com/wp-content/uploads/2023/03/featured-image_1.2.3.jpg?resize=683%2C1024&ssl=1
https://i0.wp.com/mariellamahal.com/wp-content/uploads/2022/06/DSC01168-scaled.jpeg?resize=819%2C1024&ssl=1
Mariella Mahal
https://mariellamahal.com/
*/
const RecipeAuthor = () => {
   let authorLink = "https://mariellamahal.com/";
   let authorPhoto = "https://i0.wp.com/mariellamahal.com/wp-content/uploads/2022/06/DSC01168-scaled.jpeg?resize=819%2C1024&ssl=1";
   let authorName = "Mariella Mahal";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["Rice", "Imitation crab", "Shrimp", "Cream cheese", "Nori Seaweed"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Sushi Bake Onigiri (Rice Balls)</h1>
            <p>Rice balls filled with creamy imitation crab and shrimp</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://i0.wp.com/mariellamahal.com/wp-content/uploads/2023/03/featured-image_1.2.3.jpg?resize=683%2C1024&ssl=1" alt="" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
