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
  const bg = useColorModeValue('#ffffff', '#373737');
  const nameColor = useColorModeValue('gray.900', 'white');
  const shadowColor = useColorModeValue('#38373c', 'black');
  const hoverShadow = useColorModeValue('xl', '2xl');

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'live': return '#79AC78';
      case 'upcoming': return '#7BD3EA';
      case 'beta': return '#FCDC94';
      default: return '#493628';
    }
  };

  console.log('Rendering ProjectCard for:', project);

  return (
    <Box
      bg={bg}
      borderRadius="10"
      boxShadow={'4px 4px 0px ' + shadowColor}
      border={'1px solid ' + shadowColor}
      p={6}
      _hover={{
        transform: 'translateY(-8px)',
        boxShadow: hoverShadow,
      }}
      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      cursor="pointer"
      h="full"
      display="flex"
      flexDirection="column"
      onClick={() => onViewDetails(project)}
    >
      <VStack spacing={6} align="stretch" h="full">

        <HStack spacing={2} wrap="wrap">
          <Badge
            bg={getStatusColor(project.status)}
            size={{ base: "xs", md: "sm" }}
            px={{ base: 2, md: 6 }}
            py={1}
            borderRadius="full"
            fontWeight="600"
            color={'white'}
            fontSize={{ base: "2xs", md: "xs" }}
          >
            {project.status}
          </Badge>
          <Badge
            bg="#354259"
            size={{ base: "xs", md: "sm" }}
            px={{ base: 2, md: 6 }}
            py={1}
            borderRadius="20px"
            color={'white'}
            fontWeight="600"
            fontSize={{ base: "2xs", md: "xs" }}
          >
            {project.category}
          </Badge>

        </HStack>

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

            <Text fontSize={{ base: "xs", md: "sm" }} fontWeight="400" color={nameColor} lineHeight="shorter">
              {project.description.slice(0, 100)}{project.description.length > 100 ? '...' : ''}
            </Text>

          </VStack>
        </HStack>

        {project.tags && project.tags.length > 0 && (
          <Wrap spacing={2}>
            {project.tags.slice(0, 6).map((tag, index) => (
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