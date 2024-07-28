import React from "react";
import { useEffect, useRef, useState } from "react";
import Submissions from "../Components/Analytics/Submissions";
import { useParams } from "react-router-dom";
import Stats from "../Components/Analytics/Stats";
import Nav from "../Components/Analytics/Nav";
import { getSubmissions } from "../api/analyticsApi";
function Analytics() {
  const [showSubs, setShowSubs] = useState(false);
  const token = localStorage.getItem("token");

  const fetchSubmissions = async () => {
    try {
      const response = await getSubmissions({formId,token});
      if (response.status === 200) {
        setShowSubs(true);
      }
    } catch (error) {
      console.error("Error fetching submissions:", error);
    }
  };
  useEffect(() => {
    fetchSubmissions();
  }, []);

  const { formId } = useParams();
  return (
    <div>
      <Nav />
      {showSubs && (
        <div
          style={{
            background: "#18171C",
            height: "100vh",
            color: "white",
           
          }}
        >
          <Stats formId={formId} />
          <Submissions formId={formId} />
        </div>
      )}
      {showSubs === false && (
        <div
          style={{
            background: "#18171C",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ color: "#323232" }}>No Response Collected Yet!</h1>
        </div>
      )}
    </div>
  );
}

export default Analytics;
