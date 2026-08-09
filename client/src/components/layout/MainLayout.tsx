import TopBar from "./TopBar";
import Sidebar from "./Sidebar";
import Workspace from "./Workspace";
import AssistantPanel from "./AssistantPanel";
import CommandBar from "./CommandBar";
import FooterStatus from "./FooterStatus";

export default function MainLayout() {
  return (
    <div className="app-shell">
      <TopBar />

      <Sidebar />

      <Workspace />

      <AssistantPanel />

      <CommandBar />

      <FooterStatus />
    </div>
  );
}