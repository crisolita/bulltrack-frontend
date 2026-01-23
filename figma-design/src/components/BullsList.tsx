import { Bull } from '../App';
import { BullItem } from './BullItem';

interface BullsListProps {
  bulls: Bull[];
  onToggleFavorite: (id: number) => void;
}

export function BullsList({ bulls, onToggleFavorite }: BullsListProps) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      {bulls.map(bull => (
        <BullItem
          key={bull.id}
          bull={bull}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
