import {
  workspaceState,
  addProject,
  addTask,
} from "../store/workspaceStore";

export function interpretCommand(command: string): string {
  const normalizedCommand = command.toLowerCase().trim();

  if (
    normalizedCommand === "hello" ||
    normalizedCommand === "hi" ||
    normalizedCommand.includes("hello astraea")
  ) {
    return "Hello. I'm ready.";
  }

  if (normalizedCommand === "status") {
    return "Everything is running normally.";
  }

  if (normalizedCommand === "help") {
    return "I can help with projects, tasks, and workspace commands.";
  }

  if (
    normalizedCommand === "projects" ||
    normalizedCommand === "show projects"
  ) {
    return `You currently have ${workspaceState.projects.length} active project${workspaceState.projects.length === 1 ? "" : "s"
      }.`;
  }

  if (
    normalizedCommand === "tasks" ||
    normalizedCommand === "show tasks"
  ) {
    return `You currently have ${workspaceState.pendingTasks.length} pending task${workspaceState.pendingTasks.length === 1 ? "" : "s"
      }.`;
  }

  if (
    normalizedCommand === "create project" ||
    normalizedCommand.startsWith("create project ")
  ) {
    const projectName =
      normalizedCommand === "create project"
        ? "Untitled Project"
        : command.trim().slice("create project ".length).trim();

    addProject(projectName);

    return `Project "${projectName}" created. You now have ${workspaceState.projects.length
      } active project${workspaceState.projects.length === 1 ? "" : "s"
      }.`;
  }

  if (
    normalizedCommand === "create task" ||
    normalizedCommand.startsWith("create task ")
  ) {
    const taskName =
      normalizedCommand === "create task"
        ? "Untitled Task"
        : command.trim().slice("create task ".length).trim();

    addTask(taskName);

    return `Task "${taskName}" created. You now have ${workspaceState.pendingTasks.length
      } pending task${workspaceState.pendingTasks.length === 1 ? "" : "s"
      }.`;
  }
  return "I received your command.";
}