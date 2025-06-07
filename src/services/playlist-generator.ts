export interface Song {
  title: string;
  artist: string;
  genre?: string;
}

export class PlaylistGenerator {
  // Temporary mock implementation
  async generatePlaylist(prompt: string): Promise<Song[]> {
    // Mock data for testing
    return [
      { title: "Happy", artist: "Pharrell Williams", genre: "Pop" },
      { title: "Good Vibrations", artist: "The Beach Boys", genre: "Rock" },
      { title: "Walking on Sunshine", artist: "Katrina & The Waves", genre: "Pop" }
    ];
  }
}