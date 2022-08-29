// components/survey/index.tsx
import React from "react";
import * as Survey from "survey-react"; // import surveyjs


// Modern theme
import "survey-react/modern.min.css";
// Default theme
// import 'survey-react/survey.min.css';

const SurveyComponent = ({content}:any) => {
  // Apply theme
  Survey.StylesManager.applyTheme("modern");

  // Create a modal
  const survey = new Survey.Model(content);

  // Render the survey
  return <Survey.Survey model={survey} />;
};

export default SurveyComponent;
