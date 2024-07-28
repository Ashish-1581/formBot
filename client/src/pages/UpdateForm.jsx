import React, { useEffect, useState } from 'react'
import { getSingleForm, updateForm } from '../api/formApi'
import { useNavigate, useParams } from 'react-router-dom'
import SideBar from '../Components/UpdateForm/SideBar'
import Display from '../Components/UpdateForm/Display'



function UpdateForm() {

  const [elements, setElements] = useState([

  ]);
  const [bubbleCounts, setBubbleCounts] = useState({
    text: 0,
    image: 0,
    video: 0,
    gif: 0
  });

  const [inputCounts, setInputCounts] = useState({
    text: 0,
    date: 0,
    email: 0,
    phone: 0,
    number: 0,
    rating: 0,
    button: 0
  });
  const[title,setTitle]=useState('')
  const { formId } = useParams()
  
  useEffect(() => {
    fetchForm()
  }, [])
  const fetchForm = async () => {
    try {
      const response = await getSingleForm(formId)
      setBubbleCounts(response.bubbleCounts)
      setInputCounts(response.inputCounts)
      setElements(response.elements)
      setTitle(response.title)
    } catch (error) {
      console.log(error)
    }
  }
 
  return (
    <div>UpdateForm
    <SideBar elements={elements} setElements={setElements} bubbleCounts={bubbleCounts} setBubbleCounts={setBubbleCounts} inputCounts={inputCounts} setInputCounts={setInputCounts} />
    <Display elements={elements} setElements={setElements} formId={formId} title={title} setTitle={setTitle} bubbleCounts={bubbleCounts}  inputCounts={inputCounts}  />
    
    </div>
  )
}

export default UpdateForm