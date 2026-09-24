import type { APIRoute } from 'astro';
import { getInstagramPosts } from '../../lib/instagram';

// Route serveur : appelée depuis le navigateur (voir InstagramCarousel.astro)
// pour que les pages qui affichent le carrousel restent statiques et rapides,
// tout en montrant un flux réellement à jour.
export const prerender = false;

export const GET: APIRoute = async () => {
  const posts = await getInstagramPosts(8);
  return new Response(JSON.stringify({ posts }), {
    headers: { 'Content-Type': 'application/json' },
  });
};
