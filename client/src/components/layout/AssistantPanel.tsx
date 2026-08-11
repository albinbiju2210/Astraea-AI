interface AssistantPanelProps {
  command: string;
  response: string;
}

export default function AssistantPanel({
  command,
  response,
}: AssistantPanelProps) {
  return (
    <aside className="assistant-panel">
      <div className="assistant-header">
        <div>
          <span className="assistant-label">ASSISTANT</span>
          <h2>{command ? "Command received" : "Ready when you are!"}</h2>
        </div>
      </div>

      <div className="assistant-content">
        <p className="assistant-message">
          {response || "Your workspace is ready."}
        </p>

        <p className="assistant-hint">
          {command
            ? `Command: ${command}`
            : "Ask something, start a task, or continue where you left off."}
        </p>
      </div>

      <div className="assistant-footer">
        <span>Context</span>
        <span>Home · No active task</span>
      </div>
    </aside>
  );
}