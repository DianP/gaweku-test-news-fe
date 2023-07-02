export interface NewsResponse {
  status: string;
  code: number;
  data: NewsData[];
}

export interface NewsData {
  title: string;
  description: string;
  snipppet: string;
  source: string;
  author: string;
  url: string;
  thumbnail: string;
  publishedAt: string;
}

export interface NewsMeta {
  meta: {
    totalResults: number;
    page: number;
    pageCount: number;
  };
}
