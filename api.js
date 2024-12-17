
async function getUser(user) {
    const url = `https://api.sleeper.app/v1/user/${user}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      };
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error.message);
    }
};


async function getLeaguesForUser(user, year) {
    const url = `https://api.sleeper.app/v1/user/${user}/leagues/nba/${year}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      };
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error.message);
    }
};


async function getAvatar(avatarId) {
    const url = `https://sleepercdn.com/avatars/thumbs/${avatarId}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      };
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error.message);
    }
};


async function getLeague(leagueId) {
    const url = `https://api.sleeper.app/v1/league/${leagueId}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      };
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error.message);
    }
};


async function getRosters(leagueId) {
    const url = `https://api.sleeper.app/v1/league/${leagueId}/rosters`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      };
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error.message);
    }
};


async function getUsers(leagueId) {
    const url = `https://api.sleeper.app/v1/league/${leagueId}/users`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      };
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error.message);
    }
};


async function getMatchups(leagueId, week) {
    const url = `https://api.sleeper.app/v1/league/${leagueId}/matchups/${week}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      };
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error.message);
    }
};


async function getTransactions(leagueId, week) {
    const url = `https://api.sleeper.app/v1/league/${leagueId}/transactions/${week}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      };
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error.message);
    }
};


async function getState() {
    const url = `https://api.sleeper.app/v1/state/nba`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      };
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error.message);
    }
};