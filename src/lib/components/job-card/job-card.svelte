<script lang="ts">
  import * as Card from "$lib/components/ui/card/index";
  import { marked } from "marked";

  import MapPin from "lucide-svelte/icons/map-pin";
  import Calendar from "lucide-svelte/icons/calendar";
  import type { JobProps } from "$lib/types/jobprops.svelte";
  import TechIcon from "./tech-icon.svelte";

  let { name, date, location, description, icons }: JobProps = $props();
</script>

<Card.Root class="mb-3">
  <Card.Header>
    <Card.Title class="text-2xl">{name}</Card.Title>
    <Card.Description class="text-md">
      <Calendar size="13" class="inline" />
      {date} <br />
      <MapPin size="13" class="inline" />
      {location}
    </Card.Description>
  </Card.Header>
  <Card.Content>
    {@html marked(description)}

    <div class="flex">
      {#each icons as icon}
        <TechIcon {icon} />
      {/each}
    </div>
  </Card.Content>
</Card.Root>
