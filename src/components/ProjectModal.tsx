'use client';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  VStack,
  HStack,
  Text,
  Image,
  Badge,
  Button,
  Link,
  Divider,
  Box,
  SimpleGrid,
  Wrap,
  WrapItem,
  useColorModeValue
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Project } from '@/types/project';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const bg = useColorModeValue('white', '#373737');
  const textColor = useColorModeValue('gray.700', 'gray.300');
  const headingColor = useColorModeValue('gray.900', 'white');
  const closeBg = useColorModeValue('gray.100', 'gray.700');
  const closeHoverBg = useColorModeValue('gray.200', 'gray.600');
  const teamBg = useColorModeValue('gray.50', 'gray.700');
  const shadowColor = useColorModeValue('#38373c', 'black');
  
  if (!project) return null;

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'live': return 'green';
      case 'upcoming': return 'blue';
      case 'beta': return 'yellow';
      default: return 'gray';
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="3xl" isCentered>
      <ModalOverlay bg="blackAlpha.600" backdropFilter="blur(10px)" />
      <ModalContent 
        maxH="90vh" 
        overflowY="auto" 
        bg={bg}
        
        // boxShadow="2xl"
        mx={4}
        borderRadius="10"
        boxShadow={'4px 4px 0px ' + shadowColor}
        border={'1px solid ' + shadowColor}
      >
        <ModalHeader px={8} pt={8} pb={0}>
          <HStack spacing={6} align="start">
            <Image
              src={project.logo}
              alt={`${project.name} logo`}
              boxSize="80px"
              borderRadius="2xl"
              fallbackSrc="https://via.placeholder.com/80x80?text=Logo"
              boxShadow="lg"
            />
            <VStack align="start" spacing={3} flex={1}>
              <Text fontSize={{ base: "xl", md: "3xl" }} fontWeight="800" color={headingColor} lineHeight="shorter">
                {project.name}
              </Text>
              <HStack spacing={3} wrap="wrap">
                <Badge 
                  colorScheme="purple" 
                  size={{ base: "sm", md: "md" }}
                  px={{ base: 3, md: 4 }}
                  py={2} 
                  borderRadius="full"
                  fontWeight="700"
                  fontSize={{ base: "xs", md: "sm" }}
                >
                  {project.category}
                </Badge>
                <Badge 
                  colorScheme={getStatusColor(project.status)}
                  size={{ base: "sm", md: "md" }}
                  px={{ base: 3, md: 4 }}
                  py={2} 
                  borderRadius="full"
                  fontWeight="700"
                  fontSize={{ base: "xs", md: "sm" }}
                >
                  {project.status}
                </Badge>
              </HStack>
            </VStack>
          </HStack>
        </ModalHeader>
        <ModalCloseButton 
          size="lg" 
          top={6} 
          right={6}
          bg={closeBg}
          _hover={{ bg: closeHoverBg }}
        />
        
        <ModalBody px={8} pb={8}>
          <VStack spacing={8} align="stretch" mt={6}>
            <Text 
              color={textColor} 
              lineHeight="tall" 
              fontSize={{ base: "md", md: "lg" }}
              dangerouslySetInnerHTML={{ __html: project.description }}
            />

            {project.tags && project.tags.length > 0 && (
              <Box>
                <Text fontWeight="700" mb={4} color={headingColor} fontSize={{ base: "md", md: "lg" }}>
                  Tags
                </Text>
                <Wrap spacing={3}>
                  {project.tags.map((tag, index) => (
                    <WrapItem key={index}>
                      <Badge 
                        variant="subtle" 
                        colorScheme="gray" 
                        px={4}
                        py={2}
                        borderRadius="xl"
                        fontSize="sm"
                        fontWeight="600"
                      >
                        {tag}
                      </Badge>
                    </WrapItem>
                  ))}
                </Wrap>
              </Box>
            )}

            <Divider />

            <Box>
              <Text fontWeight="700" mb={4} color={headingColor} fontSize={{ base: "md", md: "lg" }}>
                Links
              </Text>
              <SimpleGrid columns={2} spacing={4}>
                {project.web && (
                  <Link href={project.web} isExternal>
                    <Button 
                      w="full" 
                      variant="outline" 
                      size="md"
                      borderRadius="xl"
                      py={6}
                      _hover={{ 
                        transform: 'translateY(-2px)',
                        boxShadow: 'lg',
                      }}
                      transition="all 0.2s"
                    >
                      Website <ExternalLinkIcon ml={2} />
                    </Button>
                  </Link>
                )}
                {project.x && (
                  <Link href={project.x} isExternal>
                    <Button 
                      w="full" 
                      variant="outline" 
                      colorScheme="blue" 
                      size="md"
                      borderRadius="xl"
                      py={6}
                      _hover={{ 
                        transform: 'translateY(-2px)',
                        boxShadow: 'lg',
                      }}
                      transition="all 0.2s"
                    >
                      X (Twitter) <ExternalLinkIcon ml={2} />
                    </Button>
                  </Link>
                )}
                {project.discord && (
                  <Link href={project.discord} isExternal>
                    <Button 
                      w="full" 
                      variant="outline" 
                      colorScheme="purple" 
                      size="md"
                      borderRadius="xl"
                      py={6}
                      _hover={{ 
                        transform: 'translateY(-2px)',
                        boxShadow: 'lg',
                      }}
                      transition="all 0.2s"
                    >
                      Discord <ExternalLinkIcon ml={2} />
                    </Button>
                  </Link>
                )}
                {project.telegram && (
                  <Link href={project.telegram} isExternal>
                    <Button 
                      w="full" 
                      variant="outline" 
                      colorScheme="blue" 
                      size="md"
                      borderRadius="xl"
                      py={6}
                      _hover={{ 
                        transform: 'translateY(-2px)',
                        boxShadow: 'lg',
                      }}
                      transition="all 0.2s"
                    >
                      Telegram <ExternalLinkIcon ml={2} />
                    </Button>
                  </Link>
                )}
                {project.medium && (
                  <Link href={project.medium} isExternal>
                    <Button 
                      w="full" 
                      variant="outline" 
                      colorScheme="green" 
                      size="md"
                      borderRadius="xl"
                      py={6}
                      _hover={{ 
                        transform: 'translateY(-2px)',
                        boxShadow: 'lg',
                      }}
                      transition="all 0.2s"
                    >
                      Medium <ExternalLinkIcon ml={2} />
                    </Button>
                  </Link>
                )}
                {project.other_links && project.other_links.map((link, index) => (
                  <Link key={index} href={link} isExternal>
                    <Button 
                      w="full" 
                      variant="outline" 
                      colorScheme="teal" 
                      size="md"
                      borderRadius="xl"
                      py={6}
                      _hover={{ 
                        transform: 'translateY(-2px)',
                        boxShadow: 'lg',
                      }}
                      transition="all 0.2s"
                    >
                      Link {index + 1} <ExternalLinkIcon ml={2} />
                    </Button>
                  </Link>
                ))}
              </SimpleGrid>
            </Box>

            {project.team && project.team.length > 0 && (
              <>
                <Divider />
                <Box>
                  <Text fontWeight="700" mb={6} color={headingColor} fontSize={{ base: "md", md: "lg" }}>
                    Team
                  </Text>
                  <VStack spacing={6} align="stretch">
                    {project.team.map((member, index) => (
                      <HStack key={index} justify="space-between" p={6} bg={teamBg} borderRadius="2xl">
                        <VStack align="start" spacing={1}>
                          <Text fontWeight="700" fontSize={{ base: "md", md: "lg" }} color={headingColor}>
                            {member.name}
                          </Text>
                          <Text fontSize={{ base: "sm", md: "md" }} color={textColor}>
                            {member.title}
                          </Text>
                        </VStack>
                        {member.x && (
                          <Link href={member.x} isExternal>
                            <Button 
                              size="sm" 
                              variant="outline" 
                              colorScheme="blue"
                              borderRadius="lg"
                              _hover={{ 
                                transform: 'translateY(-1px)',
                                boxShadow: 'md',
                              }}
                            >
                              X <ExternalLinkIcon ml={1} />
                            </Button>
                          </Link>
                        )}
                      </HStack>
                    ))}
                  </VStack>
                </Box>
              </>
            )}
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}