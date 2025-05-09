<!--
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
-->
<script setup lang="ts">
import { computed, ref } from 'vue';

import type { MaxLengthArray } from '@@/ts/types/generics';
import { toAbbrOrdinalSafely } from '@@/ts/utils/ordinalNumerals';

import GameBoard from './GameBoard.vue';
import GameInfo from './GameInfo.vue';
import type { MarkType, SquareType } from '@@/ts/games/QuantumTTT.type';
import Game from '@@/ts/games/QuantumTTT';

const game = ref(new Game());
game.value.setStatus('プレイヤーXのターンです');
const gameCount = ref(1);

const state = ref(game.value.state);
const message = ref(game.value.state.status);

const choices = computed(() => state.value.collapseSquare !== null
    ? (state.value.qSquares[state.value.collapseSquare]?.filter((choice) =>
        state.value.cycleMarks?.includes(choice)
      ) as MaxLengthArray<MarkType, 3> | undefined)
    : undefined);

function handleSquareClick(i: SquareType) {
  const status = game.value.handleSquareClick(i);
  console.table(game.value.state);

  state.value = { ...game.value.state };
  message.value = status;
}

function handleCollapse(mark: MarkType) {
  const status = game.value.handleCollapse(mark);

  state.value = { ...game.value.state };
  message.value = status;
}

function handleNextGameClick() {
  game.value = new Game();
  game.value.setState({ scores: { ...state.value.scores } });
  gameCount.value += 1;

  state.value = { ...game.value.state };
  message.value = `The ${toAbbrOrdinalSafely(gameCount)} game!\n${game.value.state.status}`;
}

function handleResetGameClick() {
  game.value = new Game();
  game.value.setStatus('プレイヤーXのターンです');
  gameCount.value = 1;

  state.value = { ...game.value.state };
  message.value = game.value.state.status;
}
</script>

<template>
  <div class="game">
    <GameBoard
      :cSquares="state.cSquares"
      :qSquares="state.qSquares"
      :cycleSquares="state.cycleSquares"
      :cycleMarks="state.cycleMarks"
      :collapseSquare="state.collapseSquare"
      :onSquareClick="handleSquareClick"
    />
    <GameInfo
      :choices="choices"
      :status="message"
      :isGameOver="state.isOver"
      :scores="state.scores"
      :onChoiceClick="handleCollapse"
      :onNextGameClick="handleNextGameClick"
      :onResetGameClick="handleResetGameClick"
    />
  </div>
  <div class="game-footer">
    <p>
      <small>
        <a rel="license" href="https://www.gnu.org/licenses/">GNU Public Licensed</a>
      </small>
    </p>
    <p>
      <small>
        QuantumTicTacToe is written by Rohan Pandit in 2017 and changed by Shouhei Uechi in 2021.
      </small>
      <br />
      <small>
        Copyright &copy; 2021-2022
        <a rel="author" href="https://github.com/u-sho">Shouhei Uechi</a>. Rights reserved.
      </small>
      <br />
      <small>
        Copyright &copy; 2017 Rohan Pandit, available at
        <a href="https://github.com/rohanp/QuantumTicTacToe/tree/master/">his GitHub repository</a>.
      </small>
    </p>
  </div>
</template>

<style scoped lang="scss">
.game {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 50px;
}

.game-footer {
  width: 100%;
  margin-top: 50px;
  text-align: center;
  background-color: var(--theme-color);
  color: var(--bg-color);
  a {
    color: var(--bg-light-color);
    text-decoration-line: underline;
  }
}
</style>