<template>
  <ais-instant-search :search-client="searchClient" index-name="getstarted_actors">
    <ais-autocomplete>
      <div class="search-container" slot-scope="{ currentRefinement, indices, refine }">
        <input
        id="query"
        class="form-control"
        type="search"
        :value="currentRefinement"
        placeholder="Search for an actor"
        @input="refine($event.currentTarget.value)"
        >
        <div class="list-container">
          <ul v-if="currentRefinement" v-for="index in indices" :key="index.label" :id="index.label">
            <li v-for="hit in index.hits" :key="hit.objectID">
              <ais-highlight attribute="name" :hit="hit"/>
            </li>
          </ul>
        </div>
      </div>
    </ais-autocomplete>
  </ais-instant-search>
</template>

<script>
import algoliasearch from 'algoliasearch/lite';
import 'instantsearch.css/themes/algolia-min.css';

export default {
  data() {
    return {
      searchClient: algoliasearch(
        '3X4W3RF7XP',
        '848d93a74a67b2eaf7d6c63f9aae39e2'
      ),
    };
  },
};
</script>

<style>
body {
  font-family: sans-serif;
  padding: 1em;
}
</style>
