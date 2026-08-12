import { useState } from "react";
import TopBar from "./TopBar";
import Sidebar from "./Sidebar";
import Workspace from "./Workspace";
import AssistantPanel from "./AssistantPanel";
import CommandBar from "./CommandBar";
import FooterStatus from "./FooterStatus";
import { interpretCommand } from "../../services/commandInterpreter";

export default function MainLayout() {
  const [command, setCommand] = useState("");
  const [response, setResponse] = useState("");

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