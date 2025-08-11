import { Project } from '@/types/project';
import fs from 'fs';
import path from 'path';

export function getAllProjects(): Project[] {
  const dataDirectory = path.join(process.cwd(), 'data');
  
  try {
    const filenames = fs.readdirSync(dataDirectory);
    const projects = filenames
      .filter(name => name.endsWith('.json'))
      .map(name => {
        const filePath = path.join(dataDirectory, name);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const project = JSON.parse(fileContents) as Project;
        return project;
      })
      .sort((a, b) => a.name.localeCompare(b.name));
    
    return projects;
  } catch (error) {
    console.error('Error reading projects:', error);
    return [];
  }
}