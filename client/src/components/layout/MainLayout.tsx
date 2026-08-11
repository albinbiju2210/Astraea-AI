import { useState } from "react";

import TopBar from "./TopBar";
import Sidebar from "./Sidebar";
import Workspace from "./Workspace";
import AssistantPanel from "./AssistantPanel";
import CommandBar from "./CommandBar";
import FooterStatus from "./FooterStatus";

export default function MainLayout() {
  const [command, setCommand] = useState("");
  const [response, setResponse] = useState("");

  const interpretCommand = (command: string) => {
    const normalizedCommand = command.toLowerCase().trim();

    if (
      normalizedCommand === "hello" ||
      normalizedCommand === "hi" ||
      normalizedCommand.includes("hello astraea")
    ) {
      return "Hello. I'm ready.";
    }

    if (normalizedCommand === "status") {
      return "Everything is running normally.";
    }

    if (normalizedCommand === "help") {
      return "I can help with projects, tasks, and workspace commands.";
    }

    return "I received your command.";
  };

  return (
    <div className="app-shell">
      <TopBar />

      <Sidebar />

      <Workspace />

      <AssistantPanel
        command={command}
        response={response}
      />

      <CommandBar
        onSubmit={(command) => {
          setCommand(command);
          setResponse(interpretCommand(command));
        }}
      />

      <FooterStatus />
    </div>
  );
}