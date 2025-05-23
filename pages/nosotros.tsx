import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';

const Nosotros = () => {
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')} py={20}>
      <Container maxW={'7xl'}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} mb={10}>
          <Heading fontSize={'3xl'}>Sobre Nosotros</Heading>
          <Text color={'gray.600'} fontSize={'xl'}>
            Conoce la historia detrás de Sweet Sky
          </Text>
        </Stack>

        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}>
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
                Nuestra Historia
              </Text>
            </Heading>
            <Text color={'gray.500'}>
              Sweet Sky nació del sueño de crear momentos dulces y memorables para
              nuestros clientes. Con más de 10 años de experiencia en la
              repostería artesanal, nos especializamos en crear postres únicos que
              combinan tradición e innovación.
            </Text>
            <Text color={'gray.500'}>
              Nuestro equipo de chefs apasionados trabaja con ingredientes frescos
              y de la más alta calidad para garantizar que cada bocado sea una
              experiencia inolvidable.
            </Text>
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
                alt={'Nuestro Equipo'}
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
    </Box>
  );
};

export default Nosotros; 