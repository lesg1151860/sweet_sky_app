import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';

const Home = () => {
  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'brand.primary',
                zIndex: -1,
              }}>
              Sweet Sky
            </Text>
            <br />
            <Text as={'span'} color={'brand.primary'}>
              Pastelería Artesanal
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            Descubre el dulce sabor de la tradición artesanal. En Sweet Sky, cada
            postre es una obra maestra creada con ingredientes frescos y mucho
            amor. Desde pasteles clásicos hasta creaciones innovadoras, cada bocado
            es una experiencia única.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}>
            <Button
              as={NextLink}
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'pink'}
              bg={'brand.primary'}
              href={'/productos'}
              _hover={{ bg: 'brand.secondary' }}>
              Ver Productos
            </Button>
            <Button
              as={NextLink}
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              href={'/contacto'}>
              Contactar
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={
                'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
              }
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
};

export default Home; 