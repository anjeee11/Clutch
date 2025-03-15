import { Inngest } from "inngest";

//Create a client to send and recieve events
export const inngest = new Inngest({
  id: "clutch",
  name: "Clutch",
  retryFunction: async (attempt) => ({
    delay: Math.pow(2, attempt) * 1000,
    maxAttempts: 2,
  }),
});
