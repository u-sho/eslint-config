<!--
	QuantumTicTacToe is made by Rohan Pandit in 2017 and changed by Shouhei Uechi in 2021.
		Copyright (C) 2021  Shouhei Uechi, available at <https://github.com/u-sho/quantum-game-arena/tree/main/src/lib/games/quantum-tictactoe>
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
<script lang="ts">
import type { MarkType, StateType } from '$ts/games/QuantumTTT.type';

export let qMarks: StateType['qSquares'][0];
export let cycleMarks: StateType['cycleMarks'];
export let isHighlighted: boolean;
export let isBeingCollapsed: boolean;

function getTextColor(mark: MarkType) {
	if (cycleMarks?.includes(mark)) {
		if (isBeingCollapsed) return 'red';
		if (isHighlighted) return 'blue';
	}
	return 'white';
}
</script>

<div class="quantum-marks">
	{#each qMarks as m (m)}
		<span class={getTextColor(m)}>{m[0]}<sub>{m[1]}</sub></span>
	{/each}
</div>

<style lang="scss">
.quantum-marks {
	box-sizing: border-box;
	margin: 0;
	padding: 8px;
	width: 100%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: flex-start;
	cursor: pointer;
	user-select: none;
	-moz-user-select: none;
	-webkit-user-select: none;
}

.white,
.blue,
.red {
	margin: 4px 8px;
	font-size: 24px;
	font-weight: bold;
	line-height: 32px;
}

.white {
	color: var(--bg-light-color);
	text-shadow: 0.125px 1px var(--theme-color);
}

.blue {
	color: var(--theme-color);
}

.red {
	color: var(--accent-color);
}
</style>