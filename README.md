# 🌱 GreenMart - Your Digital Agriculture Marketplace

<div align="center">

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.1-646CFF.svg)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen.svg)](https://github.com/mohanapriyan2006/greenmart)

*Connecting farmers, buyers, and agricultural communities through innovative technology*

[🚀 Get Started](#-getting-started) • [✨ Features](#-features) • [📖 Documentation](#-documentation) • [🤝 Contributing](#-contributing)

</div>

---

## 🌟 What is GreenMart?

GreenMart is a comprehensive **digital agriculture marketplace** built with React.js that revolutionizes how farmers, buyers, and agricultural communities connect and trade. Our platform bridges the gap between traditional farming and modern technology, creating a seamless ecosystem for agricultural commerce.

### 🎯 Our Mission
To empower farmers with digital tools, connect them directly with buyers, eliminate middlemen, and create a transparent, efficient agricultural marketplace that benefits everyone in the supply chain.

---

## ✨ Features

### 🏠 **Smart Home Dashboard**
- **Weather Integration**: Real-time weather updates to help plan farming activities
- **Quick Search**: Find services, products, and farmers instantly
- **Agricultural Schemes**: Stay updated with government schemes and subsidies
- **Personalized Recommendations**: Get suggestions based on your location and preferences

### 👨‍🌾 **Farmer Network**
- **Connect with Local Farmers**: Browse and message farmers in your area
- **Crop Information**: View primary crops and farming specialties
- **Location-Based Discovery**: Find farmers near you with GPS integration
- **Direct Communication**: Built-in messaging system for seamless communication

### 🛒 **Smart Marketplace**
- **Local Marketplace**: Buy fresh produce directly from local farmers
- **Bulk Import/Export**: Handle large-scale agricultural trading
- **Product Categories**: Organized listings for seeds, fertilizers, tools, and produce
- **Rating System**: Review and rate products and sellers

### 🛍️ **Enhanced Shopping Experience**
- **Shopping Cart**: Easy cart management with quantity controls
- **Wishlist**: Save products for later purchase
- **Order History**: Track your previous purchases
- **Multiple Payment Options**: Secure payment processing

### 💳 **Flexible Payment Solutions**
- **Digital Payments**: Support for UPI, cards, and digital wallets
- **Google Pay Integration**: Quick and secure payments
- **Payment History**: Track all your transactions
- **Secure Processing**: Bank-level security for all transactions

### 📚 **Learning & Support**
- **Tutorial Center**: Video guides on using the platform
- **Agricultural Tips**: Expert advice and farming techniques
- **Multi-language Support**: Available in English, Tamil, Hindi, and 6 other regional languages
- **Customer Support**: 24/7 helpline for assistance

### ⚙️ **Smart Settings**
- **Profile Management**: Update your personal and business information
- **Location Settings**: Set your preferred location and delivery areas
- **Notification Preferences**: Customize alerts and updates
- **Privacy Controls**: Manage your data and privacy settings

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v16.0 or higher)
- **npm** or **yarn** package manager
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mohanapriyan2006/greenmart.git
   cd greenmart
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

### Build for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

---

## 📱 Application Architecture

### 🗂️ Project Structure
```
greenmart/
├── 📁 src/
│   ├── 📁 Components/          # React components
│   │   ├── 🏠 Home.jsx         # Dashboard & main page
│   │   ├── 👨‍🌾 Farmer.jsx        # Farmer network
│   │   ├── 🛒 Market.jsx       # Marketplace hub
│   │   ├── 🛍️ Products.jsx     # Product listings
│   │   ├── 🛒 Cart.jsx         # Shopping cart
│   │   ├── 💳 Payments.jsx     # Payment processing
│   │   ├── 📊 Import_Export.jsx # Bulk trading
│   │   ├── ⚙️ Settings.jsx     # User settings
│   │   ├── 📚 Tutor.jsx        # Learning center
│   │   └── 🔐 Login.jsx        # Authentication
│   ├── 📁 style/               # CSS stylesheets
│   ├── 📁 assets/              # Images & icons
│   └── 📄 App.jsx              # Main application component
├── 📄 package.json             # Dependencies & scripts
├── 📄 vite.config.js          # Vite configuration
└── 📄 index.html              # HTML template
```

### 🛠️ Technology Stack
- **Frontend Framework**: React 18.3.1
- **Build Tool**: Vite 5.4.1
- **Routing**: React Router DOM 6.26.1
- **Styling**: Custom CSS with Montserrat font
- **Code Quality**: ESLint for code linting
- **Package Manager**: npm

### 🌐 Key Components
- **Responsive Design**: Mobile-first approach optimized for agricultural communities
- **Progressive Web App**: Works offline and provides app-like experience
- **Multi-language Support**: Localized for Indian regional languages
- **Real-time Updates**: Live weather and market data integration

---

## 🎨 Design Philosophy

### 🟢 **Green Theme**
Our design uses a fresh green color palette (`#00c013`, `#b1edb3`) representing nature, growth, and agriculture.

### 📱 **Mobile-First**
Designed primarily for mobile devices (425x643px) to ensure accessibility for farmers who primarily use smartphones.

### 🎯 **User-Centric**
Simple, intuitive interface designed for users with varying levels of technical expertise.

### ♿ **Accessibility**
Built with accessibility in mind, ensuring the platform is usable by everyone in the agricultural community.

---

## 📖 Documentation

### API Integration
The platform is designed to integrate with:
- Weather APIs for real-time updates
- Payment gateways for secure transactions
- Government databases for scheme information
- GPS services for location-based features

### Component Documentation
Each component is built with reusability and maintainability in mind:
- **Props validation** for type safety
- **Responsive design** for multiple screen sizes
- **Modular CSS** for easy customization
- **Clean code** following React best practices

---

## 🤝 Contributing

We welcome contributions from developers, designers, and agricultural experts! Here's how you can help:

### 🐛 **Bug Reports**
Found a bug? Please [open an issue](https://github.com/mohanapriyan2006/greenmart/issues) with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)

### 💡 **Feature Requests**
Have an idea? We'd love to hear it! Please [create a feature request](https://github.com/mohanapriyan2006/greenmart/issues) with:
- Description of the feature
- Use case and benefits
- Mockups or examples (if applicable)

### 🔧 **Code Contributions**
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests and linting (`npm run lint`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### 📋 **Development Guidelines**
- Follow the existing code style
- Write meaningful commit messages
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

---

## 🌍 Community & Support

### 💬 **Join Our Community**
- **GitHub Discussions**: Share ideas and get help
- **Issue Tracker**: Report bugs and request features
- **Contributors**: Meet fellow developers and agricultural enthusiasts

### 📞 **Get Help**
- **Documentation**: Check our comprehensive guides
- **FAQ**: Find answers to common questions
- **Support Hotline**: Call us at 055-599-788
- **Email Support**: Contact us for technical assistance

### 🏆 **Recognition**
We appreciate all contributors! Contributors will be:
- Listed in our contributors section
- Recognized in release notes
- Invited to community events
- Given priority support for their projects

---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Farmers**: For inspiring us to create solutions that matter
- **Open Source Community**: For the amazing tools and libraries
- **Contributors**: For making this project better every day
- **Agricultural Experts**: For providing domain knowledge and insights

---

## 🚀 What's Next?

### 🔮 **Upcoming Features**
- [ ] **AI-powered crop recommendations**
- [ ] **Blockchain-based supply chain tracking**
- [ ] **IoT device integration for smart farming**
- [ ] **Advanced analytics dashboard**
- [ ] **Mobile app for iOS and Android**
- [ ] **Multilingual voice interface**

### 📈 **Roadmap**
- **Q1 2024**: Enhanced user profiles and verification system
- **Q2 2024**: AI integration for price prediction and crop suggestions
- **Q3 2024**: Mobile app launch and offline capabilities
- **Q4 2024**: International expansion and multi-currency support

---

<div align="center">

**Made with ❤️ for the agricultural community**

[⭐ Star this project](https://github.com/mohanapriyan2006/greenmart) • [🍴 Fork it](https://github.com/mohanapriyan2006/greenmart/fork) • [📢 Share it](https://twitter.com/intent/tweet?text=Check%20out%20GreenMart%20-%20A%20digital%20agriculture%20marketplace!&url=https://github.com/mohanapriyan2006/greenmart)

*Empowering agriculture through technology* 🌱

</div>