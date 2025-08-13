'use client';

import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

export default function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('white', 'gray.800');
  const hoverBg = useColorModeValue('gray.100', 'gray.700');
  
  return (
    <IconButton
      aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
      position="fixed"
      bottom={8}
      right={8}
      size="md"
      borderRadius="full"
        border={'1px solid'}
      bg={bg}
      color={colorMode === 'light' ? 'gray.800' : 'white'}
      boxShadow="xl"
      _hover={{ 
        bg: hoverBg,
        transform: 'scale(1.1)',
      }}
      transition="all 0.2s"
      onClick={toggleColorMode}
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      zIndex={1000}
    />
  );
}