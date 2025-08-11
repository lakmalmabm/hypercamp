'use client';

import { Input, InputGroup, InputLeftElement, useColorModeValue } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export default function SearchBar({ searchTerm, onSearchChange }: SearchBarProps) {
  const bg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const hoverBorderColor = useColorModeValue('gray.300', 'gray.500');
  const focusBorderColor = useColorModeValue('#294f0b', '#609C25');
  const iconColor = useColorModeValue('gray.400', 'gray.500');
  
  return (
    <InputGroup size="lg"  mx="auto" mb={12}>
      <InputLeftElement pointerEvents="none" h="full">
        <SearchIcon color={iconColor} />
      </InputLeftElement>
      <Input
        placeholder="Search projects..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        bg={bg}
        borderColor={borderColor}
        borderRadius="2xl"
        h={{ base: "50px", md: "60px" }}
        fontSize={{ base: "md", md: "lg" }}
        pl={{ base: "50px", md: "60px" }}
        boxShadow="md"
        _hover={{ 
          borderColor: hoverBorderColor,
          boxShadow: 'lg',
        }}
        _focus={{ 
          borderColor: focusBorderColor, 
          boxShadow: `0 0 0 3px ${focusBorderColor}20`,
        }}
        transition="all 0.2s"
      />
    </InputGroup>
  );
}