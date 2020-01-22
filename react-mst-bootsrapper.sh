#!/bin/bash

# Get app name
echo "Name for app: "
read appName
echo ""
echo "Creating new react app as $appName..."

# Create app and install dependencies
npx create-react-app "$appName"
cd "$appName"
npm install mobx mobx-react mobx-state-tree
npm install --save mobx-state-tree-router

# Go to src and create file architecture
cd src
mkdir models components containers pages

# Move app to containers
mv App.js containers
mv App.css containers
mv logo.svg containers

# Create components file architecture
cd components
mkdir mobile desktop
cd mobile
mkdir home
cd ../desktop
mkdir home

# Go back to src
cd ../../

# Copy files to create app
cat ../../files/App.js > containers/App.js
cat ../../files/Desktop.js > containers/Desktop.js
cat ../../files/DesktopHome.js > components/desktop/home/DesktopHome.js
cat ../../files/GlobalStore.js > models/GlobalStore.js
cat ../../files/Home.js > pages/Home.js
cat ../../files/index.js > index.js
cat ../../files/indexStore.js > models/index.js
cat ../../files/Mobile.js > containers/Mobile.js
cat ../../files/MobileHome.js > components/mobile/home/MobileHome.js
cat ../../files/ViewStore.js > models/ViewStore.js
