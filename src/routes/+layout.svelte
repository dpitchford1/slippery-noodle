<script lang="ts">
    // Import styles in a way that allows them to be extracted
    import '../styles/global.scss';
  </script>
  
  <!-- Remove the conditional external stylesheet reference that's causing the 404 -->
  

<div class="app">
  <header>
    <div class="container">
      <h1>Slippery Noodle</h1>
      <nav>
        <ul>
          <li><a href="/">Dashboard</a></li>
          <li><a href="/style-guide">Style Guide</a></li>
          <li><a href="/settings">Settings</a></li>
        </ul>
      </nav>
    </div>
  </header>
  
  <main>
    <slot />
  </main>
  
  <footer>
    <div class="container">
      <p>© {new Date().getFullYear()} Slippery Noodle</p>
    </div>
  </footer>
</div>

<style>
  /* Component-specific styles here */
</style>