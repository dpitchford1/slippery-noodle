This file is a merged representation of a subset of the codebase.
The content has been processed where content has been compressed (code blocks are separated by ⋮---- delimiter).

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching these patterns are excluded: /assets/, **/*.css, **/*.js
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Content has been compressed - code blocks are separated by ⋮---- delimiter
- Files are sorted by Git change count (files with more changes are at the bottom)

## Additional Info

# Directory Structure
```
.repomix/
  bundles.json
Planning Docs/
  architecture-design.md
  challenges-solutions.md
  development-roadmap.md
  implementation-tasklist.md
  technical-decisions.md
  technology-stack.md
Requirements/
  master-requirements-document.md
LICENSE
README.md
```

# Files

## File: .repomix/bundles.json
```json
{
  "bundles": {}
}
```

## File: Planning Docs/architecture-design.md
```markdown
# Architecture Design

## High-Level Architecture
```

## File: Planning Docs/challenges-solutions.md
```markdown
# Challenges and Solutions

## Potential Challenges & Mitigation Strategies

| Challenge | Description | Potential Solutions |
|-----------|-------------|---------------------|
| **Data Scraping Limitations** | Job boards and sports sites may have anti-scraping measures | - Use official APIs where available<br>- Implement proper request throttling<br>- Consider browser automation as fallback<br>- Use RSS feeds when available |
| **Always-On Functionality** | Keeping the app running as a background service | - Use PM2 for process management<br>- Create a macOS launch agent<br>- Package as an Electron app<br>- Implement auto-restart on failure |
| **External API Rate Limits** | Free tiers of weather/sports APIs have usage limits | - Implement aggressive caching<br>- Reduce polling frequency<br>- Show last-updated timestamps<br>- Consider paid API tiers for critical services |
| **Command Execution Security** | Security concerns with command execution component | - Whitelist allowed commands<br>- Sandbox execution environment<br>- Implement permission checks<br>- Log all command executions |
| **Data Synchronization** | Future requirement for syncing with mobile devices | - Consider Firebase or PouchDB for offline-first sync<br>- Implement conflict resolution strategies<br>- Design for eventual consistency |
| **UI Responsiveness** | Dashboard with multiple components may affect performance | - Implement lazy loading<br>- Use virtualization for lists<br>- Optimize render cycles<br>- Code-split components |

## Component-Specific Challenges

### News Component
- **Challenge**: RSS feed availability and standardization
- **Solution**: Create adapter pattern for different feed formats, implement fallback to web scraping

### Todo List Component
- **Challenge**: Data persistence and history tracking
- **Solution**: Use SQLite with versioned records, implement soft deletion

### Sports Scores Component
- **Challenge**: Finding reliable free API for sports data
- **Solution**: Research ESPN, SportRadar, or open APIs; implement caching to reduce API calls

### Job Postings Component
- **Challenge**: Authentication requirements for job boards
- **Solution**: Evaluate official APIs first, consider scraping with proper headers and intervals

### Weather Component
- **Challenge**: API limitations and data granularity
- **Solution**: Use OpenWeatherMap or similar with appropriate caching strategy

### Quick Command Executor
- **Challenge**: Security and sandboxing
- **Solution**: Use allowlist approach, sanitize inputs, restrict execution environment

## Technical Debt Considerations

- Implement proper logging from the start to aid debugging
- Create an abstraction layer for external APIs to simplify future provider changes
- Design database schema with future requirements in mind
- Document code and architecture decisions early
```

## File: Planning Docs/development-roadmap.md
```markdown
# Development Roadmap

## Phase 1: Foundation (Weeks 1-2)
- Project setup and basic architecture
- Core frontend and backend infrastructure
- Basic layout and widget framework
- Database schema design and implementation

**Milestones:**
- Git repository configured with proper structure
- Development environment setup complete
- Basic application shell running locally
- Database connection established
- Widget layout system functioning

## Phase 2: Core Components (Weeks 3-5)
- Todo List component with full CRUD functionality
- Weather component with basic functionality
- News component with RSS integration
- Directory Scraper implementation

**Milestones:**
- Todo List component complete with database persistence
- Weather component displaying current conditions
- News component showing articles from multiple sources
- Directory Scraper listing projects with links

## Phase 3: Advanced Components (Weeks 6-8)
- Sports Scores component
- Job Postings component
- Quick Command Executor (basic implementation)
- Frontend Reference Guide component (basic structure)

**Milestones:**
- Sports Scores component displaying team data
- Job Postings showing relevant listings
- Command executor running basic commands
- Reference guide storing and displaying code snippets

## Phase 4: Enhancement (Weeks 9-10)
- Refinement of all components
- Performance optimization
- UI/UX improvements
- Testing and bug fixes

**Milestones:**
- All components optimized for performance
- UI/UX polish complete
- Core functionality tested and stable
- Initial release candidate ready

## Phase 5: Future Features (Post-Initial Release)
- Bookmarks Manager component
- Notes component
- Stock Market Feed
- Mobile sync capabilities

**Milestones:**
- Each feature developed as an independent module
- Integration into the main dashboard
- Documentation updated for each new component

## Testing Strategy

### Testing Phases Across Development

| Phase | Unit Testing | Integration Testing | E2E Testing |
|-------|-------------|---------------------|-------------|
| Foundation | Core utilities, Services | API endpoints | Basic app loading |
| Core Components | Component logic | Component-API integration | Core workflows |
| Advanced Components | Complex business logic | Multi-component interactions | Advanced workflows |
| Enhancement | Performance metrics | System-wide integration | Full application |

## Deployment Strategy

### Initial Deployment (v1.0)
- Local development environment with manual startup
- PM2 process manager for background execution

### Enhanced Deployment (v2.0)
- macOS launch agent for automatic startup
- Optional Electron packaging

### Future Considerations (v3.0+)
- Cross-platform compatibility
- Mobile companion application
```

## File: Planning Docs/implementation-tasklist.md
```markdown
# Implementation Task List

## Phase 1: Foundation

### Project Initialization
- [ ] Set up GitHub repository
- [ ] Initialize React frontend project
- [ ] Initialize Node.js backend project
- [ ] Configure ESLint and Prettier
- [ ] Set up Git hooks for code quality
- [ ] Create initial README.md with project overview

### Development Environment
- [ ] Set up local development server
- [ ] Configure database connection
- [ ] Create docker-compose or development scripts
- [ ] Configure environment variables
- [ ] Set up build process
- [ ] Create development/production configurations

### Core Architecture
- [ ] Design database schema
- [ ] Create basic API structure
- [ ] Implement widget framework
- [ ] Set up state management
- [ ] Create layout system for dashboard
- [ ] Implement basic routing
- [ ] Design component communication pattern

## Phase 2: Core Components

### Todo List Component
- [ ] Database models for todos
- [ ] API endpoints for CRUD operations
- [ ] Frontend component implementation
- [ ] Task prioritization features
- [ ] Grouping functionality
- [ ] Drag-and-drop reordering
- [ ] Task completion history

### Weather Component
- [ ] Research and select weather API
- [ ] Implement API service
- [ ] Create UI component
- [ ] Add sunrise/sunset features
- [ ] Implement manual refresh functionality
- [ ] Add location selection
- [ ] Implement caching strategy

### News Component
- [ ] Implement RSS parser service
- [ ] Create news category management
- [ ] Design and implement UI component
- [ ] Add refresh functionality
- [ ] Implement feed management
- [ ] Create article preview functionality
- [ ] Set up caching for offline reading

### Directory Scraper
- [ ] Implement file system service
- [ ] Create project listing component
- [ ] Add open-in-browser functionality
- [ ] Implement folder navigation
- [ ] Create file preview capabilities
- [ ] Add favorite projects feature

## Phase 3: Advanced Components

### Sports Scores Component
- [ ] Research and integrate sports API
- [ ] Create team selection interface
- [ ] Implement scores display
- [ ] Add standings view
- [ ] Create game schedule display
- [ ] Implement team statistics
- [ ] Set up notifications for game events

### Job Postings Component
- [ ] Research job board API options
- [ ] Implement filter mechanisms
- [ ] Create job listing component
- [ ] Add location filtering
- [ ] Implement job title filtering
- [ ] Create saved searches functionality
- [ ] Add job application tracking

### Quick Command Executor
- [ ] Design safe execution environment
- [ ] Implement command execution service
- [ ] Create command input interface
- [ ] Add predefined command shortcuts
- [ ] Implement command history
- [ ] Create output display
- [ ] Add command favorites

### Frontend Reference Guide
- [ ] Design snippet storage schema
- [ ] Implement snippet CRUD operations
- [ ] Create categorization system
- [ ] Build search functionality
- [ ] Implement syntax highlighting
- [ ] Add tagging system
- [ ] Create snippet import/export

## Phase 4: Enhancement

### Performance Optimization
- [ ] Implement caching strategy
- [ ] Optimize component rendering
- [ ] Add lazy loading for components
- [ ] Analyze and fix render bottlenecks
- [ ] Optimize database queries
- [ ] Implement resource cleanup
- [ ] Add performance monitoring

### User Experience
- [ ] Implement dark mode toggle
- [ ] Add drag-and-drop for widget positioning
- [ ] Create responsive layouts
- [ ] Design and implement widget settings
- [ ] Add keyboard shortcuts
- [ ] Create onboarding experience
- [ ] Implement custom themes

### Testing and QA
- [ ] Write unit tests for critical components
- [ ] Perform integration testing
- [ ] Fix identified bugs
- [ ] Test across different screen sizes
- [ ] Conduct usability testing
- [ ] Document test cases
- [ ] Create automated test suite

## Phase 5: Future Features

### Bookmarks Manager
- [ ] Design database schema for bookmarks
- [ ] Implement CRUD operations
- [ ] Create folder structure
- [ ] Implement import/export functionality
- [ ] Add browser extension integration

### Notes Component
- [ ] Create notes database schema
- [ ] Implement rich text editor
- [ ] Add categorization system
- [ ] Create search functionality
- [ ] Implement markdown support

### Stock Market Feed
- [ ] Research stock API options
- [ ] Create watchlist functionality
- [ ] Implement stock charts
- [ ] Add portfolio tracking
- [ ] Create alert system
```

## File: Planning Docs/technical-decisions.md
```markdown
# Technical Decisions & Considerations

## Data Storage Strategy

### Primary Database: SQLite
- **Rationale**: Lightweight, file-based, perfect for single-user application
- **Implementation**: 
  - Use Sequelize ORM for structured data access
  - Implement migrations for schema evolution
  - Regular backups to prevent data loss

### Component-Specific Storage
- **Todo List**: SQLite tables with relationships for tasks and groups
- **News Feed**: Cache RSS content in SQLite with TTL
- **Weather**: Short-term memory cache with periodic updates
- **Reference Guide**: SQLite for snippets with full-text search capabilities
- **Command Executor**: File-based history with limited retention

### Caching Strategy
- In-memory cache for frequently accessed data
- Filesystem cache for API responses
- Implement stale-while-revalidate pattern for UI responsiveness

## API Integration Approach

### External API Adapters
- Create adapter pattern for each external API
- Abstract common functionality (authentication, rate limiting)
- Implement retry mechanisms and graceful degradation
- Use appropriate caching based on data volatility

### API Selection Criteria
1. Documentation quality and completeness
2. Rate limits and pricing tiers
3. Data freshness and update frequency
4. Authentication requirements
5. Community support and reliability

### API Categories and Options

| Category | Primary Option | Fallback Option | Considerations |
|----------|---------------|-----------------|----------------|
| Weather | OpenWeatherMap | WeatherAPI | Free tier limits, location accuracy |
| Sports | ESPN API | Sports Data IO | Game coverage, update frequency |
| News | RSS Feeds | NewsAPI | Source variety, content formatting |
| Jobs | LinkedIn API | Indeed API | Authentication requirements |

## System Integration

### Command Execution
- Use Node.js child_process with proper sanitization
- Implement allowlist of permitted commands
- Log all execution attempts for security
- Sandbox execution environment

### File System Access
- Restricted to specific directories
- Use proper error handling for permissions
- Implement file watching for directory changes
- Cache directory contents with invalidation

### Browser Integration
- Use URL protocol handlers for opening links
- Implement clipboard integration for snippets
- Consider browser extension for deeper integration

## Deployment Options

### Option 1: Basic Setup (Recommended for v1)
- Run as localhost service with PM2
- Configure as startup service
- Access via browser bookmark
- Pros: Simple setup, minimal dependencies
- Cons: Limited system integration

### Option 2: Enhanced Desktop Experience
- Package as Electron app
- System tray integration
- Native notifications
- Pros: Better system integration, standalone application
- Cons: Larger footprint, additional complexity

### Option 3: Development Only
- Run manually during development sessions
- No background service
- Pros: Simplest setup
- Cons: Must be manually started, no background functionality

## Performance Considerations

### Frontend Optimization
- Implement code splitting for components
- Use React.memo for expensive renders
- Virtual scrolling for long lists
- Web workers for intensive operations

### Backend Optimization
- Efficient database queries with proper indexing
- Connection pooling
- Request batching where appropriate
- Background processing for long-running tasks

## Extensibility Design

### Plugin Architecture
- Define standard widget interface
- Component registry for dynamic loading
- Standardized event communication
- Settings schema for configuration

### Configuration Management
- User preferences stored in database
- Component-specific settings
- Export/import configuration
- Default settings with override capability
```

## File: Planning Docs/technology-stack.md
```markdown
# Technology Stack for Personal Dashboard

## Frontend Technologies

### Framework: React.js
- **Rationale**: Component-based architecture perfect for modular dashboard, extensive ecosystem, excellent for creating interactive UIs
- **Alternative**: Vue.js if you prefer a gentler learning curve

### State Management
- Redux or Context API for global state management
- React Query for data fetching and caching

### UI Components
- Tailwind CSS for utility-first styling
- Optional component library: Chakra UI (accessible, themeable components)

## Backend Technologies

### Runtime: Node.js with Express.js
- **Rationale**: JavaScript across the stack, lightweight for local usage, extensive packages

### Database
- SQLite for local persistent storage (todos, snippets, notes)
- **Rationale**: Self-contained, zero-configuration, perfect for single-user applications

### API Integration
- Axios for external API calls (weather, sports, news)
- RSS parser libraries for news feeds

## System Architecture

### Local Daemon
- PM2 for Node.js process management (keeps the app running in background)
- Electron as an alternative for desktop application packaging

## Technology Justification

| Requirement | Technology Choice | Justification |
|-------------|-------------------|---------------|
| Modular Components | React.js | Component-based architecture allows each dashboard widget to be developed independently |
| Local Database | SQLite | Lightweight, file-based database perfect for single-user applications with no authentication |
| Always-on Service | PM2/Electron | Provides process management to keep the application running in the background |
| External Data Sources | Axios + Custom APIs | Flexible HTTP client for integrating with various external APIs |
| Manual Refresh | React State | State management allows for manual refresh triggers without complex polling |
| Directory Scanning | Node.js fs module | Native filesystem access for directory scanning functionality |
| Command Execution | Node.js child_process | Secure execution of system commands within controlled environment |
```

## File: Requirements/master-requirements-document.md
```markdown
# Personal Dashboard Requirements Document

## Project Overview
- **Purpose**: A local, personal dashboard providing news, tasks, sports scores, weather updates, and more, tailored to your interests and productivity needs.
- **Platform**: Runs locally on a Mac via localhost, with preference for always-on functionality as a background service or daemon.
- **Target User**: Single user (yourself), no authentication needed.

---

## Functional Requirements

### 1. News Component
- **Data Source**: Pulls news articles from RSS feeds or web scraping.
- **Topics**:
  - Default Topics: Business, Stock Market, Sports, AI-related news.
  - Dynamic Management: Ability to add or remove topics/categories (e.g., Archaeology).
- **Display**:
  - Headline, summary, and small thumbnail.
- **Features**:
  - Manual refresh button (no auto-refresh).

---

### 2. Todo List Component
- **Data Storage**: Persistent database with history tracking.
- **Features**:
  - Add, edit, delete tasks.
  - Prioritization (High, Medium, Low).
  - Task grouping and reordering.
  - Mark tasks as completed.
- **Future Expansion**:
  - Potential integration with Google Notes or syncing with Android devices.

---

### 3. Sports Scores Component
- **Supported Leagues**: MLB (Toronto Blue Jays) and NBA (Toronto Raptors).
- **Features**:
  - Display live scores and standings.
  - Manual refresh button (no auto-refresh).

---

### 4. Job Postings Component
- **Data Source**: LinkedIn or other job boards (requires authentication or scraping).
- **Filters**:
  - Location: Toronto.
  - Job Titles: Frontend Developer, UI Developer.
  - Ability to add additional filters dynamically.
- **Features**:
  - Display job title, company, location, and link to posting.

---

### 5. Weather Component
- **Data Source**: Weather API (e.g., OpenWeather).
- **Display**:
  - Current weather conditions for your local area.
  - Optional: 24-hour forecast.
  - **New Feature**: Sunrise and sunset times for your location.
- **Features**:
  - Small, simple widget.
  - Manual refresh button (no auto-refresh).

---

### 6. Stock Market Feed (Placeholder)
- **Future Planning**:
  - Define specific stocks, indices, or sectors of interest.
  - Determine desired metrics (e.g., price, daily change, volume).

---

### 7. Directory Scraper Component
- **Path**: Scans the directory where this project resides.
- **Display**:
  - Simple list of project names.
  - Links to open projects in new tabs.

---

### 8. Bookmarks Manager (Optional Future Feature)
- **Structure**:
  - Database-driven.
  - Supports folders, groups, and subgroups.
- **Features**:
  - Portable and exportable.
  - Similar functionality to Firefox Bookmarks Toolbar.

---

### 9. Notes Component (Optional Future Feature)
- **Integration**: Could double as part of the Todo List component.
- **Features**:
  - Add, edit, delete quick notes.
  - Persistent storage.

---

### 10. Quick Command Executor Component
- **Purpose**: Execute shell commands/scripts directly from the dashboard.
- **Features**:
  1. Input field for command execution.
  2. Predefined shortcuts for common tasks (e.g., renaming files, starting/stopping services).
  3. Output display for command results (e.g., success/failure messages).
- **Use Case Examples**:
  - "Rename 3000 image files in sequential order with a prefix."
  - "Start a local server."
  - "Backup my projects folder."
- **Security**:
  - Execute commands in a controlled environment to prevent unintentional system changes.
  - Optional: Command execution limited to certain directories.

---

### 11. Frontend Development Reference Guide Component
- **Purpose**: A library for storing and accessing frontend development reference materials and code snippets.
- **Features**:
  1. **Snippets Library**:
     - Add, edit, and delete snippets.
     - Categorize snippets by programming language (e.g., HTML, CSS, JavaScript).
     - Searchable functionality for quick access.
  2. **Offline Functionality**:
     - All references and snippets stored locally for offline access.
  3. **Database Integration**:
     - Backend database to manage snippets and categories.
  4. **Reference Guides**:
     - Supplementary information from trusted sources (e.g., MDN, W3C docs) as local files or inline notes.
- **Future Expansion**:
  - Bookmark favorite snippets.
  - Visualize most-used snippets or categories.

---

## Non-Functional Requirements

1. **Platform**:
   - Local development environment on Mac using MAMP or standalone server.
   - Should run as a background service or daemon for always-on functionality.
   - No external access or authentication required.

2. **Performance**:
   - Manual refresh for content updates (no persistent auto-refresh).
   - Lightweight and fast to load.

3. **Design**:
   - Minimalistic and functional design (UI decisions deferred to a later phase).
   - Dark mode toggle to be considered during UI design tasks.

4. **Scalability**:
   - Modular design to allow for future feature expansion (e.g., music player, focus timer, calendar integration).

---

## Additional Notes
- Future features like the Stock Market Feed and Bookmarks Manager can be revisited once the core functionality is implemented.
- UI/UX design decisions will be tackled in a separate design phase.
- This project will serve as a personal productivity tool and is not intended for public deployment.

---

## Next Steps
1. Finalize the requirements document based on feedback.
2. Create a modular architecture plan for the dashboard.
3. Begin implementation with a focus on core features (e.g., News, Todo List, Sports Scores).
4. Revisit optional and placeholder features in future iterations.
```

## File: LICENSE
```
GNU GENERAL PUBLIC LICENSE
                       Version 3, 29 June 2007

 Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
 Everyone is permitted to copy and distribute verbatim copies
 of this license document, but changing it is not allowed.

                            Preamble

  The GNU General Public License is a free, copyleft license for
software and other kinds of works.

  The licenses for most software and other practical works are designed
to take away your freedom to share and change the works.  By contrast,
the GNU General Public License is intended to guarantee your freedom to
share and change all versions of a program--to make sure it remains free
software for all its users.  We, the Free Software Foundation, use the
GNU General Public License for most of our software; it applies also to
any other work released this way by its authors.  You can apply it to
your programs, too.

  When we speak of free software, we are referring to freedom, not
price.  Our General Public Licenses are designed to make sure that you
have the freedom to distribute copies of free software (and charge for
them if you wish), that you receive source code or can get it if you
want it, that you can change the software or use pieces of it in new
free programs, and that you know you can do these things.

  To protect your rights, we need to prevent others from denying you
these rights or asking you to surrender the rights.  Therefore, you have
certain responsibilities if you distribute copies of the software, or if
you modify it: responsibilities to respect the freedom of others.

  For example, if you distribute copies of such a program, whether
gratis or for a fee, you must pass on to the recipients the same
freedoms that you received.  You must make sure that they, too, receive
or can get the source code.  And you must show them these terms so they
know their rights.

  Developers that use the GNU GPL protect your rights with two steps:
(1) assert copyright on the software, and (2) offer you this License
giving you legal permission to copy, distribute and/or modify it.

  For the developers' and authors' protection, the GPL clearly explains
that there is no warranty for this free software.  For both users' and
authors' sake, the GPL requires that modified versions be marked as
changed, so that their problems will not be attributed erroneously to
authors of previous versions.

  Some devices are designed to deny users access to install or run
modified versions of the software inside them, although the manufacturer
can do so.  This is fundamentally incompatible with the aim of
protecting users' freedom to change the software.  The systematic
pattern of such abuse occurs in the area of products for individuals to
use, which is precisely where it is most unacceptable.  Therefore, we
have designed this version of the GPL to prohibit the practice for those
products.  If such problems arise substantially in other domains, we
stand ready to extend this provision to those domains in future versions
of the GPL, as needed to protect the freedom of users.

  Finally, every program is threatened constantly by software patents.
States should not allow patents to restrict development and use of
software on general-purpose computers, but in those that do, we wish to
avoid the special danger that patents applied to a free program could
make it effectively proprietary.  To prevent this, the GPL assures that
patents cannot be used to render the program non-free.

  The precise terms and conditions for copying, distribution and
modification follow.

                       TERMS AND CONDITIONS

  0. Definitions.

  "This License" refers to version 3 of the GNU General Public License.

  "Copyright" also means copyright-like laws that apply to other kinds of
works, such as semiconductor masks.

  "The Program" refers to any copyrightable work licensed under this
License.  Each licensee is addressed as "you".  "Licensees" and
"recipients" may be individuals or organizations.

  To "modify" a work means to copy from or adapt all or part of the work
in a fashion requiring copyright permission, other than the making of an
exact copy.  The resulting work is called a "modified version" of the
earlier work or a work "based on" the earlier work.

  A "covered work" means either the unmodified Program or a work based
on the Program.

  To "propagate" a work means to do anything with it that, without
permission, would make you directly or secondarily liable for
infringement under applicable copyright law, except executing it on a
computer or modifying a private copy.  Propagation includes copying,
distribution (with or without modification), making available to the
public, and in some countries other activities as well.

  To "convey" a work means any kind of propagation that enables other
parties to make or receive copies.  Mere interaction with a user through
a computer network, with no transfer of a copy, is not conveying.

  An interactive user interface displays "Appropriate Legal Notices"
to the extent that it includes a convenient and prominently visible
feature that (1) displays an appropriate copyright notice, and (2)
tells the user that there is no warranty for the work (except to the
extent that warranties are provided), that licensees may convey the
work under this License, and how to view a copy of this License.  If
the interface presents a list of user commands or options, such as a
menu, a prominent item in the list meets this criterion.

  1. Source Code.

  The "source code" for a work means the preferred form of the work
for making modifications to it.  "Object code" means any non-source
form of a work.

  A "Standard Interface" means an interface that either is an official
standard defined by a recognized standards body, or, in the case of
interfaces specified for a particular programming language, one that
is widely used among developers working in that language.

  The "System Libraries" of an executable work include anything, other
than the work as a whole, that (a) is included in the normal form of
packaging a Major Component, but which is not part of that Major
Component, and (b) serves only to enable use of the work with that
Major Component, or to implement a Standard Interface for which an
implementation is available to the public in source code form.  A
"Major Component", in this context, means a major essential component
(kernel, window system, and so on) of the specific operating system
(if any) on which the executable work runs, or a compiler used to
produce the work, or an object code interpreter used to run it.

  The "Corresponding Source" for a work in object code form means all
the source code needed to generate, install, and (for an executable
work) run the object code and to modify the work, including scripts to
control those activities.  However, it does not include the work's
System Libraries, or general-purpose tools or generally available free
programs which are used unmodified in performing those activities but
which are not part of the work.  For example, Corresponding Source
includes interface definition files associated with source files for
the work, and the source code for shared libraries and dynamically
linked subprograms that the work is specifically designed to require,
such as by intimate data communication or control flow between those
subprograms and other parts of the work.

  The Corresponding Source need not include anything that users
can regenerate automatically from other parts of the Corresponding
Source.

  The Corresponding Source for a work in source code form is that
same work.

  2. Basic Permissions.

  All rights granted under this License are granted for the term of
copyright on the Program, and are irrevocable provided the stated
conditions are met.  This License explicitly affirms your unlimited
permission to run the unmodified Program.  The output from running a
covered work is covered by this License only if the output, given its
content, constitutes a covered work.  This License acknowledges your
rights of fair use or other equivalent, as provided by copyright law.

  You may make, run and propagate covered works that you do not
convey, without conditions so long as your license otherwise remains
in force.  You may convey covered works to others for the sole purpose
of having them make modifications exclusively for you, or provide you
with facilities for running those works, provided that you comply with
the terms of this License in conveying all material for which you do
not control copyright.  Those thus making or running the covered works
for you must do so exclusively on your behalf, under your direction
and control, on terms that prohibit them from making any copies of
your copyrighted material outside their relationship with you.

  Conveying under any other circumstances is permitted solely under
the conditions stated below.  Sublicensing is not allowed; section 10
makes it unnecessary.

  3. Protecting Users' Legal Rights From Anti-Circumvention Law.

  No covered work shall be deemed part of an effective technological
measure under any applicable law fulfilling obligations under article
11 of the WIPO copyright treaty adopted on 20 December 1996, or
similar laws prohibiting or restricting circumvention of such
measures.

  When you convey a covered work, you waive any legal power to forbid
circumvention of technological measures to the extent such circumvention
is effected by exercising rights under this License with respect to
the covered work, and you disclaim any intention to limit operation or
modification of the work as a means of enforcing, against the work's
users, your or third parties' legal rights to forbid circumvention of
technological measures.

  4. Conveying Verbatim Copies.

  You may convey verbatim copies of the Program's source code as you
receive it, in any medium, provided that you conspicuously and
appropriately publish on each copy an appropriate copyright notice;
keep intact all notices stating that this License and any
non-permissive terms added in accord with section 7 apply to the code;
keep intact all notices of the absence of any warranty; and give all
recipients a copy of this License along with the Program.

  You may charge any price or no price for each copy that you convey,
and you may offer support or warranty protection for a fee.

  5. Conveying Modified Source Versions.

  You may convey a work based on the Program, or the modifications to
produce it from the Program, in the form of source code under the
terms of section 4, provided that you also meet all of these conditions:

    a) The work must carry prominent notices stating that you modified
    it, and giving a relevant date.

    b) The work must carry prominent notices stating that it is
    released under this License and any conditions added under section
    7.  This requirement modifies the requirement in section 4 to
    "keep intact all notices".

    c) You must license the entire work, as a whole, under this
    License to anyone who comes into possession of a copy.  This
    License will therefore apply, along with any applicable section 7
    additional terms, to the whole of the work, and all its parts,
    regardless of how they are packaged.  This License gives no
    permission to license the work in any other way, but it does not
    invalidate such permission if you have separately received it.

    d) If the work has interactive user interfaces, each must display
    Appropriate Legal Notices; however, if the Program has interactive
    interfaces that do not display Appropriate Legal Notices, your
    work need not make them do so.

  A compilation of a covered work with other separate and independent
works, which are not by their nature extensions of the covered work,
and which are not combined with it such as to form a larger program,
in or on a volume of a storage or distribution medium, is called an
"aggregate" if the compilation and its resulting copyright are not
used to limit the access or legal rights of the compilation's users
beyond what the individual works permit.  Inclusion of a covered work
in an aggregate does not cause this License to apply to the other
parts of the aggregate.

  6. Conveying Non-Source Forms.

  You may convey a covered work in object code form under the terms
of sections 4 and 5, provided that you also convey the
machine-readable Corresponding Source under the terms of this License,
in one of these ways:

    a) Convey the object code in, or embodied in, a physical product
    (including a physical distribution medium), accompanied by the
    Corresponding Source fixed on a durable physical medium
    customarily used for software interchange.

    b) Convey the object code in, or embodied in, a physical product
    (including a physical distribution medium), accompanied by a
    written offer, valid for at least three years and valid for as
    long as you offer spare parts or customer support for that product
    model, to give anyone who possesses the object code either (1) a
    copy of the Corresponding Source for all the software in the
    product that is covered by this License, on a durable physical
    medium customarily used for software interchange, for a price no
    more than your reasonable cost of physically performing this
    conveying of source, or (2) access to copy the
    Corresponding Source from a network server at no charge.

    c) Convey individual copies of the object code with a copy of the
    written offer to provide the Corresponding Source.  This
    alternative is allowed only occasionally and noncommercially, and
    only if you received the object code with such an offer, in accord
    with subsection 6b.

    d) Convey the object code by offering access from a designated
    place (gratis or for a charge), and offer equivalent access to the
    Corresponding Source in the same way through the same place at no
    further charge.  You need not require recipients to copy the
    Corresponding Source along with the object code.  If the place to
    copy the object code is a network server, the Corresponding Source
    may be on a different server (operated by you or a third party)
    that supports equivalent copying facilities, provided you maintain
    clear directions next to the object code saying where to find the
    Corresponding Source.  Regardless of what server hosts the
    Corresponding Source, you remain obligated to ensure that it is
    available for as long as needed to satisfy these requirements.

    e) Convey the object code using peer-to-peer transmission, provided
    you inform other peers where the object code and Corresponding
    Source of the work are being offered to the general public at no
    charge under subsection 6d.

  A separable portion of the object code, whose source code is excluded
from the Corresponding Source as a System Library, need not be
included in conveying the object code work.

  A "User Product" is either (1) a "consumer product", which means any
tangible personal property which is normally used for personal, family,
or household purposes, or (2) anything designed or sold for incorporation
into a dwelling.  In determining whether a product is a consumer product,
doubtful cases shall be resolved in favor of coverage.  For a particular
product received by a particular user, "normally used" refers to a
typical or common use of that class of product, regardless of the status
of the particular user or of the way in which the particular user
actually uses, or expects or is expected to use, the product.  A product
is a consumer product regardless of whether the product has substantial
commercial, industrial or non-consumer uses, unless such uses represent
the only significant mode of use of the product.

  "Installation Information" for a User Product means any methods,
procedures, authorization keys, or other information required to install
and execute modified versions of a covered work in that User Product from
a modified version of its Corresponding Source.  The information must
suffice to ensure that the continued functioning of the modified object
code is in no case prevented or interfered with solely because
modification has been made.

  If you convey an object code work under this section in, or with, or
specifically for use in, a User Product, and the conveying occurs as
part of a transaction in which the right of possession and use of the
User Product is transferred to the recipient in perpetuity or for a
fixed term (regardless of how the transaction is characterized), the
Corresponding Source conveyed under this section must be accompanied
by the Installation Information.  But this requirement does not apply
if neither you nor any third party retains the ability to install
modified object code on the User Product (for example, the work has
been installed in ROM).

  The requirement to provide Installation Information does not include a
requirement to continue to provide support service, warranty, or updates
for a work that has been modified or installed by the recipient, or for
the User Product in which it has been modified or installed.  Access to a
network may be denied when the modification itself materially and
adversely affects the operation of the network or violates the rules and
protocols for communication across the network.

  Corresponding Source conveyed, and Installation Information provided,
in accord with this section must be in a format that is publicly
documented (and with an implementation available to the public in
source code form), and must require no special password or key for
unpacking, reading or copying.

  7. Additional Terms.

  "Additional permissions" are terms that supplement the terms of this
License by making exceptions from one or more of its conditions.
Additional permissions that are applicable to the entire Program shall
be treated as though they were included in this License, to the extent
that they are valid under applicable law.  If additional permissions
apply only to part of the Program, that part may be used separately
under those permissions, but the entire Program remains governed by
this License without regard to the additional permissions.

  When you convey a copy of a covered work, you may at your option
remove any additional permissions from that copy, or from any part of
it.  (Additional permissions may be written to require their own
removal in certain cases when you modify the work.)  You may place
additional permissions on material, added by you to a covered work,
for which you have or can give appropriate copyright permission.

  Notwithstanding any other provision of this License, for material you
add to a covered work, you may (if authorized by the copyright holders of
that material) supplement the terms of this License with terms:

    a) Disclaiming warranty or limiting liability differently from the
    terms of sections 15 and 16 of this License; or

    b) Requiring preservation of specified reasonable legal notices or
    author attributions in that material or in the Appropriate Legal
    Notices displayed by works containing it; or

    c) Prohibiting misrepresentation of the origin of that material, or
    requiring that modified versions of such material be marked in
    reasonable ways as different from the original version; or

    d) Limiting the use for publicity purposes of names of licensors or
    authors of the material; or

    e) Declining to grant rights under trademark law for use of some
    trade names, trademarks, or service marks; or

    f) Requiring indemnification of licensors and authors of that
    material by anyone who conveys the material (or modified versions of
    it) with contractual assumptions of liability to the recipient, for
    any liability that these contractual assumptions directly impose on
    those licensors and authors.

  All other non-permissive additional terms are considered "further
restrictions" within the meaning of section 10.  If the Program as you
received it, or any part of it, contains a notice stating that it is
governed by this License along with a term that is a further
restriction, you may remove that term.  If a license document contains
a further restriction but permits relicensing or conveying under this
License, you may add to a covered work material governed by the terms
of that license document, provided that the further restriction does
not survive such relicensing or conveying.

  If you add terms to a covered work in accord with this section, you
must place, in the relevant source files, a statement of the
additional terms that apply to those files, or a notice indicating
where to find the applicable terms.

  Additional terms, permissive or non-permissive, may be stated in the
form of a separately written license, or stated as exceptions;
the above requirements apply either way.

  8. Termination.

  You may not propagate or modify a covered work except as expressly
provided under this License.  Any attempt otherwise to propagate or
modify it is void, and will automatically terminate your rights under
this License (including any patent licenses granted under the third
paragraph of section 11).

  However, if you cease all violation of this License, then your
license from a particular copyright holder is reinstated (a)
provisionally, unless and until the copyright holder explicitly and
finally terminates your license, and (b) permanently, if the copyright
holder fails to notify you of the violation by some reasonable means
prior to 60 days after the cessation.

  Moreover, your license from a particular copyright holder is
reinstated permanently if the copyright holder notifies you of the
violation by some reasonable means, this is the first time you have
received notice of violation of this License (for any work) from that
copyright holder, and you cure the violation prior to 30 days after
your receipt of the notice.

  Termination of your rights under this section does not terminate the
licenses of parties who have received copies or rights from you under
this License.  If your rights have been terminated and not permanently
reinstated, you do not qualify to receive new licenses for the same
material under section 10.

  9. Acceptance Not Required for Having Copies.

  You are not required to accept this License in order to receive or
run a copy of the Program.  Ancillary propagation of a covered work
occurring solely as a consequence of using peer-to-peer transmission
to receive a copy likewise does not require acceptance.  However,
nothing other than this License grants you permission to propagate or
modify any covered work.  These actions infringe copyright if you do
not accept this License.  Therefore, by modifying or propagating a
covered work, you indicate your acceptance of this License to do so.

  10. Automatic Licensing of Downstream Recipients.

  Each time you convey a covered work, the recipient automatically
receives a license from the original licensors, to run, modify and
propagate that work, subject to this License.  You are not responsible
for enforcing compliance by third parties with this License.

  An "entity transaction" is a transaction transferring control of an
organization, or substantially all assets of one, or subdividing an
organization, or merging organizations.  If propagation of a covered
work results from an entity transaction, each party to that
transaction who receives a copy of the work also receives whatever
licenses to the work the party's predecessor in interest had or could
give under the previous paragraph, plus a right to possession of the
Corresponding Source of the work from the predecessor in interest, if
the predecessor has it or can get it with reasonable efforts.

  You may not impose any further restrictions on the exercise of the
rights granted or affirmed under this License.  For example, you may
not impose a license fee, royalty, or other charge for exercise of
rights granted under this License, and you may not initiate litigation
(including a cross-claim or counterclaim in a lawsuit) alleging that
any patent claim is infringed by making, using, selling, offering for
sale, or importing the Program or any portion of it.

  11. Patents.

  A "contributor" is a copyright holder who authorizes use under this
License of the Program or a work on which the Program is based.  The
work thus licensed is called the contributor's "contributor version".

  A contributor's "essential patent claims" are all patent claims
owned or controlled by the contributor, whether already acquired or
hereafter acquired, that would be infringed by some manner, permitted
by this License, of making, using, or selling its contributor version,
but do not include claims that would be infringed only as a
consequence of further modification of the contributor version.  For
purposes of this definition, "control" includes the right to grant
patent sublicenses in a manner consistent with the requirements of
this License.

  Each contributor grants you a non-exclusive, worldwide, royalty-free
patent license under the contributor's essential patent claims, to
make, use, sell, offer for sale, import and otherwise run, modify and
propagate the contents of its contributor version.

  In the following three paragraphs, a "patent license" is any express
agreement or commitment, however denominated, not to enforce a patent
(such as an express permission to practice a patent or covenant not to
sue for patent infringement).  To "grant" such a patent license to a
party means to make such an agreement or commitment not to enforce a
patent against the party.

  If you convey a covered work, knowingly relying on a patent license,
and the Corresponding Source of the work is not available for anyone
to copy, free of charge and under the terms of this License, through a
publicly available network server or other readily accessible means,
then you must either (1) cause the Corresponding Source to be so
available, or (2) arrange to deprive yourself of the benefit of the
patent license for this particular work, or (3) arrange, in a manner
consistent with the requirements of this License, to extend the patent
license to downstream recipients.  "Knowingly relying" means you have
actual knowledge that, but for the patent license, your conveying the
covered work in a country, or your recipient's use of the covered work
in a country, would infringe one or more identifiable patents in that
country that you have reason to believe are valid.

  If, pursuant to or in connection with a single transaction or
arrangement, you convey, or propagate by procuring conveyance of, a
covered work, and grant a patent license to some of the parties
receiving the covered work authorizing them to use, propagate, modify
or convey a specific copy of the covered work, then the patent license
you grant is automatically extended to all recipients of the covered
work and works based on it.

  A patent license is "discriminatory" if it does not include within
the scope of its coverage, prohibits the exercise of, or is
conditioned on the non-exercise of one or more of the rights that are
specifically granted under this License.  You may not convey a covered
work if you are a party to an arrangement with a third party that is
in the business of distributing software, under which you make payment
to the third party based on the extent of your activity of conveying
the work, and under which the third party grants, to any of the
parties who would receive the covered work from you, a discriminatory
patent license (a) in connection with copies of the covered work
conveyed by you (or copies made from those copies), or (b) primarily
for and in connection with specific products or compilations that
contain the covered work, unless you entered into that arrangement,
or that patent license was granted, prior to 28 March 2007.

  Nothing in this License shall be construed as excluding or limiting
any implied license or other defenses to infringement that may
otherwise be available to you under applicable patent law.

  12. No Surrender of Others' Freedom.

  If conditions are imposed on you (whether by court order, agreement or
otherwise) that contradict the conditions of this License, they do not
excuse you from the conditions of this License.  If you cannot convey a
covered work so as to satisfy simultaneously your obligations under this
License and any other pertinent obligations, then as a consequence you may
not convey it at all.  For example, if you agree to terms that obligate you
to collect a royalty for further conveying from those to whom you convey
the Program, the only way you could satisfy both those terms and this
License would be to refrain entirely from conveying the Program.

  13. Use with the GNU Affero General Public License.

  Notwithstanding any other provision of this License, you have
permission to link or combine any covered work with a work licensed
under version 3 of the GNU Affero General Public License into a single
combined work, and to convey the resulting work.  The terms of this
License will continue to apply to the part which is the covered work,
but the special requirements of the GNU Affero General Public License,
section 13, concerning interaction through a network will apply to the
combination as such.

  14. Revised Versions of this License.

  The Free Software Foundation may publish revised and/or new versions of
the GNU General Public License from time to time.  Such new versions will
be similar in spirit to the present version, but may differ in detail to
address new problems or concerns.

  Each version is given a distinguishing version number.  If the
Program specifies that a certain numbered version of the GNU General
Public License "or any later version" applies to it, you have the
option of following the terms and conditions either of that numbered
version or of any later version published by the Free Software
Foundation.  If the Program does not specify a version number of the
GNU General Public License, you may choose any version ever published
by the Free Software Foundation.

  If the Program specifies that a proxy can decide which future
versions of the GNU General Public License can be used, that proxy's
public statement of acceptance of a version permanently authorizes you
to choose that version for the Program.

  Later license versions may give you additional or different
permissions.  However, no additional obligations are imposed on any
author or copyright holder as a result of your choosing to follow a
later version.

  15. Disclaimer of Warranty.

  THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY
APPLICABLE LAW.  EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT
HOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM "AS IS" WITHOUT WARRANTY
OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,
THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
PURPOSE.  THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM
IS WITH YOU.  SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF
ALL NECESSARY SERVICING, REPAIR OR CORRECTION.

  16. Limitation of Liability.

  IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING
WILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MODIFIES AND/OR CONVEYS
THE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY
GENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE
USE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF
DATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD
PARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS),
EVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF
SUCH DAMAGES.

  17. Interpretation of Sections 15 and 16.

  If the disclaimer of warranty and limitation of liability provided
above cannot be given local legal effect according to their terms,
reviewing courts shall apply local law that most closely approximates
an absolute waiver of all civil liability in connection with the
Program, unless a warranty or assumption of liability accompanies a
copy of the Program in return for a fee.

                     END OF TERMS AND CONDITIONS

            How to Apply These Terms to Your New Programs

  If you develop a new program, and you want it to be of the greatest
possible use to the public, the best way to achieve this is to make it
free software which everyone can redistribute and change under these terms.

  To do so, attach the following notices to the program.  It is safest
to attach them to the start of each source file to most effectively
state the exclusion of warranty; and each file should have at least
the "copyright" line and a pointer to where the full notice is found.

    <one line to give the program's name and a brief idea of what it does.>
    Copyright (C) <year>  <name of author>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.

Also add information on how to contact you by electronic and paper mail.

  If the program does terminal interaction, make it output a short
notice like this when it starts in an interactive mode:

    <program>  Copyright (C) <year>  <name of author>
    This program comes with ABSOLUTELY NO WARRANTY; for details type `show w'.
    This is free software, and you are welcome to redistribute it
    under certain conditions; type `show c' for details.

The hypothetical commands `show w' and `show c' should show the appropriate
parts of the General Public License.  Of course, your program's commands
might be different; for a GUI interface, you would use an "about box".

  You should also get your employer (if you work as a programmer) or school,
if any, to sign a "copyright disclaimer" for the program, if necessary.
For more information on this, and how to apply and follow the GNU GPL, see
<https://www.gnu.org/licenses/>.

  The GNU General Public License does not permit incorporating your program
into proprietary programs.  If your program is a subroutine library, you
may consider it more useful to permit linking proprietary applications with
the library.  If this is what you want to do, use the GNU Lesser General
Public License instead of this License.  But first, please read
<https://www.gnu.org/licenses/why-not-lgpl.html>.
```

## File: README.md
```markdown
# slippery-noodle
```
