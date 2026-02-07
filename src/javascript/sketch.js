/***********************
Created by Jonas Kjeldmand Jensen February 2026
Emergent Loops explores the intersection of polar and cartesian noise functions
to generate infinite looping patterns that emerge from mathematical chaos.
The piece uses layered simplex noise in both coordinate systems, creating
organic striations that pulse and evolve through time while maintaining
perfect circular continuity.
***********************/

import { Renderer, Uniform, Triangle, Program, Mesh, Vec2 } from "https://esm.sh/wtc-gl";

console.clear();

const dpr = Math.min(window.devicePixelRatio, 2);
const dimensions = new Vec2(0,0);
let playing = true;

const uniforms = {
  u_time : new Uniform({ name: 'time', value: 0, kind: 'float' }),
  u_resolution : new Uniform({ name: 'resolution', value: dimensions.array, kind: 'float_vec2' }),
  u_frame: new Uniform({ name: 'frame', value: 0, kind: 'float' })
};

const renderer = new Renderer({ dpr }), 
      { gl, gl: { canvas } } = renderer;
document.body.appendChild(canvas);
gl.clearColor(1,1,1,1);

const resize = (e) => {
  dimensions.reset(window.innerWidth, window.innerHeight);
  uniforms.u_resolution.value = dimensions.scaleNew(dpr).array;
  renderer.dimensions = dimensions;
};
window.addEventListener('resize', resize);
resize();

const geometry = new Triangle(gl);
const program = new Program(gl, {
  vertex: document.getElementById('vertex').innerText,
  fragment: document.getElementById('fragment').innerText,
  uniforms
});
const mesh = new Mesh(gl, { geometry, program });

let lastTime = performance.now(), rafID;
function render(t) {
  const diff = t - lastTime;
  lastTime = t;
  
  if(playing) {
    rafID = requestAnimationFrame(render);
  }

  uniforms.u_time.value += diff * 0.00005;
  uniforms.u_frame.value += 1;

  renderer.render({ scene: mesh });
}
rafID = requestAnimationFrame(render);