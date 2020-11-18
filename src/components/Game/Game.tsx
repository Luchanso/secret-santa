import React from "react";
import { useRouteMatch } from "react-router-dom";
import { parseGameId } from "../../hooks/use-game-generator";

export function Game() {
  const a = useRouteMatch<{ id: string }>();
  return <div>{parseGameId(a.params.id)}</div>;
}
