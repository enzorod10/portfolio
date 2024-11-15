import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import React from 'react';

const Scene = () => {
  return (
    <Canvas style={{position: 'absolute'}}>
      {/* Background effect, like a star field */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
    </Canvas>
  );
};

export default Scene;
