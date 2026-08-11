import { useState } from "react";

interface CommandBarProps {
  onSubmit: (command: string) => void;
}

export default function CommandBar({ onSubmit }: CommandBarProps) {
  const [command, setCommand] = useState("");

  const handleSubmit = () => {
    const trimmedCommand = command.trim();

    if (!trimmedCommand) return;

    onSubmit(trimmedCommand);
    setCommand("");
  };

  return (
    <div className="command-bar">
      <div className="command-input">
        <span className="command-icon">✦</span>

        <input
          type="text"
          value={command}
          onChange={(event) => setCommand(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleSubmit();
            }
          }}
          placeholder="Ask anything..."
          aria-label="Ask Astraea"
        />

        <span className="command-shortcut">⌘ ↵</span>
      </div>
    </div>
  );
}