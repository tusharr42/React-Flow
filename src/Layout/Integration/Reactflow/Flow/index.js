import React, { useState, useCallback } from 'react';
import {
  ReactFlow,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  useReactFlow,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import MongoDbConnectorNode from "../Custom_Nodes/Connector_Nodes/MongoDbconnectorNode"

const nodeTypes = {
  MongoDbConnectorNode: MongoDbConnectorNode,
};

const Flow = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const { screenToFlowPosition, getViewport, setViewport } = useReactFlow();

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
      const type = event.dataTransfer.getData("application/reactflow");

      if (!type) return;

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNodeId = getId();
      const newNode = {
        id: newNodeId,
        type,
        position,
        data: {
          id: newNodeId,
          label: `${type}`,
          value: "",
        },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [screenToFlowPosition, setNodes]
  );

  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  return (
    <div style={{ height: '100%' }}>
      <ReactFlow
        nodes={nodes.map((node) => ({
          ...node,
          data: {
            ...node.data,
          },
        }))}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
      </ReactFlow>
    </div>
  );
}

export default Flow;
