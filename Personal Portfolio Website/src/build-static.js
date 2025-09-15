#!/usr/bin/env node

/**
 * Build script to generate static HTML/CSS/JS files for deployment
 * Run with: node build-static.js
 */

import { build } from 'vite';
import { resolve } from 'path';
import fs from 'fs';
import path from 'path';

console.log('🚀 Building static files for deployment...\n');

try {
  // Build the project
  await build({
    // Ensure we're building for production
    mode: 'production',
    
    // Build configuration
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      
      // Generate source maps for debugging
      sourcemap: false,
      
      // Optimize for size and performance
      minify: 'esbuild',
      
      // Split chunks for better caching
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            ui: ['lucide-react']
          },
          // Clean filenames
          entryFileNames: 'assets/[name]-[hash].js',
          chunkFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash].[ext]'
        }
      },
      
      // Ensure compatibility
      target: 'es2015'
    },
    
    // Resolve configuration
    resolve: {
      alias: {
        '@': resolve(process.cwd())
      }
    }
  });

  console.log('✅ Build completed successfully!\n');
  
  // Check if dist folder exists and show contents
  const distPath = resolve(process.cwd(), 'dist');
  if (fs.existsSync(distPath)) {
    console.log('📁 Generated files in /dist folder:');
    
    function listFiles(dir, prefix = '') {
      const files = fs.readdirSync(dir);
      files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
          console.log(`${prefix}📁 ${file}/`);
          listFiles(filePath, prefix + '  ');
        } else {
          const size = (stat.size / 1024).toFixed(1);
          console.log(`${prefix}📄 ${file} (${size}KB)`);
        }
      });
    }
    
    listFiles(distPath);
    
    console.log('\n🎉 Your portfolio is ready for deployment!');
    console.log('\n📋 Deployment Instructions:');
    console.log('1. Upload the entire /dist folder contents to your hosting service');
    console.log('2. Make sure index.html is in the root of your hosting directory');
    console.log('\n🌐 Recommended hosting services:');
    console.log('• Netlify: Drag & drop the /dist folder to https://app.netlify.com/drop');
    console.log('• Vercel: Upload the /dist folder at https://vercel.com/new');
    console.log('• GitHub Pages: Upload to your repository and enable Pages');
    console.log('• Surge.sh: Run "npx surge dist" for instant deployment');
    console.log('• Any web hosting service (upload via FTP/cPanel)');
    
  } else {
    console.log('❌ Build folder not found. Something went wrong.');
  }

} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}