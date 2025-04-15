# Slippery Noodle Architecture Design

## System Overview

Slippery Noodle is designed as a modular personal dashboard with a plugin-based architecture. The system uses SvelteKit to provide both server-side rendering for initial load performance and progressive enhancement, as well as client-side interactivity for a responsive user experience.

## Core Architecture Components

### 1. Application Layers

### 2. SvelteKit Route Structure

- **Filesystem-based Routing**: Uses SvelteKit's directory-based routing in `/src/routes`
- **API Routes**: Server endpoints handle data fetching and authentication
- **Page Layouts**: Nested layouts provide consistent UI across sections

## Component Architecture

### Widget System

- **Dashboard Container**: Main grid layout system
- **Widget Containers**: Handle resizing, dragging, configuration
- **Widget Components**: Individual dashboard functionality units
- **Widget Registry**: Central registry of available widgets

### Plugin System Architecture

- **Plugin Interface**: Standard contract for all plugins
- **Plugin Registry**: Central management of installed plugins
- **Plugin Lifecycle**: Install, load, initialize, unload
- **Extension Points**: Pre-defined points where plugins can extend functionality

## Data Flow Architecture

### State Management

- **Svelte Stores**: Reactive state containers
  - Global stores for application-wide state
  - Widget-specific stores for encapsulated state
- **Context API**: For component tree state propagation
- **Form Actions**: For server interactions without JavaScript

### Data Persistence

- **Local Storage**: IndexedDB via Dexie.js for offline-first operation
- **Synchronization**: Optional sync with server when online
- **Conflict Resolution**: Last-write-wins or manual resolution

## Server-Side Rendering Strategy

- **Progressive Enhancement**: Core functionality works without JavaScript
- **SSR for Initial Load**: Server renders initial HTML for fast FCP
- **Hydration**: Client-side takes over for interactive features
- **Form Actions**: Allow basic operations without client JS

## External Integrations

- **API Adapters**: Interface with external services
- **Authentication Providers**: OAuth, API keys management
- **Data Formatters**: Transform external data to internal schema

## Security Architecture

- **XSS Prevention**: Automatic Svelte escaping and CSP
- **API Security**: Server endpoints validate all requests
- **Credentials**: Stored in secure, HTTP-only cookies

## Dashboard Layout System

- **CSS Grid**: For overall dashboard layout
- **Responsive Breakpoints**: Adapts to different screen sizes
- **Drag and Drop**: Using svelte-dnd-action library
- **Layout Persistence**: Saved in IndexedDB and synced to server

## Theme System

- **CSS Variables**: For runtime theme switching
- **Tailwind Configuration**: Extended with custom theme properties
- **User Preferences**: Theme selection saved in preferences store
