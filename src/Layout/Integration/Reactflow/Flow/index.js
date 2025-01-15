import React, { useState, useCallback } from "react";
import {
  ReactFlow,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  useReactFlow,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import MongoDbConnectorNode from "../Custom_Nodes/Connector_Nodes/MongoDbconnectorNode";
import TryCatchNode from "../Custom_Nodes/Logic_Nodes/TryCatchNode/TryCatchNode";
import TryTargetNode from "../Custom_Nodes/Logic_Nodes/TryCatchNode/TryTargetNode";
import CatchTargetNode from "../Custom_Nodes/Logic_Nodes/TryCatchNode/CatchTargetNode";
import StartNode from "../Custom_Nodes/Logic_Nodes/StartNode";
import { FlowProvider } from "@/context/FlowContext";
import SqlDbConnectorNode from "../Custom_Nodes/Connector_Nodes/SqlDbConnectorNode";

const nodeTypes = {
  MongoDbConnectorNode: MongoDbConnectorNode,
  TryCatchNode: TryCatchNode,
  TryTargetNode: TryTargetNode,
  CatchTargetNode: CatchTargetNode,
  StartNode: StartNode,
  SqlDbConnectorNode: SqlDbConnectorNode,
  // AppwriteConnectorNode: AppwriteConnectorNode,
};

let id = 0;
const getId = () => `node_${id++}`;

const Flow = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const { screenToFlowPosition } = useReactFlow();

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
        },
      };

      if (type === "TryCatchNode") {
        // Add TryCatchNode with predefined edges
        const tryTargetId = getId();
        const catchTargetId = getId();

        const TryTargetNode = {
          id: tryTargetId,
          type: "TryTargetNode",
          position: { x: position.x + 250, y: position.y - 40 },
          data: {
            id: tryTargetId,
            label: "Try",
          },
          sourcePosition: "right",
          targetPosition: "left",
        };

        const CatchTargetNode = {
          id: catchTargetId,
          type: "CatchTargetNode",
          position: { x: position.x + 250, y: position.y + 40 },
          data: {
            id: catchTargetId,
            label: "Catch",
          },
          sourcePosition: "right",
          targetPosition: "left",
        };

        const newEdges = [
          {
            id: `edge-${newNodeId}-try`,
            source: newNodeId,
            sourceHandle: "try",
            target: tryTargetId,
            type: "smoothstep",
            // animated: true,
          },
          {
            id: `edge-${newNodeId}-catch`,
            source: newNodeId,
            sourceHandle: "catch",
            target: catchTargetId,
            type: "smoothstep",
            // animated: true,
          },
        ];

        // Update nodes and edges state
        setNodes((nds) => nds.concat(newNode, TryTargetNode, CatchTargetNode));
        setEdges((eds) => eds.concat(newEdges));
      } else {
        // For other nodes, add normally
        setNodes((nds) => nds.concat(newNode));
      }
    },
    [screenToFlowPosition]
  );

  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  return (
    <FlowProvider>
      <div style={{ height: "100%" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDrop={onDrop}
          onDragOver={onDragOver}
          nodeTypes={nodeTypes}
        >
          <Background />
        </ReactFlow>
      </div>
    </FlowProvider>
  );
};

export default Flow;
