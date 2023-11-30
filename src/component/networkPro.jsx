import React, { useEffect, useRef } from 'react';
import { DataSet, Network } from 'vis-network/standalone'; // Import necessary modules from vis-network

const VisNetwork = () => {
  const container = useRef(null);
  let network = null;

  useEffect(() => {
    const nodes = new DataSet([
      { id: 1, label: 'Node 1' },
      { id: 2, label: 'Node 2' },
      { id: 3, label: 'Node 3' },
    ]);
    const edges = new DataSet([
      { from: 1, to: 2 },
      { from: 2, to: 3 },
    ]);

    const options = {
      nodes: {
        shape: 'circle',
      },
    };

    const data = {
      nodes: nodes,
      edges: edges,
    };
    if (container.current) {
      network = new Network(container.current, data, options);
    }

    return () => {
      if (network !== null) {
        network.destroy();
        network = null;
      }
    };
  }, []);

  return <div ref={container} style={{ width: '600px', height: '400px' }} />;
};

export default VisNetwork;
