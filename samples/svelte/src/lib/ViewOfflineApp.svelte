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

	import Game from '$ts/games/QuantumTTT';
	import type { MarkType, SquareType } from '$ts/games/QuantumTTT.type';

	import GameBoard from '$lib/GameBoard.svelte';
	import GameFooter from '$lib/GameFooter.svelte';
	import GameInfo from '$lib/GameInfo.svelte';

	let game = new Game();
	let gameCount = 1;

	let { state } = game;
	let message = state.status;

	type Squares = Exclude<MaxLengthArray<MarkType, 9>, []>;

	/* eslint-disable typescript/consistent-type-assertions,
	                  typescript/no-unsafe-type-assertion -- TS is weak */
	$: choices = (null !== state.collapseSquare && null !== state.cycleMarks)
		? (state.qSquares[state.collapseSquare].filter(
				choice => (state.cycleMarks as Squares).includes(choice)
			) as MaxLengthArray<MarkType, 3>)
		: [] as const satisfies MaxLengthArray<MarkType, 0>;
	/* eslint-enable typescript/consistent-type-assertions,
	                 typescript/no-unsafe-type-assertion -- TS is weak */

	function handleSquareClick(i: SquareType): void{
		const statusMessage = game.handleSquareClick(i);
		if (import.meta.env.DEV) console.table(game.state);

		state = { ...game.state };
		message = statusMessage;
	}

	function handleCollapse(mark: MarkType){
		const statusMessage = game.handleCollapse(mark);

		state = { ...game.state };
		message = statusMessage;
	}

	function handleNextGameClick(){
		game = new Game();
		game.setState({ scores: { ...state.scores } });
		gameCount += 1;

		state = { ...game.state };
		message = `The ${getOrdinal(gameCount)} game!\n${game.state.status}`;
	}

	function handleResetGameClick(){
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