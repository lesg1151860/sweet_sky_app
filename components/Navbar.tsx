'use client';

import { Box, Flex, Button, Image, useColorModeValue, Spacer, Text, useToast, useDisclosure, Link, VStack, Collapse } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

// Simulación de autenticación global (puedes reemplazar por contexto o lógica real después)
const getUserFromStorage = () => {
  if (typeof window !== 'undefined') {
    const user = localStorage.getItem('sweet_sky_user');
    return user ? JSON.parse(user) : null;
  }
  return null;
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
        {/* Logo en la esquina superior izquierda */}
        <NextLink href="/" passHref>
          <Box cursor="pointer" display="flex" alignItems="center">
            <Image
              src="/image/LogoSweetSky.webp"
              alt="Sweet Sky Logo"
              h="50px"
              w="auto"
              objectFit="contain"
            />
          </Box>
        </NextLink>

        {/* Links de navegación principales (ocultos en móviles), como lista ordenada */}
        <Box as="ol" display={{ base: 'none', md: 'flex' }} alignItems="center" gap={4} listStyleType="none" m={0} p={0}>
          <li>
            <Button as={NextLink} href="/" variant="ghost" _hover={{ bg: 'brand.accent' }}>
              Inicio
            </Button>
          </li>
          <li>
            <Button as={NextLink} href="/productos" variant="ghost" _hover={{ bg: 'brand.accent' }}>
              Productos
            </Button>
          </li>
          <li>
            <Button as={NextLink} href="/nosotros" variant="ghost" _hover={{ bg: 'brand.accent' }}>
              Nosotros
            </Button>
          </li>
          <li>
            <Button as={NextLink} href="/contacto" variant="ghost" _hover={{ bg: 'brand.accent' }}>
              Contacto
            </Button>
          </li>
          {/* Botón de login o nombre de usuario */}
          <li>
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
          </li>
        </Box>

        {/* Menú móvil (visible en móviles) */}
        <Button
          display={{ base: 'flex', md: 'none' }}
          onClick={onToggle}
          variant="ghost"
          aria-label="Toggle menu"
        >
          {isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
        </Button>
      </Flex>

      {/* Contenido del menú móvil animado */}
      <Collapse in={isOpen} animateOpacity>
        <Box
          display={{ base: 'block', md: 'none' }}
          pb={4}
        >
          <VStack as="nav" spacing={4} alignItems="stretch">
            <Button as={NextLink} href="/" variant="ghost" _hover={{ bg: 'brand.accent' }}>
              Inicio
            </Button>
            <Button as={NextLink} href="/productos" variant="ghost" _hover={{ bg: 'brand.accent' }}>
              Productos
            </Button>
            <Button as={NextLink} href="/nosotros" variant="ghost" _hover={{ bg: 'brand.accent' }}>
              Nosotros
            </Button>
            <Button as={NextLink} href="/contacto" variant="ghost" _hover={{ bg: 'brand.accent' }}>
              Contacto
            </Button>
            {/* Botón de login o nombre de usuario para móvil */}
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
              <VStack spacing={2} alignItems="stretch">
                <Text fontWeight="bold" color="brand.primary" textAlign="center">
                  {user.name}
                </Text>
                <Button size="sm" variant="outline" colorScheme="pink" onClick={handleLogout}>
                  Cerrar sesión
                </Button>
              </VStack>
            )}
          </VStack>
        </Box>
      </Collapse>
    </Box>
  );
};

export default Navbar; 