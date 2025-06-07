/*
  QuantumTicTacToe is made by Rohan Pandit in 2017 and changed by Shouhei Uechi in 2021.
    Copyright (C) 2021  Shouhei Uechi
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

import { useState, useEffect } from 'react';

import type { MaxLengthArray } from '@@/ts/types/generics';
import { getOrdinal } from '@@/ts/utils/getNumeral';

import GameBoard from './GameBoard';
import GameInfo from './GameInfo';
import GameFooter from './GameFooter.server';
import type { MarkType, SquareType, StateType, StatusType } from '@@/ts/games/QuantumTTT.type';
import Game from '@@/ts/games/QuantumTTT';

import './QuantumTTT.css';

export default function TheQuantumTTTOffline() {
  const [game, setGame] = useState<Game>(new Game());
  const [gameCount, setGameCount] = useState<number>(1);

  const [state, setState] = useState<StateType>(game.state);
  const [message, setMessage] = useState<StatusType>(game.state.status);

  const [choices, setChoices] = useState<MaxLengthArray<MarkType, 3> | undefined>(undefined);

  useEffect(() => {
    setChoices(state.collapseSquare !== null && state.cycleMarks !== null
      ? ((state.qSquares[state.collapseSquare] as Exclude<MaxLengthArray<MarkType, 9>, []>).filter((choice: MarkType) =>
          (state.cycleMarks as Exclude<typeof state.cycleMarks, []>).includes(choice)
        ) as MaxLengthArray<MarkType, 3> | undefined)
      : undefined)
  }, [state, state.collapseSquare, state.cycleMarks, state.qSquares]);

  function handleSquareClick(i: SquareType) {
    const status = game.handleSquareClick(i);
    if (import.meta.env.DEV) console.table(game.state);

    setState({ ...game.state });
    setMessage(status);
  }

  function handleCollapse(mark: MarkType) {
    const status = game.handleCollapse(mark);

    setState({ ...game.state });
    setMessage(status);
  }

  function handleNextGameClick() {
    const newGame = new Game();
    newGame.setState({ scores: { ...state.scores } });
    setGame(newGame);

    const newGameCount = gameCount + 1;
    setGameCount(newGameCount);

    setState({ ...newGame.state });
    setMessage(`The ${getOrdinal(newGameCount)} game!\n${newGame.state.status}`);
  }

  function handleResetGameClick() {
    setGame(new Game());
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
      <GameFooter />
    </>
  );
}
