<script lang="ts">
  import Feed from "src/views/feed/Feed.svelte"
  import {isLike} from "src/util/nostr"
  import {timedelta} from "src/util/misc"
  import {sampleRelays, getPubkeyWriteRelays} from "src/agent/relays"

  export let pubkey

  const relays = sampleRelays(getPubkeyWriteRelays(pubkey))
  const filter = {kinds: [7], authors: [pubkey]}
  const shouldDisplay = e => isLike(e.content)
</script>

<Feed {relays} {filter} {shouldDisplay} parentsTimeout={10_000} delta={timedelta(1, "days")} />
