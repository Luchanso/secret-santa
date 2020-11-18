import { useHistory } from "react-router-dom";

export const PLAYERS_KEY = "players" as const;

export type GameSettings = {
  [PLAYERS_KEY]: {
    name: string;
  }[];
};

export function generateGameId(settings: GameSettings) {
  const hash = settings.players.reduce<string>((prev, { name }) => {
    return prev + name;
  }, "");

  return btoa(encodeURIComponent(hash));
}

export function parseGameId(data: string) {
  return decodeURIComponent(atob(data));
}

export function useGameCreation() {
  const history = useHistory();

  function generateGame(settings: GameSettings) {
    history.push(`/game/${generateGameId(settings)}`);
  }

  return { generateGame };
}
