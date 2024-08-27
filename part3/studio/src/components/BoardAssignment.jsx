import { useState } from 'react';

export default function BoardAssignment () {
   let [boardName,setBoardName] = useState("no boards yet!");
   const boards = [
      {label: "Sushi Lovers", value: "sushi-lovers"},
      {label: "Asian Cuisine", value: "asain-cuisine"},
      {label: "Mostly Rice", value: "mostly-rice"}
   ];

   const handleChange = (event) => {
      setBoardName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boards.map((board, index) => {
            return (
               <option key={index} value={board.value}>{board.label}</option>
            );
         })}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
