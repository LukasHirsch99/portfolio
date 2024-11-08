<script lang="ts">
  import '../app.css';
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import Button from "$lib/components/ui/button/button.svelte";
  import AppSidebar from "$lib/components/app-sidebar.svelte";

  import Sun from "lucide-svelte/icons/sun"
  import Moon from "lucide-svelte/icons/moon"

  import { ModeWatcher } from "mode-watcher";
  import { toggleMode } from "mode-watcher";

	let { children } = $props();
</script>


<ModeWatcher />
<Sidebar.Provider>
  <AppSidebar />
  <main class="m-3">
    <Sidebar.Trigger />
     <Button onclick={toggleMode} variant="outline" size="icon" class="absolute top-1 right-1">
      <Sun
        class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      <Moon
        class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
      <span class="sr-only">Toggle theme</span>
    </Button>
    {@render children()}
  </main>
</Sidebar.Provider>
