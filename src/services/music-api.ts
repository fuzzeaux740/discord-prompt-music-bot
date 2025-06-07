import { searchYoutube } from 'youtube-search-api';

export interface Song {
  title: string;
  artist: string;
  genre?: string;
  youtubeUrl?: string;
}

export class PlaylistGenerator {
  async generatePlaylist(prompt: string): Promise<Song[]> {
    try {
      const results = await searchYoutube(prompt + " song", { 
        maxResults: 5 
      });

      return results.items.map((video) => {
        // Extract artist and title from video title
        const parts = video.title.split(' - ');
        const artist = parts.length > 1 ? parts[0] : 'Unknown';
        const title = parts.length > 1 ? parts[1] : video.title;

        return {
          title: title,
          artist: artist,
          genre: 'Music',
          youtubeUrl: `https://www.youtube.com/watch?v=${video.id}`
        };
      });
    } catch (error) {
      console.error('Error searching YouTube:', error);
      return [
        { title: "Happy", artist: "Pharrell Williams", youtubeUrl: "https://www.youtube.com/watch?v=ZbZSe6N_BXs" },
        { title: "Good Vibrations", artist: "The Beach Boys", youtubeUrl: "https://www.youtube.com/watch?v=Eab_beh07HU" },
        { title: "Walking on Sunshine", artist: "Katrina & The Waves", youtubeUrl: "https://www.youtube.com/watch?v=iPUmE-tne5U" }
      ];
    }
  }
}