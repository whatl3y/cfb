import bunyan from 'bunyan'
import PostgresClient from '../libs/PostgresClient'
import config from '../config'

const log = bunyan.createLogger(config.logger.options)
const postgres_url = process.env.DATABASE_URL || 'postgres://localhost:5432/sports'

const postgres = new PostgresClient(postgres_url, {max: 1})

;(async () => {
  try {
    await Promise.all([
      createLeagues(postgres),
      createTeams(postgres),
      createTeamsIndexes(postgres),
      createEvents(postgres),
      createEventsIndexes(postgres),
      createCompleteJsonColumnInEvents(postgres),
      createCompleteJsonColumnInTeams(postgres)
    ])

    log.info("Successfully ran DB migrations!")
    process.exit()

  } catch(err) {
    log.error("Error running DB migrations", err)
    process.exit()
  }
})()

async function createLeagues(postgres) {
  await postgres.query(`
    CREATE TABLE IF NOT EXISTS leagues (
      id serial PRIMARY KEY,
      name varchar(255),
      abbreviation varchar(255),
      uri_name varchar(255),
      created_at timestamp(6) without time zone NOT NULL DEFAULT now(),
      updated_at timestamp(6) without time zone NOT NULL DEFAULT now()
    );
  `)
}

async function createTeams(postgres) {
  await postgres.query(`
    CREATE TABLE IF NOT EXISTS teams (
      id serial PRIMARY KEY,
      api_uid integer,
      league_id integer REFERENCES leagues,
      current_ranking integer,
      location varchar(255),
      name varchar(255),
      full_name varchar(255),
      abbreviation varchar(255),
      physical_location varchar(255),
      team_color1 varchar(255),
      team_color2 varchar(255),
      logo_url varchar(255),
      logo_local_filename varchar(255),
      api_url varchar(255),
      resource_url varchar(255),
      conference_abbreviation varchar(255),
      conference_name varchar(255),
      created_at timestamp(6) without time zone NOT NULL DEFAULT now(),
      updated_at timestamp(6) without time zone NOT NULL DEFAULT now()
    );
  `)
}

async function createTeamsIndexes(postgres) {
  await postgres.query(`CREATE INDEX CONCURRENTLY IF NOT EXISTS teams_league_id on teams (league_id)`)
  await postgres.query(`CREATE INDEX CONCURRENTLY IF NOT EXISTS teams_location on teams (location)`)
  await postgres.query(`CREATE INDEX CONCURRENTLY IF NOT EXISTS teams_name on teams (name)`)
}

async function createEvents(postgres) {
  await postgres.query(`
    CREATE TABLE IF NOT EXISTS events (
      id serial PRIMARY KEY,
      api_uid integer,
      league_id integer REFERENCES leagues,
      home_team_id integer REFERENCES teams,
      visiting_team_id integer REFERENCES teams,
      event_type varchar(255),
      home_team_score integer,
      visiting_team_score integer,
      current_period varchar(255),
      current_clock varchar(255),
      event_status varchar(255),
      odds_spread varchar(255),
      odds_over_under varchar(255),
      event_timestamp timestamp,
      created_at timestamp(6) without time zone NOT NULL DEFAULT now(),
      updated_at timestamp(6) without time zone NOT NULL DEFAULT now()
    );
  `)
}

async function createEventsIndexes(postgres) {
  await postgres.query(`CREATE INDEX CONCURRENTLY IF NOT EXISTS events_league_id on events (league_id)`)
  await postgres.query(`CREATE INDEX CONCURRENTLY IF NOT EXISTS events_home_team_id on events (home_team_id)`)
  await postgres.query(`CREATE INDEX CONCURRENTLY IF NOT EXISTS events_visiting_team_id on events (visiting_team_id)`)
}

async function createCompleteJsonColumnInEvents(postgres) {
  await postgres.addColumnIfNotExists('events', 'complete_json', 'text')
}

async function createCompleteJsonColumnInTeams(postgres) {
  await postgres.addColumnIfNotExists('teams', 'complete_json', 'text')
}
