export interface IMeta {
  pagination: {
    total: number;
    pages: number;
    page: number;
    limit: number;
    links: {
      previous: string | null;
      current: string;
      next: string;
    };
  };
}
