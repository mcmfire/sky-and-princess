import type { MetadataRoute } from 'next';
import { BRIDE_NAME, GROOM_NAME } from '@/utils/constants';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${GROOM_NAME} & ${BRIDE_NAME} RSVP Website`,
    short_name: `${GROOM_NAME} & ${BRIDE_NAME}`,
    description: `The official RSVP site for the wedding of ${GROOM_NAME} and ${BRIDE_NAME}.'`,
    start_url: '/',
    display: 'standalone',
    background_color: '#0F172A',
    theme_color: '#DC2626',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}