<script lang="ts">
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";

  import HomeIcon from "lucide-svelte/icons/house";
  import WorkIcon from "lucide-svelte/icons/briefcase-business";
  import ProjectIcon from "lucide-svelte/icons/folder-git";

  // Menu items.
  const items = [
    {
      title: "Home",
      url: "#",
      icon: HomeIcon,
    },
    {
      title: "Expirience",
      url: "#",
      icon: WorkIcon,
    },
    {
      title: "Projects",
      url: "#",
      icon: ProjectIcon,
    },
  ];

</script>

<Sidebar.Root collapsible="icon">
  <Sidebar.Content>

    <Sidebar.Group>
      <Sidebar.GroupContent>
        <Sidebar.Menu>
          {#each items as item (item.title)}
            <Sidebar.MenuItem>
              <Sidebar.MenuButton>
                {#snippet child({ props })}
                  <a href={item.url} {...props}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                {/snippet}
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          {/each}
        </Sidebar.Menu>
      </Sidebar.GroupContent>
    </Sidebar.Group>

  </Sidebar.Content>
</Sidebar.Root>
