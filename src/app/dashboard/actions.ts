"use server";

import { generateBlogPost } from "@/ai/flows/generate-blog-post";
import { checkBlogPostAppropriateness } from "@/ai/flows/check-blog-post-appropriateness";
import { z } from "zod";

const formSchema = z.object({
  topic: z.string().min(5, "Topic must be at least 5 characters long."),
});

export type FormState = {
  status: "idle" | "loading" | "success" | "error";
  message: string;
  data?: {
    title: string;
    content: string;
    isAppropriate: boolean;
    reason: string;
  };
};

export async function generateAndCheckPost(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = formSchema.safeParse({
    topic: formData.get("topic"),
  });

  if (!validatedFields.success) {
    return {
      status: "error",
      message: "Invalid topic. " + validatedFields.error.flatten().fieldErrors.topic?.join(", "),
    };
  }
  
  const topic = validatedFields.data.topic;

  try {
    const blogPost = await generateBlogPost({ topic });
    if (!blogPost || !blogPost.title || !blogPost.content) {
      return { status: "error", message: "Failed to generate blog post content." };
    }

    const appropriateness = await checkBlogPostAppropriateness({
      title: blogPost.title,
      content: blogPost.content,
    });
    
    return {
      status: "success",
      message: "Blog post generated successfully.",
      data: {
        title: blogPost.title,
        content: blogPost.content,
        isAppropriate: appropriateness.isAppropriate,
        reason: appropriateness.reason,
      },
    };

  } catch (error) {
    console.error(error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
    return { status: "error", message: `An error occurred: ${errorMessage}` };
  }
}
