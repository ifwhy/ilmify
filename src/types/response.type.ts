import type { ContentfulStatusCode } from "hono/utils/http-status";

export type Response = {
  properties: ResponseProperties;
  statusCode: ContentfulStatusCode;
};

export type ResponseProperties = {
  success: boolean;
  message: string;
  data?: any;
};
