'use server';
/**
 * @fileOverview A blog post appropriateness checker AI agent.
 *
 * - checkBlogPostAppropriateness - A function that determines if a blog post is appropriate for publication.
 * - CheckBlogPostAppropriatenessInput - The input type for the checkBlogPostAppropriateness function.
 * - CheckBlogPostAppropriatenessOutput - The return type for the checkBlogPostAppropriateness function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

export const CheckBlogPostAppropriatenessInputSchema = z.object({
  title: z.string().describe('The title of the blog post.'),
  content: z.string().describe('The content of the blog post.'),
});
export type CheckBlogPostAppropriatenessInput = z.infer<typeof CheckBlogPostAppropriatenessInputSchema>;

export const CheckBlogPostAppropriatenessOutputSchema = z.object({
  isAppropriate: z.boolean().describe('Whether the blog post is appropriate for publication.'),
  reason: z.string().describe('The reason why the blog post is or is not appropriate.'),
});
export type CheckBlogPostAppropriatenessOutput = z.infer<typeof CheckBlogPostAppropriatenessOutputSchema>;

export async function checkBlogPostAppropriateness(input: CheckBlogPostAppropriatenessInput): Promise<CheckBlogPostAppropriatenessOutput> {
  return checkBlogPostAppropriatenessFlow(input);
}

const prompt = ai.definePrompt({
  name: 'checkBlogPostAppropriatenessPrompt',
  input: {schema: CheckBlogPostAppropriatenessInputSchema},
  output: {schema: CheckBlogPostAppropriatenessOutputSchema},
  prompt: `You are a blog post appropriateness checker. You will determine whether a blog post is appropriate for publication based on its title and content.\n\nTitle: {{{title}}}\nContent: {{{content}}}\n\nIs the blog post appropriate for publication? Why or why not? Set the isAppropriate output field appropriately. Always set the reason.`,
});

const checkBlogPostAppropriatenessFlow = ai.defineFlow(
  {
    name: 'checkBlogPostAppropriatenessFlow',
    inputSchema: CheckBlogPostAppropriatenessInputSchema,
    outputSchema: CheckBlogPostAppropriatenessOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
