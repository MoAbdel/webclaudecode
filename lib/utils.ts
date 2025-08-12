import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createPageUrl(page: string): string {
  if (page === 'Home') return '/';
  if (page === 'Programs') return '/loan-programs';
  return `/${page.toLowerCase()}`;
}