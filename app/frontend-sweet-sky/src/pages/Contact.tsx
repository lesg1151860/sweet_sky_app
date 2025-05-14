import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react';
import { PhoneIcon, EmailIcon, TimeIcon } from '@chakra-ui/icons';

const Contact = () => {
  return (
    <Box pt={20}>
      <Container maxW="container.xl" py={10}>
        <VStack spacing={12}>
          <Heading color="brand.primary" textAlign="center">
            Contáctanos
          </Heading>

          {/* Información de Contacto */}
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} w="100%">
            <VStack
              p={6}
              bg={useColorModeValue('white', 'gray.700')}
              borderRadius="lg"
              shadow="md"
            >
              <Icon as={PhoneIcon} w={8} h={8} color="brand.primary" />
              <Heading size="md">Teléfono</Heading>
              <Text>+57 123 456 7890</Text>
            </VStack>

            <VStack
              p={6}
              bg={useColorModeValue('white', 'gray.700')}
              borderRadius="lg"
              shadow="md"
            >
              <Icon as={EmailIcon} w={8} h={8} color="brand.primary" />
              <Heading size="md">Email</Heading>
              <Text>info@sweetsky.com</Text>
            </VStack>

            <VStack
              p={6}
              bg={useColorModeValue('white', 'gray.700')}
              borderRadius="lg"
              shadow="md"
            >
              <Icon as={TimeIcon} w={8} h={8} color="brand.primary" />
              <Heading size="md">Horario</Heading>
              <Text>Lunes a Sábado</Text>
              <Text>8:00 AM - 6:00 PM</Text>
            </VStack>
          </SimpleGrid>

          {/* Formulario de Contacto */}
          <Box
            w="100%"
            maxW="600px"
            p={8}
            bg={useColorModeValue('white', 'gray.700')}
            borderRadius="lg"
            shadow="md"
          >
            <VStack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Nombre</FormLabel>
                <Input type="text" placeholder="Tu nombre" />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="tu@email.com" />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Mensaje</FormLabel>
                <Textarea
                  placeholder="¿En qué podemos ayudarte?"
                  rows={4}
                />
              </FormControl>

              <Button
                w="100%"
                colorScheme="pink"
                bg="brand.primary"
                _hover={{ bg: 'brand.secondary' }}
                size="lg"
              >
                Enviar Mensaje
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Contact; 