# 🏕️ HyperCamp

**The Official Hub for the HyperEVM Ecosystem**

HyperCamp is an open-source community-driven platform where developers can discover and showcase projects built on HyperEVM technology. It serves as the central discovery hub for the growing HyperEVM ecosystem.

🌐 **Live Site**: [hypercamp.xyz](https://hypercamp.xyz)

## 🚀 Features

- **📊 Project Discovery**: Browse projects by category, status, and tags
- **🔍 Real-time Search**: Instantly find projects by name
- **🎨 Clean Interface**: Responsive design with light/dark mode
- **🤖 Automated Submissions**: GitHub Actions-powered validation and deployment
- **📱 Mobile-First**: Optimized for all devices


## 📝 Contributing Projects

Want to showcase your HyperEVM project? Follow these steps:

### Step 1: Fork and Clone
```bash
git clone https://github.com/YOUR_USERNAME/hypercamp-web.git
cd hypercamp-web
```

### Step 2: Add Your Project Files

1. **Add JSON file** to `/data/your-project-name.json`
2. **Add logo image** to `/public/assets/logos/your-logo.png`

### Step 3: Create Pull Request

- **Title Format**: `Added Project [Your Project Name]`
- **Files**: Only add the 2 files mentioned above
- **Description**: Brief description of your project

## 📋 Project Schema

All projects must follow this JSON schema:

### Required Fields

```json
{
  "name": "string (1-100 chars)",
  "description": "string (10-500 chars)", 
  "logo": "assets/logos/filename.(png|jpg|jpeg|svg)",
  "category": "enum - see valid values below"
}
```

### Optional Fields

```json
{
  "status": "enum - see valid values below",
  "x": "https://x.com/username",
  "discord": "https://discord.gg/invite or https://discord.com/invite/...",
  "telegram": "https://t.me/channel",
  "medium": "https://medium.com/@username or https://username.medium.com/...",
  "web": "https://yourwebsite.com",
  "other_links": ["https://link1.com", "https://link2.com"],
  "tags": ["tag1", "tag2", "tag3"],
  "team": [
    {
      "name": "Team Member Name",
      "title": "Role/Position", 
      "x": "https://x.com/username"
    }
  ]
}
```

### Valid Enum Values

#### Categories
- `"DeFi"` - Decentralized Finance
- `"NFT"` - Non-Fungible Tokens
- `"Gaming"` - Gaming & Entertainment
- `"Infrastructure"` - Developer Tools & Infrastructure
- `"DAO"` - Decentralized Autonomous Organizations
- `"DEX"` - Decentralized Exchanges
- `"Bridge"` - Cross-chain Bridges
- `"Other"` - Other projects

#### Status
- `"live"` - Project is live and operational
- `"upcoming"` - Project launching soon
- `"development"` - Currently in development

### Complete Example

```json
{
  "name": "HyperSwap",
  "description": "A decentralized exchange built on HyperEVM offering lightning-fast trades with minimal fees. Trade any token with advanced features like limit orders and liquidity farming.",
  "logo": "assets/logos/hyperswap.png",
  "category": "DEX",
  "status": "live",
  "x": "https://x.com/hyperswap",
  "discord": "https://discord.gg/hyperswap",
  "telegram": "https://t.me/hyperswap",
  "web": "https://hyperswap.exchange",
  "other_links": [
    "https://docs.hyperswap.exchange",
    "https://analytics.hyperswap.exchange"
  ],
  "tags": ["dex", "trading", "liquidity", "farming"],
  "team": [
    {
      "name": "Alice Johnson",
      "title": "Founder & CEO",
      "x": "https://x.com/alice_hyperswap"
    },
    {
      "name": "Bob Smith", 
      "title": "Lead Developer",
      "x": "https://x.com/bob_codes"
    }
  ]
}
```

## 🔍 Validation Rules

Our automated system validates:

- ✅ **JSON Format**: Must be valid JSON
- ✅ **Required Fields**: name, description, logo, category
- ✅ **Field Types**: Correct data types for all fields
- ✅ **URL Formats**: Valid URLs for social links
- ✅ **Logo Path**: Must match actual file location
- ✅ **File Limits**: Max 2 files per PR (1 JSON + 1 logo)
- ✅ **Naming**: No duplicate project names
- ✅ **PR Title**: Must follow `Added Project [Name]` format




## 🤝 Community Guidelines

### For Project Submissions
- ✅ Only submit legitimate HyperEVM projects
- ✅ Ensure all information is accurate
- ✅ Use high-quality logos (PNG/JPG/SVG)
- ✅ Follow the exact JSON schema
- ✅ One project per PR

### For Contributors
- ✅ Follow existing code style
- ✅ Test changes locally
- ✅ Keep PRs focused and small
- ✅ Update documentation when needed

## 📞 Support

- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/lakmalmabm/hypercamp/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/lakmalmabm/hypercamp/discussions)
- 📖 **Documentation**: This README and inline code comments
- 🐦 **Developer**: [Wild Developer](https://x.com/wild_developer_)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with ❤️ for the HyperEVM community
- Powered by [Next.js](https://nextjs.org/) and [Chakra UI](https://chakra-ui.com/)
- Hosted on [hypercamp.xyz](https://hypercamp.xyz)

---

**Join the HyperEVM ecosystem today!** 🚀