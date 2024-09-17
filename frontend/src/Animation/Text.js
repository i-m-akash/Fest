// src/components/Text.js

import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';

// Vertex Shader
const vertexShader = `
  varying vec2 vUv;
  
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// Fragment Shader
const fragmentShader = `
  uniform sampler2D map;
  varying vec2 vUv;
  
  void main() {
    vec4 color = texture2D(map, vUv);
    gl_FragColor = color;
  }
`;

function Text() {
  const meshRef = useRef(null);

  useEffect(() => {
    // Create a canvas and context
    const textCanvas = document.createElement('canvas');
    textCanvas.width = 256;
    textCanvas.height = 256;
    const ctx = textCanvas.getContext('2d');
    ctx.font = '30px Georgia, serif';
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Shooting Star', textCanvas.width / 2, textCanvas.height / 2);

    // Create a texture from the canvas
    const texture = new THREE.CanvasTexture(textCanvas);
    texture.minFilter = THREE.LinearFilter;

    // Update the texture in the shader
    if (meshRef.current) {
      meshRef.current.material.uniforms.map.value = texture;
    }

    // Cleanup on unmount
    return () => {
      texture.dispose();
    };
  }, []);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Example animation: Rotate the mesh
      meshRef.current.rotation.y = clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[200, 60]} />
      <shaderMaterial
        uniforms={{
          map: { value: null },
        }}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
      />
    </mesh>
  );
}

export default Text;
