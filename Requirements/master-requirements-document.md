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