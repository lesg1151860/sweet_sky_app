import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Stack,
  Image,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';

const Productos = () => {
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')} py={20}>
      <Container maxW={'7xl'}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} mb={10}>
          <Heading fontSize={'3xl'}>Nuestros Productos</Heading>
          <Text color={'gray.600'} fontSize={'xl'}>
            Descubre nuestra selección de deliciosos postres artesanales
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {/* Aquí irán los productos */}
          <Box
            maxW={'445px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}>
            <Box bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
              <Image
                src={
                  'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                }
                alt={'Pastel de Chocolate'}
                layout={'fill'}
              />
            </Box>
            <Stack>
              <Text
                color={'brand.primary'}
                textTransform={'uppercase'}
                fontWeight={800}
                fontSize={'sm'}
                letterSpacing={1.1}>
                Pasteles
              </Text>
              <Heading
                color={useColorModeValue('gray.700', 'white')}
                fontSize={'2xl'}
                fontFamily={'body'}>
                Pastel de Chocolate
              </Heading>
              <Text color={'gray.500'}>
                Delicioso pastel de chocolate con relleno de ganache y decorado con
                frutas frescas.
              </Text>
            </Stack>
            <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
              <Button
                as={NextLink}
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg={'brand.primary'}
                color={'white'}
                href={'/contacto'}
                _hover={{
                  bg: 'brand.secondary',
                }}>
                Ordenar
              </Button>
            </Stack>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Productos; 