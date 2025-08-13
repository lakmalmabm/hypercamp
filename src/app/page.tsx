'use client';

import { useState, useEffect, useRef } from 'react';
import { 
  Container, 
  SimpleGrid, 
  Text, 
  Box,
  useDisclosure,
  useColorModeValue,
  Image
} from '@chakra-ui/react';
import SearchBar from '@/components/SearchBar';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';
import ThemeToggle from '@/components/ThemeToggle';
import InfoIcon from '@/components/InfoIcon';
import Footer from '@/components/Footer';
import { Project } from '@/types/project';

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const pastelColors = [
    '#fff3c4ff',
    '#ffe6e6ff',
    '#ffb6c1ff',
    '#ffd7beff',
    '#ffffbf',
    '#b2ff59ff',
    '#80ff9cff',
    '#64ffc9ff',
    '#45fffbff',
    '#34c759ff',
  ];

  const randomPastelColor = useRef(pastelColors[Math.floor(Math.random() * pastelColors.length)]).current;

  const bgColor = useColorModeValue('#45fffbff', '#121212');

  const textColor = useColorModeValue('gray.600', 'gray.400');

  useEffect(() => {
    // Fetch projects from API route
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setFilteredProjects(data);
      })
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  useEffect(() => {
    // Filter projects based on search term
    const filtered = projects.filter(project =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProjects(filtered);
  }, [searchTerm, projects]);

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    onOpen();
  };

  return (
    <Box minH="100vh" bg={bgColor} pb="60px">
      <Container maxW="container.xl" py={10} px={{ base: 6, md: 8 }}>
        {/* <BannerCarousel /> */}

        <Box textAlign="center" width={'100%'} justifyContent={'center'} display={'flex'}>
          <Image src='./logo-transparent.png' alt='Hypercamp Logo'
        boxSize={[130,200]} />
        </Box>

        <Text 
          fontSize={{ base: '2xl', md: '3xl' }} 
          fontWeight="bold"
          textAlign="center" 
          mb={[ 4, 6 ]}
          color={textColor}
        >
          The Place Where We All Connect
        </Text>
        
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        
        {filteredProjects.length === 0 && searchTerm && (
          <Text textAlign="center" color={textColor} fontSize={{ base: "lg", md: "xl" }} py={16} fontWeight="500">
            No projects found matching &quot;{searchTerm}&quot;
          </Text>
        )}

        {filteredProjects.length === 0 && !searchTerm && (
          <Text textAlign="center" color={textColor} fontSize={{ base: "lg", md: "xl" }} py={16} fontWeight="500">
            No projects available. Submit your project via pull request!
          </Text>
        )}

        <SimpleGrid 
          columns={{ base: 1, md: 2, lg: 3 }} 
          spacing={{ base: 4, md: 5, lg: 6 }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onViewDetails={handleViewDetails}
            />
          ))}
        </SimpleGrid>

      </Container>

      <ProjectModal
        project={selectedProject}
        isOpen={isOpen}
        onClose={onClose}
      />
      
      <Footer />
      <ThemeToggle />
      <InfoIcon />
    </Box>
  );
}
