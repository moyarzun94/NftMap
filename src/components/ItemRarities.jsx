import { Box, Heading, Text, Stack } from "@chakra-ui/layout";
import React from "react";
import image from "../alien.png";

export const ItemRarities = ({ item }) => {
   return (
      <Box style={{ textAlign: "center", backgroundColor: "orange" }}>
         <Heading as="h2" size="md">
            {item.name}
         </Heading>
         <Stack width="50%" margin="auto">
            <img src={image} alt="foto" />
            <Text>{item.country}</Text>
         </Stack>
      </Box>
   );
};
