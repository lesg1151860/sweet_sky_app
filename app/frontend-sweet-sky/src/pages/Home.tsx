import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Image,
  SimpleGrid,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  return (
    <Box pt={20}>
      {/* Hero Section */}
      <Box
        bg={useColorModeValue('brand.background', 'gray.800')}
        py={20}
        px={4}
      >
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
            <VStack align="start" spacing={6}>
              <Heading
                as="h1"
                size="2xl"
                color="brand.primary"
                fontWeight="bold"
              >
                Dulces Momentos,<br />
                Deliciosos Recuerdos
              </Heading>
              <Text fontSize="xl" color="brand.text">
                Descubre el arte de la repostería artesanal con nuestros productos
                hechos con amor y los mejores ingredientes.
              </Text>
              <Button
                as={RouterLink}
                to="/productos"
                size="lg"
                colorScheme="pink"
                bg="brand.primary"
                _hover={{ bg: 'brand.secondary' }}
              >
                Ver Productos
              </Button>
            </VStack>
            <Box>
              <Image
                src="/hero-image.jpg"
                alt="Repostería artesanal"
                borderRadius="lg"
                shadow="xl"
              />
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Featured Products Section */}
      <Container maxW="container.xl" py={20}>
        <VStack spacing={12}>
          <Heading color="brand.primary">Nuestros Productos Destacados</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {/* Aquí irán los productos destacados */}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Home; 