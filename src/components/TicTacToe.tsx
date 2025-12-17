"use client";

import { useMemo, useState } from "react";

type Player = "X" | "O";
type Cell = Player | null;

const winningLines: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function getWinner(cells: Cell[]): Player | "Draw" | null {
  for (const [a, b, c] of winningLines) {
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return cells[a];
    }
  }
  if (cells.every((c) => c)) return "Draw";
  return null;
}

function minimax(cells: Cell[], isMaximizing: boolean): number {
  const winner = getWinner(cells);
  if (winner === "O") return 1;
  if (winner === "X") return -1;
  if (winner === "Draw") return 0;

  const player: Player = isMaximizing ? "O" : "X";
  const scores: number[] = [];

  for (let i = 0; i < 9; i++) {
    if (!cells[i]) {
      const next = cells.slice();
      next[i] = player;
      scores.push(minimax(next, !isMaximizing));
    }
  }

  return isMaximizing ? Math.max(...scores) : Math.min(...scores);
}

function findBestMove(cells: Cell[]): number | null {
  let bestScore = -Infinity;
  let move: number | null = null;

  for (let i = 0; i < 9; i++) {
    if (!cells[i]) {
      const next = cells.slice();
      next[i] = "O";
      const score = minimax(next, false);
      if (score > bestScore) {
        bestScore = score;
        move = i;
      }
    }
  }
  return move;
}

export function TicTacToe() {
  const [cells, setCells] = useState<Cell[]>(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState<"X" | "O">("X");

  const status = useMemo(() => getWinner(cells), [cells]);

  function handleCellClick(index: number) {
    if (status || cells[index] || playerTurn !== "X") return;

    const next = cells.slice();
    next[index] = "X";
    const afterPlayer = next;

    let winner = getWinner(afterPlayer);
    if (winner) {
      setCells(afterPlayer);
      return;
    }

    const aiMove = findBestMove(afterPlayer);
    if (aiMove != null) {
      afterPlayer[aiMove] = "O";
    }

    winner = getWinner(afterPlayer);
    setCells(afterPlayer);
    setPlayerTurn("X");
  }

  function reset() {
    setCells(Array(9).fill(null));
    setPlayerTurn("X");
  }

  let message = "Your turn as X.";
  if (status === "O") {
    message = "The AI (O) did not lose.";
  } else if (status === "X") {
    message = "You somehow won - congrats!";
  } else if (status === "Draw") {
    message = "Draw. Try again.";
  }

  return (
    <div className="space-y-3">
      <p className="text-xs font-medium text-purple-700 md:text-sm">
        Tic-Tac-Toe - try to beat it. It&apos;s designed to be unbeatable.
      </p>
      <div className="grid grid-cols-3 gap-1 rounded-xl bg-purple-100 p-2">
        {cells.map((cell, idx) => (
          <button
            key={idx}
            onClick={() => handleCellClick(idx)}
            className="flex h-12 items-center justify-center rounded-lg border border-purple-300 bg-white text-lg font-semibold text-purple-950 transition hover:border-purple-500 md:h-14"
          >
            {cell}
          </button>
        ))}
      </div>
      <div className="flex items-center justify-between text-xs text-purple-600 md:text-sm">
        <span>{message}</span>
        <button
          onClick={reset}
          className="rounded-full border border-purple-300 px-3 py-1 text-xs text-purple-800 transition hover:border-purple-500 hover:bg-purple-100"
        >
          Play again
        </button>
      </div>
    </div>
  );
}


