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

import type { MaxLengthArray } from '@@/ts/types/generics';
import type { MarkType } from '@@/ts/games/QuantumTTT.type';

import './GameInfo.scss';

type Props = {
  // Contains marks in selected square if collapse ongoing
  choices: MaxLengthArray<MarkType, 3> | undefined;

  // Passes selected choice of mark up to Game.handleCollapse
  onChoiceClick: (choice: MarkType) => void;

  // Conveys player information about the state of the game
  status: string;

  isGameOver: boolean;
  scores: { X: number; Y: number };

  // Go to next game with scores
  onNextGameClick: () => void;
  
  // Reset scores & Go to new game
  onResetGameClick: () => void;
};

export default function GameInfo(props: Props) {
  const {
    choices,
    onChoiceClick,
    status,
    isGameOver,
    scores,
    onNextGameClick,
    onResetGameClick
  } = props;

  return (
    <div className="game-info">
      <p className="status">{props.status}</p>
      {choices && (
        <div className="btn-list">
          {choices.map((choice: MarkType) => (
            <div className="btn collapse-choice"
              key={choice}
              onClick={() => onChoiceClick(choice!)}
            >
              <span>{choice![0]}<sub>{choice![1]}</sub></span>
            </div>
          ))}
        </div>
      )}
      {isGameOver && (
        <div className="btn-list">
          <div className="btn next-game" onClick={onNextGameClick}>
            <span className="btn-text">Next</span>
          </div>
          <div className="btn reset-game" onClick={onResetGameClick}>
            <span className="btn-text">Reset</span>
          </div>
        </div>
      )}
      <div className="scores">
        Current scores:
        <span>X: {props.scores.X}</span>,
        <span>Y: {props.scores.Y}</span>
      </div>
    </div>
  );
}