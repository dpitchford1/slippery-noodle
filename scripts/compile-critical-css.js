import * as sass from 'sass'; // Fixed deprecated import
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get directory path for ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Compile critical CSS
function compileCriticalCss() {
  try {
    console.log('Compiling critical CSS...');
    
    // Copy critical CSS to both locations for dev and production
    const result = sass.compile(path.join(__dirname, '../src/styles/inline.scss'), {
      style: 'compressed',
      loadPaths: [path.join(__dirname, '../src/styles')]
    });
    
    // Ensure static directory exists
    const staticDir = path.join(__dirname, '../static');
    if (!fs.existsSync(staticDir)) {
      fs.mkdirSync(staticDir, { recursive: true });
    }
    
    // Write CSS to static directory
    fs.writeFileSync(
      path.join(staticDir, 'critical.css'),
      result.css
    );
    
    console.log('✅ Critical CSS compiled successfully');
  } catch (error) {
    console.error('❌ Error compiling critical CSS:', error);
    process.exit(1);
  }
}

compileCriticalCss();