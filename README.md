# React + Tailwind + Framer Motion Portfolio

## 🚀 Features
- ✅ React 18
- ✅ Tailwind CSS for styling
- ✅ Framer Motion for animations
- ✅ Responsive design
- ✅ Modern UI components

## 🛠️ Setup

### Quick Start
```bash
install.bat
npm start
```

### Manual Setup
```bash
npm install
npm start
```

## 📁 Project Structure
```
src/
├── components/
│   ├── Hero.js          # Hero section with animations
│   └── AnimatedCard.js  # Reusable card component
├── App.js               # Main app component
├── index.js             # React entry point
└── index.css            # Tailwind CSS imports
```

## 🎨 Animation Examples

### Framer Motion Basics
```jsx
import { motion } from 'framer-motion';

// Fade in animation
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>

// Hover effects
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click me
</motion.button>
```

## 🎯 Ready to Use Components
- Hero section with text animations
- Animated cards with hover effects
- Responsive grid layout
- Gradient backgrounds

Open http://localhost:3000 to see the result!