/**
 * Copyright (c) 2023-present Plane Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

import * as React from "react";

import type { ISvgIcons } from "../type";

// Wulftrack lockup (wolf mark + wordmark) — replaces the upstream brand lockup; export name kept so imports stay stable.
export function PlaneLockup({ width = "253", height = "53", className, color = "currentColor" }: ISvgIcons) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 253 53"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g transform="translate(0 0) scale(0.1035)">
        <path fill={color} d="M146 206 L154 104 L232 178 Z M366 206 L358 104 L280 178 Z" />
        <path
          fill={color}
          fillRule="evenodd"
          d="M256 150 L374 212 L330 360 L256 432 L182 360 L138 212 Z M206 250 L246 250 L226 286 Z M266 250 L306 250 L286 286 Z M236 356 L276 356 L256 398 Z"
        />
      </g>
      <text
        x="60"
        y="39"
        fill={color}
        fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
        fontSize="32"
        fontWeight="700"
        letterSpacing="-0.5"
      >
        Wulftrack
      </text>
    </svg>
  );
}
