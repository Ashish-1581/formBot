import React, { useCallback, useEffect, useState } from 'react'
import { getSubmissions } from '../../api/analyticsApi'
import { getViews } from '../../api/viewsApi';





function Stats({formId}) {
    const [submissions,setSubmissions]=useState([]);
    const [complete,setComplete]=useState(0);
    const [incomplete,setIncomplete]=useState(0);
    const[completionRate,setCompletionRate]=useState(0);
    const [views, setViews] = useState(0);
  

    useEffect(() => {
        const fetchViewCount = async () => {
          try {
         
            const response = await getViews({ formId });
         
            setViews(response.data.views);
          } catch (error) {
            console.error('Error fetching view count', error);
          }
        };
    
        fetchViewCount();
      }, [formId]);



    const fetch=useCallback(async()=>{
        try{

            const response=await getSubmissions(formId);
            setSubmissions(response.data.submissions);
            
        }
        catch(error){
            console.error("Error fetching submissions:", error);
        }
    },[formId]);

    useEffect(() => {
        let completeCount = 0;
        let incompleteCount = 0;

        submissions.forEach(submission => {
            if (submission.complete) {
                completeCount++;
            } else {
                incompleteCount++;
            }
        });

        setComplete(completeCount);
        setIncomplete(incompleteCount);

        const totalCount = completeCount + incompleteCount;
        const rate = totalCount > 0 ? (completeCount / totalCount) * 100 : 0;
        setCompletionRate(parseFloat(rate.toFixed(2)));

    }, [submissions, setComplete, setIncomplete, setCompletionRate]);
    useEffect(() => {
        fetch();
        
    }, [formId,fetch]);

    
  return (
    <div style={{display:"flex"}}>
    <div style={{height:"50px",width:"70px"}}>Views:{views}</div>
    <div style={{height:"50px",width:"70px"}}>Start:
    {complete+incomplete}
    </div>
    <div style={{height:"50px",width:"70px"}}></div>
    Completion Rate:{completionRate}%
    </div>
  )
}

export default Stats