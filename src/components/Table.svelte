<table>
  <thead>
    <tr>
      {#each headers as header}
        <th>{header.value}</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each rows as row}
      <tr>
      {#each headers as header}
        <td>
          <slot row="{row}" header="{header}">
            {row[header.key]}
          </slot>
        </td>
      {/each}
      </tr>
    {/each}
  </tbody>
</table>

<script lang="ts">
  interface ITableHeaders {
    value: string;
    key: string;
  }

  export let headers: ITableHeaders;
  export let rows;
</script>

<style lang="postcss">
  tr:hover {
    td {
      background: #EAEAEA;
    }
  }
</style>
