export interface WorkspaceState {
  projects: string[];
  pendingTasks: string[];
}

const savedState = localStorage.getItem("astraea-workspace");

export const workspaceState: WorkspaceState = savedState
  ? JSON.parse(savedState)
  : {
      projects: [],
      pendingTasks: [],
    };

function saveState() {
  localStorage.setItem(
    "astraea-workspace",
    JSON.stringify(workspaceState)
  );
}

export function addProject(name: string) {
  workspaceState.projects.push(name);
  saveState();
}

export function addTask(name: string) {
  workspaceState.pendingTasks.push(name);
  saveState();
}