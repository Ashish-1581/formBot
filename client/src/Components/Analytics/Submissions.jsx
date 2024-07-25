import React, { useEffect, useState } from "react";
import { getSubmissions } from "../../api/analyticsApi";

function Submissions({ formId }) {
  const [subs, setSubs] = useState([]);
  const [columns, setColumns] = useState([]);

  const fetchSubmissions = async () => {
    try {
      const response = await getSubmissions(formId);
      console.log( response);
      
      if (response.status === 200) {
        setSubs(response.data.submissions);
        
        extractColumns(response.data.submissions);
      }
    } catch (error) {
      console.error("Error fetching submissions:", error);
    }
  };

  const extractColumns = (submissions) => {
    const allKeys = submissions.reduce((acc, sub) => {
      const keys = Object.keys(sub.data);
      keys.forEach(key => {
        if (!acc.includes(key)) {
          acc.push(key);
        }
      });
      return acc;
    }, []);
    setColumns(['submittedAt', ...allKeys]);
  };

  useEffect(() => {
    fetchSubmissions();
  }, [formId]);

  return (
    <div>
      <h1>Submissions for Form ID: {formId}</h1>
      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {subs.map((sub, index) => (
            <tr key={index}>
              {columns.map((col, idx) => (
                <td key={idx}>{col === 'submittedAt' ? sub.submittedAt : sub.data[col] || '-'}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Submissions;