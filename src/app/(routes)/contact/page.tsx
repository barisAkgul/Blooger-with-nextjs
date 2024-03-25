"use client";

import * as z from "zod";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useParams, useRouter, usePathname } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/ui/heading";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name field cannot be empty." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, {
    message: "Please enter a valid phone number.",
  }),
  subject: z.string().min(1, { message: "Subject field cannot be empty." }),
  message: z.string().min(1, { message: "Message field cannot be empty." }),
});
type ContactPageValues = z.infer<typeof formSchema>;

interface ContactPageProps {}

const ContactPage: React.FC<ContactPageProps> = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const defaultValues = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  const form = useForm<ContactPageValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = async (data: ContactPageValues) => {
    try {
      setLoading(true);

      console.log(data);

      toast.success("Succesfull");
      router.refresh();
    } catch (error: any) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-10 flex flex-col items-center  mb-16">
      <div className="flex items-center justify-between ">
        <Heading title="Contact us" description="" variant="landing" />
      </div>
      <Separator className="mb-10 mt-[-20px]" />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <div className="md:grid md:grid-cols-2 gap-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name*</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Name"
                      className=" bg-oxford-blue-2"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email*</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Email"
                      className=" bg-oxford-blue-2"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="md:grid md:grid-cols-2 gap-8">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone*</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Phone"
                      className=" bg-oxford-blue-2"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject*</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Subject"
                      className=" bg-oxford-blue-2"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message*</FormLabel>
                <FormControl>
                  <Textarea
                    className={`min-h-[160px] bg-oxford-blue-2 border-prussian-blue p-[20px] text-lg rounded-[16px] focus:outline-none focus:border-wild-blue-yonder ${
                      form.formState.errors.message ? "border-red-500" : ""
                    }`}
                    placeholder="Message"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          <Button
            disabled={loading}
            className="btn max-w-full w-full"
            type="submit"
          >
            Send Messages
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactPage;
