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

import BoardSquare from './GameBoardSquare/index';
import type { SquareType, StateType } from '@@/ts/games/QuantumTTT.type';

import './GameBoard.css';

type Props = {
  cSquares: StateType['cSquares'];
  qSquares: StateType['qSquares'];
  cycleSquares: StateType['cycleSquares'];
  cycleMarks: StateType['cycleMarks'];
  collapseSquare: StateType['collapseSquare'];

  /** Passes index of square that was clicked up to Game.handleSquareClick. */
  onSquareClick: (i: SquareType) => void;
};

const rows = [0, 1, 2] as const;
const columns = [0, 1, 2] as const;
type RowType = typeof rows[number];
type ColumnType = typeof columns[number];

function squareIndex(row: RowType, column: ColumnType): SquareType {
  return row * columns.length + column as SquareType;
}

export default function GameBoard(props: Props) {
  const {
    cSquares,
    qSquares,
    cycleSquares,
    cycleMarks,
    collapseSquare,
    onSquareClick
  } = props;

  function onClick(row: RowType, column: ColumnType): void {
    onSquareClick(squareIndex(row, column));
  }
  
  function isHighlighted(row: RowType, column: ColumnType): boolean {
    return !!(cycleSquares as null | SquareType[])?.includes(squareIndex(row, column));
  }
  return (
    <div className="game-board">
      {rows.map(row =>(
        <div className="game-board--row" key={row}>
          {columns.map(column => (
            <BoardSquare
              key={column}
              cMark={cSquares[squareIndex(row, column)]!}
              qMarks={qSquares[squareIndex(row, column)]!}
              cycleMarks={cycleMarks!}
              isHighlighted={isHighlighted(row, column)}
              isBeingCollapsed={collapseSquare === squareIndex(row, column)}
              onClick={()=>onClick(row, column)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
