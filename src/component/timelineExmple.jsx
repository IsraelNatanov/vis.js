import React, { useEffect } from 'react';
import { Timeline , DataSet } from 'vis-timeline/standalone';

const TimelineComponent = () => {
  useEffect(() => {
    // Data for the timeline (you can replace this with your own data)
    const items = new DataSet([
      { id: 1, content: 'Task 1', start: '2023-01-01', end: '2023-01-05' },
      { id: 2, content: 'Task 2', start: '2023-01-03', end: '2023-01-10' },
      // Add more items as needed
    ]);

    // Configuration options for the timeline
    const options = {
      height: '300px',
      // Add more options as needed
    };

    // Create a timeline instance
    const container = document.getElementById('vis-timeline');
    const timeline = new Timeline(container, items, options);

    return () => {
      timeline.destroy(); // Clean up the timeline when component unmounts
    };
  }, []);

  return <div id="vis-timeline" />;
};

export default TimelineComponent;
