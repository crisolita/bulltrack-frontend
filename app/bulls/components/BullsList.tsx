"use client";

import { Bull } from "../../types";
import { BullItem } from "./BullItem";

interface BullsListProps {
  bulls: Bull[];
  currentPage: number;
  itemsPerPage: number;
  onToggleFavorite: (bullId: string) => void;
}

export function BullsList({ bulls, currentPage, itemsPerPage, onToggleFavorite }: BullsListProps) {
  return (
    <div className="flex flex-col gap-[16px] items-start w-full">
      {bulls.map((bull, index) => {
        const rank = (currentPage - 1) * itemsPerPage + index + 1;
        return (
          <BullItem
            key={bull.id}
            bull={bull}
            rank={rank}
            onToggleFavorite={onToggleFavorite}
          />
        );
      })}
    </div>
  );
}
