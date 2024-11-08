<script lang="ts">
  import * as Card from "$lib/components/ui/card/index";

  import MapPin from "lucide-svelte/icons/map-pin";
  import Calendar from "lucide-svelte/icons/calendar";
  import type { JobProps } from "$lib/types/jobprops.svelte";

  let { name, date, location, icons }: JobProps = $props();
</script>

<Card.Root class="mb-3">
  <Card.Header>
    <Card.Title>{name}</Card.Title>
    <Card.Description>
      <Calendar size="12" class="inline" />
      {date} <br />
      <MapPin size="12" class="inline" />
      {location}
    </Card.Description>
  </Card.Header>
  <Card.Content>
    <p>Technologies</p>

    <div class="flex">
      {#each icons as icon (icon.src)}
        <div class="size-7 mr-2 mt-2">
          <icon.src />
        </div>
      {/each}
    </div>
  </Card.Content>
</Card.Root>
