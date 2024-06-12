import { Box, Image, Text, VStack, Heading, Button } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    image: "https://via.placeholder.com/150",
    price: "$699",
    description: "A high-end smartphone with a sleek design and powerful features.",
  },
  {
    id: 2,
    name: "Laptop",
    image: "https://via.placeholder.com/150",
    price: "$999",
    description: "A powerful laptop with a fast processor and plenty of storage.",
  },
  {
    id: 3,
    name: "Smartwatch",
    image: "https://via.placeholder.com/150",
    price: "$199",
    description: "A stylish smartwatch with a variety of health and fitness features.",
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = sampleProducts.find((p) => p.id === parseInt(id));

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <Box p={5}>
      <VStack spacing={5} align="center">
        <Image src={product.image} alt={product.name} boxSize="300px" />
        <Heading as="h2" size="xl">
          {product.name}
        </Heading>
        <Text fontSize="2xl" color="teal.500">
          {product.price}
        </Text>
        <Text>{product.description}</Text>
        <Button colorScheme="teal" size="lg">
          Add to Cart
        </Button>
      </VStack>
    </Box>
  );
};

export default ProductDetail;