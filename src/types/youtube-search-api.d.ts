declare module 'youtube-search-api' {
  export interface YouTubeVideo {
    id: string;
    title: string;
    description?: string;
    thumbnail?: {
      url: string;
      width: number;
      height: number;
    };
  }

  export interface SearchResults {
    items: YouTubeVideo[];
  }

  export function searchYoutube(
    query: string, 
    options?: { maxResults?: number; type?: string }
  ): Promise<SearchResults>;
}