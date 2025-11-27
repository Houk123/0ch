export interface CreateBoardData {
  name: string;
  url: string;
  description?: string;
}

export interface UpdateBoardData {
  name?: string;
  url?: string;
  description?: string;
  isActive?: boolean;
}

export interface BoardQuery {
  limit?: string;
  offset?: string;
  name?: string;
}

export interface ControllerResponse {
  status: number;
  data?: any;
  error?: string;
}