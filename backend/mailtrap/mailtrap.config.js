import dotenv from "dotenv";
import { MailtrapClient } from "mailtrap";

dotenv.config();

const TOKEN = process.env.MAILTRAP_TOKEN || "97178a552df12850de6c6c36eb4344b9";
const ENDPOINT =
  process.env.MAILTRAP_ENDPOINT || "https://send.api.mailtrap.io/";

if (!TOKEN || !ENDPOINT) {
  throw new Error(
    "MAILTRAP_TOKEN and MAILTRAP_ENDPOINT must be defined in the environment variables"
  );
}

export const mailtrapClient = new MailtrapClient({
  endpoint: ENDPOINT,
  token: TOKEN,
});

export const sender = {
  email: "mailtrap@demomailtrap.com",
  name: "Mailtrap Demo",
};
