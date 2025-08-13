
'use client';

import {useFormState, useFormStatus} from 'react-dom';
import {generateAndCheckPost, FormState} from '@/app/dashboard/actions';
import {Button} from '@/components/ui/button';
import {Textarea} from '@/components/ui/textarea';
import {Label} from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {Alert, AlertDescription, AlertTitle} from '@/components/ui/alert';
import {
  CheckCircle2,
  Loader2,
  AlertCircle,
  ThumbsUp,
  ThumbsDown,
  Eye,
} from 'lucide-react';
import {useEffect, useRef, useState} from 'react';
import {useToast} from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const initialState: FormState = {
  status: 'idle',
  message: '',
};

function SubmitButton() {
  const {pending} = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {pending ? 'Generating...' : 'Generate and Save Post'}
    </Button>
  );
}

export function BlogGenerator() {
  const [state, formAction] = useFormState(generateAndCheckPost, initialState);
  const {toast} = useToast();
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [result, setResult] = useState<FormState['data']>();

  useEffect(() => {
    if (state.status === 'error') {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.message,
      });
      setResult(undefined);
    } else if (state.status === 'success' && state.data) {
        formRef.current?.reset();
        if (state.data.isAppropriate && state.data.slug) {
             toast({
                title: 'Success!',
                description: 'Post generated and saved. Redirecting...',
             });
             router.push(`/blog/${state.data.slug}`);
        } else {
            // if not appropriate, just show the content but don't save or redirect
            setResult(state.data);
        }
    }
  }, [state, toast, router]);

  return (
    <div className="space-y-8">
      <Card>
        <CardContent className="pt-6">
          <form ref={formRef} action={formAction} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="topic">Blog Post Topic</Label>
              <Textarea
                id="topic"
                name="topic"
                placeholder="e.g., 'The benefits of Next.js for modern web apps'"
                required
                rows={3}
              />
            </div>
            <SubmitButton />
          </form>
        </CardContent>
      </Card>

      {result && !result.slug && (
        <Card key={state.key} className="animate-in fade-in-50 duration-500">
          <CardHeader>
            <CardTitle className="font-headline text-3xl">
              {result.title}
            </CardTitle>
            <CardDescription>Generated Blog Post Draft</CardDescription>
          </CardHeader>
          <CardContent>
            <Alert
              variant={result.isAppropriate ? 'default' : 'destructive'}
              className="mb-6"
            >
              {result.isAppropriate ? (
                <ThumbsUp className="h-4 w-4" />
              ) : (
                <ThumbsDown className="h-4 w-4" />
              )}
              <AlertTitle>
                {result.isAppropriate
                  ? 'Content is Appropriate'
                  : 'Content Warning'}
              </AlertTitle>
              <AlertDescription>{result.reason}</AlertDescription>
            </Alert>
            <div
              className="text-foreground/80 space-y-4"
              dangerouslySetInnerHTML={{
                __html: result.content.replace(/\n/g, '<br />'),
              }}
            />
          </CardContent>
          <CardFooter>
             <Button disabled>
                <CheckCircle2 className="mr-2 h-4 w-4" />
                Post Not Saved
            </Button>
          </CardFooter>
        </Card>
      )}

      {state.status === 'error' && state.message && !result && (
        <Alert
          key={state.key}
          variant="destructive"
          className="animate-in fade-in-50 duration-500"
        >
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Generation Failed</AlertTitle>
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      )}
    </div>
  );
}
