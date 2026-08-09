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
            <strong>0 active</strong>
          </div>

          <div className="stat-card">
            <span>Tasks</span>
            <strong>0 pending</strong>
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