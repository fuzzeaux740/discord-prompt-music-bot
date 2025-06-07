declare module 'youtube-search-api' {
  interface YouTubeVideo {
    id: string;
    title: string;
    description: string;
    duration: string;
    thumbnail: {
      url: string;
      width: number;
      height: number;
    };
  }

  interface SearchOptions {
    maxResults?: number;
    type?: string;
  }

  interface SearchResponse {
    items: YouTubeVideo[];
    nextPage?: {
      nextPage: string;
    };
  }

  export function searchYoutube(
    query: string, 
    options?: SearchOptions
  ): Promise<SearchResponse>;
}