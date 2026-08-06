import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import AssistantPanel from "./AssistantPanel";
import CommandBar from "./CommandBar";
import FooterStatus from "./FooterStatus";

export default function MainLayout() {
  return (
    <div>
      <TopBar />

      <div>
        <Sidebar />

        <main>
          Workspace
        </main>

        <AssistantPanel />
      </div>

      <CommandBar />

      <FooterStatus />
    </div>
  );
}