import { workspaceState } from "../../store/workspaceStore";

export default function Workspace() {
  return (
    <main className="workspace">
      <div className="astraea-wave">
        <div className="wave wave-one"></div>
        <div className="wave wave-two"></div>
        <div className="wave wave-three"></div>
      </div>

      <section className="workspace-hero">
        <span className="workspace-eyebrow">OVERVIEW</span>

        <h1>What are we working on?</h1>

        <p>Start something new or continue where you left off.</p>

        <div className="workspace-stats">
          <div className="stat-card">
            <span>Projects</span>

            <strong>
              {workspaceState.projects.length} active
            </strong>

            {workspaceState.projects.length > 0 && (
              <small>
                {workspaceState.projects[
                  workspaceState.projects.length - 1
                ]}
              </small>
            )}
          </div>

          <div className="stat-card">
            <span>Tasks</span>

            <strong>
              {workspaceState.pendingTasks.length} pending
            </strong>

            {workspaceState.pendingTasks.length > 0 && (
              <small>
                {workspaceState.pendingTasks[
                  workspaceState.pendingTasks.length - 1
                ]}
              </small>
            )}
          </div>

          <div className="stat-card">
            <span>Assistant</span>
            <strong>Ready</strong>
          </div>
        </div>
      </section>
    </main>
  );
}