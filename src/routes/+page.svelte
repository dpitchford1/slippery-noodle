<script lang="ts">
  // Dashboard component will go here
</script>

<svelte:head>
  <title>Dashboard | Slippery Noodle</title>
</svelte:head>

<div class="container">
  <h1>Dashboard</h1>
  
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
</div>

<style>
  .container {
    padding: 2rem 1rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .dashboard-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
  }
  
  .widget {
    background-color: #f9f9f9;
    border-radius: var(--border-radius, 0.25rem);
    padding: 1.5rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  }
  
  .widget h3 {
    margin-top: 0;
    border-bottom: 1px solid #eee;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
  }
</style>
