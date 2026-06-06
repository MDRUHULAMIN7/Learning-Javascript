// ### Client-Side Pagination Component

// Implement a simple client-side pagination component.

import React, { useState } from 'react';

function Pagination({ data = [], itemsPerPage = 5 }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let end = Math.min(totalPages, start + maxVisible - 1);

    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  const styles = {
    container: {
      maxWidth: '600px',
      margin: '20px auto',
      fontFamily: 'Arial, sans-serif',
    },
    list: {
      listStyle: 'none',
      padding: '0',
    },
    item: {
      padding: '12px 16px',
      border: '1px solid #eee',
      borderBottom: 'none',
      backgroundColor: '#fff',
    },
    itemLast: {
      borderBottom: '1px solid #eee',
    },
    pagination: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '5px',
      marginTop: '20px',
    },
    button: {
      padding: '8px 12px',
      border: '1px solid #ddd',
      backgroundColor: '#f5f5f5',
      cursor: 'pointer',
      borderRadius: '4px',
      fontSize: '14px',
    },
    activeButton: {
      padding: '8px 12px',
      border: '1px solid #5C6AC4',
      backgroundColor: '#5C6AC4',
      color: '#fff',
      cursor: 'pointer',
      borderRadius: '4px',
      fontSize: '14px',
      fontWeight: 'bold',
    },
    disabledButton: {
      padding: '8px 12px',
      border: '1px solid #ddd',
      backgroundColor: '#f5f5f5',
      color: '#999',
      cursor: 'not-allowed',
      borderRadius: '4px',
      fontSize: '14px',
    },
    info: {
      textAlign: 'center',
      color: '#666',
      marginBottom: '10px',
      fontSize: '14px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.info}>
        Showing {startIndex + 1}-{Math.min(endIndex, data.length)} of {data.length} items
      </div>

      <ul style={styles.list}>
        {currentItems.map((item, index) => (
          <li
            key={index}
            style={{
              ...styles.item,
              ...(index === currentItems.length - 1 ? styles.itemLast : {}),
            }}
          >
            {item}
          </li>
        ))}
      </ul>

      <div style={styles.pagination}>
        <button
          onClick={() => goToPage(1)}
          disabled={currentPage === 1}
          style={currentPage === 1 ? styles.disabledButton : styles.button}
        >
          ««
        </button>
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          style={currentPage === 1 ? styles.disabledButton : styles.button}
        >
          «
        </button>

        {getPageNumbers().map((page) => (
          <button
            key={page}
            onClick={() => goToPage(page)}
            style={currentPage === page ? styles.activeButton : styles.button}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          style={currentPage === totalPages ? styles.disabledButton : styles.button}
        >
          »
        </button>
        <button
          onClick={() => goToPage(totalPages)}
          disabled={currentPage === totalPages}
          style={currentPage === totalPages ? styles.disabledButton : styles.button}
        >
          »»
        </button>
      </div>
    </div>
  );
}

export default Pagination;

// explanation : https://app.notion.com/p/Implement-a-simple-client-side-pagination-component-377fa15e85ee807b8de0f0e200a9bfaf