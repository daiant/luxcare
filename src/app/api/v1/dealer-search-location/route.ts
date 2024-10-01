import { makeQuery } from "@/db";

export async function POST(req: Request) {
	const getDealers = () => {
		return makeQuery(`SELECT 
			id,
			name, 
			type,
			website,
			description,
			timetable,
			direction,
			latitude,
			longitude
		FROM dealers;`)
	}

	const body = await req.json()
	if (!body.token) return new Response(JSON.stringify({ error: "no token" }), { status: 400 });
	if (!body.value?.name) return new Response(JSON.stringify({ error: 'no location name' }), { status: 400 });

	const tokenResponse = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA}&response=${body.token}`, { method: "POST" })
	const { score } = await tokenResponse.json()
	if (score < 0.5) return new Response(JSON.stringify({ error: "Are you a bot?" }), { status: 401 });

	makeQuery(`INSERT INTO dealer_search_locations
						(search_string, additional_info) VALUES
						('${body?.value?.name ?? 'noinfo'} ', '${JSON.stringify(body?.value ?? {})}');`);

	return new Response(JSON.stringify({ value: await getDealers() }));
}

