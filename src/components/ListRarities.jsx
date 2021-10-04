import React from "react";
import { CategoryRarities } from "./CategoryRarities";

export const ListRarities = ({ data }) => {
   return (
      <>
         {data.map((item) => (
            <CategoryRarities key={item.attribute} category={item} />
         ))}
      </>
   );
};
