<script>
  import LinkedinLogo from "lucide-svelte/icons/linkedin";
  import GithubLogo from "lucide-svelte/icons/github";
  import MailLogo from "lucide-svelte/icons/mail";
  import Button from "$lib/components/ui/button/button.svelte";
  import Sun from "lucide-svelte/icons/sun";
  import Moon from "lucide-svelte/icons/moon";
  import { toggleMode } from "mode-watcher";
</script>

<div class="px-[10%] md:px-[15%] lg:px-[20%] z-50 backdrop-blur-lg bg-gradient-to-b from-primary-foreground to-transparent flex justify-between sticky top-0 pt-4">
  <div class="flex items-center">home</div>

  <div class="flex">
    <a
      class="flex items-center"
      href="mailto:lukas.stag@gmail.com"
    >
      <MailLogo class="mx-2" />
    </a>
    <a
      class="flex items-center"
      href="https://github.com/LukasHirsch99"
      target="_blank"
    >
      <GithubLogo class="mx-2" />
    </a>
    <a
      class="flex items-center"
      href="https://linkedin.com/in/lukas-hirsch-1286012b8"
      target="_blank"
    >
      <LinkedinLogo class="mx-2" />
    </a>

    <Button
      onclick={toggleMode}
      size="icon"
      class="hover:bg-transparent bg-transparent text-primary"
    >
      <Sun
        class="h-[1.2rem] w-[1.2rem] rotate-0 scale-125 transition-all dark:-rotate-90 dark:scale-0"
      />
      <Moon
        class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-125"
      />
      <span class="sr-only">Toggle theme</span>
    </Button>
  </div>
</div>
