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
import { toAbbrOrdinalSafely } from '$ts/utils/ordinalNumerals';

import GameBoard from './GameBoard.svelte';
import GameInfo from './GameInfo.svelte';
import type { MarkType, SquareType } from '$ts/games/QuantumTTT.type';
import Game from '$ts/games/QuantumTTT';

let game = new Game();
game.setStatus('プレイヤーXのターンです');
let gameCount = 1;

let state = game.state;
let message = state.status;

$: choices =
	state.collapseSquare !== null
		? (state.qSquares[state.collapseSquare]?.filter((choice) =>
				state.cycleMarks?.includes(choice)
			) as MaxLengthArray<MarkType, 3> | undefined)
		: undefined;

function handleSquareClick(i: SquareType) {
	const status = game.handleSquareClick(i);
	console.table(game.state);

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
	message = `The ${toAbbrOrdinalSafely(gameCount)} game!\n${game.state.status}`;
}

function handleResetGameClick() {
	game = new Game();
	game.setStatus('プレイヤーXのターンです');
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
			Copyright &copy; 2021
			<a rel="author" href="https://github.com/u-sho">Shouhei Uechi</a>. Rights reserved.
		</small>
		<br />
		<small>
			Copyright &copy; 2017 Rohan Pandit, available at
			<a href="https://github.com/rohanp/QuantumTicTacToe/tree/master/">his GitHub repository</a>.
		</small>
	</p>
</div>

<style lang="scss">
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