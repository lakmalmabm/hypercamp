# Project Submission Template for HyperCamp

To submit your project to HyperCamp, follow these steps:

## 1. Fork and Clone the Repository
Fork the HyperCamp repository and clone it to your local machine.

## 2. Add Your Project Files

### A. Create Project JSON File
Create a new JSON file in the `data/` folder with your project name (e.g., `your-project-name.json`):

```json
{
  "name": "Your Project Name",
  "description": "A detailed description of your project, its features, and how it contributes to the HyperEVM ecosystem. This should be comprehensive as it will be displayed on your project card and detail page.",
  "logo": "your-project-logo.png",
  "category": "DeFi|NFT|Gaming|Infrastructure|Tools|Other",
  "website": "https://yourproject.com",
  "twitter": "https://twitter.com/yourproject",
  "discord": "https://discord.gg/yourproject",
  "github": "https://github.com/yourproject/repo",
  "documentation": "https://docs.yourproject.com",
  "roadmap": [
    {
      "quarter": "Q1 2024",
      "items": ["Milestone 1", "Feature X launch", "Community expansion"]
    },
    {
      "quarter": "Q2 2024",
      "items": ["Integration Y", "Mobile app", "Governance implementation"]
    }
  ],
  "team": [
    {
      "name": "Team Member Name",
      "role": "Founder & CEO",
      "twitter": "https://twitter.com/teammember"
    }
  ],
  "tags": ["DeFi", "Cross-chain", "Trading"],
  "status": "Live|Beta|Coming Soon",
  "launchDate": "2024-01-15",
  "totalValueLocked": "$1.2M"
}
```

### B. Add Project Logo
Add your project logo to the `assets/logos/` folder. The logo should be:
- PNG format
- Square aspect ratio (recommended: 256x256px or higher)
- Clear and recognizable
- Named exactly as specified in your JSON file

## 3. Create Pull Request

### PR Title Format:
```
Added Project [Your Project Name]
```

### PR Description:
Include a brief description of your project and confirm that:
- [ ] JSON file follows the correct format
- [ ] Logo file is added to assets/logos/
- [ ] All links are working
- [ ] Project information is accurate

## 4. Requirements and Guidelines

### Required Fields:
- `name`: Project name
- `description`: Detailed project description
- `logo`: Logo filename (must exist in assets/logos/)
- `category`: Project category

### Optional Fields:
All other fields are optional but recommended for better project visibility.

### File Naming:
- JSON file: lowercase, hyphenated (e.g., `my-awesome-project.json`)
- Logo file: match the filename specified in JSON

### Content Guidelines:
- Keep descriptions informative but concise
- Ensure all links are functional
- Use appropriate categories
- Provide accurate project status

## 5. Review Process

Once submitted, your PR will be reviewed for:
- Proper file structure
- Content quality and accuracy
- Working links
- Appropriate categorization

After approval, your project will be automatically displayed on HyperCamp!

## Need Help?

If you have questions about the submission process, please:
1. Check existing project examples in the `data/` folder
2. Open an issue in the repository
3. Join our community discussions

Thank you for contributing to the HyperEVM ecosystem! 🚀