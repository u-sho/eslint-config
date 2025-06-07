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

import type React from 'react';
import type { MaxLengthArray } from '@@/ts/types/generics';
import type { MarkType } from '@@/ts/games/QuantumTTT.type';

import './GameInfo.css';


type GameInfoButtonProps = {
  buttonClass: 'next-game' | 'reset-game' | 'collapse-choice';
  choice?: MarkType;
  onClick: () => void;
};

const GameInfoButton = ({buttonClass, choice, onClick}: GameInfoButtonProps) => {
  return (
    <div
      className={`btn ${buttonClass}`}
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        onClick();
      }}
      onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key !== 'Enter' && e.key !== ' ') return;
        e.preventDefault();
        onClick();
      }}
      role="button"
      tabIndex={0}
    >
      <span className="btn-text">
        {buttonClass === 'collapse-choice' && choice ? (<>{choice[0]}<sub>{choice[1]}</sub></>)
        : buttonClass === 'next-game' ? 'Next'
        : buttonClass === 'reset-game' ? 'Reset'
        : ''}
      </span>
    </div>
  );
};

type GameInfoProps = {
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

export default function GameInfo(props: GameInfoProps) {
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
      <p className="status">{status}</p>
      {choices && (
        <div className="btn-list">
          {choices.map((choice) => (
            <GameInfoButton
              buttonClass='collapse-choice'
              choice={choice}
              onClick={() => onChoiceClick(choice)}
            />
          ))}
        </div>
      )}
      {isGameOver && (
        <div className="btn-list">
          <GameInfoButton buttonClass='reset-game' onClick={onResetGameClick} />
          <GameInfoButton buttonClass='next-game' onClick={onNextGameClick} />
        </div>
      )}
      <div className="scores">
        Current scores:
        <span>X: {scores.X}</span>,
        <span>Y: {scores.Y}</span>
      </div>
    </div>
  );
}