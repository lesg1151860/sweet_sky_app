import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
  Image,
  Divider,
  FormErrorMessage,
  Link,
  HStack,
} from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { useState, useEffect } from 'react';
import { useToast } from '@chakra-ui/react';

const validateEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const validatePassword = (password: string) =>
  /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/.test(password);

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [logoLoaded, setLogoLoaded] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    setLogoLoaded(true);
  }, []);

  useEffect(() => {
    if (email && !validateEmail(email)) {
      setEmailError('Ingresa un correo electrónico válido.');
    } else {
      setEmailError('');
    }
  }, [email]);

  useEffect(() => {
    if (password && !validatePassword(password)) {
      setPasswordError('La contraseña debe tener mínimo 8 caracteres, una mayúscula, un número y un carácter especial.');
    } else {
      setPasswordError('');
    }
  }, [password]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailError && !passwordError && email && password) {
      // Simulación de login exitoso
      const user = { name: email.split('@')[0] };
      localStorage.setItem('sweet_sky_user', JSON.stringify(user));
      toast({
        title: 'Inicio de sesión exitoso',
        status: 'success',
        duration: 2500,
        isClosable: true,
        position: 'top',
      });
      setTimeout(() => navigate('/'), 1200);
    }
  };

  return (
    <Center minH="100vh" bg="brand.background">
      <Box
        bg="white"
        p={{ base: 6, md: 8 }}
        borderRadius="lg"
        boxShadow="md"
        w="full"
        maxW="400px"
        textAlign="center"
      >
        <Image
          src="/image/Logo SweetSky.webp"
          alt="Logo"
          mx="auto"
          mb={4}
          boxSize="110px"
          style={{
            boxShadow: '0 8px 24px 0 rgba(255,105,180,0.25)',
            transition: 'transform 0.6s cubic-bezier(.68,-0.55,.27,1.55)',
            transform: logoLoaded ? 'translateY(0)' : 'translateY(-40px) scale(0.9)',
            opacity: logoLoaded ? 1 : 0,
            animation: logoLoaded ? 'bounce 1s' : 'none',
          }}
        />
        <style>{`
          @keyframes bounce {
            0% { transform: translateY(-40px) scale(0.9); opacity: 0; }
            60% { transform: translateY(10px) scale(1.05); opacity: 1; }
            80% { transform: translateY(-5px) scale(0.98); }
            100% { transform: translateY(0) scale(1); opacity: 1; }
          }
        `}</style>
        <Text fontSize="2xl" fontWeight="bold" color="brand.text" mb={1}>
          Sweet Sky Admin / Cliente
        </Text>
        <Text color="gray.500" mb={6}>
          Ingresa tus credenciales para acceder
        </Text>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <FormControl isInvalid={!!emailError}>
              <FormLabel fontWeight="semibold">Correo electrónico</FormLabel>
              <Input
                type="email"
                placeholder="Ingresa tu correo"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              {emailError && <FormErrorMessage>{emailError}</FormErrorMessage>}
            </FormControl>
            <FormControl isInvalid={!!passwordError}>
              <FormLabel fontWeight="semibold">Contraseña</FormLabel>
              <Input
                type="password"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              {passwordError && <FormErrorMessage>{passwordError}</FormErrorMessage>}
            </FormControl>
            <Button
              colorScheme="pink"
              bg="#9C5B2B"
              _hover={{ bg: '#7a3f13' }}
              type="submit"
              isDisabled={!!emailError || !!passwordError || !email || !password}
              fontWeight="bold"
              fontSize="lg"
              mt={2}
            >
              Iniciar sesión
            </Button>
          </VStack>
        </form>
        <HStack justify="center" mt={4} mb={2}>
          <Text fontSize="sm">¿No tienes cuenta?</Text>
          <Link as={RouterLink} to="/register" color="brand.primary" fontWeight="bold" fontSize="sm">
            Regístrate
          </Link>
        </HStack>
        <Divider my={4}>
          <Text color="gray.400" fontWeight="bold">o</Text>
        </Divider>
        <Button
          leftIcon={<FcGoogle />}
          colorScheme="gray"
          variant="outline"
          w="full"
          fontWeight="bold"
          fontSize="md"
          // Aquí puedes conectar la lógica de Google y validar el rol admin/cliente
        >
          Iniciar sesión con Google
        </Button>
        <Text mt={8} color="gray.400" fontSize="sm">
          © 2025 Sweet Sky Pastelería
        </Text>
      </Box>
    </Center>
  );
};

export default Login; 