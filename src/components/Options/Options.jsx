

export default function Options({
  updateFeedback,
  resetFeedback,
  isAnyFeedback,
}) {
    return (
        <ul>
            <li>
                <button onClick={() => updateFeedback('good')}>Good</button>
            </li>
            <li>
                <button onClick={() => updateFeedback('neutral')}>Neutral</button>
            </li>
            <li>
                <button onClick={() => updateFeedback('bad')}>Bad</button>
            </li>
            <li>
                <button onClick={() => resetFeedback('reset')}>Reset</button>
            </li>
        </ul>
    );
}