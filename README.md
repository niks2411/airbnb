# Airbnb Clone - JSX Version

A modern Airbnb clone built with React (JSX), Vite, and Tailwind CSS. Features include property listings, search functionality, experiences, and services.

## Features

- 🏠 **Property Listings**: Browse beautiful properties with detailed information
- 🔍 **Search Functionality**: Search by location, dates, and number of guests
- 🎯 **Experiences**: Discover unique local experiences and activities
- 🛠️ **Services**: Access premium services like photography, transport, and more
- 📱 **Responsive Design**: Optimized for all device sizes
- 🎨 **Modern UI**: Clean, intuitive interface with smooth animations

## Tech Stack

- **React 18** (JSX)
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons
- **React Router** - Client-side routing
- **React Query** - Data fetching and caching

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (buttons, cards, etc.)
│   ├── Header.jsx      # Navigation header
│   ├── SearchBar.jsx   # Property search component
│   └── PropertyCard.jsx # Property listing card
├── pages/              # Page components
│   ├── Index.jsx       # Home page
│   ├── PropertyDetail.jsx # Property details
│   ├── SearchResults.jsx  # Search results
│   ├── Experiences.jsx    # Experiences page
│   ├── Services.jsx       # Services page
│   └── Login.jsx          # Authentication
├── data/               # Static data
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── assets/             # Images and static files
```

## Pages

- **Home** (`/`) - Property listings and search
- **Search Results** (`/search`) - Filtered property results
- **Property Details** (`/property/:id`) - Individual property information
- **Experiences** (`/experiences`) - Local experiences and activities
- **Services** (`/services`) - Premium services (photography, transport, etc.)
- **Login** (`/login`) - User authentication

## Key Features

### Property Search
- Location-based filtering
- Date range selection
- Guest count specification
- Real-time search results

### Experiences
- Food tours and cooking classes
- Cultural activities
- Adventure experiences
- Local host-led activities

### Services
- Professional photography
- Airport transfers
- Personal chef services
- Housekeeping and laundry
- Grocery delivery

## Conversion Notes

This project was converted from TypeScript to JSX:
- Removed all TypeScript type annotations
- Converted `.tsx` files to `.jsx`
- Updated configuration files
- Maintained full functionality

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - feel free to use this project for learning and development.