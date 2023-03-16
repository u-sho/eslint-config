/*
  QuantumTicTacToe is made by Rohan Pandit in 2017 and changed by Shouhei Uechi in 2021.
    Copyright (C) 2021-2022  Shouhei Uechi
    Copyright (C) 2017  Rohan Pandit, available at <https://github.com/rohanp/QuantumTicTacToe/tree/master/>

  This file is part of QuantumTicTacToe.

  QuantumTicTacToe is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  QuantumTicTacToe is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with QuantumTicTacToe.  If not, see <https://www.gnu.org/licenses/>.
*/

import { useState, useEffect } from "react";

import type { MaxLengthArray } from "@@/ts/types/generics";
import { toOrdinalSafely } from "@@/ts/utils/ordinalNumerals";

import GameBoard from "./GameBoard";
import GameInfo from "./GameInfo";
import type {
  MarkType,
  SquareType,
  StateType,
  StatusType,
} from "@@/ts/games/QuantumTTT.type";
import Game from "@@/ts/games/QuantumTTT";

import "./TheQuantumTTTOffline.scss";

export default function TheQuantumTTTOffline() {
  const [gameCount, setGameCount] = useState<number>(1);

  const [game, setGame] = useState<Game>(new Game());
  game.setStatus("プレイヤーXのターンです");
  const [state, setState] = useState<StateType>(game.state);
  const [message, setMessage] = useState<StatusType>(game.state.status);

  const [choices, setChoices] = useState<MaxLengthArray<MarkType, 3> | undefined>(undefined);

  useEffect(() => {
    setChoices(state.collapseSquare !== null
      ? (state.qSquares[state.collapseSquare]?.filter((choice: MarkType) =>
          (state.cycleMarks as null | MarkType[])?.includes(choice)
        ) as MaxLengthArray<MarkType, 3> | undefined)
      : undefined)
  }, [state]);

  function handleSquareClick(i: SquareType) {
    const status = game.handleSquareClick(i);
    console.table(game.state);

    setState({ ...game.state });
    setMessage(status);
  }

  function handleCollapse(mark: MarkType) {
    const status = game.handleCollapse(mark);

    setState({ ...game.state });
    setMessage(status);
  }

  function handleNextGameClick() {
    setGame(new Game());
    game.setState({ scores: { ...state.scores } });
    setGameCount(gameCount + 1);

    setState({ ...game.state });
    setMessage(`The ${toOrdinalSafely(gameCount)} game!\n${game.state.status}`);
  }

  function handleResetGameClick() {
    setGame(new Game());
    game.setStatus("プレイヤーXのターンです");
    setGameCount(1);

    setState({ ...game.state });
    setMessage(game.state.status);
  }

  return (
    <>
      <div className="game">
        <GameBoard
          cSquares={state.cSquares}
          qSquares={state.qSquares}
          cycleSquares={state.cycleSquares}
          cycleMarks={state.cycleMarks}
          collapseSquare={state.collapseSquare}
          onSquareClick={handleSquareClick}
        />
        <GameInfo
          choices={choices}
          status={message}
          isGameOver={state.isOver}
          scores={state.scores}
          onChoiceClick={handleCollapse}
          onNextGameClick={handleNextGameClick}
          onResetGameClick={handleResetGameClick}
        />
      </div>
      <div className="game-footer">
        <p>
          <small>
            <a rel="license" href="https://www.gnu.org/licenses/">
              GNU Public Licensed
            </a>
          </small>
        </p>
        <p>
          <small>
            QuantumTicTacToe is written by Rohan Pandit in 2017 and changed by
            Shouhei Uechi in 2021.
          </small>
          <br />
          <small>
            Copyright &copy; 2021-2022
            <a rel="author" href="https://github.com/u-sho">
              Shouhei Uechi
            </a>
            . Rights reserved.
          </small>
          <br />
          <small>
            Copyright &copy; 2017 Rohan Pandit, available at
            <a href="https://github.com/rohanp/QuantumTicTacToe/tree/master/">
              his GitHub repository
            </a>
            .
          </small>
        </p>
      </div>
    </>
  );
}
