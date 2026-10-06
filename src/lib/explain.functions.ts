import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const explain = createServerFn({ method: "POST" })
  .inputValidator((d) =>
    z.object({ question: z.string().trim().min(3).max(2000), lang: z.enum(["fr", "ar"]) }).parse(d),
  )
  .handler(async ({ data }) => {
    const { explainTopic } = await import("./explain.server");
    try {
      return { text: await explainTopic(data.question, data.lang), error: null as string | null };
    } catch (e) {
      return { text: "", error: e instanceof Error ? e.message : "Erreur inconnue" };
    }
  });
