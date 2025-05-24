'use client';

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
  Textarea,
  useColorModeValue,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error al enviar el mensaje');
      }

      toast({
        title: 'Mensaje enviado',
        description: 'Gracias por contactarnos. Nos pondremos en contacto contigo pronto.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      
      // Limpiar el formulario
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        mensaje: '',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')} py={20}>
      <Container maxW={'7xl'}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} mb={10}>
          <Heading fontSize={'3xl'}>Contáctanos</Heading>
          <Text color={'gray.600'} fontSize={'xl'}>
            ¿Tienes alguna pregunta o quieres hacer un pedido especial?
          </Text>
        </Stack>

        <Stack
          spacing={{ base: 10, md: 20 }}
          direction={{ base: 'column', md: 'row' }}
          align={'center'}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="stretch">
                <FormControl id="nombre" isRequired>
                  <FormLabel>Nombre</FormLabel>
                  <Input 
                    type="text" 
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormControl id="email" isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormControl id="telefono">
                  <FormLabel>Teléfono</FormLabel>
                  <Input 
                    type="tel" 
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormControl id="mensaje" isRequired>
                  <FormLabel>Mensaje</FormLabel>
                  <Textarea 
                    rows={6} 
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </FormControl>
                <Button
                  type="submit"
                  bg={'brand.primary'}
                  color={'white'}
                  _hover={{
                    bg: 'brand.primaryDark',
                  }}
                  isLoading={isSubmitting}
                  loadingText="Enviando..."
                >
                  Enviar Mensaje
                </Button>
              </VStack>
            </form>
          </Stack>

          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Box>
              <Heading size="md" mb={4}>
                Información de Contacto
              </Heading>
              <VStack align="start" spacing={4}>
                <Text>
                  <strong>Dirección:</strong> Calle Principal #123, Ciudad
                </Text>
                <Text>
                  <strong>Teléfono:</strong> (123) 456-7890
                </Text>
                <Text>
                  <strong>Email:</strong> info@sweetsky.com
                </Text>
                <Text>
                  <strong>Horario:</strong> Lunes a Sábado, 9:00 AM - 6:00 PM
                </Text>
              </VStack>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Contacto; 