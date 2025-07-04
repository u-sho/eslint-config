<!-- @migration-task Error while migrating Svelte code: can't migrate `let state = game.state;` to `$state` because there's a variable named state.
     Rename the variable and try again or migrate by hand. -->
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
<script lang="ts">
import type { MaxLengthArray } from '$ts/types/generics';
import { getOrdinal } from '$ts/utils/getNumeral';

import GameBoard from './GameBoard.svelte';
import GameInfo from './GameInfo.svelte';
import GameFooter from './GameFooter.svelte';
import type { MarkType, SquareType } from '$ts/games/QuantumTTT.type';
import Game from '$ts/games/QuantumTTT';

let game = new Game();
let gameCount = 1;

let state = game.state;
let message = state.status;

$: choices =
	state.collapseSquare !== null && state.cycleMarks !== null
		? ((state.qSquares[state.collapseSquare] as Exclude<MaxLengthArray<MarkType, 9>, []>).filter(
				(choice) => (state.cycleMarks as Exclude<typeof state.cycleMarks, []>).includes(choice)
			) as MaxLengthArray<MarkType, 3> | undefined)
		: undefined;

function handleSquareClick(i: SquareType) {
	const status = game.handleSquareClick(i);
	if (import.meta.env.DEV) console.table(game.state);

	state = { ...game.state };
	message = status;
}

function handleCollapse(mark: MarkType) {
	const status = game.handleCollapse(mark);

	state = { ...game.state };
	message = status;
}

function handleNextGameClick() {
	game = new Game();
	game.setState({ scores: { ...state.scores } });
	gameCount += 1;

	state = { ...game.state };
	message = `The ${getOrdinal(gameCount)} game!\n${game.state.status}`;
}

function handleResetGameClick() {
	game = new Game();
	gameCount = 1;

	state = { ...game.state };
	message = game.state.status;
}
</script>

<div class="game">
	<GameBoard
		cSquares={state.cSquares}
		qSquares={state.qSquares}
		cycleSquares={state.cycleSquares}
		cycleMarks={state.cycleMarks}
		collapseSquare={state.collapseSquare}
		onSquareClick={handleSquareClick}
	/>
	<GameInfo
		{choices}
		status={message}
		isGameOver={state.isOver}
		scores={state.scores}
		onChoiceClick={handleCollapse}
		onNextGameClick={handleNextGameClick}
		onResetGameClick={handleResetGameClick}
	/>
</div>
<GameFooter />

<style>
.game {
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
	margin-top: 50px;
}
</style>
