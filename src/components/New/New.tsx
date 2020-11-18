import React, { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import {
  GameSettings,
  PLAYERS_KEY,
  useGameCreation,
} from "../../hooks/use-game-generator";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Container } from "./styled";

const DEFAULT_VALUES: GameSettings = {
  [PLAYERS_KEY]: [
    {
      name: "",
    },
  ],
};

export function New() {
  const { generateGame } = useGameCreation();
  const { register, control, handleSubmit } = useForm<GameSettings>({
    defaultValues: DEFAULT_VALUES,
  });
  const { fields, append } = useFieldArray({
    control,
    name: PLAYERS_KEY,
  });
  function handleAddPlayer() {
    append({ name: "" });
  }

  function onSubmit(data: GameSettings) {
    generateGame(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        {fields.map((item, index) => (
          <Input
            key={item.id}
            name={`${PLAYERS_KEY}[${index}].name`}
            ref={register()}
            defaultValue={item.name || ""}
            placeholder={`Player name #${index + 1}`}
          />
        ))}
        <Button type="button" onClick={handleAddPlayer}>
          Add player
        </Button>
        <Button type="submit">Submit</Button>
      </Container>
    </form>
  );
}
