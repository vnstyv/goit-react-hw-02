
import { useState, useEffect } from 'react';

import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';
import Options from '..Options/Options';
import Notification from '../Notification/Notification';

const feedbackTypes = {
  good: 0,
  neutral: 0,
  bad: 0
};

const getInitialScores = () => {
  const savedScores = window.localStorage.getItem('scores');

  return savedScores !== null ? JSON.parse(savedScores) : defaultScores;
};

export default function App() {
  const [clicks, setClicks] = useState(getInitialScores());
  
  const updateFeedback = (feedbackType) => {
    setClicks({
      ...clicks,
      [feedbackType]: clicks[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setClicks(defaultScores);
  };

  useEffect(() => {
    window.localStorage.setItem('scores', JSON.stringify(clicks));
  }, [clicks]);

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  const isAnyFeedback = totalFeedback > 0;
  const percentOfPositiveFeedback = Math.round(((clicks.good + clicks.neutral) / totalFeedback) * 100);

  return (
    <>
      
      <Description />
      
      <Options
      updateFeedback={(feedbackType) => updateFeedback(feedbackType)}
      resetFeedback={resetFeedback}
      isAnyFeedback={isAnyFeedback}
      />

      {isAnyFeedback && (
        <Feedback
          cliks={clicks}
          totalFeedback={totalFeedback}
          percentOfPositiveFeedback={percentOfPositiveFeedback}
        />
      )}

      {!isAnyFeedback && <Notification />}
    </>
  );
} 
