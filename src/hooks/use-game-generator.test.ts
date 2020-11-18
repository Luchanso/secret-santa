import { generateGameId, parseGameId } from "./use-game-generator";

const settings = {
  players: [
    {
      name: "Vasya",
    },
    {
      name: "Petya",
    },
    {
      name: "Masha",
    },
  ],
};

test("should return game for three players", () => {
  const { players } = settings;

  expect(parseGameId(generateGameId(settings))).toBe(
    players[0].name + players[1].name + players[2].name
  );
});
