import React from 'react';
import { Background } from 'reactflow';
import 'reactflow/dist/style.css';

export default function MainContent() {
  return (
    <div style={{ height: '100vh', width: '100vw', position: 'relative' }}>
      {/* React Flow Background */}
      <div style={{ height: '100%', width: '100%', position: 'absolute', top: 0 }}>
        <Background variant="dots" gap={16} size={1} />
      </div>
    </div>
  );
}
