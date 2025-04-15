<script lang="ts">
  // Import global styles (non-critical)
  import '$styles/global.scss';
</script>

<div class="app">
  <header>
    <div class="container">
      <h1>Slippery Noodle</h1>
      <nav>
        <ul>
          <li><a href="/">Dashboard</a></li>
          <li><a href="/settings">Settings</a></li>
        </ul>
      </nav>
    </div>
  </header>
  
  <main>
    <div class="container">
      <slot />
    </div>
  </main>
  
  <footer>
    <div class="container">
      <p>© {new Date().getFullYear()} Slippery Noodle</p>
    </div>
  </footer>
</div>

<style lang="scss">
  header {
    background-color: var(--color-primary);
    color: white;
    padding: var(--spacing-md) 0;
    
    h1 {
      margin: 0;
      font-size: 1.5rem;
    }
    
    nav {
      ul {
        display: flex;
        gap: var(--spacing-md);
        list-style: none;
        padding: 0;
        margin: var(--spacing-sm) 0 0;
        
        a {
          color: white;
          
          &:hover {
            color: rgba(255, 255, 255, 0.8);
          }
        }
      }
    }
  }
  
  footer {
    margin-top: var(--spacing-xl);
    padding: var(--spacing-md) 0;
    border-top: 1px solid #eee;
    color: #666;
  }
</style>