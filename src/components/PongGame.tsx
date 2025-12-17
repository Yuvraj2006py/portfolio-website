"use client";

import { useEffect, useRef, useState } from "react";

const WIDTH = 320;
const HEIGHT = 180;
const PADDLE_HEIGHT = 40;
const PADDLE_WIDTH = 6;
const BALL_SIZE = 6;
const WIN_SCORE = 11;

type GameState = {
  ballX: number;
  ballY: number;
  velX: number;
  velY: number;
  playerY: number;
  aiY: number;
  playerScore: number;
  aiScore: number;
  gameOver: boolean;
};

function initialState(): GameState {
  return {
    ballX: WIDTH / 2,
    ballY: HEIGHT / 2,
    velX: 0,
    velY: 0,
    playerY: HEIGHT / 2 - PADDLE_HEIGHT / 2,
    aiY: HEIGHT / 2 - PADDLE_HEIGHT / 2,
    playerScore: 0,
    aiScore: 0,
    gameOver: false
  };
}

function drawFrame(ctx: CanvasRenderingContext2D, s: GameState) {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  ctx.fillStyle = "#020617";
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  ctx.strokeStyle = "#1e293b";
  ctx.setLineDash([4, 4]);
  ctx.beginPath();
  ctx.moveTo(WIDTH / 2, 0);
  ctx.lineTo(WIDTH / 2, HEIGHT);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = "#e5e7eb";
  ctx.fillRect(4, s.playerY, PADDLE_WIDTH, PADDLE_HEIGHT);
  ctx.fillRect(
    WIDTH - (PADDLE_WIDTH + 4),
    s.aiY,
    PADDLE_WIDTH,
    PADDLE_HEIGHT
  );

  ctx.fillStyle = "#38bdf8";
  ctx.fillRect(s.ballX, s.ballY, BALL_SIZE, BALL_SIZE);
}

export function PongGame() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [state, setState] = useState<GameState>(() => initialState());
  const [isRunning, setIsRunning] = useState(false);
  const keysRef = useRef<{ up: boolean; down: boolean }>({
    up: false,
    down: false
  });

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowUp" || e.key === "w") keysRef.current.up = true;
      if (e.key === "ArrowDown" || e.key === "s") keysRef.current.down = true;
    }
    function onKeyUp(e: KeyboardEvent) {
      if (e.key === "ArrowUp" || e.key === "w") keysRef.current.up = false;
      if (e.key === "ArrowDown" || e.key === "s") keysRef.current.down = false;
    }
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, []);

  useEffect(() => {
    let animationFrame: number;

    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;

    const loop = () => {
      setState((prev) => {
        const next = { ...prev };

        if (!isRunning || next.gameOver) {
          drawFrame(ctx, next);
          return next;
        }

        const speed = 3;
        if (keysRef.current.up) next.playerY -= speed;
        if (keysRef.current.down) next.playerY += speed;
        next.playerY = Math.max(
          0,
          Math.min(HEIGHT - PADDLE_HEIGHT, next.playerY)
        );

        const aiCenter = next.aiY + PADDLE_HEIGHT / 2;
        if (next.ballY < aiCenter - 4) next.aiY -= 2.4;
        else if (next.ballY > aiCenter + 4) next.aiY += 2.4;
        next.aiY = Math.max(0, Math.min(HEIGHT - PADDLE_HEIGHT, next.aiY));

        next.ballX += next.velX;
        next.ballY += next.velY;

        if (next.ballY <= 0 || next.ballY >= HEIGHT - BALL_SIZE) {
          next.velY = -next.velY;
        }

        if (
          next.ballX <= PADDLE_WIDTH + 4 &&
          next.ballY + BALL_SIZE >= next.playerY &&
          next.ballY <= next.playerY + PADDLE_HEIGHT
        ) {
          next.ballX = PADDLE_WIDTH + 4;
          next.velX = Math.abs(next.velX) * 1.03;
        }

        if (
          next.ballX + BALL_SIZE >= WIDTH - (PADDLE_WIDTH + 4) &&
          next.ballY + BALL_SIZE >= next.aiY &&
          next.ballY <= next.aiY + PADDLE_HEIGHT
        ) {
          next.ballX = WIDTH - (PADDLE_WIDTH + 4) - BALL_SIZE;
          next.velX = -Math.abs(next.velX) * 1.03;
        }

        if (next.ballX < 0) {
          next.aiScore += 1;
          if (next.aiScore >= WIN_SCORE) {
            next.gameOver = true;
            next.velX = 0;
            next.velY = 0;
          } else {
            next.ballX = WIDTH / 2;
            next.ballY = HEIGHT / 2;
            next.velX = -2.2;
            next.velY = 1.6;
            next.playerY = HEIGHT / 2 - PADDLE_HEIGHT / 2;
            next.aiY = HEIGHT / 2 - PADDLE_HEIGHT / 2;
          }
        } else if (next.ballX > WIDTH) {
          next.playerScore += 1;
          if (next.playerScore >= WIN_SCORE) {
            next.gameOver = true;
            next.velX = 0;
            next.velY = 0;
          } else {
            next.ballX = WIDTH / 2;
            next.ballY = HEIGHT / 2;
            next.velX = 2.2;
            next.velY = 1.6;
            next.playerY = HEIGHT / 2 - PADDLE_HEIGHT / 2;
            next.aiY = HEIGHT / 2 - PADDLE_HEIGHT / 2;
          }
        }

        drawFrame(ctx, next);
        return next;
      });

      animationFrame = requestAnimationFrame(loop);
    };

    animationFrame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationFrame);
  }, [isRunning]);

  return (
    <div className="space-y-3">
      <p className="text-xs font-medium text-purple-700 md:text-sm">
        Pong - first to {WIN_SCORE} points wins. Move your paddle with W/S or
        ↑/↓.
      </p>
      <div className="rounded-2xl border border-purple-200 bg-purple-50/60 p-3">
        <div className="mb-2 flex items-center justify-between text-xs text-purple-600">
          <button
            type="button"
            onClick={() => {
              if (isRunning && !state.gameOver) {
                // Stop without resetting scores
                setIsRunning(false);
              } else {
                // Start a fresh match
                setState({
                  ballX: WIDTH / 2,
                  ballY: HEIGHT / 2,
                  velX: 2.2,
                  velY: 1.6,
                  playerY: HEIGHT / 2 - PADDLE_HEIGHT / 2,
                  aiY: HEIGHT / 2 - PADDLE_HEIGHT / 2,
                  playerScore: 0,
                  aiScore: 0,
                  gameOver: false
                });
                setIsRunning(true);
              }
            }}
            className="rounded-full border border-purple-300 px-3 py-1 text-xs text-purple-800 transition hover:border-purple-500 hover:bg-purple-100"
          >
            {isRunning && !state.gameOver ? "Stop" : "Start match"}
          </button>
          {state.gameOver && (
            <span className="text-[11px] text-purple-700 md:text-xs">
              {state.playerScore >= WIN_SCORE
                ? "You hit 11 first!"
                : "The AI reached 11 first."}
            </span>
          )}
        </div>
        <canvas
          ref={canvasRef}
          width={WIDTH}
          height={HEIGHT}
          className="mx-auto block"
        />
        <div className="mt-2 flex items-center justify-between text-xs text-purple-600">
          <span>
            You:{" "}
            <span className="font-semibold text-purple-950">
              {state.playerScore}
            </span>{" "}
            · AI:{" "}
            <span className="font-semibold text-purple-950">
              {state.aiScore}
            </span>
          </span>
          <span>
            {isRunning
              ? "Match in progress…"
              : "Press Start to play a race to 11."}
          </span>
        </div>
      </div>
    </div>
  );
}


