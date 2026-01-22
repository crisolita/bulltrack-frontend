"use client";
import { Bull } from "../types";

import { useState } from "react";

export default function BullsClient({
  initialBulls,
}: {
  initialBulls: Bull[];
}) {
  const [bulls, setBulls] = useState(initialBulls);
  const [loading, setLoading] = useState(false);

  const fetchBulls = async (params = {}) => {
    setLoading(true);

    const query = new URLSearchParams(params).toString();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/bulls?${query}`,
    );
    const data = await res.json();

    setBulls(data);
    setLoading(false);
  };

  return (
    <>
      {loading && <p>Cargando toros…</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bulls.map((bull) => (
          <div
            key={bull.id}
            className="bg-white p-4 rounded-lg shadow border border-gray-200 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold text-primary mb-2">
              {bull.nombre}
            </h3>
            <p>
              <span className="font-semibold">Caravana:</span> {bull.caravana}
            </p>
            <p>
              <span className="font-semibold">Raza:</span> {bull.raza}
            </p>
            <p>
              <span className="font-semibold">Pelaje:</span> {bull.pelaje}
            </p>
            <p>
              <span className="font-semibold">Origen:</span> {bull.origen}
            </p>
            <p>
              <span className="font-semibold">Edad:</span> {bull.edadMeses}{" "}
              meses
            </p>
            <p className="mt-2 italic text-gray-600">
              {bull.caracteristicaDestacada}
            </p>

            <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
              <p>
                <span className="font-semibold">Crecimiento:</span>{" "}
                {bull.crecimiento}
              </p>
              <p>
                <span className="font-semibold">Facilidad parto:</span>{" "}
                {bull.facilidadParto}
              </p>
              <p>
                <span className="font-semibold">Reproducción:</span>{" "}
                {bull.reproduccion}
              </p>
              <p>
                <span className="font-semibold">Moderación:</span>{" "}
                {bull.moderacion}
              </p>
              <p>
                <span className="font-semibold">Carcasa:</span> {bull.carcasa}
              </p>
              <p>
                <span className="font-semibold">Score:</span> {bull.score}
              </p>
            </div>
          </div>
        ))}

        {bulls.length === 0 && (
          <p className="text-gray-500 col-span-full text-center mt-6">
            No se encontraron toros
          </p>
        )}
      </div>
    </>
  );
}
