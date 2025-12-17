"use client";

import { TicTacToe } from "@/components/TicTacToe";
import { PongGame } from "@/components/PongGame";

export function PlaygroundSection() {
  return (
    <section id="playground">
      <div className="mb-6">
        <h2 className="text-lg font-semibold tracking-tight text-purple-950 md:text-xl">
          Playground
        </h2>
        <p className="mt-1 text-sm text-purple-600 md:text-base">
          Two small games, just for fun. Try to beat them - it&apos;s harder
          than it looks.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-purple-200 bg-purple-50/60 p-4">
          <h3 className="mb-2 text-sm font-semibold text-purple-950 md:text-base">
            Tic-Tac-Toe (Unbeatable)
          </h3>
          <TicTacToe />
        </div>
        <div className="rounded-2xl border border-purple-200 bg-purple-50/60 p-4">
          <h3 className="mb-2 text-sm font-semibold text-purple-950 md:text-base">
            Pong Challenge
          </h3>
          <PongGame />
        </div>
      </div>
    </section>
  );
}


