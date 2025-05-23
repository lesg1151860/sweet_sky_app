'use client';

import { Box, Flex, Button, Image, useColorModeValue, Spacer, Text, useToast, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

// Simulación de autenticación global (puedes reemplazar por contexto o lógica real después)
const getUserFromStorage = () => {
  const user = localStorage.getItem('sweet_sky_user');
  return user ? JSON.parse(user) : null;
};

const Navbar = () => {
  const [user, setUser] = useState(getUserFromStorage());
  const toast = useToast();
  const router = useRouter();
  const { isOpen, onToggle } = useDisclosure();

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
    router.push('/');
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
        <NextLink href="/" passHref>
          <Image
            src="/image/Logo SweetSky.webp"
            alt="Sweet Sky Logo"
            h="40px"
            objectFit="contain"
            cursor="pointer"
          />
        </NextLink>

        <Flex alignItems="center" gap={4} display={{ base: 'none', md: 'flex' }}>
          <Button
            as={NextLink}
            href="/"
            variant="ghost"
            _hover={{ bg: 'brand.accent' }}
          >
            Inicio
          </Button>
          <Button
            as={NextLink}
            href="/productos"
            variant="ghost"
            _hover={{ bg: 'brand.accent' }}
          >
            Productos
          </Button>
          <Button
            as={NextLink}
            href="/nosotros"
            variant="ghost"
            _hover={{ bg: 'brand.accent' }}
          >
            Nosotros
          </Button>
          <Button
            as={NextLink}
            href="/contacto"
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
              as={NextLink}
              href="/login"
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

        {/* Menú móvil */}
        <Button
          display={{ base: 'flex', md: 'none' }}
          onClick={onToggle}
          variant="ghost"
          aria-label="Toggle menu"
        >
          {isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar; 