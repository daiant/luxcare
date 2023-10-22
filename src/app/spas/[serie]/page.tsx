'use client';
import { getSerie } from "@/lib/spa.utils";
import { Serie } from '@/app/types/spa.types';
import { SetStateAction, useEffect, useRef, useState } from 'react';
import { SerieDetailProps } from "@/components/series/detail/detail";
import styles from './series.module.css';
import Button from "@/components/button/button";
import Spas from "./[spa]/page";
const spas_const = [
  {
    title: 'v94',
    summary: ['Dynamic', '7 Person hot tub', 'Whitewater-4 jet']
  }, {
    title: 'v94l',
    summary: ['Dynamic', '7 Person hot tub', 'Whitewater-4 jet']
  }, {
    title: 'v84',
    summary: ['Dynamic', '7 Person hot tub', 'Whitewater-4 jet']
  }, {
    title: 'v84l',
    summary: ['Dynamic', '7 Person hot tub', 'Whitewater-4 jet']
  }, {
    title: 'v77l',
    summary: ['Dynamic', '7 Person hot tub', 'Whitewater-4 jet']
  }, {
    title: 'v65l',
    summary: ['Dynamic', '7 Person hot tub', 'Whitewater-4 jet']
  },
];

export default function Series({ params }: { params: { serie: string } }) {
  const [serie, setSerie] = useState<Serie | undefined>(undefined)
  useEffect(() => {
    const data = getSerie(params.serie);
    setSerie(data);
  }, []);
  return (<Spas params={{ serie: serie?.url, spa: undefined }}></Spas>)
}