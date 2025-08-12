#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const Ajv = require('ajv');
const addFormats = require('ajv-formats');

// Initialize AJV with formats
const ajv = new Ajv({ allErrors: true });
addFormats(ajv);

// Load schema
const schemaPath = path.join(__dirname, '../project-schema.json');
const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));
const validate = ajv.compile(schema);

function validateProjectFile(filePath) {
  console.log(`\n🔍 Validating: ${filePath}`);
  
  try {
    // Read and parse JSON file
    const content = fs.readFileSync(filePath, 'utf8');
    const project = JSON.parse(content);
    
    // Validate against schema
    const valid = validate(project);
    
    if (valid) {
      console.log('✅ JSON schema validation passed');
      
      // Additional custom validations
      validateCustomRules(project, filePath);
      
      return true;
    } else {
      console.log('❌ JSON schema validation failed:');
      validate.errors.forEach(error => {
        console.log(`  • ${error.instancePath} ${error.message}`);
        if (error.allowedValues) {
          console.log(`    Allowed values: ${error.allowedValues.join(', ')}`);
        }
      });
      return false;
    }
  } catch (error) {
    console.log(`❌ Error reading/parsing file: ${error.message}`);
    return false;
  }
}

function validateCustomRules(project, filePath) {
  // Check if project name matches filename
  const fileName = path.basename(filePath, '.json');
  const projectNameSlug = project.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
  
  if (fileName !== projectNameSlug && fileName !== 'example-project') {
    console.log(`⚠️  Warning: Filename should match project name slug: ${projectNameSlug}.json`);
  }
  
  // Validate logo file path
  const logoPath = path.join(process.cwd(), 'public', project.logo);
  if (!fs.existsSync(logoPath)) {
    console.log(`❌ Logo file not found: ${logoPath}`);
    process.exit(1);
  } else {
    console.log('✅ Logo file exists');
  }
  
  // Check for duplicate project names
  const dataDir = path.join(process.cwd(), 'data');
  const allProjects = fs.readdirSync(dataDir)
    .filter(file => file.endsWith('.json') && file !== path.basename(filePath))
    .map(file => {
      try {
        const content = fs.readFileSync(path.join(dataDir, file), 'utf8');
        return JSON.parse(content);
      } catch {
        return null;
      }
    })
    .filter(Boolean);
  
  const duplicateName = allProjects.find(p => p.name.toLowerCase() === project.name.toLowerCase());
  if (duplicateName) {
    console.log(`❌ Duplicate project name found: "${project.name}"`);
    process.exit(1);
  }
  
  console.log('✅ No duplicate project names found');
  console.log('✅ All custom validations passed');
}

// Main execution
const args = process.argv.slice(2);
if (args.length === 0) {
  console.log('Usage: node validate-project.js <json-file-path>');
  process.exit(1);
}

const filePath = args[0];
const isValid = validateProjectFile(filePath);

if (!isValid) {
  process.exit(1);
}

console.log('\n🎉 Project validation completed successfully!');