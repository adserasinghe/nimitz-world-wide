"use client";

import { useFormState, useFormStatus } from "react-dom";
import { generateAndCheckPost, FormState } from "@/app/dashboard/actions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2, Loader2, AlertCircle, ThumbsUp, ThumbsDown } from "lucide-react";
import { useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";

const initialState: FormState = {
  status: "idle",
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {pending ? "Generating..." : "Generate Post"}
    </Button>
  );
}

export function BlogGenerator() {
  const [state, formAction] = useFormState(generateAndCheckPost, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "error") {
      toast({
        variant: "destructive",
        title: "Error",
        description: state.message,
      });
    } else if (state.status === 'success') {
      formRef.current?.reset();
    }
  }, [state, toast]);


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

      {state.status === 'success' && state.data && (
        <Card className="animate-in fade-in-50 duration-500">
          <CardHeader>
            <CardTitle className="font-headline text-3xl">{state.data.title}</CardTitle>
            <CardDescription>Generated Blog Post Draft</CardDescription>
          </CardHeader>
          <CardContent>
            <Alert variant={state.data.isAppropriate ? "default" : "destructive"} className="mb-6">
              {state.data.isAppropriate ? (
                <ThumbsUp className="h-4 w-4" />
              ) : (
                <ThumbsDown className="h-4 w-4" />
              )}
              <AlertTitle>{state.data.isAppropriate ? "Content is Appropriate" : "Content Warning"}</AlertTitle>
              <AlertDescription>{state.data.reason}</AlertDescription>
            </Alert>
            <div
              className="text-foreground/80 space-y-4"
              dangerouslySetInnerHTML={{ __html: state.data.content.replace(/\n/g, '<br />') }}
            />
          </CardContent>
          <CardFooter>
            <Button disabled={!state.data.isAppropriate} onClick={() => toast({ title: "Published!", description: "This is a demo. The post has not been saved."})}>
              <CheckCircle2 className="mr-2 h-4 w-4" />
              Publish Post
            </Button>
          </CardFooter>
        </Card>
      )}

      {state.status === 'error' && state.message && (
        <Alert variant="destructive" className="animate-in fade-in-50 duration-500">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Generation Failed</AlertTitle>
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      )}

    </div>
  );
}
