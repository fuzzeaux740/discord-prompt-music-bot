// src/services/playlist-generator.ts

export class PlaylistGenerator {
    private musicAPI: MusicAPI;

    constructor() {
        this.musicAPI = new MusicAPI();
    }

    public async generatePlaylist(prompt: string): Promise<Song[]> {
        const songs = await this.fetchSongs(prompt);
        return songs.slice(0, 50); // Limit to 50 songs
    }

    private async fetchSongs(prompt: string): Promise<Song[]> {
        // Logic to interact with the MusicAPI and fetch songs based on the prompt
        const songData = await this.musicAPI.searchSongs(prompt);
        return songData; // Assuming songData is an array of Song objects
    }
}