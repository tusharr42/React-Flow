import React, { useState, useEffect } from "react";
import { getSession } from "next-auth/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilter, faFolder, faFolderOpen } from '@fortawesome/free-solid-svg-icons';

function ComponentsPanel() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [company, setCompany] = useState(null);
  const [isFolderOpen, setIsFolderOpen] = useState(false);

  useEffect(() => {
    const fetchSession = async () => {
      const sessionData = await getSession();
      setSession(sessionData);

      if (sessionData) {
        setCompany(sessionData.user.companyName);
      }
      setLoading(false);
    };

    fetchSession();
  }, []);

  const toggleFolder = () => {
    setIsFolderOpen(!isFolderOpen);
  };

  return (
    <div style={{ width: "285px", border: "1px solid #ddd", padding: "10px" }}>
      {/* Search Input and Filter Button */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #0078D4",
            borderRadius: "20px",
            padding: "4px 8px",
            boxShadow: "0 0 3px rgba(0, 0, 0, 0.2)",
          }}
        >
          <FontAwesomeIcon icon={faSearch} style={{ marginRight: "8px", color: "#888" }} />
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

        <span
          style={{
            marginLeft: "10px",
            color: "#0078D4",
            cursor: "pointer",
            border: "1px solid #0078D4",
            borderRadius: "50%",
            padding: "8px",
            boxShadow: "0 0 3px rgba(0, 0, 0, 0.2)",
          }}
        >
          <FontAwesomeIcon icon={faFilter} />
        </span>
      </div>

      {/* Folder Structure */}
      <div>
        {loading ? (
          <p>Loading company data...</p>
        ) : company ? (
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "20px",
                marginBottom: "10px",
                cursor: "pointer",
              }}
              onClick={toggleFolder}
            >
              <FontAwesomeIcon
                icon={isFolderOpen ? faFolderOpen : faFolder}
                style={{ marginRight: "8px", color: "#0078D4" }}
              />
              <span>{company}</span>
            </div>
            {isFolderOpen && (
              <ul style={{ listStyleType: "none", paddingLeft: "20px" }}>
                <li>Folder content 1</li>
                <li>Folder content 2</li>
              </ul>
            )}
          </div>
        ) : (
          <p>No company data found</p>
        )}
      </div>
    </div>
  );
}

export default ComponentsPanel;
