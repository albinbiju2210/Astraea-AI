export interface WorkspaceState {
  projects: number;
  pendingTasks: number;
}

export const workspaceState: WorkspaceState = {
  projects: 0,
  pendingTasks: 0,
};