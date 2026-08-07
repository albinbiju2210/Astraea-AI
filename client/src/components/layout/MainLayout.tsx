import TopBar from "./TopBar";
import Sidebar from "./Sidebar";
import AssistantPanel from "./AssistantPanel";
import CommandBar from "./CommandBar";
import FooterStatus from "./FooterStatus";

export default function MainLayout() {
    return (
        <div className="app-shell">

            <TopBar />

            <Sidebar />

            <main className="workspace">
                Workspace
            </main>

            <AssistantPanel />

            <CommandBar />

            <FooterStatus />

        </div>
    );
}