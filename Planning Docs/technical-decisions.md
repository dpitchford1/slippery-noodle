# Slippery Noodle Technical Decisions

This document outlines key technical decisions made for the Slippery Noodle project and the rationale behind them.

## Framework Selection: SvelteKit

**Decision**: Use SvelteKit as the primary framework for both frontend and backend.

**Rationale**:
- **Progressive Enhancement**: SvelteKit provides excellent support for server-side rendering and progressive enhancement, ensuring the application works even without JavaScript.
- **HTML-First Approach**: Svelte's template syntax keeps HTML structure visible and easy to understand, unlike JSX which embeds HTML in JavaScript.
- **Performance**: Svelte compiles to highly optimized vanilla JavaScript with minimal runtime overhead.
- **Developer Experience**: Clean, concise syntax with less boilerplate than React or Vue.
- **Form Actions**: Built-in support for handling form submissions without JavaScript.
- **File-based Routing**: Intuitive routing structure that simplifies organization.

**Alternatives Considered**:
- **React + Next.js**: More established but less HTML-centric and generally requires JavaScript for core functionality.
- **Vue + Nuxt**: Good template syntax but larger runtime and less performance-focused than Svelte.

## TypeScript Integration

**Decision**: Use TypeScript throughout the project.

**Rationale**:
- Provides type safety and improved developer tooling
- Better documentation through type definitions
- Easier refactoring and code navigation
- Particularly valuable for plugin system interfaces

## UI Component Framework

**Decision**: Build custom components without an external component library, using vanilla CSS with SCSS.

**Rationale**:
- **Customization**: Full control over component design and behavior
- **Bundle Size**: Avoid large UI library dependencies
- **Consistency**: Maintain design consistency through a custom component library
- **Clean HTML**: Keep markup semantic and free from utility classes
- **Maintainable CSS**: Use SCSS to organize styles in a component-oriented way

**Alternatives Considered**:
- **Tailwind CSS**: Creates HTML bloat despite popularity
- **SvelteUI/Melt UI**: Good but would constrain design choices
- **Skeleton**: Adds unnecessary overhead for our specific needs

## State Management

**Decision**: Use Svelte's built-in stores for state management.

**Rationale**:
- Native to Svelte with optimal integration
- Simple, reactive API that's easy to understand
- Sufficient for our needs without additional libraries
- Component-specific stores can be created for widget isolation

## Data Fetching

**Decision**: Use SvelteQuery (TanStack Query for Svelte) for data fetching.

**Rationale**:
- Caching and background refreshing capabilities
- Request deduplication
- Loading/error states management
- Pairs well with SvelteKit's server endpoints

## Local Storage Strategy

**Decision**: Use IndexedDB via Dexie.js.

**Rationale**:
- Better performance than localStorage for larger datasets
- Transactional database operations
- Support for complex data structures
- Offline-first capabilities

## Testing Framework

**Decision**: Vitest for unit/component testing and Playwright for E2E testing.

**Rationale**:
- **Vitest**: Fast, ESM-native testing with excellent Svelte integration
- **Playwright**: Cross-browser testing with strong debugging capabilities
- Both integrate well with SvelteKit projects

## Styling Approach

**Decision**: Vanilla CSS with SCSS for organization and custom properties for theming.

**Rationale**:
- **CSS Cascade**: Leverages the cascade as intended rather than utility classes
- **Clean HTML**: Keeps markup semantic and free from presentational classes
- **SCSS Organization**: Uses SCSS for nesting, variables, and modularization
- **Custom Properties**: Implements theme tokens via CSS variables for runtime customization
- **Performance**: Smaller CSS footprint compared to utility-first frameworks
- **Maintainability**: Easier to understand component styling relationships
- **Future-Proof**: Follows standard CSS practices rather than framework-specific patterns

**Alternatives Considered**:
- **Tailwind CSS**: Popular but creates HTML bloat and fights against the cascade
- **CSS Modules**: Good for scoping but adds complexity to the build process
- **CSS-in-JS**: Too JavaScript-dependent for our progressive enhancement goals
- **Pure CSS**: Lacks the organization benefits that SCSS provides

## CSS Performance Optimization

**Decision**: Implement controlled CSS inlining with dedicated inline.scss file.

**Rationale**:
- **Precise Control**: Explicitly determine which styles are critical, rather than relying on automated extraction
- **Predictable Results**: Avoid the unpredictability of automated critical CSS tools
- **Smaller Payload**: Manual curation typically results in leaner critical CSS
- **Faster Initial Render**: Critical styles are immediately available without waiting for CSS files to load
- **Progressive Enhancement**: Ensures basic styling even before external stylesheets load

**Implementation Approach**:
- Create dedicated inline.scss file containing only critical styles
- Build process compiles this to inline.css
- Build script extracts contents and injects into app.html's <head> section
- Remaining styles loaded asynchronously through standard <link> tags
- Clear guidelines for developers on what belongs in inline.scss

## Build and Bundling

**Decision**: Use SvelteKit's built-in Vite configuration.

**Rationale**:
- Optimized for Svelte components
- Fast HMR during development
- Efficient code splitting
- Modern bundling techniques

## Deployment Strategy

**Decision**: Static generation with optional API endpoints via serverless functions.

**Rationale**:
- Excellent performance for static content
- Reduced server costs
- Simple scaling
- Flexibility to add dynamic API endpoints as needed

## Plugin Architecture

**Decision**: Custom plugin system using dynamic imports and standard interfaces.

**Rationale**:
- No suitable off-the-shelf solutions for our specific needs
- Need for tight integration with our widget system
- Control over security aspects of plugin loading
- Ability to customize the development experience for plugin creators