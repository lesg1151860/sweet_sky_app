import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';

const Contacto = () => {
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')} py={20}>
      <Container maxW={'7xl'}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} mb={10}>
          <Heading fontSize={'3xl'}>Contáctanos</Heading>
          <Text color={'gray.600'} fontSize={'xl'}>
            ¿Tienes alguna pregunta o quieres hacer un pedido especial?
          </Text>
        </Stack>

        <Stack
          spacing={{ base: 10, md: 20 }}
          direction={{ base: 'column', md: 'row' }}
          align={'center'}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <VStack spacing={4} align="stretch">
              <FormControl id="nombre" isRequired>
                <FormLabel>Nombre</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="telefono">
                <FormLabel>Teléfono</FormLabel>
                <Input type="tel" />
              </FormControl>
              <FormControl id="mensaje" isRequired>
                <FormLabel>Mensaje</FormLabel>
                <Textarea rows={6} />
              </FormControl>
              <Button
                bg={'brand.primary'}
                color={'white'}
                _hover={{
                  bg: 'brand.primaryDark',
                }}>
                Enviar Mensaje
              </Button>
            </VStack>
          </Stack>

          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Box>
              <Heading size="md" mb={4}>
                Información de Contacto
              </Heading>
              <VStack align="start" spacing={4}>
                <Text>
                  <strong>Dirección:</strong> Calle Principal #123, Ciudad
                </Text>
                <Text>
                  <strong>Teléfono:</strong> (123) 456-7890
                </Text>
                <Text>
                  <strong>Email:</strong> info@sweetsky.com
                </Text>
                <Text>
                  <strong>Horario:</strong> Lunes a Sábado, 9:00 AM - 6:00 PM
                </Text>
              </VStack>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Contacto; 