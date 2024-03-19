"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import axios from "axios";

import { Button } from "./button";
import { Textarea } from "./textarea";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./form";
import { toast } from "react-hot-toast";

const commentSchema = z.object({
  comment: z.string().min(1).max(500),
});

type CommentFormValues = z.infer<typeof commentSchema>;

interface CommentFormProps {
  postId: string;
}

const CommentForm: React.FC<CommentFormProps> = ({ postId }) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const form = useForm<CommentFormValues>({
    resolver: zodResolver(commentSchema),
  });

  const onSubmit = async (data: CommentFormValues) => {
    console.log(data);
    try {
      setLoading(true);
      await axios.post(`/api/comments`, {
        ...data,
        postId: postId,
      });
      toast.success("Comment was created");
      router.refresh();
    } catch (error: any) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-columbia-blue text-3xl font-semibold mt-4 mb-5">
        Leave a comment
      </h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    className={`min-h-[160px] bg-oxford-blue-2 border-prussian-blue p-[20px] text-lg rounded-[16px] focus:outline-none focus:border-wild-blue-yonder ${
                      form.formState.errors.comment ? "border-red-500" : ""
                    }`}
                    placeholder="Write a comment."
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <div className="w-full flex justify-end mt-4">
            <Button
              type="submit"
              size="sm"
              className="btn mt-4 mr-0 text-white text-sm font-semibold p-4"
              disabled={loading}
            >
              Post Comment
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CommentForm;
