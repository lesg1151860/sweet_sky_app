import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Text,
  Select,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const Products = () => {
  return (
    <Box pt={20}>
      <Container maxW="container.xl" py={10}>
        <VStack spacing={8} align="stretch">
          <Heading color="brand.primary" textAlign="center">
            Nuestros Productos
          </Heading>
          
          {/* Filtros y Búsqueda */}
          <HStack spacing={4} justify="center">
            <InputGroup maxW="400px">
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.300" />
              </InputLeftElement>
              <Input
                placeholder="Buscar productos..."
                bg={useColorModeValue('white', 'gray.700')}
                borderRadius="full"
              />
            </InputGroup>
            
            <Select
              placeholder="Categoría"
              maxW="200px"
              bg={useColorModeValue('white', 'gray.700')}
              borderRadius="full"
            >
              <option value="tortas">Tortas</option>
              <option value="postres">Postres</option>
              <option value="galletas">Galletas</option>
              <option value="panaderia">Panadería</option>
            </Select>
          </HStack>

          {/* Grid de Productos */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {/* Aquí irán los productos */}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Products; 