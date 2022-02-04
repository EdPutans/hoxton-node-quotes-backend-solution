import { Request as ExpressRequest } from "express";

export type Quote = {
  quote: string;
  id: number;
  person: {
    first_name: string;
    last_name: string;
    age: number;
    image_url: string;
  };
};


export type Request = ExpressRequest<
  { id: string },
  any,
  Pick<Quote, "quote"> & Quote["person"]
>;
