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
                <div className="astraea-wave">
                    <div className="wave wave-one"></div>
                    <div className="wave wave-two"></div>
                    <div className="wave wave-three"></div>
                </div>
            </main>

            <AssistantPanel />

            <CommandBar />

            <FooterStatus />

        </div>
    );
}