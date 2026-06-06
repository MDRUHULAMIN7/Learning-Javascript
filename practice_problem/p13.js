// ### Q13. Accordion Component

// Create an Accordion component that only allows one panel to be open at a time.

import React, { useState } from 'react';

function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    {
      title: 'Section 1',
      content: 'This is the content for section 1. Only one panel can be open at a time.',
    },
    {
      title: 'Section 2',
      content: 'This is the content for section 2. Click another panel to close this one.',
    },
    {
      title: 'Section 3',
      content: 'This is the content for section 3. The accordion maintains a single open panel state.',
    },
  ];

  const togglePanel = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const styles = {
    accordion: {
      maxWidth: '500px',
      margin: '20px auto',
    },
    panel: {
      border: '1px solid #ddd',
      borderRadius: '4px',
      marginBottom: '8px',
      overflow: 'hidden',
    },
    header: {
      backgroundColor: '#f5f5f5',
      padding: '12px 16px',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontWeight: 'bold',
      fontSize: '16px',
    },
    icon: {
      fontSize: '18px',
      transition: 'transform 0.2s',
    },
    content: {
      padding: '16px',
      backgroundColor: '#fff',
    },
  };

  return (
    <div style={styles.accordion}>
      {items.map((item, index) => (
        <div key={index} style={styles.panel}>
          <div
            style={styles.header}
            onClick={() => togglePanel(index)}
          >
            {item.title}
            <span style={styles.icon}>
              {openIndex === index ? '−' : '+'}
            </span>
          </div>
          {openIndex === index && (
            <div style={styles.content}>{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;

// explanation : https://app.notion.com/p/Create-an-Accordion-component-that-only-allows-one-panel-to-be-open-at-a-time-377fa15e85ee8091b39bc068cfc1ce3e