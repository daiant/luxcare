// import { makeQuery } from "@/db";

export async function GET() {
  // mailer.sendMail({
  //   from: 'web@luxcare.es',
  //   to: 'cmg2512@gmail.com',
  //   subject: 'hola holita',
  //   html: '<p>Soy un testo</p>'
  // });
  // console.log("Run migrations...");
  // await makeMigrations();
  // console.log("Done");
  return new Response(
    JSON.stringify({
      msg: `await makeQuery('SELECT * from customer_contacts')`,
    })
  );
}
