# Emergent Loops

A generative visual piece exploring the emergent patterns that arise when polar and cartesian noise functions intersect. The work investigates how mathematical chaos can produce coherent, infinitely looping visual structures through careful layering of simplex noise across different coordinate systems.

## About

This piece uses WebGL fragment shaders to generate real-time animated patterns. By mapping 3D simplex noise onto both polar and cartesian coordinates simultaneously, the system creates organic striations that maintain perfect circular continuity while evolving through time. The result feels alive and rhythmic, like watching cells divide or waves propagate, but emerges purely from mathematical operations without any predefined forms.

The visual language references natural phenomena like wood grain, water ripples, and interference patterns, but exists in its own synthetic space. Each viewing is unique as the time-based evolution creates new formations, though the underlying algorithmic structure ensures the patterns always loop seamlessly.

## Technical Details

Built with WebGL 2.0 using the wtc-gl library for rendering pipeline management. The core technique involves sampling 3D simplex noise at positions determined by both polar coordinates (radius and angle) and screen-space cartesian coordinates. To achieve perfect circular looping, the angular component is mapped onto a circle using sine and cosine, allowing the noise to wrap continuously around the center point.

The color separation effect comes from slightly offset phase sampling of the same underlying noise field, creating chromatic aberration-like fringes that enhance the sense of depth and movement.

## Running Locally

Clone the repository and serve the files using any local server. The project uses ES modules loaded from CDN, so it needs to run over HTTP rather than opening the HTML file directly.
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000` in your browser.

## Browser Compatibility

Requires WebGL 2.0 support. Works in modern versions of Chrome, Firefox, Safari, and Edge. Performance is best on devices with dedicated GPUs.

## Credits

Created by Jonas Kjeldmand Jensen, February 2026

Simplex noise implementation by Ian McEwan and Stefan Gustavson  
Rendering via wtc-gl library

Original sketch inspiration from CodePen experiments in procedural generation

## License

MIT License - see LICENSE file for details