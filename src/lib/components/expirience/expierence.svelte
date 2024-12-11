<script lang="ts">
  import { jobs } from "$lib/assets/jobs";
  import { projects } from "$lib/assets/projects";
  import * as Tabs from "$lib/components/ui/tabs/index";

  import TechIcon from "./tech-icon.svelte";
</script>

<Tabs.Root value="jobs">
  <Tabs.List class="grid w-full grid-cols-2">
    <Tabs.Trigger value="jobs">Work</Tabs.Trigger>
    <Tabs.Trigger value="projects">Projects</Tabs.Trigger>
  </Tabs.List>

  <Tabs.Content value="jobs">
    {#each jobs as job}
      <div
        class="flex flex-row justify-between mb-3 p-3 bg-secondary rounded-2xl"
      >
        <div>
          <div class="text-2xl font-outfit">{job.name}</div>
          <div class="text-sm text-zinc-600 dark:text-zinc-400">
            {job.date} <br />
            {job.role}
          </div>
          {job.description}
        </div>
        <div>
          <div class="flex flex-row flex-wrap w-32 justify-end">
            {#each job.icons as icon}
              <TechIcon {icon} />
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </Tabs.Content>

  <Tabs.Content value="projects">
    {#each projects as project}
      <div
        class="flex flex-row justify-between mb-3 p-3 bg-secondary rounded-2xl"
      >
        <div>
          <a href={project.link} target="_blank" class="mb-3 block text-2xl font-outfit">{project.name}</a>
          <p class="text-zinc-400">
          {project.description}
          </p>
        </div>
        <div>
          <div class="flex flex-row flex-wrap w-32 justify-end">
            {#each project.icons as icon}
              <TechIcon {icon} />
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </Tabs.Content>
</Tabs.Root>
