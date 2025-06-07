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
import type { MaxLengthArray } from '@@/ts/types/generics';

import type { MarkType } from '@@/ts/games/QuantumTTT.type';

import GameInfoButton from './GameInfoButton.vue';

defineProps<{
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
}>();
</script>

<template>
  <div class="game-info">
    <p class="status">{{status}}</p>
    <div v-if="choices" class="btn-list">
      <template v-for="choice in choices" :key="choice">
        <GameInfoButton
          buttonClass="collapse-choice"
          :choice="choice"
          :onClick="() => onChoiceClick(choice)"
        />
      </template>
    </div>
    <div v-if="isGameOver" class="btn-list">
      <GameInfoButton buttonClass="reset-game" :onClick="onResetGameClick" />
      <GameInfoButton buttonClass="next-game" :onClick="onNextGameClick" />
    </div>
    <div class="scores">
      Current scores:
      <span>X: {{scores.X}}</span>,
      <span>Y: {{scores.Y}}</span>
    </div>
  </div>
</template>

<style scoped>
.game-info {
  margin-left: 20px;
  top: 0px;
  width: 480px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;

  @media screen and (max-width: 600px) {
    margin-left: auto;
    margin-right: auto;
    width: 90vw;
  }
}

.status {
  box-sizing: border-box;
  padding: 8px 0;
  font-size: 24px;
  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
}

.btn-list {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 12px 0;
}

.scores {
  box-sizing: border-box;
  border-top: 2px solid var(--theme-color);
  padding-top: 12px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  font-weight: bold;

  @media screen and (max-width: 600px) {
    padding-left: 4px;
    padding-right: 4px;
    font-size: 16px;
  }
}
</style>