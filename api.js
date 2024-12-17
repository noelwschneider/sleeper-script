
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
    const url = `https://sleepercdn.com/avatars/thumbs/${id}`;
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
    const url = `https://api.sleeper.app/v1/league/${id}`;
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
    const url = `https://api.sleeper.app/v1/league/${id}/rosters`;
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
    const url = `https://api.sleeper.app/v1/league/${id}/users`;
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
    const url = `https://api.sleeper.app/v1/league/${id}/matchups/${week}`;
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
    const url = `https://api.sleeper.app/v1/league/${id}/transactions/${week}`;
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