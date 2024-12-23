import React, { useState, useCallback } from 'react';
import {
  ReactFlow,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

function Flow() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      const label = event.dataTransfer.getData('application/reactflow');
      const reactFlowBounds = event.target.getBoundingClientRect();

      const position = {
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      };

      const newNode = {
        id: `${label}-${nodes.length + 1}`,
        type: 'default',
        position,
        data: { label },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [nodes]
  );

  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  return (
    <div style={{ height: '100%' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
        fitView
      >
        <Background />
      </ReactFlow>
    </div>
  );
}

export default Flow;
