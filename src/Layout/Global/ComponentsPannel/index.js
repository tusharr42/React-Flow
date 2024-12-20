import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

function ComponentsPanel() {
  return (
    <div style={{ width: "290px", border: "1px solid #ddd", padding: "10px" }}>
      {/* Container for Search Input and Filter Button */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        {/* Search Input Panel */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #0078D4",
            borderRadius: "20px",
            padding: "4px 8px",
            flex: 1, // Take remaining space
            boxShadow: "0 0 3px rgba(0, 0, 0, 0.2)",
          }}
        >
          {/* Search Icon */}
          <span
            style={{
              marginRight: "8px",
              color: "#888",
              display: "flex",
              alignItems: "center",
            }}
          >
            <SearchIcon />
          </span>

          {/* Input Field */}
          <input
            type="text"
            placeholder="Search component"
            style={{
              border: "none",
              outline: "none",
              flex: 1,
              fontSize: "14px",
              color: "#333",
            }}
          />
        </div>

        {/* Filter Button */}
        <span
          style={{
            marginLeft: "10px",
            color: "#0078D4",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            border: "1px solid #0078D4",
            borderRadius: "50%",
            padding: "8px",
            boxShadow: "0 0 3px rgba(0, 0, 0, 0.2)",
          }}
        >
          <FilterListIcon />
        </span>
      </div>

      {/* Folder Structure */}
      <div>
        {/* Root Folder */}
        
        {/* Child Items */}
        <div style={{ paddingLeft: "20px" }}>
          {/* File */}
         

          {/* Sub-folder */}
         
        </div>
      </div>
    </div>
  );
}

export default ComponentsPanel;