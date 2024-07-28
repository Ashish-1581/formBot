import React, { useEffect, useState } from "react";
import { getSubmissions } from "../../api/analyticsApi";
import styles from "./Submissions.module.css";

function Submissions({ formId }) {
  const [subs, setSubs] = useState([]);
  const [columns, setColumns] = useState([]);
  const token=localStorage.getItem("token");

  const fetchSubmissions = async () => {
    try {
      const response = await getSubmissions({formId,token});
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
    <div className={styles.container}>
    
    <div className={styles.tableContainer}>
      <table className={styles.fixedTable} border="1" cellPadding="10">
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
  </div>
  );
}

export default Submissions;