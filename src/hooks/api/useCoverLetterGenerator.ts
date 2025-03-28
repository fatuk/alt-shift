import { useMutation } from "@tanstack/react-query";
import { openai } from "helpers/openaiClient";
import { useApplicationsStore } from "stores/useApplicationsStore";

type CoverLetterInput = {
  jobTitle: string;
  company: string;
  goodAt: string;
  details: string;
};

const generateCoverLetter = async ({
  jobTitle,
  company,
  goodAt,
  details,
}: CoverLetterInput): Promise<string> => {
  const prompt = `
You are a helpful assistant that generates professional, personalized cover letters in English.

Based on the user inputs below, write a concise and engaging cover letter that is suitable for submitting to a company. The tone should be confident, enthusiastic, and natural — avoid repeating the same structure every time.

User inputs:
- Job Title: ${jobTitle}
- Company: ${company}
- Strengths / Skills: ${goodAt}
- Additional Details: ${details}

Guidelines:
- Start with a professional greeting.
- Mention the role and company naturally in the introduction.
- Highlight the candidate's relevant strengths and enthusiasm for the position.
- Incorporate the additional details as appropriate.
- Close with a polite and optimistic ending.

Avoid generic phrases. Vary the sentence structure and wording to make each letter feel unique and human-written.

Don't use any other information than the provided user inputs.

Return only the final letter text.
`.trim();

  const response = await openai.post("/chat/completions", {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
    temperature: 0.7,
  });

  return response.data.choices[0].message.content;
};

export const useCoverLetterGenerator = () => {
  const { addApplication } = useApplicationsStore();

  return useMutation({
    mutationFn: generateCoverLetter,
    onSuccess: (data) => {
      addApplication(data);
    },
  });
};
