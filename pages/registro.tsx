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
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import NextLink from 'next/link';

const Registro = () => {
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')} py={20}>
      <Container maxW={'lg'}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} mb={10}>
          <Heading fontSize={'3xl'}>Crear Cuenta</Heading>
          <Text color={'gray.600'} fontSize={'xl'}>
            Únete a Sweet Sky y disfruta de nuestros deliciosos productos
          </Text>
        </Stack>

        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <VStack spacing={4}>
            <FormControl id="nombre" isRequired>
              <FormLabel>Nombre Completo</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Contraseña</FormLabel>
              <Input type="password" />
            </FormControl>
            <FormControl id="confirmPassword" isRequired>
              <FormLabel>Confirmar Contraseña</FormLabel>
              <Input type="password" />
            </FormControl>
            <Button
              w="full"
              bg={'brand.primary'}
              color={'white'}
              _hover={{
                bg: 'brand.primaryDark',
              }}>
              Registrarse
            </Button>
            <Text>
              ¿Ya tienes una cuenta?{' '}
              <NextLink href="/login" passHref>
                <Text as="span" color="brand.primary" cursor="pointer">
                  Inicia sesión aquí
                </Text>
              </NextLink>
            </Text>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
};

export default Registro; 