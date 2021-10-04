import { Stack, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import { ItemRarities } from "./ItemRarities";
export const CategoryRarities = ({ category }) => {
   return (
      <Stack marginTop="10px" marginBottom="20px">
         <Stack>
            <Heading
               paddingBottom="20px"
               textAlign="center"
               as="h1"
               fontSize={{ base: "xl", sm: "2xl" }}
            >
               {category.attribute}
            </Heading>
            <Grid
               rowGap={4}
               templateColumns={{
                  base: "repeat(3, 1fr)",
                  md: "repeat(5, 1fr)",
               }}
            >
               {category.items.map((item) => {
                  return <ItemRarities key={item.name} item={item} />;
               })}
            </Grid>
         </Stack>
      </Stack>
   );
};
