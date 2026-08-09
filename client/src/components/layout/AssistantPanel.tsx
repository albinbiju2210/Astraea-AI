export default function AssistantPanel() {
  return (
    <aside className="assistant-panel">

      <div className="assistant-header">
        <div>
          <span className="assistant-label">ASSISTANT</span>
          <h2>Ready when you are!</h2>
        </div>
      </div>

      <div className="assistant-content">
        <p className="assistant-message">
          Your workspace is ready.
        </p>

        <p className="assistant-hint">
          Ask something, start a task, or continue where you left off.
        </p>
      </div>

      <div className="assistant-footer">
        <span>Context</span>
        <span>Home · No active task</span>
      </div>

    </aside>
  );
}
