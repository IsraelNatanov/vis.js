import React, { useEffect, useRef } from 'react';
import {DataSet, Graph3d} from 'vis-graph3d/standalone';


const Graph3dVis = () => {
    const containerRef = useRef(null);
    const graph3dRef = useRef(null);
  
    useEffect(() => {
      const data = new DataSet([
        { x: 0, y: 0, z: 0 },
        { x: 1, y: 1, z: 1 },
        { x: 2, y: 4, z: 2 },
        { x: 3, y: 9, z: 3 },
        { x: 4, y: 16, z: 4 },
      ]);
  
      const options = {
        width: '100%',
        height: '400px',
        style: 'dot-color',
        showPerspective: true,
        showGrid: true,
        showShadow: false,
        keepAspectRatio: true,
        verticalRatio: 0.5,
      };
  
      if (containerRef.current) {
        graph3dRef.current = new Graph3d(containerRef.current, data, options);
      }
     
  
      return () => {
        if (graph3dRef.current) {
         graph3dRef.current.off();
          graph3dRef.current = null;
        }
      };
    }, []);

  
  
    return <div ref={containerRef} style={{ border: '1px solid lightgray', width: '100%', height: '400px' }} />;
  };
  
  export default Graph3dVis;