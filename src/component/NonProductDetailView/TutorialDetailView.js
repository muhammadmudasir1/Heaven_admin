import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../api/Api';
import BaseView from './BaseView';

const TutorialDetailView = () => {
  const { id } = useParams()
  const [data, setData] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const result = await Api.get(`/api/beginnersGuid/${id}`);
        setData(result.data)
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        console.log(error)
      }
    }
    fetchData()
  }, [])


    return (
      
        data && <BaseView data={data} isLoading={isLoading}/>
    )
  }


export default TutorialDetailView
