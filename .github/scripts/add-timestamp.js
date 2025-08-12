#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function addTimestamp(filePath, forceOverride = false) {
  console.log(`\n📅 Processing timestamp for: ${filePath}`);
  
  try {
    // Read and parse JSON file
    const content = fs.readFileSync(filePath, 'utf8');
    const project = JSON.parse(content);
    
    // Check if running in GitHub Actions (override mode)
    const isGitHubActions = process.env.GITHUB_ACTIONS === 'true' || forceOverride;
    
    if (!project.timestamp) {
      // No timestamp exists, add one
      project.timestamp = new Date().toISOString();
      
      // Write back to file with proper formatting
      fs.writeFileSync(filePath, JSON.stringify(project, null, 2) + '\n');
      
      console.log(`✅ Added timestamp: ${project.timestamp}`);
      return true;
    } else if (isGitHubActions) {
      // Timestamp exists but we're in GitHub Actions - override it
      const oldTimestamp = project.timestamp;
      project.timestamp = new Date().toISOString();
      
      // Write back to file with proper formatting
      fs.writeFileSync(filePath, JSON.stringify(project, null, 2) + '\n');
      
      console.log(`🔄 Updated timestamp: ${oldTimestamp} → ${project.timestamp}`);
      console.log(`📝 Timestamp overridden in GitHub Actions`);
      return true;
    } else {
      // Timestamp exists and we're not in GitHub Actions
      console.log(`ℹ️  Timestamp already exists: ${project.timestamp}`);
      console.log(`💡 Use --force flag to override locally`);
      return false;
    }
  } catch (error) {
    console.log(`❌ Error processing file: ${error.message}`);
    process.exit(1);
  }
}

// Main execution
const args = process.argv.slice(2);
if (args.length === 0) {
  console.log('Usage: node add-timestamp.js <json-file-path> [--force]');
  console.log('');
  console.log('Options:');
  console.log('  --force    Override existing timestamp (also auto-enabled in GitHub Actions)');
  process.exit(1);
}

const filePath = args[0];
const forceOverride = args.includes('--force');

// Show current environment
if (process.env.GITHUB_ACTIONS === 'true') {
  console.log('🤖 Running in GitHub Actions - timestamp will be overridden');
} else if (forceOverride) {
  console.log('⚡ Force mode enabled - timestamp will be overridden');
} else {
  console.log('🏠 Running locally - existing timestamps will be preserved');
}

const wasModified = addTimestamp(filePath, forceOverride);

if (wasModified) {
  console.log('\n🎉 Timestamp processing completed successfully!');
} else {
  console.log('\n✨ No changes needed!');
}