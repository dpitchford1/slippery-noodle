<script lang="ts">
  // Dashboard component will go here
</script>

<svelte:head>
  <title>Dashboard | Slippery Noodle</title>
</svelte:head>

<section>
  <h2>Dashboard</h2>
  <div class="dashboard-grid">
    <div class="widget">
      <h3>Welcome</h3>
      <p>This is your personal dashboard. Add widgets to customize your experience.</p>
    </div>
    <div class="widget">
      <h3>Getting Started</h3>
      <p>Configure your dashboard by adding new widgets and arranging them as you prefer.</p>
    </div>
  </div>
</section>

<style lang="scss">
  .dashboard-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: var(--spacing-md);
    margin-top: var(--spacing-md);
  }
  
  .widget {
    background-color: #f9f9f9;
    border-radius: var(--border-radius);
    padding: var(--spacing-md);
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    
    h3 {
      margin-top: 0;
      border-bottom: 1px solid #eee;
      padding-bottom: var(--spacing-xs);
      margin-bottom: var(--spacing-sm);
    }
  }
</style>
