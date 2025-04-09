import { Dealer } from "@/app/dealers/page";
import { makeQuery } from "@/db";

export type DealerContactClickRequest = {
  token: string;
  dealers: Dealer[];
  customer_location: google.maps.places.PlaceResult;
  customer_info: {
    [key: string]: string;
  };
};

export async function POST(req: Request) {
  const body = (await req.json()) as DealerContactClickRequest;
  if (!body.token)
    return new Response(JSON.stringify({ error: "no token" }), { status: 400 });

  const tokenResponse = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA}&response=${body.token}`,
    { method: "POST" }
  );
  const { score } = await tokenResponse.json();
  if (score < 0.5)
    return new Response(JSON.stringify({ error: "Are you a bot?" }), {
      status: 401,
    });

  await Promise.all(
    body.dealers.map(async (dealer) => {
      await makeQuery(
        `
    INSERT INTO dealer_click_events
    (dealer_id, event_type, customer_info, additional_info)
    VALUES (?, ?, ?, ?);
    `,
        [dealer.id, 1, body.customer_info, body.customer_location]
      );
    })
  );

  // TODO: Send email to customer
  return new Response(JSON.stringify({ value: "saved into db" }));
}
