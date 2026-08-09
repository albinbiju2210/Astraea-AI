import {
    Home,
    MessageCircle,
    Folder,
    CheckSquare,
    Settings,
} from "lucide-react";

export default function Sidebar() {
    return (
        <aside className="sidebar">

            <div className="sidebar-brand">
                <div className="brand-mark">✦</div>
                <span>ASTRAEA</span>
            </div>

            <nav className="sidebar-nav">

                <button className="sidebar-item active">
                    <Home size={18} />
                    <span>Home</span>
                </button>

                <button className="sidebar-item">
                    <MessageCircle size={18} />
                    <span>Assistant</span>
                </button>

                <button className="sidebar-item">
                    <Folder size={18} />
                    <span>Projects</span>
                </button>

                <button className="sidebar-item">
                    <CheckSquare size={18} />
                    <span>Tasks</span>
                </button>

            </nav>

            <div className="sidebar-bottom">

                <button className="sidebar-item">
                    <Settings size={18} />
                    <span>Settings</span>
                </button>

                <div className="astraea-status">
                    <span className="status-dot"></span>

                    <div>
                        <span className="status-title">
                            Astraea
                        </span>

                        <span className="status-text">
                            Online
                        </span>
                    </div>
                </div>

            </div>

        </aside>
    );
}