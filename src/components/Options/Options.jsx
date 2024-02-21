

export default function Options({
  updateFeedback,
  resetFeedback,
  isAnyFeedback,
}) {
  return (
    <ul>
      <li>
        <button onClick={() => updateFeedback("good")}>
          Good
        </button>
      </li>
      <li>
        <button onClick={() => updateFeedback("neutral")}>
          Neutal
        </button>
      </li>
      <li>
        <button onClick={() => updateFeedback("bad")}>
          Bad
        </button>
      </li>
      {isAnyFeedback && (
        <li>
          <button onClick={() => resetFeedback()}>
            Reset
          </button>
        </li>
      )}
    </ul>
  );
}