// Simple script to extract inline.css and inject into app.html
const fs = require('fs');
const path = require('path');

// Paths
const inlineCssPath = path.join(__dirname, '../build/inline.css');
const appHtmlPath = path.join(__dirname, '../src/app.html');
const outputAppHtmlPath = path.join(__dirname, '../build/app.html');

function inlineCss() {
  try {
    // Read the compiled CSS file
    const css = fs.readFileSync(inlineCssPath, 'utf8');
    
    // Read the app.html template
    const appHtml = fs.readFileSync(appHtmlPath, 'utf8');
    
    // Insert the CSS into the head
    const inlined = appHtml.replace(
      '</head>',
      `<style>${css}</style></head>`
    );
    
    // Write the modified HTML
    fs.writeFileSync(outputAppHtmlPath, inlined);
    
    console.log('✅ Critical CSS inlined successfully');
  } catch (error) {
    console.error('❌ Error inlining CSS:', error);
  }
}

inlineCss();