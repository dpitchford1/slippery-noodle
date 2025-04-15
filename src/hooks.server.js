import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get directory path for ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  // Get the response from the route
  const response = await resolve(event, {
    transformPageChunk: ({ html }) => {
      // Try to read critical CSS
      let criticalCss = '';
      try {
        // In both dev and production, critical.css should be in the static directory
        // which gets copied to build/client in production
        const cssPath = path.join(process.cwd(), 'static/critical.css');
        
        if (fs.existsSync(cssPath)) {
          criticalCss = fs.readFileSync(cssPath, 'utf-8');
          console.log('✅ Critical CSS successfully loaded from', cssPath);
        } else {
          console.warn(`Critical CSS file not found at: ${cssPath}`);
          // Fallback to embedded critical styles
          criticalCss = `
            html, body { margin: 0; padding: 0; }
            body { font-family: system-ui, sans-serif; }
            .container { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
            header { background-color: #3b82f6; color: white; padding: 1rem 0; }
          `;
        }
      } catch (error) {
        console.error('Could not read critical CSS:', error);
        // Continue without critical CSS
      }
      
      // Replace the placeholder with actual CSS content
      return html.replace('%sveltekit.criticalCss%', criticalCss);
    }
  });
  
  return response;
}