// Simple script to extract inline.css and inject into index.html
const fs = require('fs');
const path = require('path');

// Paths
const inlineCssPath = path.join(__dirname, '../build/inline.css');
const appHtmlPath = path.join(__dirname, '../build/index.html'); // Updated to match build output

function inlineCss() {
  try {
    // Read the compiled CSS file
    const css = fs.readFileSync(inlineCssPath, 'utf8');
    
    // Read the index.html template
    const appHtml = fs.readFileSync(appHtmlPath, 'utf8');
    
    // Insert the CSS into the head where the placeholder is
    const inlined = appHtml.replace(
      '<!-- CRITICAL_CSS_PLACEHOLDER -->',
      `<style id="critical-css">${css}</style>`
    );
    
    // Write the modified HTML
    fs.writeFileSync(appHtmlPath, inlined);
    
    console.log('✅ Critical CSS inlined successfully');
  } catch (error) {
    console.error('❌ Error inlining CSS:', error);
  }
}

inlineCss();