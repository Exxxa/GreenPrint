import { pb } from "$lib/pocketbase";

/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
  return {
    idea: await pb.collection('idea').getOne('m2gl5ml0tsrtpah'), // Récup une liste par page
  }
}
