import { Box, Text, Button, VStack } from '@chakra-ui/react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Box minH="100vh" bg="gray.50" display="flex" alignItems="center" justifyContent="center">
      <VStack spacing={6} textAlign="center">
        <Text fontSize="6xl" fontWeight="bold" color="gray.400">
          404
        </Text>
        <Text fontSize="xl" color="gray.600">
          Page not found
        </Text>
        <Text color="gray.500">
          The page you are looking for does not exist.
        </Text>
        <Link href="/">
          <Button colorScheme="blue">
            Go back home
          </Button>
        </Link>
      </VStack>
    </Box>
  );
}