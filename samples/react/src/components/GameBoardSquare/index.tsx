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
import QuantumMarks from './MarksQuantum';
import ClassicalMark from './MarkClassical';
import type { StateType } from '@@/ts/games/QuantumTTT.type';

import './index.css';

type GameBoardSquareProps = {
  cMark: StateType['cSquares'][0];
  qMarks: StateType['qSquares'][0];
  cycleMarks: StateType['cycleMarks'];
  isHighlighted: boolean;
  isBeingCollapsed: boolean;
  onClick: () => void;
  squareName: `${'upper' | 'middle' | 'lower'} ${'left' | 'center' | 'right'} square`;
};

export default function GameBoardSquare(props: GameBoardSquareProps) {
  const {
    cMark,
    qMarks,
    cycleMarks,
    isHighlighted,
    isBeingCollapsed,
    onClick,
    squareName,
  } = props;

  const squareClass = cMark
		? 'square'
		: `square${isHighlighted ? ' highlighted' : ''}${isBeingCollapsed ? ' selected' : ''}`;

  const ariaLabel = `${cMark ? `Classical ${cMark}` : qMarks.length > 0 ? `Quantum ${qMarks.join(', ')}` : ''} on ${squareName}`;

  return (
    <div
      className={squareClass}
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        onClick();
      }}
      onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key !== 'Enter' && e.key !== ' ') return;
        e.preventDefault();
        onClick();
      }}
      aria-label={ariaLabel}
      role="button"
      tabIndex={0}
    >
    <div>
      <span className="border-dashing"><i /></span>
      <span className="border-dashing"><i /></span>
      <span className="border-dashing"><i /></span>
      <span className="border-dashing"><i /></span>
    </div>
    {cMark && <ClassicalMark cMark={cMark} />}
    {qMarks && 
      <QuantumMarks
        qMarks={qMarks}
        cycleMarks={cycleMarks}
        isHighlighted={isHighlighted}
        isBeingCollapsed={isBeingCollapsed}
      />}
  </div>
  );
}
