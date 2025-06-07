declare module 'youtube-search-api' {
  export interface YouTubeVideo {
    id: string;
    title: string;
    description?: string;
    duration?: string;
    thumbnail?: {
      url: string;
      width: number;
      height: number;
    };
  }

  export interface SearchResults {
    items: YouTubeVideo[];
    nextPage?: {
      nextPage: string;
    };
  }

  export function searchYoutube(
    query: string, 
    options?: { 
      maxResults?: number; 
      type?: 'video' | 'playlist' | 'channel';
    }
  ): Promise<SearchResults>;
}