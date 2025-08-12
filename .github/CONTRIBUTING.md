# 🤝 Contributing to HyperCamp

Thank you for your interest in contributing to HyperCamp! This document provides comprehensive guidelines for different types of contributions to help you get started quickly and ensure a smooth collaboration process.

## 📋 Table of Contents

- [Types of Contributions](#types-of-contributions)
- [Project Submissions](#project-submissions)
- [Code Contributions](#code-contributions)
- [Bug Reports](#bug-reports)
- [Feature Requests](#feature-requests)
- [Documentation](#documentation)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Code Style Guidelines](#code-style-guidelines)
- [Community Guidelines](#community-guidelines)

## 🎯 Types of Contributions

We welcome several types of contributions:

1. **🚀 Project Submissions** - Add your HyperEVM project to the platform
2. **💻 Code Contributions** - Improve functionality, fix bugs, add features
3. **🐛 Bug Reports** - Help us identify and fix issues
4. **💡 Feature Requests** - Suggest new features and improvements
5. **📚 Documentation** - Improve guides, examples, and explanations
6. **🎨 Design** - UI/UX improvements and design suggestions

## 🚀 Project Submissions

### Requirements

Your project must:
- ✅ Be built on or related to HyperEVM technology
- ✅ Be legitimate and actively developed
- ✅ Have accurate and up-to-date information
- ✅ Include a high-quality logo (PNG, JPG, or SVG)
- ✅ Follow our JSON schema exactly

### Step-by-Step Process

#### 1. Prepare Your Materials

**JSON File (`your-project-name.json`)**:
```json
{
  "name": "Your Project Name",
  "description": "Detailed description (10-500 characters)",
  "logo": "assets/logos/your-project-logo.png",
  "category": "DeFi|NFT|Gaming|Infrastructure|DAO|DEX|Bridge|Other",
  "status": "live|upcoming|development",
  "x": "https://x.com/your_project",
  "discord": "https://discord.gg/your_invite",
  "telegram": "https://t.me/your_channel",
  "medium": "https://medium.com/@your_project",
  "web": "https://your-website.com",
  "other_links": [
    "https://docs.your-project.com",
    "https://github.com/your-project"
  ],
  "tags": ["relevant", "tags", "here"],
  "team": [
    {
      "name": "Team Member Name",
      "title": "Position",
      "x": "https://x.com/member"
    }
  ]
}
```

**Logo Requirements**:
- Format: PNG, JPG, JPEG, or SVG
- Size: Recommended 400x400px minimum
- Quality: High resolution, clear visibility
- Background: Transparent or white background preferred
- File size: Under 1MB

#### 2. Fork and Clone

```bash
# Fork the repository on GitHub, then:
git clone https://github.com/YOUR_USERNAME/hypercamp-web.git
cd hypercamp-web
git checkout -b add-project-your-project-name
```

#### 3. Add Your Files

```bash
# Add your JSON file
cp your-project.json data/your-project-name.json

# Add your logo
cp your-logo.png public/assets/logos/your-project-logo.png
```

#### 4. Validate Locally (Optional)

```bash
# Install dependencies
npm install

# Test that the site builds correctly
npm run build

# Run validation script locally
node .github/scripts/validate-project.js data/your-project-name.json
```

#### 5. Create Pull Request

```bash
git add data/your-project-name.json public/assets/logos/your-project-logo.png
git commit -m "Added Project [Your Project Name]

Brief description of your project and what it does.

- Category: YourCategory
- Status: YourStatus
- Website: https://your-website.com"

git push origin add-project-your-project-name
```

**PR Title Format**: `Added Project [Your Project Name]`

#### 6. Automated Processing

Our GitHub Actions will:
1. ✅ Validate your submission format
2. ✅ Check JSON schema compliance
3. ✅ Verify logo file exists and is accessible
4. ✅ Add timestamp automatically
5. ✅ Run build tests
6. ✅ Provide feedback via comments

#### 7. Review and Merge

- Maintainers will review your submission
- Address any feedback promptly
- Once approved, it will auto-merge
- Your project goes live immediately!

### Common Issues and Solutions

**❌ "Invalid JSON format"**
- Use a JSON validator like [jsonlint.com](https://jsonlint.com/)
- Check for missing commas, quotes, or brackets

**❌ "Logo file not found"**
- Ensure logo path in JSON matches actual file location
- Check file extension matches (png vs jpg)

**❌ "Invalid category"**
- Use exact enum values: `DeFi`, `NFT`, `Gaming`, `Infrastructure`, `DAO`, `DEX`, `Bridge`, `Other`

**❌ "PR title format incorrect"**
- Must be exactly: `Added Project [Your Project Name]`
- Include the square brackets

## 💻 Code Contributions

### Development Areas

We welcome contributions in:

- **Frontend Components** - React/TypeScript improvements
- **UI/UX** - Chakra UI enhancements
- **API Routes** - Backend functionality
- **Build System** - Optimization and tooling
- **Testing** - Test coverage improvements
- **Performance** - Speed and efficiency gains
- **Accessibility** - A11y improvements

### Getting Started

#### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun
- Git
- Basic knowledge of Next.js, React, TypeScript

#### Fork and Setup

```bash
# Fork repository on GitHub
git clone https://github.com/YOUR_USERNAME/hypercamp-web.git
cd hypercamp-web

# Install dependencies
npm install

# Start development server
npm run dev
```

#### Making Changes

1. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/issue-description
   ```

2. **Follow our code style** (see Code Style Guidelines below)

3. **Test your changes**:
   ```bash
   npm run build    # Ensure builds successfully
   npm run lint     # Check for linting issues
   ```

4. **Commit with clear messages**:
   ```bash
   git commit -m "feat: add dark mode toggle to project cards

   - Implement useColorMode hook in ProjectCard component
   - Add smooth transition animations
   - Maintain accessibility with proper ARIA labels
   
   Fixes #123"
   ```

#### Commit Message Format

Use conventional commits:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

## 🐛 Bug Reports

### Before Reporting

1. **Search existing issues** - Check if the bug is already reported
2. **Try latest version** - Ensure you're using the current main branch
3. **Reproduce consistently** - Can you make it happen again?

### Bug Report Template

```markdown
**Bug Description**
A clear description of what the bug is.

**Steps to Reproduce**
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

**Expected Behavior**
What you expected to happen.

**Actual Behavior**
What actually happened.

**Screenshots**
If applicable, add screenshots.

**Environment**
- OS: [e.g. macOS, Windows, Linux]
- Browser: [e.g. Chrome 91, Firefox 89]
- Device: [e.g. Desktop, Mobile]
- Screen size: [e.g. 1920x1080]

**Additional Context**
Any other context about the problem.
```

## 💡 Feature Requests

### Before Requesting

1. **Check existing requests** - Look through open issues
2. **Consider scope** - Does it fit HyperCamp's purpose?
3. **Think about users** - Who would benefit from this?

### Feature Request Template

```markdown
**Feature Summary**
Brief description of the feature.

**Problem Statement**
What problem does this solve? What user need does it address?

**Proposed Solution**
Describe your proposed implementation.

**Alternative Solutions**
Other approaches you've considered.

**Use Cases**
Specific scenarios where this would be useful.

**Additional Context**
Screenshots, mockups, examples from other platforms.
```

## 📚 Documentation

### Areas for Improvement

- **README updates** - Keep installation and setup current
- **Code comments** - Inline documentation
- **API documentation** - Route and function docs
- **User guides** - How-to guides for users
- **Developer guides** - Technical documentation

### Documentation Standards

- Use clear, concise language
- Include code examples where appropriate
- Test all code examples
- Use proper markdown formatting
- Include screenshots for UI changes

## 🔧 Development Setup

### Project Structure

```
hypercamp-web/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── api/          # API routes
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Homepage
│   ├── components/       # React components
│   │   ├── ProjectCard.tsx
│   │   ├── SearchBar.tsx
│   │   └── ...
│   ├── lib/             # Utility functions
│   ├── theme/           # Chakra UI theme
│   └── types/           # TypeScript definitions
├── data/                # Project JSON files
├── public/              # Static assets
│   └── assets/logos/    # Project logos
├── .github/             # GitHub Actions & templates
└── ...
```

### Key Technologies

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript (strict mode)
- **UI Library**: Chakra UI v2
- **Styling**: Emotion (CSS-in-JS)
- **Fonts**: Quicksand (Google Fonts)
- **Build Tool**: Turbopack (dev) / Webpack (prod)

### Environment Variables

No environment variables required for basic development.

### Available Scripts

```bash
npm run dev      # Development server (localhost:3000)
npm run build    # Production build
npm run start    # Start production build
npm run lint     # ESLint checking
```

## 📝 Pull Request Process

### Before Submitting

1. **Test thoroughly** - All functionality works as expected
2. **Check builds** - `npm run build` succeeds
3. **Lint code** - `npm run lint` passes
4. **Update docs** - If you changed APIs or added features
5. **Write tests** - If applicable (we're working on test coverage)

### PR Template

```markdown
## Summary
Brief description of changes.

## Type of Change
- [ ] Bug fix (non-breaking change that fixes an issue)
- [ ] New feature (non-breaking change that adds functionality)
- [ ] Breaking change (fix or feature that causes existing functionality to change)
- [ ] Documentation update

## Testing
- [ ] I have tested this change locally
- [ ] I have added/updated tests where appropriate
- [ ] All existing tests pass

## Screenshots
If applicable, add screenshots of UI changes.

## Checklist
- [ ] My code follows the project's style guidelines
- [ ] I have performed a self-review of my code
- [ ] I have commented my code where necessary
- [ ] My changes generate no new warnings
- [ ] Any dependent changes have been merged and published
```

### Review Process

1. **Automated checks** - GitHub Actions run automatically
2. **Code review** - Maintainers review your code
3. **Feedback** - Address any requested changes
4. **Approval** - Once approved, auto-merge may trigger
5. **Deployment** - Changes go live automatically

## 🎨 Code Style Guidelines

### TypeScript

```typescript
// ✅ Good - Clear interface definitions
interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

// ✅ Good - Destructured props
const ProjectCard = ({ project, onViewDetails }: ProjectCardProps) => {
  // Component implementation
};

// ❌ Avoid - Any types
const badComponent = (props: any) => { ... };
```

### React Components

```tsx
// ✅ Good - Functional components with hooks
const SearchBar = ({ searchTerm, onSearchChange }: SearchBarProps) => {
  const [localValue, setLocalValue] = useState(searchTerm);
  
  return (
    <Input
      value={localValue}
      onChange={(e) => setLocalValue(e.target.value)}
      placeholder="Search projects..."
    />
  );
};

// ✅ Good - Proper prop destructuring
// ✅ Good - Clear state management
// ✅ Good - Descriptive variable names
```

### Chakra UI

```tsx
// ✅ Good - Use Chakra's responsive syntax
<Box
  p={{ base: 4, md: 6 }}
  bg={useColorModeValue('white', 'gray.800')}
  borderRadius="lg"
>

// ✅ Good - Use color mode values
const textColor = useColorModeValue('gray.600', 'gray.300');

// ✅ Good - Responsive breakpoints
<SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
```

### File Organization

```
components/
├── ProjectCard.tsx        # Single component per file
├── SearchBar.tsx         # PascalCase for components
└── index.ts              # Export barrel (if needed)

lib/
├── projects.ts           # camelCase for utilities
└── validation.ts         # Logical grouping
```

### Import Order

```typescript
// 1. React and Next.js
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';

// 2. Third-party libraries
import { Box, Text } from '@chakra-ui/react';

// 3. Internal imports (absolute paths)
import { Project } from '@/types/project';
import { validateProject } from '@/lib/validation';

// 4. Relative imports
import './component.css';
```

### Naming Conventions

- **Components**: PascalCase (`ProjectCard`, `SearchBar`)
- **Files**: PascalCase for components, camelCase for utilities
- **Variables/Functions**: camelCase (`searchTerm`, `handleSubmit`)
- **Constants**: UPPER_SNAKE_CASE (`MAX_PROJECTS`, `API_ENDPOINTS`)
- **Types/Interfaces**: PascalCase (`Project`, `ApiResponse`)

## 🌟 Community Guidelines

### Our Values

- **Inclusivity** - Welcome all skill levels and backgrounds
- **Respect** - Treat everyone with kindness and professionalism
- **Quality** - Strive for excellence in all contributions
- **Collaboration** - Work together to build something amazing
- **Transparency** - Open communication and decision-making

### Expected Behavior

- ✅ Use welcoming and inclusive language
- ✅ Be respectful of differing viewpoints
- ✅ Accept constructive criticism gracefully
- ✅ Focus on what's best for the community
- ✅ Show empathy towards other contributors

### Unacceptable Behavior

- ❌ Harassment or discriminatory language
- ❌ Trolling or inflammatory comments
- ❌ Personal attacks or insults
- ❌ Spam or off-topic discussions
- ❌ Sharing others' private information

### Enforcement

Project maintainers have the right to:
- Remove, edit, or reject contributions that don't align with guidelines
- Temporarily or permanently ban contributors for inappropriate behavior
- Take any other action deemed appropriate for maintaining a positive environment

## 🚀 Getting Help

### Questions or Issues?

1. **Check existing documentation** - README, this guide, code comments
2. **Search existing issues** - Someone might have asked already
3. **Create a new issue** - Use our templates for consistency
4. **Join discussions** - GitHub Discussions for broader topics

### Contact Information

- **GitHub Issues**: [Bug reports and feature requests](https://github.com/lakmalmabm/hypercamp/issues)
- **GitHub Discussions**: [General questions and ideas](https://github.com/lakmalmabm/hypercamp/discussions)
- **Project Maintainers**: Tag `@lakmalmabm` in issues if urgent

## 🙏 Recognition

### Contributors

All contributors will be recognized in our project documentation and community channels. Significant contributions may be highlighted in:

- README contributor section
- Release notes
- Community showcases
- Social media recognition

### Types of Recognition

- **First-time contributors** - Special welcome and guidance
- **Regular contributors** - Contributor role and privileges
- **Major features** - Feature attribution and showcase
- **Long-term maintainers** - Maintainer status consideration

---

## 📜 License

By contributing to HyperCamp, you agree that your contributions will be licensed under the same [MIT License](../LICENSE) that covers the project.

---

**Thank you for contributing to HyperCamp and helping build the HyperEVM ecosystem! 🚀**

*Questions about these guidelines? Feel free to open an issue or discussion - we're here to help!*