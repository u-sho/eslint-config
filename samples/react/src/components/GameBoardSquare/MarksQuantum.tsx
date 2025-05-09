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

import type { MarkType, StateType } from '@@/ts/games/QuantumTTT.type';

import './MarksQuantum.css';

type Props = {
  qMarks: StateType['qSquares'][0];
  cycleMarks: StateType['cycleMarks'];
  isHighlighted: boolean;
  isBeingCollapsed: boolean;
};


export default function MarksQuantum(props: Props) {
  function getTextColor(mark: MarkType) {
    if ((props.cycleMarks as null | MarkType[])?.includes(mark)) {
      if (props.isBeingCollapsed) return 'red';
      if (props.isHighlighted) return 'blue';
    }
    return 'white';
  }

  return (
    <div className="quantum-marks">
      {props.qMarks.map((m: MarkType) => (
        <span className={getTextColor(m!)} key={m}>{m![0]}<sub>{m![1]}</sub></span>
      ))}
    </div>
  );
}
