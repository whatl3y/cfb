<template lang="pug">
  div
    div(v-if="isLoading")
      loader
    div(v-if="!isLoading")
      league-header(:leagues="leagues",:selected="selectedLeagueName")
      div.container-fluid
        h1 {{ selectedLeagueName.toUpperCase() }} Schedules and Scores
        div.row
          div.col-12.col-md-8.offset-md-2.col-lg-6.offset-lg-3
            div.row
              div.col-sm-12.col-md-6.margin-bottom-small
                b-form-select(v-model="selectFilter",:options="selectFilterOptions")
              div.col-sm-12.col-md-6
                b-form-input(v-model="searchFilter",placeholder="Search for a team...")
        hr(style="margin:20px 0px;")
        div.d-flex.flex-row.justify-content-center.flex-wrap
          div.event(:style="getTeamColorStyle(team)",v-for="(team, index) in filteredTeams",:id="'event' + index")
            schedule(:events="events",:league="selectedLeagueName",:team="team")
</template>

<script>
  import moment from 'moment'
  import LeagueHeader from './LeagueHeader'
  import Schedule from './Schedule'
  import TimeHelpers from '../factories/TimeHelpers'
  import Snackbar from '../factories/Snackbar'
  import ApiData from '../factories/ApiData'

  export default {
    props: [ 'league' ],

    data() {
      return {
        isLoading: true,
        selectFilterOptions: [],
        selectFilter: null,
        searchFilter: null,
        selectedLeagueName: this.league,
        leagues: [],
        teams: [],
        events: []
      }
    },

    computed: {
      filteredTeams() {
        let filteredTeams = this.teams.slice(0)
        if (this.selectFilter != 'all') {
          if (this.selectFilter == 'today') {
            filteredTeams = filteredTeams.filter(t => !!t.event_time_today)
            if (filteredTeams.length === 0) {
              this.selectFilter = 'all'
              filteredTeams = this.teams.slice(0)
            }
          } else {
            filteredTeams = filteredTeams.filter(t => this.selectFilter == t.conference_abbreviation)
          }
        }

        if (this.searchFilter)
          return filteredTeams.filter(t => t.full_name.toLowerCase().indexOf(this.searchFilter.toLowerCase()) > -1)
        return filteredTeams
      }
    },

    methods: {
      isLeagueActiveClass(leagueName) {
        return (leagueName.toLowerCase() == this.selectedLeagueName.toLowerCase()) ? { fontWeight: 'bold' } : {}
      },

      getTeamColorStyle(team, justColor=false) {
        if (justColor)
          return `#${team.team_color1}`
        return { color: `#${team.team_color1}` }
      }
    },

    async created() {
      this.selectedLeagueName = this.selectedLeagueName || 'ncaaf'

      const info = await ApiData.getAll(this.selectedLeagueName)
      this.leagues = info.leagues.sort((l1, l2) => {
        if (l1.uri_name.toLowerCase() < l2.uri_name.toLowerCase())
          return -1
        return 1
      })
      this.events = info.events
      this.teams = info.teams.sort((t1, t2) => {
        if (t1.location.toLowerCase() < t2.location.toLowerCase())
          return -1
        return 1
      })
      this.conferences = (info.conferences || []).filter(c => !!c)

      this.selectFilterOptions = [
        { text: `All Teams`, value: 'all' },
        { text: `All Teams with Games Today`, value: 'today' }
      ]
      .concat(this.conferences.map(c => ({ text: `${c} (conference)`, value: c })))

      this.selectFilter = (this.conferences.length > 3) ? this.conferences[ Math.floor(Math.random() * this.conferences.length) ] : 'all'
      this.isLoading = false
    },

    components: {
      LeagueHeader,
      Schedule
    }
  }
</script>

<style scoped>
  .event {
    padding: 2px 2px 0px 2px;
  }
</style>