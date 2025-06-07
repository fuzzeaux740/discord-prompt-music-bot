import { searchYoutube, YouTubeVideo, SearchResults } from 'youtube-search-api';

export interface Song {
  title: string;
  artist: string;
  genre?: string;
  youtubeUrl?: string;
}

export class PlaylistGenerator {
  async generatePlaylist(prompt: string): Promise<Song[]> {
    try {
      console.log(`Searching YouTube for: "${prompt} music"`);
      
      const results = await searchYoutube(`${prompt} music`, { 
        maxResults: 5,
        type: 'video'
      });

      // Log the raw results to see what we're getting back
      console.log('YouTube API Response:', JSON.stringify(results, null, 2));

      if (!results || !results.items || results.items.length === 0) {
        throw new Error('No results found from YouTube search');
      }

      const songs = results.items.map((video: YouTubeVideo) => {
        const parts = video.title.split(' - ');
        const artist = parts.length > 1 ? parts[0].trim() : 'Unknown';
        const title = parts.length > 1 ? parts[1].trim() : video.title;

        const song = {
          title: title,
          artist: artist,
          genre: 'Music',
          youtubeUrl: `https://www.youtube.com/watch?v=${video.id}`
        };
        console.log('Processed song:', song);
        return song;
      });

      return songs;

    } catch (error) {
      console.error('YouTube search error details:', error);
      if (error instanceof Error) {
        console.error('Error message:', error.message);
        console.error('Stack trace:', error.stack);
      }
      // Re-throw the error instead of returning mock songs
      throw error;
    }
  }
}