# Bulltrack - Bull Classification System

A React application for managing and viewing bull classifications with filtering, searching, and pagination capabilities.

## Features Overview

- **Authentication System**: Login page with email/password authentication
- **Dashboard**: Complete bull management interface
- **Filtering**: Multiple filter options for bull classification
- **Search**: Real-time search functionality
- **Favorites**: Mark bulls as favorites
- **Pagination**: Navigate through bull listings

## Components

### Login
- **Location**: `/components/Login.tsx`
- **Functionality**:
  - Email and password input fields
  - Show/hide password toggle
  - "Remember me" checkbox
  - Social login option (Google)
  - Forgot password link
  - Sign up link
  - Matches Bulltrack design system with green (#36e27b) primary color
  - Stores authentication state in localStorage
  - Fully responsive form with focus states

### Dashboard
- **Location**: `/components/Dashboard.tsx`
- **Functionality**:
  - Main application container
  - Manages all bull data and state
  - Handles authentication flow
  - Integrates all child components

### Header
- **Location**: `/components/Header.tsx`
- **Functionality**: 
  - Displays the Bulltrack logo
  - Shows user avatar and location dropdown when signed in
  - Click avatar to sign out and return to login page
  - Positioned with higher z-index for visibility

### Filters
- **Location**: `/components/Filters.tsx`
- **Functionality**:
  - **Origen filters**: Toggle between "Todos", "Toros propios", "Catálogo", and "Favoritos"
  - **Filtros Productivos**: 
    - Toggle switch for "Para vaquillona" feature
    - Dropdown for "Pelaje" selection
  - **Ordenamiento**: Dropdown to change sorting order
  - **Objetivo actual**: Shows current production objective with edit button

### SearchBar
- **Location**: `/components/SearchBar.tsx`
- **Functionality**:
  - Search input field for filtering bulls by name, breed, or cabaña
  - Displays total results count
  - Toggle between list and grid view modes (visual only)
  - Collapsible "Criterios del ranking" section

### BullsList
- **Location**: `/components/BullsList.tsx`
- **Functionality**: Container component that renders a list of BullItem components

### BullItem
- **Location**: `/components/BullItem.tsx`
- **Functionality**:
  - Displays bull information: rank, image, name, breed, age, badges
  - Shows Bull Score with visual progress bar
  - Displays performance metrics with radar chart
  - **Interactive elements**:
    - Eye icon button (view details)
    - Heart icon button (toggle favorite) - changes color when favorited

### Pagination
- **Location**: `/components/Pagination.tsx`
- **Functionality**:
  - Navigate between pages of results
  - Shows current page number and total pages
  - Previous/Next buttons with disabled states
  - Individual page number buttons with active state highlighting

## Data Structure

Bulls are defined with the following interface:
- `id`: Unique identifier
- `rank`: Ranking position
- `name`: Bull name
- `breed`: Breed type
- `age`: Age in months
- `image`: Bull image
- `score`: Bull score (0-1)
- `performance`: Performance description
- `badges`: Array of classification badges
- `isFavorite`: Boolean for favorite status

## Styling

- Uses Tailwind CSS with custom color scheme
- Custom scrollbar styling with brand colors (#36e27b)
- Hover states and transitions for interactive elements
- Follows Figma design specifications

## How to Use

### Login
1. Enter any email and password (authentication is simulated)
2. Click "Iniciar sesión" to access the dashboard
3. Authentication state persists in localStorage

### Dashboard Navigation
1. Once logged in, you'll see the main dashboard with bull listings
2. **Search**: Type in the search bar to filter bulls
3. **Favorites**: Click the heart icon on any bull card to favorite it
4. **Pagination**: Use page numbers or arrows to navigate
5. **Logout**: Click the user avatar in the top right corner to sign out

### Filter Options
- Use the left sidebar to filter bulls by:
  - Origin (Todos, Toros propios, Catálogo, Favoritos)
  - Production features (Para vaquillona toggle)
  - Coat color (Pelaje dropdown)
  - Sorting order (Ordenamiento)

## Color Scheme

- **Primary Green**: `#36e27b` - Main brand color for buttons and accents
- **Dark Background**: `#111714` - Sidebar and header background
- **Light Background**: `#f7f7f7` - Main content area
- **Dark Green**: `#152b1e` - Filter items and buttons
- **Text Dark**: `#2d2d2d` - Primary text color
- **Text Light**: `#717182` - Secondary text color