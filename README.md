# Emergent Loops

<div align="center">
  <img src="src/assets/Emergent_Loops_Demonstration.gif" alt="Emergent Loops animation demonstration" width="80%">
  <p><em>Real-time generative animation showing the emergent patterns created by intersecting polar and cartesian noise functions</em></p>
</div>

## What This Is

Emergent Loops explores what happens when you let different mathematical spaces collide. The piece generates infinite, organically evolving patterns by sampling 3D simplex noise through two coordinate systems simultaneously. One reading happens in polar space (radius and angle from a center point), while the other maps the same noise field through standard cartesian coordinates. The interference between these two perspectives creates striations that feel biological but emerge purely from the math.

The visual output references wood grain, rippling water, and cellular structures, but exists in its own territory. Each moment is unique as the patterns shift through time, yet the underlying structure ensures everything loops seamlessly. There are no predefined forms here. The coherence you see arises from the algorithm itself.

## How It Works

The core technique involves a careful dance between coordinate systems. Standard fragment shaders typically sample noise using screen-space x and y coordinates. This piece adds polar coordinates to the mix, calculating radius and angle from the canvas center for each pixel. But here's where it gets interesting.

Polar coordinates have a problem when you want continuous loops. The angular component wraps at 2π, creating a discontinuity. To solve this, the angle gets mapped onto a circle in a higher dimensional space using sine and cosine. Instead of sampling noise at angle θ directly, the shader samples at (cos(θ), sin(θ)). This transforms the angular wraparound into smooth circular motion in the noise field, guaranteeing perfect continuity.

The actual noise calculation happens in 3D simplex space. Simplex noise offers smooth gradients with less directional bias than Perlin noise, making it ideal for organic patterns. By combining polar-derived positions with cartesian offsets and a time component, each pixel queries a unique point in this three-dimensional field.

Color separation emerges from phase-offset sampling. The red, green, and blue channels read from slightly different positions in the same noise field, creating chromatic fringes reminiscent of optical aberration. This adds depth and reinforces the sense that you're looking at something with internal structure rather than a flat pattern.

WebGL 2.0 handles all computation on the GPU through fragment shaders, enabling real-time performance. The wtc-gl library manages the rendering pipeline, but the visual logic lives entirely in the shader code.

## Customization Possibilities

The noise sampling approach opens several routes for variation. Adjusting the frequency of the polar versus cartesian components shifts the balance between circular and linear patterns. Higher polar frequency creates tighter concentric structures, while emphasizing cartesian sampling produces more directional flow.

The phase offset between color channels controls the chromatic separation. Increasing these offsets creates more pronounced color fringes, while reducing them toward zero collapses the palette into monochrome. You could also sample entirely different noise octaves for each channel, leading to patterns where color itself becomes an independent variable rather than a displacement artifact.

Time scaling determines evolution speed. The current implementation uses a steady progression, but modulating time with additional functions (perhaps another noise layer or oscillation) would create rhythmic variations in the animation tempo. Alternatively, freezing time while allowing mouse interaction to scrub through the temporal dimension transforms the piece into an explorable space rather than a passive loop.

Substituting different noise algorithms would fundamentally alter the character. Worley noise would shift the aesthetic toward cellular or crystalline structures. Fractional Brownian motion through octave layering could add fractal detail at multiple scales. Domain warping, where noise values distort the sampling coordinates for subsequent noise calls, introduces controlled chaos that can produce fluid or turbulent effects.

## Running Locally

The project uses ES modules loaded from CDN, so you need to serve it over HTTP.

```bash
python -m http.server 8000
```

Navigate to `http://localhost:8000` in your browser. Requires WebGL 2.0 support (available in modern Chrome, Firefox, Safari, and Edge).

To clone this repository: `git clone https://github.com/yourusername/emergent-loops.git`

## Technical Stack

- WebGL 2.0 fragment shaders
- wtc-gl rendering library
- 3D simplex noise (Ian McEwan and Stefan Gustavson implementation)
- ES6 modules

## Credits

Created by Jonas Kjeldmand Jensen, February 2026

Simplex noise implementation by Ian McEwan and Stefan Gustavson

## License

MIT License