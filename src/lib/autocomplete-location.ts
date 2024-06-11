export const API_KEY = 'AIzaSyBiMnzf_ySxoa3Bq6qxHgue7DtftZUsjkk';

const API_URL = 'https://maps.googleapis.com/maps/api/place/autocomplete/json';
export async function autocompleteLocation(value: string): Promise<Array<string>> {
  const url = new URL(API_URL);
  url.searchParams.set('input', value);
  url.searchParams.set('components', 'country:es');
  url.searchParams.set('radius', '500');
  url.searchParams.set('key', API_KEY);
  const response = await fetch(url.toString());
  console.log(response);
  return []
}