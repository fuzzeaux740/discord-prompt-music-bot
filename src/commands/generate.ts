import { PlaylistGenerator } from '../services/playlist-generator';

export async function generatePlaylist(prompt: string) {
    const playlistGenerator = new PlaylistGenerator();
    const songs = await playlistGenerator.fetchSongs(prompt, 50);
    return songs;
}