export interface Bull {
  id: string;
  caravana: string;
  nombre: string;
  raza: string;
  uso: "vaquillona" | "vaca";
  origen: "propio" | "catalogo" | "favoritos";
  pelaje: "negro" | "colorado";
  edadMeses: number;
  caracteristicaDestacada: string;
  crecimiento: number;
  facilidadParto: number;
  reproduccion: number;
  moderacion: number;
  carcasa: number;
  score: number;
  favorites: [];
}
