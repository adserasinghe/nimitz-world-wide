import { config } from 'dotenv';
config();

import '@/ai/flows/check-blog-post-appropriateness.ts';
import '@/ai/flows/generate-blog-post.ts';