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
import type { MaxLengthArray } from '$ts/types/generics';

import type { MarkType } from '$ts/games/QuantumTTT.type';

// Contains marks in selected square if collapse ongoing
export let choices: MaxLengthArray<MarkType, 3> | undefined;

// Passes selected choice of mark up to Game.handleCollapse
export let onChoiceClick: (choice: MarkType) => void;

// Conveys player information about the state of the game
export let status: string;

export let isGameOver: boolean;
export let scores: { X: number; Y: number };

// Go to next game with scores
export let onNextGameClick: () => void;

// Reset scores & Go to new game
export let onResetGameClick: () => void;
</script>

<div class="game-info">
	<p class="status">{status}</p>
	{#if choices}
		<div class="btn-list">
			{#each choices as choice (choice)}
				<div class="btn collapse-choice"
					on:click|preventDefault={(_) => onChoiceClick(choice)}
					on:keypress|preventDefault={(_) => onChoiceClick(choice)}
				>
					<span>{choice[0]}<sub>{choice[1]}</sub></span>
				</div>
			{/each}
		</div>
	{/if}
	{#if isGameOver}
		<div class="btn-list">
			<div class="btn next-game"
				on:click|preventDefault={onNextGameClick}
				on:keypress|preventDefault={onNextGameClick}
			>
				<span class="btn-text">Next</span>
			</div>
			<div class="btn reset-game"
				on:click|preventDefault={onResetGameClick}
				on:keypress|preventDefault={onResetGameClick}
			>
				<span class="btn-text">Reset</span>
			</div>
		</div>
	{/if}
	<div class="scores">
		Current scores:
		<span>X: {scores.X}</span>,
		<span>Y: {scores.Y}</span>
	</div>
</div>

<style lang="scss">
.collapse-choice {
	width: 50px;
	height: 50px;
	font-size: 24px;
	font-family: inherit;
	border: 2px solid var(--accent-color);
	color: var(--accent-color);
	text-align: center;
	cursor: pointer;
	margin: 5px;
	background-color: var(--bg-color);
	user-select: none;

	&:hover {
		background-color: var(--accent-color);
		color: var(--bg-color);
	}

	sub {
		font-size: 16px;
	}
}

.game-info {
	margin-left: 20px;
	top: 0px;
	width: 480px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: stretch;

	@media screen and (max-width: 600px) {
		width: 95vw;
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

.next-game {
	background-color: var(--bg-color);
	border-color: var(--accent-color);
	color: var(--accent-color);
	font-weight: bold;
	&:hover {
		background-color: var(--accent-color);
		color: var(--bg-color);
	}
}

.reset-game {
	background-color: var(--bg-color);
	border-color: var(--theme-color);
	color: var(--theme-color);
	&:hover {
		color: var(--bg-color);
		background-color: var(--theme-color);
	}
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
		width: 90vw;
		font-size: 16px;
	}
}
</style>