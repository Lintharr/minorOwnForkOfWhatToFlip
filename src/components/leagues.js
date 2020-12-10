import { useState, useEffect } from "react";

import { leaguesApi } from "../functions/config";
import { fetchJSON } from "../functions/http";

var defaultLeague = "";

const mapToMetaLeagues = leagues => {
  const tempLeagues = leagues.filter(leagueHash => {
    const leagueName = leagueHash.id;
    return !["ssf"].some(prohibitedWord =>
      leagueName.toLowerCase().includes(prohibitedWord)
    );
  });

  // const tempSC = tempLeagues.filter(leagueHash => {
  //   return !leagueHash.id.toLowerCase().includes("hardcore");
  // });

  // const tempHC = tempLeagues.filter(leagueHash => {
  //   return leagueHash.id.toLowerCase().includes("hardcore");
  // });

  if (tempLeagues.length > 2) defaultLeague = tempLeagues[2].id;
  else if (tempLeagues.length > 0) defaultLeague = tempLeagues[0].id;
  else
    throw new Error(
      `Couldn't identify leagues in ${JSON.stringify(tempLeagues)}`
    );

  return tempLeagues.reduce(function (map, league) {
    map[league.id] = league.id;
    return map;
  }, {});
};

const fetchLeagues = () => {
    return fetchJSON(leaguesApi())
      .then(leagues => {
          return mapToMetaLeagues(leagues);
      })
      .catch(error => {
      console.error(`Couldn't fetch leagues: ${error}`);
    });
};

export const useSelectedLeague = () => {
  const [leagues, setLeagues] = useState({});
  useEffect(() => {
      fetchLeagues().then(fetchedLeagues => {
      console.log(`Leagues: ${JSON.stringify(fetchedLeagues)}`);
      setLeagues(fetchedLeagues);
    });
  }, []);

  // const metaLeagues = ["Temp SC", "Temp HC", "Standard", "Hardcore"];
  const metaLeagues = Object.values(leagues);
  if (defaultLeague === "") 
    defaultLeague = metaLeagues[2];
  
  const [selectedMetaLeague, setSelectedMetaLeague] = useState(defaultLeague); //basically, useState does not handle dynamic values through initialState, need to use useEffect for that (as demonstrated below)
  useEffect(() => { //https://stackoverflow.com/questions/57570237/react-usestate-setting-initial-value-has-no-effect
    if (!selectedMetaLeague)
      setSelectedMetaLeague(leagues[defaultLeague]);
  }, [leagues, selectedMetaLeague]);

  const [selectedLeague, setSelectedLeague] = useState();
  useEffect(() => {
    setSelectedLeague(leagues[selectedMetaLeague]);
  }, [leagues, selectedMetaLeague]);

  return {
    metaLeagues,
    selectedMetaLeague,
    selectedLeague,
    setSelectedMetaLeague,
  };
};