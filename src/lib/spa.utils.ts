import { Serie } from '@/app/types/spa.types';
import { series } from './spas.data';

export function getSpaSeries(): Serie[] {
  return series;
}
export function getSerie(slug: string): Serie | undefined {
  return series.find(s => s.url === slug);
}