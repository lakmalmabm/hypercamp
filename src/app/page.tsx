'use client';

import { useState, useEffect } from 'react';
import { 
  Container, 
  SimpleGrid, 
  Text, 
  Box,
  useDisclosure,
  useColorModeValue
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
  
  const bgColor = useColorModeValue('#00ff7b19', '#121212');
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
