import { Box, Heading, Text, VStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h1" size="2xl" mb={6}>
        Welcome to Electronics Store
      </Heading>
      <Text fontSize="xl" mb={6}>
        Your one-stop shop for the latest and greatest in electronics.
      </Text>
      <Link to="/products">
        <Button colorScheme="teal" size="lg">
          Shop Now
        </Button>
      </Link>
    </Box>
  );
};

export default Home;