<script lang="ts">
  import type { ComponentType } from "svelte";
  let { icon } = $props<{ icon: ComponentType }>();
</script>

<div class="bg-secondary size-10 mr-2 p-1 mt-2 rounded flex justify-center items-center">
  {@render icon()}
</div>
