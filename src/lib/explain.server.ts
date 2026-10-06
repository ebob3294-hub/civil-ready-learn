import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";

const RUN_ID = "X-Lovable-AIG-Run-ID";

export async function explainTopic(question: string, lang: "fr" | "ar") {
  const apiKey = process.env.LOVABLE_API_KEY;
  if (!apiKey) throw new Error("Configuration IA manquante.");
  let runId: string | undefined;
  const provider = createOpenAI({
    baseURL: "https://ai.gateway.lovable.dev/v1",
    apiKey,
    headers: { "Lovable-API-Key": apiKey, "X-Lovable-AIG-SDK": "vercel-ai-sdk" },
    fetch: async (input, init) => {
      const headers = new Headers(init?.headers);
      if (runId) headers.set(RUN_ID, runId);
      const res = await fetch(input, { ...init, headers });
      runId ??= res.headers.get(RUN_ID) ?? undefined;
      if (!res.ok) {
        const msg =
          res.status === 429
            ? "Trop de demandes, réessayez dans un moment."
            : res.status === 402 || res.status === 403
              ? "Crédits IA épuisés ou accès bloqué."
              : `Erreur du service IA (${res.status}).`;
        throw new Error(msg);
      }
      return res;
    },
  });
  const language = lang === "ar" ? "l'arabe" : "le français";
  const result = streamText({
    model: provider.responses("openai/gpt-6-astra"),
    system: `Tu es un formateur expert de la Protection Civile / sapeurs-pompiers. Un stagiaire te soumet une question de QCM qu'il a ratée ou un sujet à clarifier. Réponds en ${language}, en Markdown simple, en moins de 250 mots, avec trois sections : "Explication simple", "À retenir" (3 à 5 puces), "Conseil de révision". Reste conforme aux doctrines opérationnelles et à la sécurité. Si la question est hors sujet, recentre poliment sur la formation.`,
    messages: [{ role: "user", content: question }],
    providerOptions: {
      openai: {
        store: false,
        forceReasoning: true,
        reasoningEffort: "low",
        reasoningSummary: "auto",
        include: ["reasoning.encrypted_content"],
      },
    },
  });
  return await result.text;
}
