import { workspaceState } from "../store/workspaceStore";

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
    return `You currently have ${workspaceState.projects} active project${
      workspaceState.projects === 1 ? "" : "s"
    }.`;
  }

  if (
    normalizedCommand === "tasks" ||
    normalizedCommand === "show tasks"
  ) {
    return `You currently have ${workspaceState.pendingTasks} pending task${
      workspaceState.pendingTasks === 1 ? "" : "s"
    }.`;
  }

  return "I received your command.";
}