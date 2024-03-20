'use client';
import { getSerie } from "@/lib/spa.utils";
import { Serie } from '@/app/types/spa.types';
import { useEffect, useState } from 'react';
import Spas from "./[spa]/page";

export default function Series({ params }: { params: { serie: string } }) {
  const [serie, setSerie] = useState<Serie | undefined>(undefined)
  useEffect(() => {
    const data = getSerie(params.serie);
    setSerie(data);
  }, []);
  return (<Spas params={{ serie: serie?.url, spa: undefined }}></Spas>)
}