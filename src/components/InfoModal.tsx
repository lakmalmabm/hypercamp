'use client';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  VStack,
  Heading,
  Box,
  Link,
  List,
  ListItem,
  ListIcon,
  Code,
  Divider,
  useColorModeValue,
  Image
} from '@chakra-ui/react';
import { ExternalLinkIcon, CheckCircleIcon } from '@chakra-ui/icons';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InfoModal({ isOpen, onClose }: InfoModalProps) {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="3xl" isCentered>
      <ModalOverlay bg="blackAlpha.600" backdropFilter="blur(10px)" />
      <ModalContent
        maxH="90vh"
        overflowY="auto"
        bg={bgColor}
        borderRadius="3xl"
        boxShadow="2xl"
        mx={4}
      >
        <ModalHeader>About HyperCamp</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <VStack spacing={6} align="stretch">
            {/* What is HyperCamp */}
            <Box>
              <Image
                src="/logo.png"
                alt="HyperCamp Logo"
                boxSize="100px"
                borderRadius={10}
                mb={4}
              />
              <Heading size="md" mb={3}>What is HyperCamp?</Heading>
              <Text>
                HyperCamp is an open-source community hub for the HyperEVM ecosystem.
                It serves as a central discovery platform where community members can
                explore and showcase projects built on HyperEVM technology.
              </Text>
            </Box>

            {/* How it works */}


            <Divider borderColor={borderColor} />

            {/* How to submit a project */}
            <Box>
              <Heading size="md" mb={3}>How to Submit Your Project</Heading>
              <Text mb={3}>
                Want to showcase your HyperEVM project? Follow these simple steps:
              </Text>

              <List spacing={2}>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  Fork the{' '}
                  <Link
                    href="https://github.com/lakmalmabm/hypercamp.git"
                    isExternal
                    color="blue.500"
                  >
                    HyperCamp repository <ExternalLinkIcon mx="2px" />
                  </Link>
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  Add your project JSON file to the <Code>/data</Code> folder
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  Add your project logo to the <Code>/assets/logos</Code> folder
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  Create a pull request with title: <Code>Added Project [Your Project Name]</Code>
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  Only add these two files - no other changes allowed per PR
                </ListItem>
              </List>

              <Box mt={4} p={4} bg={useColorModeValue('gray.50', 'gray.700')} borderRadius="md">
                <Text fontSize="sm" fontWeight="bold" mb={2}>Required JSON structure:</Text>
                <Code fontSize="xs" p={2} display="block" whiteSpace="pre-wrap">
                  {`
{
  "name": "Project Name",
  "description": "This is a detailed description of the project.",
  "logo": "assets/logos/project-name.png",
  "x": "https://x.com/project_username",
  "discord": "https://discord.gg/invitecode",
  "telegram": "https://t.me/project_channel",
  "medium": "https://medium.com/@project",
  "web": "https://projectwebsite.com",
  "other_links": [
    "https://link1.com",
    "https://link2.com",
    "https://link3.com"
  ],
  "category": "DeFi",
  "tags": ["staking", "liquidity", "nft"],
  "status": "upcoming",
  "team": [
    {
      "name": "Alice Builder",
      "x": "https://x.com/alicebuilder",
      "title": "Founder & CEO"
    },
    {
      "name": "Bob Coder",
      "x": "https://x.com/bobcoder",
      "title": "Lead Developer"
    }
  ]
}
`}
                </Code>
              </Box>
            </Box>

            <Divider borderColor={borderColor} />

            {/* Technology */}
            <Box>
              <Heading size="md" mb={3}>Built with</Heading>
              <Text>
                Next.js 15, React 19, Chakra UI, TypeScript, and hosted on hypercamp.xyz
              </Text>
            </Box>

            {/* Links */}
            <Box>
              <VStack spacing={2} align="stretch">
                <Link
                  href="https://github.com/lakmalmabm/hypercamp.git"
                  isExternal
                  color="blue.500"
                  fontSize="sm"
                >
                  📂 View source code <ExternalLinkIcon mx="2px" />
                </Link>
                <Link
                  href="https://github.com/lakmalmabm/hypercamp/issues"
                  isExternal
                  color="blue.500"
                  fontSize="sm"
                >
                  🐛 Report issues <ExternalLinkIcon mx="2px" />
                </Link>
                <Link
                  href="https://hyperliquid.gitbook.io/hyperliquid-docs"
                  isExternal
                  color="blue.500"
                  fontSize="sm"
                >
                  🌐 Learn about HyperEVM <ExternalLinkIcon mx="2px" />
                </Link>
              </VStack>
            </Box>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}