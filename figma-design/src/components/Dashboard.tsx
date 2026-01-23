import { useState } from 'react';
import { Header } from './Header';
import { Filters } from './Filters';
import { SearchBar } from './SearchBar';
import { BullsList } from './BullsList';
import { Pagination } from './Pagination';
import { Bull } from '../App';
import imgRectangle3463212 from "figma:asset/2d05bd61b93239cb20ec92b17f78fa4e90042b30.png";
import imgRectangle3463213 from "figma:asset/d9d8222316d317fda800d1497004fdd3f16232c1.png";
import imgRectangle3463214 from "figma:asset/13d37993c811134078a57e5eb73ec8d78d567533.png";

const initialBulls: Bull[] = [
  {
    id: 1,
    rank: 1,
    name: "Toro #992",
    breed: "Angus",
    age: "36 meses",
    image: imgRectangle3463212,
    score: 0.9,
    performance: "Top 1% de facilidad de parto",
    badges: ["Propio", "Para vaquillona"],
    isFavorite: false
  },
  {
    id: 2,
    rank: 2,
    name: "Toro #992",
    breed: "Angus",
    age: "36 meses",
    image: imgRectangle3463213,
    score: 0.9,
    performance: "Top 1% de facilidad de parto",
    badges: ["Catálogo", "Para vaca"],
    isFavorite: false
  },
  {
    id: 3,
    rank: 3,
    name: "Toro #992",
    breed: "Angus",
    age: "36 meses",
    image: imgRectangle3463214,
    score: 0.9,
    performance: "Top 1% de facilidad de parto",
    badges: ["Catálogo", "Para vaquillona"],
    isFavorite: false
  },
  {
    id: 4,
    rank: 4,
    name: "Toro #885",
    breed: "Angus",
    age: "30 meses",
    image: imgRectangle3463212,
    score: 0.85,
    performance: "Top 2% de facilidad de parto",
    badges: ["Propio", "Para vaca"],
    isFavorite: false
  },
  {
    id: 5,
    rank: 5,
    name: "Toro #776",
    breed: "Angus",
    age: "42 meses",
    image: imgRectangle3463213,
    score: 0.82,
    performance: "Top 3% de facilidad de parto",
    badges: ["Catálogo", "Para vaquillona"],
    isFavorite: false
  },
  {
    id: 6,
    rank: 6,
    name: "Toro #654",
    breed: "Angus",
    age: "28 meses",
    image: imgRectangle3463214,
    score: 0.78,
    performance: "Top 5% de facilidad de parto",
    badges: ["Propio", "Para vaquillona"],
    isFavorite: false
  }
];

interface DashboardProps {
  onLogout: () => void;
}

export function Dashboard({ onLogout }: DashboardProps) {
  const [bulls, setBulls] = useState<Bull[]>(initialBulls);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const handleToggleFavorite = (id: number) => {
    setBulls(prevBulls =>
      prevBulls.map(bull =>
        bull.id === id ? { ...bull, isFavorite: !bull.isFavorite } : bull
      )
    );
  };

  const filteredBulls = bulls.filter(bull =>
    bull.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    bull.breed.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredBulls.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedBulls = filteredBulls.slice(startIndex, endIndex);

  return (
    <div className="h-screen relative w-full bg-[#111714] overflow-hidden flex">
      {/* Left sidebar background */}
      <div className="absolute bg-[#111714] inset-[0_80.49%_0_0] rounded-tr-[24px] z-0" />
      
      {/* Top header background */}
      <div className="absolute bg-[#111714] inset-[0_0_84.13%_15.83%] z-0" />
      
      {/* Main content background */}
      <div className="absolute content-stretch flex flex-col inset-[8.12%_0_0_18.54%] items-start z-0">
        <div className="bg-[#f7f7f7] h-full rounded-tl-[40px] rounded-tr-[40px] shrink-0 w-full" />
      </div>

      {/* Header */}
      <Header isSignedIn={true} onAuthToggle={onLogout} />

      {/* Filters Sidebar */}
      <Filters />

      {/* Main Content */}
      <div className="absolute content-stretch flex flex-col gap-[22px] inset-[10.33%_2.22%_5.9%_20.76%] items-start overflow-y-auto pr-4 z-10">
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
          <div className="overflow-clip relative shrink-0 size-[16px]">
            <svg className="block size-full" fill="none" viewBox="0 0 16 16">
              <path d="M13.4167 11.1548C14.4125 10.7648 15.4167 9.87593 15.4167 8.08333C15.4167 5.41667 13.1944 4.75 12.0833 4.75C12.0833 3.41667 12.0833 0.75 8.08333 0.75C4.08333 0.75 4.08333 3.41667 4.08333 4.75C2.97222 4.75 0.75 5.41667 0.75 8.08333C0.75 9.87593 1.75418 10.7648 2.75 11.1548" stroke="#1C2620" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
            </svg>
          </div>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2d2d2d] text-[14px]">
            Datos actualizados hace 2 min
          </p>
        </div>

        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <div className="content-stretch flex items-center relative shrink-0">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#2d2d2d] text-[32px]">
                  Resultados de la clasificación
                </p>
              </div>
              <button className="bg-[#1c2620] content-stretch flex h-[32px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[8px] shrink-0 hover:bg-[#29382f] transition-colors">
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] text-white mr-2">
                  Exportar
                </span>
                <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                  <path d="M0.75 0.75H12.75" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="translate(6, 20)"/>
                  <path d="M4.25 12.75V0.75M4.25 0.75L7.75 4.25M4.25 0.75L0.75 4.25" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="translate(8, 4)"/>
                </svg>
              </button>
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2d2d2d] text-[16px] w-full">
              Los resultados están ordenados por Bulltrack Score que reflejan tus objetivos de producción
            </p>
          </div>
        </div>

        <SearchBar 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          totalResults={filteredBulls.length}
        />

        <BullsList 
          bulls={paginatedBulls}
          onToggleFavorite={handleToggleFavorite}
        />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
