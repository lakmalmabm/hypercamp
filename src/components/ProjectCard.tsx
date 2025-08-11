'use client';

import {
  Box,
  Text,
  Image,
  VStack,
  HStack,
  Badge,
  Wrap,
  WrapItem,
  useColorModeValue
} from '@chakra-ui/react';
import { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

export default function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  const bg = useColorModeValue('white', 'gray.800');
  const nameColor = useColorModeValue('gray.900', 'white');
  const shadowColor = useColorModeValue('lg', 'dark-lg');
  const hoverShadow = useColorModeValue('xl', '2xl');

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'live': return 'green';
      case 'upcoming': return 'blue';
      case 'beta': return 'yellow';
      default: return 'gray';
    }
  };

  console.log('Rendering ProjectCard for:', project);

  return (
    <Box
      bg={bg}
      borderRadius="3xl"
      boxShadow={shadowColor}
      p={8}
      _hover={{ 
        transform: 'translateY(-8px)', 
        boxShadow: hoverShadow,
      }}
      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      cursor="pointer"
      h="full"
      display="flex"
      flexDirection="column"
      border="1px solid"
            onClick={() => onViewDetails(project)}
      borderColor={useColorModeValue('gray.100', 'gray.700')}
    >
      <VStack spacing={6} align="stretch" h="full">
        <HStack spacing={5} align="start">
          <Image
            src={project.logo}
            alt={`${project.name} logo`}
            boxSize="70px"
            borderRadius="2xl"
            boxShadow="md"
          />
          <VStack align="start" spacing={2} flex={1}>
            <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight="700" color={nameColor} lineHeight="shorter">
              {project.name}
            </Text>
            <HStack spacing={2} wrap="wrap">
              <Badge 
                colorScheme="purple" 
                size={{ base: "xs", md: "sm" }}
                px={{ base: 2, md: 3 }}
                py={1} 
                borderRadius="full"
                fontWeight="600"
                fontSize={{ base: "2xs", md: "xs" }}
              >
                {project.category}
              </Badge>
              <Badge 
                colorScheme={getStatusColor(project.status)}
                size={{ base: "xs", md: "sm" }}
                px={{ base: 2, md: 3 }}
                py={1} 
                borderRadius="full"
                fontWeight="600"
                fontSize={{ base: "2xs", md: "xs" }}
              >
                {project.status}
              </Badge>
            </HStack>
          </VStack>
        </HStack>

        {project.tags && project.tags.length > 0 && (
          <Wrap spacing={2}>
            {project.tags.slice(0, 3).map((tag, index) => (
              <WrapItem key={index}>
                <Badge 
                  variant="subtle" 
                  colorScheme="gray" 
                  size={{ base: "xs", md: "sm" }}
                  px={{ base: 1, md: 2 }}
                  py={1}
                  borderRadius="md"
                  fontSize={{ base: "2xs", md: "xs" }}
                >
                  {tag}
                </Badge>
              </WrapItem>
            ))}
          </Wrap>
        )}

       
      </VStack>
    </Box>
  );
}