<!--
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
-->
<script setup lang="ts">
import { computed, ref } from 'vue';

import type { MaxLengthArray } from '@@/ts/types/generics';
import { getOrdinal } from '@@/ts/utils/getNumeral';

import GameBoard from './GameBoard.vue';
import GameInfo from './GameInfo.vue';
import GameFooter from './GameFooter.vue';
import type { MarkType, SquareType } from '@@/ts/games/QuantumTTT.type';
import Game from '@@/ts/games/QuantumTTT';

const game = ref(new Game());
const gameCount = ref(1);

const state = ref(game.value.state);
const message = ref(game.value.state.status);

const choices = computed(() => state.value.collapseSquare !== null && state.value.cycleMarks !== null
    ? ((state.value.qSquares[state.value.collapseSquare] as Exclude<MaxLengthArray<MarkType, 9>, []>).filter(
        (choice) => (state.value.cycleMarks as Exclude<typeof state.value.cycleMarks, []>).includes(choice)
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
  message.value = `The ${getOrdinal(gameCount.value)} game!\n${game.value.state.status}`;
}

function handleResetGameClick() {
  game.value = new Game();
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
  <GameFooter />
</template>

<style scoped>
.game {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 50px;
}
</style>