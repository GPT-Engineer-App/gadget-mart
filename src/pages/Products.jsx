import { Box, SimpleGrid, Image, Text, VStack, Heading } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const products = [
  { id: 1, name: "Smartphone", price: "$299", image: "/images/smartphone.jpg" },
  { id: 2, name: "Laptop", price: "$799", image: "/images/laptop.jpg" },
  { id: 3, name: "Headphones", price: "$199", image: "/images/headphones.jpg" },
];

const Products = () => {
  return (
    <Box p={4}>
      <Heading mb={4}>Products</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {products.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <RouterLink to={`/products/${product.id}`}>
              <Image src={product.image} alt={product.name} />
              <VStack p={4}>
                <Text fontWeight="bold">{product.name}</Text>
                <Text>{product.price}</Text>
              </VStack>
            </RouterLink>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Products;