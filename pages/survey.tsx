import React from "react"
import dynamic from "next/dynamic"


const SurveyComponent = dynamic(() => import("../components/survey"), {
  ssr: false,
})

const Survey = ({content}:any) => {
  return (
      <SurveyComponent content={content}/>
  )
}
export default Survey
