import { ResponseFlags } from '../../resources/enums';

export interface FortniteAPIErrorData {
  status: number;
  error: string;
}

export interface FortniteAPIResponseData {
  status: number;
  data: any;
}

export interface FortniteAPIRequestParams {
  responseFlags?: ResponseFlags;
}
