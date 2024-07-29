import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chat from '../Components/ChatBot/Chat';
import NavBar from '../Components/ChatBot/NavBar';
import { useParams } from 'react-router-dom';
import { setTheViews,getViews } from '../api/viewsApi'; // Ensure this function uses axios internally
import {getTheme} from '../api/themeApi';

function ChatBot() {
  const [data, setData] = useState({});
  const { id: formId } = useParams();
  const [views, setViews] = useState(0);
  const [inputFieldCount, setInputFieldCount] = useState(0);
  const [theme, setTheme] = useState("");


useEffect(() => {
  const fetch = async () => {
    const response = await getTheme({ formId });
    setTheme(response);
  };
  fetch();
}
, [formId]);

  useEffect(() => {
    const fetchAndUpdateViews = async () => {
      try {
        const currentViews = await getViews({ formId });
        
        const newViews = currentViews.data.views + 1;
       
       const response= await setTheViews({ formId, views: newViews });
     
        setViews(newViews);
      } catch (error) {
        console.error('Error updating views:', error);
      }
    };

    fetchAndUpdateViews();
  }, [formId]);

  // useEffect(() => {
  //   console.log(data);
  // },[data]);




  

  return (
    <div style={{background:theme,height:"100vh",overflow:"auto"}}>
    <div >
    <NavBar formId={formId} data={data} inputFieldCount={inputFieldCount} />
    <Chat data={data} setData={setData} setInputFieldCount={setInputFieldCount} />
    </div>
    </div>
  );
}

export default ChatBot;