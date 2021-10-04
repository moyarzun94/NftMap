import { Box, Heading, Text, Stack } from "@chakra-ui/layout";
import React from "react";

export const ItemRarities = ({ item }) => {
   return (
      <Box style={{ textAlign: "center", backgroundColor: "#fff" }}>
         <Heading
            as="h2"
            style={{ fontWeight: "bold" }}
            fontSize={{ base: "10px", md: "14px" }}
            paddingBottom="5px"
         >
            {item.name}
         </Heading>
         <Stack width="50%" margin="auto">
            <img src={require(`../${item.path}`).default} alt="foto" />
            <Text
               fontSize={{ base: "10px", md: "14px" }}
               style={{ color: item.color, fontWeight: "bold" }}
               as="samp"
            >
               {item.rarity}
            </Text>
            <Text style={{ color: item.color }}>{item.percentage}%</Text>
            <Text
               fontSize={{ base: "12px", xl: "14px" }}
               style={{ color: "black" }}
            >
               Stock:{item.stock}/{item.total}
            </Text>
         </Stack>
      </Box>
   );
};
