'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Image,
  useColorModeValue,
  Flex,
  SimpleGrid,
  Icon,
} from '@chakra-ui/react';
import { StarIcon, ViewIcon, TimeIcon } from '@chakra-ui/icons';

const Nosotros = () => {
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')} py={20}>
      <Container maxW={'7xl'}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} mb={10}>
          <Heading fontSize={'3xl'}>Sobre Nosotros</Heading>
          <Text color={'gray.600'} fontSize={'xl'}>
            Conoce más sobre Sweet Sky y nuestros valores
          </Text>
        </Stack>

        {/* Nuestra Historia */}
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          direction={{ base: 'column', md: 'row' }}
          mb={20}>
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

        {/* Misión y Visión */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb={20}>
          {/* Misión */}
          <Box
            bg={useColorModeValue('white', 'gray.800')}
            p={8}
            rounded={'xl'}
            boxShadow={'lg'}
            position={'relative'}>
            <Icon
              as={StarIcon}
              w={10}
              h={10}
              color="brand.primary"
              position={'absolute'}
              top={-5}
              left={5}
            />
            <Stack spacing={4}>
              <Heading size="lg">Nuestra Misión</Heading>
              <Text color={'gray.500'}>
                Crear experiencias dulces únicas que deleiten a nuestros clientes,
                utilizando ingredientes de la más alta calidad y técnicas artesanales
                innovadoras. Nos comprometemos a ofrecer un servicio excepcional y
                productos que superen las expectativas.
              </Text>
            </Stack>
          </Box>

          {/* Visión */}
          <Box
            bg={useColorModeValue('white', 'gray.800')}
            p={8}
            rounded={'xl'}
            boxShadow={'lg'}
            position={'relative'}>
            <Icon
              as={ViewIcon}
              w={10}
              h={10}
              color="brand.primary"
              position={'absolute'}
              top={-5}
              left={5}
            />
            <Stack spacing={4}>
              <Heading size="lg">Nuestra Visión</Heading>
              <Text color={'gray.500'}>
                Ser reconocidos como la pastelería líder en innovación y calidad,
                expandiendo nuestra presencia mientras mantenemos nuestros valores
                artesanales y el compromiso con la excelencia en cada producto que
                creamos.
              </Text>
            </Stack>
          </Box>
        </SimpleGrid>

        {/* Valores */}
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          p={8}
          rounded={'xl'}
          boxShadow={'lg'}
          mb={10}>
          <Stack spacing={4}>
            <Heading size="lg" textAlign="center" mb={6}>
              Nuestros Valores
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              <Box textAlign="center">
                <Icon as={StarIcon} w={8} h={8} color="brand.primary" mb={4} />
                <Heading size="md" mb={4}>Calidad</Heading>
                <Text color={'gray.500'}>
                  Utilizamos solo los mejores ingredientes y mantenemos los más altos
                  estándares en cada producto.
                </Text>
              </Box>
              <Box textAlign="center">
                <Icon as={ViewIcon} w={8} h={8} color="brand.primary" mb={4} />
                <Heading size="md" mb={4}>Innovación</Heading>
                <Text color={'gray.500'}>
                  Constantemente exploramos nuevas técnicas y sabores para sorprender
                  a nuestros clientes.
                </Text>
              </Box>
              <Box textAlign="center">
                <Icon as={TimeIcon} w={8} h={8} color="brand.primary" mb={4} />
                <Heading size="md" mb={4}>Pasión</Heading>
                <Text color={'gray.500'}>
                  Amamos lo que hacemos y ponemos nuestro corazón en cada creación.
                </Text>
              </Box>
            </SimpleGrid>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Nosotros; 