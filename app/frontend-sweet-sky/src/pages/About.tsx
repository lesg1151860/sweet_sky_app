import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  SimpleGrid,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';

const About = () => {
  return (
    <Box pt={20}>
      <Container maxW="container.xl" py={10}>
        <VStack spacing={12}>
          {/* Historia */}
          <Box textAlign="center" maxW="800px">
            <Heading color="brand.primary" mb={6}>
              Nuestra Historia
            </Heading>
            <Text fontSize="lg" color="brand.text">
              Sweet Sky nació del sueño de crear momentos dulces y memorables
              para cada ocasión especial. Con más de 5 años de experiencia en
              repostería artesanal, nos especializamos en crear productos únicos
              que deleitan los sentidos y crean recuerdos inolvidables.
            </Text>
          </Box>

          {/* Valores */}
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} w="100%">
            <VStack
              p={6}
              bg={useColorModeValue('white', 'gray.700')}
              borderRadius="lg"
              shadow="md"
            >
              <Heading size="md" color="brand.primary">
                Calidad
              </Heading>
              <Text textAlign="center">
                Utilizamos solo los mejores ingredientes para garantizar la
                excelencia en cada producto.
              </Text>
            </VStack>

            <VStack
              p={6}
              bg={useColorModeValue('white', 'gray.700')}
              borderRadius="lg"
              shadow="md"
            >
              <Heading size="md" color="brand.primary">
                Creatividad
              </Heading>
              <Text textAlign="center">
                Cada creación es única y personalizada para hacer tu evento
                especial.
              </Text>
            </VStack>

            <VStack
              p={6}
              bg={useColorModeValue('white', 'gray.700')}
              borderRadius="lg"
              shadow="md"
            >
              <Heading size="md" color="brand.primary">
                Pasión
              </Heading>
              <Text textAlign="center">
                Amamos lo que hacemos y eso se refleja en cada detalle de
                nuestros productos.
              </Text>
            </VStack>
          </SimpleGrid>

          {/* Equipo */}
          <Box textAlign="center" maxW="800px">
            <Heading color="brand.primary" mb={6}>
              Nuestro Equipo
            </Heading>
            <Text fontSize="lg" color="brand.text">
              Contamos con un equipo de profesionales apasionados por la
              repostería, comprometidos con la excelencia y la satisfacción de
              nuestros clientes.
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default About; 