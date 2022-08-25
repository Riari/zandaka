import { error, json } from '@sveltejs/kit';
import type { RequestContext } from '$lib/types';

interface ExamplePayload {
  body: string
};
 
/** @type {import('./$types').RequestHandler} */
export function GET({ url }: RequestContext) {
  let payload: ExamplePayload = { body: "Example payload" };
  return json(payload);
}