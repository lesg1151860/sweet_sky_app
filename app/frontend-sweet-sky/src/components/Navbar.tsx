import { Box, Flex, Button, Image, useColorModeValue, Spacer, Text, useToast } from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Simulación de autenticación global (puedes reemplazar por contexto o lógica real después)
const getUserFromStorage = () => {
  const user = localStorage.getItem('sweet_sky_user');
  return user ? JSON.parse(user) : null;
};

const Navbar = () => {
  const [user, setUser] = useState(getUserFromStorage());
  const toast = useToast();
  const navigate = useNavigate();

  // Escuchar cambios de login simulados
  useEffect(() => {
    const handleStorage = () => setUser(getUserFromStorage());
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  // Simulación de logout
  const handleLogout = () => {
    localStorage.removeItem('sweet_sky_user');
    setUser(null);
    navigate('/');
  };

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
            src="/image/Logo SweetSky.webp"
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
          {/* Botón de login o nombre de usuario */}
          {!user ? (
            <Button
              colorScheme="pink"
              bg="brand.primary"
              _hover={{ bg: 'brand.secondary' }}
              as={RouterLink}
              to="/login"
              fontWeight="bold"
            >
              Iniciar sesión
            </Button>
          ) : (
            <Flex alignItems="center" gap={2}>
              <Text fontWeight="bold" color="brand.primary">
                {user.name}
              </Text>
              <Button size="sm" variant="outline" colorScheme="pink" onClick={handleLogout}>
                Cerrar sesión
              </Button>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar; 