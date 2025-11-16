# 3D Interactive Globe with Country Information

A beautiful 3D interactive globe built with Three.js that displays country names, capitals, and allows users to explore states/provinces of different countries.

## Features

- 🌍 **3D Interactive Globe**: Realistic Earth with textures, clouds, and smooth rotation
- 🏷️ **Country Labels**: Country names positioned accurately on the globe
- 🖱️ **Click Interaction**: Click on country names to view detailed information
- 🔍 **Search Functionality**: Search countries by name or capital
- 📊 **States/Provinces**: Complete lists of states and provinces for each country
- 📱 **Responsive Design**: Works on desktop and mobile devices
- 🎨 **Modern UI**: Beautiful dark theme with glassmorphism effects

## File Structure

```
├── index.html          # Main globe page
├── states.html         # States/provinces display page
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## How to Use

1. **Open the Globe**: Open `index.html` in your web browser
2. **Explore Countries**: 
   - Country names are displayed on the globe
   - Use mouse to rotate and zoom the globe
   - Country labels rotate with the globe
3. **Click Countries**: Click on any country name to automatically redirect to its states page
4. **Search**: Use the search box to find countries quickly
5. **View States**: The states page shows all states/provinces for the selected country

## Countries Included

- **India** - 36 states and union territories
- **United States** - 50 states
- **China** - 31 provinces/regions
- **Brazil** - 27 states
- **Russia** - 85 federal subjects
- **Canada** - 13 provinces/territories
- **Australia** - 8 states/territories
- **Germany** - 16 states
- **France** - 13 regions
- **Japan** - 47 prefectures

## Controls

- **Rotation Speed**: Adjust automatic rotation speed
- **Zoom Level**: Control camera distance
- **Auto Rotate**: Toggle automatic rotation
- **Show Clouds**: Toggle cloud layer visibility
- **Show Labels**: Toggle country name labels

## Technical Details

- **Three.js**: 3D graphics library
- **Raycasting**: Precise click detection
- **Session Storage**: Data persistence between pages
- **Responsive Design**: Mobile-friendly interface
- **Modern CSS**: Flexbox, Grid, and animations

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Getting Started

1. Download all files to a folder
2. Open `index.html` in a web browser
3. Start exploring the world!

## Features in Detail

### Country Positioning
- Countries are positioned using real latitude/longitude coordinates
- Labels stay on their respective countries during rotation
- Smooth rotation synchronization with the globe

### Interactive Navigation
- Click any country name to view its states/provinces
- Automatic page redirection with data persistence
- Back button to return to the globe

### Search Functionality
- Real-time search as you type
- Search by country name or capital
- Instant results with click-to-navigate

### Responsive Design
- Works on all screen sizes
- Touch-friendly controls
- Optimized for mobile devices

Enjoy exploring the world! 🌍✨
