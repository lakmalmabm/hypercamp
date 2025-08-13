'use client';

import {
  Box,
  Container,
  Text,
  Link,
  HStack,
  useColorModeValue
} from '@chakra-ui/react';

export default function Footer() {
  const textColor = useColorModeValue('gray.500', 'gray.500');
  const linkColor = useColorModeValue('#294f0b', '#609C25');
  
  return (
    <Box 
      as="footer" 
      position="absolute"
      bottom={0}
      left={0}
      right={0}
      py={3}
      zIndex={10}
    >
      <Container maxW="container.xl">
        <HStack spacing={1} justify="center" textAlign="center" flexWrap="wrap">
          <Text 
            color={textColor} 
            fontSize={{ base: "xs", md: "sm" }}
            fontWeight="400"
          >
            © {new Date().getFullYear()} HyperCamp 
          </Text>
          
          <Text 
            color={textColor} 
            fontSize={{ base: "xs", md: "sm" }}
            fontWeight="400"
          >
            Designed and developed by{' '}
            <Link 
              href="https://x.com/wild_developer_" 
              isExternal
              color={linkColor}
              fontWeight="500"
              _hover={{ 
                textDecoration: 'underline',
                opacity: 0.8,
              }}
              transition="all 0.2s"
            >
              Wild Developer
            </Link>
          </Text>
        </HStack>
      </Container>
    </Box>
  );
}