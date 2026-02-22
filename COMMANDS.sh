#!/bin/bash
# TechVision Website - Command Reference

# ═══════════════════════════════════════════════════════════════════════════
# DEVELOPMENT COMMANDS
# ═══════════════════════════════════════════════════════════════════════════

# Start development server (HMR enabled)
npm run dev

# Run linting
npm run lint

# ═══════════════════════════════════════════════════════════════════════════
# PRODUCTION COMMANDS
# ═══════════════════════════════════════════════════════════════════════════

# Build for production
npm run build

# Preview production build locally
npm run preview

# ═══════════════════════════════════════════════════════════════════════════
# DEPLOYMENT COMMANDS
# ═══════════════════════════════════════════════════════════════════════════

# VERCEL DEPLOYMENT (Recommended)
npm install -g vercel
vercel --prod

# NETLIFY DEPLOYMENT
npm run build
npm install -g netlify-cli
netlify deploy --prod --dir=dist

# AZURE STATIC WEB APPS
az login
az staticwebapp create --name techvision --resource-group myResourceGroup --source . --location "East US"

# AWS AMPLIFY
npm install -g @aws-amplify/cli
amplify init
amplify add hosting
amplify publish

# ═══════════════════════════════════════════════════════════════════════════
# MAINTENANCE COMMANDS
# ═══════════════════════════════════════════════════════════════════════════

# Install dependencies
npm install

# Update all dependencies
npm update

# Check for vulnerabilities
npm audit

# Fix security issues
npm audit fix

# Clear npm cache
npm cache clean --force

# ═══════════════════════════════════════════════════════════════════════════
# TROUBLESHOOTING COMMANDS
# ═══════════════════════════════════════════════════════════════════════════

# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Start dev on different port
npm run dev -- --port 3000

# Clear Vite cache
rm -rf dist

# Reset TypeScript cache
rm -rf .next

# ═══════════════════════════════════════════════════════════════════════════
# GIT COMMANDS
# ═══════════════════════════════════════════════════════════════════════════

# Initialize git repo
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: TechVision website"

# Add remote repository
git remote add origin https://github.com/yourusername/techvision-website.git

# Push to GitHub
git push -u origin main

# ═══════════════════════════════════════════════════════════════════════════
# USEFUL SHORTCUTS
# ═══════════════════════════════════════════════════════════════════════════

# Open website in browser
open http://localhost:5173/

# View directory structure
tree -L 2

# Count lines of code
find src -type f -name "*.tsx" -o -name "*.ts" | xargs wc -l

# ═══════════════════════════════════════════════════════════════════════════
