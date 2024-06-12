import { Box, SimpleGrid, Image, Text, VStack, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    image: "https://via.placeholder.com/150",
    price: "$699",
  },
  {
    id: 2,
    name: "Laptop",
    image: "https://via.placeholder.com/150",
    price: "$999",
  },
  {
    id: 3,
    name: "Smartwatch",
    image: "https://via.placeholder.com/150",
    price: "$199",
  },
];

const Products = () => {
  return (
    <Box p={5}>
      <Heading as="h2" size="xl" mb={5} textAlign="center">
        Products
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {sampleProducts.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <VStack
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={5}
              align="center"
            >
              <Image src={product.image} alt={product.name} boxSize="150px" />
              <Text fontSize="xl" fontWeight="bold">
                {product.name}
              </Text>
              <Text>{product.price}</Text>
            </VStack>
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Products;