# Omar Elfernani - Interactive Portfolio

A sophisticated React portfolio featuring a real-time WebGL blackhole simulation with gravitational lensing effects.

## 🌟 Features

- **Interactive BlackHole Simulation**: Real-time WebGL rendering with gravitational lensing
- **Responsive Design**: Optimized for desktop and mobile devices
- **Modern React Architecture**: Built with React 19, TypeScript, and Framer Motion
- **Professional Portfolio Sections**: About, Experience, Projects, Skills, and more
- **Dark/Light Mode**: Seamless theme switching
- **Performance Optimized**: Efficient asset loading and caching

## 🚀 Live Demo

Visit the live site: [Your Vercel URL will be here]

## 🛠️ Technology Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS
- **Animation**: Framer Motion
- **3D Graphics**: WebGL, Custom Shaders
- **Routing**: React Router DOM
- **Build Tool**: Create React App
- **Deployment**: Vercel

## 📦 Installation & Development

```bash
# Clone the repository
git clone https://github.com/omare07/OmarElfernani.git
cd OmarElfernani

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## 🌐 Deployment to Vercel

This project is optimized for Vercel deployment with zero configuration needed.

### Automatic Deployment (Recommended)

1. **Connect Repository**: 
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import this GitHub repository

2. **Configure Settings**:
   - Framework Preset: Create React App
   - Build Command: `npm run build`
   - Output Directory: `build`
   - Install Command: `npm install`

3. **Deploy**: Click "Deploy" - Vercel will automatically handle the rest!

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project root
vercel

# Follow the prompts:
# - Link to existing project? No
# - Project name: omar-elfernani-portfolio
# - Directory: ./
# - Override settings? No
```

## 🔧 Vercel Configuration

The project includes a [`vercel.json`](vercel.json) configuration that:

- ✅ Handles WebAssembly files with proper MIME types
- ✅ Optimizes caching for static assets
- ✅ Configures client-side routing
- ✅ Sets up proper headers for WebGL content
- ✅ Enables efficient asset delivery

## 🎮 BlackHole Simulation

The centerpiece of this portfolio is a sophisticated blackhole simulation featuring:

- **Real-time Gravitational Lensing**: Accurate physics simulation
- **Interactive Controls**: Mouse/touch controls for camera movement
- **Post-processing Effects**: Bloom, tone mapping, and gamma correction
- **Responsive Design**: Adapts to different screen sizes
- **Performance Optimized**: 60fps on modern devices

### Controls
- **Mouse**: Rotate camera around blackhole
- **Mouse Wheel**: Zoom in/out
- **H Key**: Toggle parameter controls
- **F Key**: Fullscreen mode
- **Mobile**: Touch and drag to rotate, pinch to zoom

## 📁 Project Structure

```
omar-elfernani-site/
├── public/
│   ├── blackhole/              # BlackHole simulation assets
│   │   ├── BlackholeWASM.*     # WebAssembly files
│   │   ├── assets/             # Textures and skybox images
│   │   └── shader/             # GLSL shaders
│   └── index.html
├── src/
│   ├── components/             # React components
│   ├── pages/                  # Page components
│   ├── contexts/               # React contexts
│   └── App.tsx
├── vercel.json                 # Vercel deployment config
└── package.json
```

## 🎨 Customization

### Modifying the BlackHole Simulation
- Edit parameters in [`public/blackhole/index.html`](public/blackhole/index.html)
- Modify shaders in [`public/blackhole/shader/`](public/blackhole/shader/)
- Adjust textures in [`public/blackhole/assets/`](public/blackhole/assets/)

### Updating Portfolio Content
- Personal info: [`src/components/About.tsx`](src/components/About.tsx)
- Experience: [`src/components/Experience.tsx`](src/components/Experience.tsx)
- Projects: [`src/components/Projects.tsx`](src/components/Projects.tsx)

## 🔍 Performance Considerations

- **Asset Optimization**: Large textures are cached with long-term headers
- **Code Splitting**: React components are efficiently bundled
- **WebGL Optimization**: Shaders are optimized for performance
- **CDN Delivery**: Vercel's global CDN ensures fast loading worldwide

## 🐛 Troubleshooting

### Common Issues

**BlackHole simulation not loading:**
- Ensure WebGL2 is supported in your browser
- Check browser console for WebGL errors
- Verify all assets are properly served

**Build failures:**
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check for TypeScript errors: `npm run build`

**Deployment issues:**
- Verify vercel.json configuration
- Check Vercel build logs for errors
- Ensure all dependencies are in package.json

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/omare07/OmarElfernani/issues).

## 📧 Contact

Omar Elfernani - [Your Email]
- Portfolio: [Your Vercel URL]
- LinkedIn: [Your LinkedIn]
- GitHub: [@omare07](https://github.com/omare07)

---

⭐ **Star this repository if you found it helpful!**