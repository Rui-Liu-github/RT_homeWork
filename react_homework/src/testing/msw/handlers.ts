import { HttpResponse, http } from "msw";
import mockCharacters from "../mock/day22Mock/characters";
import mockCharacters2 from "../mock/day22Mock/characters-2";

export const handlers = [
  // implements your handlers
  http.get(
    "https://www.anapioficeandfire.com/api/characters",
    ({ request }) => {
      const page = new URL(request.url).searchParams.get("page");
      if (page === "1") {
        return HttpResponse.json(mockCharacters);
      } else if (page === "2") {
        return HttpResponse.json(mockCharacters2);
      }
    }
  ),
];