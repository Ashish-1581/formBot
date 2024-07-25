import React from 'react'
import { useEffect, useRef, useState } from 'react'
import Submissions from '../Components/Analytics/Submissions'
import { useParams } from 'react-router-dom'
import Stats from '../Components/Analytics/Stats'

function Analytics() {
    const { formId } = useParams()
  return (
    <div>
<Stats formId={formId} />
    <Submissions formId={formId} />
    
    </div>
  )
}

export default Analytics