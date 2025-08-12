'use client';

import { IconButton, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';
import InfoModal from './InfoModal';

export default function InfoIconButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = useColorModeValue('white', 'gray.800');
  const hoverBg = useColorModeValue('gray.100', 'gray.700');
  
  return (
    <>
      <IconButton
        aria-label="About HyperCamp"
        position="fixed"
        bottom={8}
        left={8}
        size="lg"
        borderRadius="full"
        bg={bg}
        color={useColorModeValue('gray.800', 'white')}
        boxShadow="xl"
        _hover={{ 
          bg: hoverBg,
          transform: 'scale(1.1)',
        }}
        transition="all 0.2s"
        onClick={onOpen}
        icon={<InfoIcon />}
        zIndex={1000}
      />
      <InfoModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}