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
import type { MarkType } from '@@/ts/games/QuantumTTT.type';

defineProps<{
   buttonClass: 'next-game' | 'reset-game' | 'collapse-choice';
   choice?: MarkType;
   onClick: () => void;
}>();
</script>

<template>
  <div
    class="btn"
    :class="{
      'collapse-choice': buttonClass === 'collapse-choice',
      'next-game': buttonClass === 'next-game',
      'reset-game': buttonClass === 'reset-game'
    }"
    @click.prevent="(_)=>onClick()"
    @keypress="(e: KeyboardEvent): void => {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      e.preventDefault();
      onClick();
    }"
    role="button"
    tabindex="0"
  >
    <span class="btn-text">
      <template v-if="buttonClass === 'collapse-choice' && choice">
        {{choice[0]}}<sub>{{choice[1]}}</sub>
      </template>
      <template v-else-if="buttonClass === 'next-game'">
        Next
      </template>
      <template v-else-if="buttonClass === 'reset-game'">
        Reset
      </template>
   </span>
  </div>
</template>

<style scoped>
.btn {
  box-sizing: border-box;
  margin: 5px;
  padding: 0;
  width: 160px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid;
  text-align: center;
  cursor: pointer;

  .btn-text {
    font-size: 24px;
    line-height: 50px;
  }
}

.collapse-choice {
  background-color: var(--bg-color);
  border-color: var(--accent-color);
  color: var(--accent-color);
  font-weight: bold;
  padding-left: 4px;
  user-select: none;

  &:hover {
    background-color: var(--accent-color);
    color: var(--bg-color);
  }

  sub {
    font-size: 16px;
    line-height: 16px;
  }
}

.reset-game {
  background-color: var(--bg-color);
  border-color: var(--accent-color);
  color: var(--accent-color);
  &:hover {
    background-color: var(--accent-color);
    color: var(--bg-color);
  }
}

.next-game {
  background-color: var(--bg-color);
  border-color: var(--theme-color);
  color: var(--theme-color);
  font-weight: bold;
  &:hover {
    color: var(--bg-color);
    background-color: var(--theme-color);
  }
}
</style>