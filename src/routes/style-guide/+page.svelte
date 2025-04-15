<script lang="ts">
  import Button from '$lib/components/base/Button';
  // Style Guide page
</script>

<svelte:head>
  <title>Style Guide | Slippery Noodle</title>
</svelte:head>

<div class="container">
  <h1>Style Guide</h1>
  <p>This page shows all the components and styles available in the application.</p>

  <section>
    <h2>Typography</h2>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
    <p>This is a paragraph of text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p><a href="#">This is a link</a></p>
  </section>
  
  <section class="component-section">
    <h2 id="buttons">Buttons</h2>
    
    <div class="component-demo">
      <h3>Button Variants</h3>
      <div class="demo-row">
        <Button>Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="text">Text Button</Button>
      </div>
      
      <h3>Button Sizes</h3>
      <div class="demo-row">
        <Button size="sm">Small Button</Button>
        <Button>Medium Button</Button>
        <Button size="lg">Large Button</Button>
      </div>
      
      <h3>Icon Button</h3>
      <div class="demo-row">
        <Button icon>+</Button>
      </div>
      
      <h3>Disabled State</h3>
      <div class="demo-row">
        <Button disabled>Disabled Primary</Button>
        <Button variant="secondary" disabled>Disabled Secondary</Button>
      </div>
    </div>
  </section>
</div>

<style>
  .container {
    padding: 2rem 1rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  section {
    margin-bottom: 2rem;
    padding: 1rem;
    border: 1px solid var(--color-border);
    border-radius: var(--border-radius);
  }
  
  .component-section {
    margin-top: 4rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--color-border, #e5e7eb);
  }
  
  .component-demo {
    margin-top: 2rem;
  }
  
  h3 {
    margin: 1.5rem 0 0.75rem;
  }
  
  .demo-row {
    display: flex;
    gap: 1rem;
    margin: 1rem 0 2rem;
    align-items: center;
  }
</style>