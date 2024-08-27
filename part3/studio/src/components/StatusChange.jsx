import { useState } from 'react';

export default function StatusChange () {

   let [notes,setNotes] = useState("");
   let [recipeStatus,setRecipeStatus] = useState(false);

   const handleChange = (event) => {
      setNotes(event.target.value);
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      setRecipeStatus(true);
   }

   return (
      <div style={{paddingTop: "50px"}}>
         <form onSubmit={handleSubmit}>
            <label>Have you tried this recipe? Add your notes here: <input type="text" value={notes} onChange={handleChange} />
            </label>
            <input type="submit" />
         </form>

         <p>{notes === "" ? "My Recipe Notes aren't here!" : notes}</p>

         <p>{recipeStatus ? "I have tried this recipe!" : "I have not tried this recipe!"}</p>
      </div>
   );
}
