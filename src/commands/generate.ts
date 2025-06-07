import { PlaylistGenerator } from '../services/playlist-generator';

export async function generatePlaylist(prompt: string) {
    const playlistGenerator = new PlaylistGenerator();
    // Change fetchSongs to generatePlaylist to match the class method
    const songs = await playlistGenerator.generatePlaylist(prompt);
    return songs;
}