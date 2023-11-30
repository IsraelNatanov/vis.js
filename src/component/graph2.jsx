import React, { useEffect, useRef } from 'react';
import { DataSet, Graph2d } from 'vis-timeline/standalone'; // Adjusted import path

const TimeGraph = () => {
  const container = useRef(null);
  let graph2d = null;

  useEffect(() => {
    const items = new DataSet([
      { x: '2023-01-01', y: 10 },
      { x: '2023-02-01', y: 25 },
      { x: '2023-03-01', y: 30 },
      // Add more data points as needed
    ]);

    const options = {
      start: '2023-01-01',
      end: '2023-12-31',
    };

    if (container.current) {
      graph2d = new Graph2d(container.current, items, options);
    }

    return () => {
      if (graph2d !== null) {
        graph2d.destroy();
        graph2d = null;
      }
    };
  }, []);

  return <div ref={container} style={{ width: '800px', height: '400px' }} />;
};

export default TimeGraph;
