import { Serie, Spa } from '@/app/types/spa.types';
import { series } from './spas.data';

export function getSpaSeries(): Serie[] {
  return series;
}
export function getSerie(slug: string): Serie | undefined {
  return series.find(s => s.url === slug);
}
export function getSpa(serie: string, spa: string): Spa | undefined {
  const spaSerie = getSerie(serie);
  const res = spaSerie?.items?.find(s => s.url === spa);
  return res;
}