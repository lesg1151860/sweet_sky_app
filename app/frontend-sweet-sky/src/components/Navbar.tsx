import { Box, Flex, Button, Image, useColorModeValue } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.800')}
      px={4}
      position="fixed"
      w="100%"
      zIndex={1000}
      boxShadow="sm"
    >
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <RouterLink to="/">
          <Image
            src="/logo.png"
            alt="Sweet Sky Logo"
            h="40px"
            objectFit="contain"
          />
        </RouterLink>

        <Flex alignItems="center" gap={4}>
          <Button
            as={RouterLink}
            to="/"
            variant="ghost"
            _hover={{ bg: 'brand.accent' }}
          >
            Inicio
          </Button>
          <Button
            as={RouterLink}
            to="/productos"
            variant="ghost"
            _hover={{ bg: 'brand.accent' }}
          >
            Productos
          </Button>
          <Button
            as={RouterLink}
            to="/nosotros"
            variant="ghost"
            _hover={{ bg: 'brand.accent' }}
          >
            Nosotros
          </Button>
          <Button
            as={RouterLink}
            to="/contacto"
            variant="ghost"
            _hover={{ bg: 'brand.accent' }}
          >
            Contacto
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar; 