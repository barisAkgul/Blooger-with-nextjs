"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Trash } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/ui/heading";
import { AlertModal } from "@/components/modals/alert-modal";
import { User } from "@prisma/client";
import ImageUpload from "@/components/ui/image-upload-with-button";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  name: z.string().min(2),
  img: z.string().optional(),
  email: z.string().email(),
  isAdmin: z.boolean().default(false).optional(),
  password: z
    .string()
    .refine(
      (value) => {
        if (value === "") return true;

        return value.length >= 5 && value.length <= 20;
      },
      { message: "Password must be between 5 and 20 characters longg." }
    )
    .optional(),
});

type UserFormValues = z.infer<typeof formSchema>;

interface UserFormProps {
  initialData: User | null;
}

export const UserForm: React.FC<UserFormProps> = ({ initialData }) => {
  const params = useParams();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const title = initialData ? "Edit  user" : "Create  user";
  const description = initialData ? "Edit a user." : "Add a new  user";
  const toastMessage = initialData ? "User updated." : "User created.";
  const action = initialData ? "Save changes" : "Create";

  const form = useForm<UserFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData
      ? {
          name: initialData.name || "",
          img: initialData.img || "",
          email: initialData.email || "",
          password: "",
          isAdmin: initialData.isAdmin || false,
        }
      : {
          name: "",
          email: "",
          img: "",
          password: "",
          isAdmin: false,
        },
  });

  const onSubmit = async (data: UserFormValues) => {
    try {
      setLoading(true);

      if (initialData) {
        await axios.patch(`/api/users/${params.userId}`, data);
      } else {
        /*
         *If password field is empty, set error message
         *Since there are separate validations in create and edit scenarios, this condition has been checked here
         */
        if (!data.password) {
          form.setError("password", {
            type: "required",
            message: "password is required",
          });
          return;
        }
        await axios.post(`/api/users`, data);
      }

      router.push(`/dashboard/users`);
      toast.success(toastMessage);
      router.refresh();
    } catch (error: any) {
      toast.error("Something went wrong.", error.message);
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/users/${params.userId}`);
      router.push(`/dashboard/users`);
      toast.success("User deleted.");
      router.refresh();
    } catch (error: any) {
      toast.error("Error while deleting user.");
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <div className="flex items-center justify-between">
        <Heading title={title} description={description} />
        {initialData && (
          <Button
            disabled={loading}
            variant="destructive"
            size="sm"
            onClick={() => setOpen(true)}
          >
            <Trash className="h-4 w-4" />
          </Button>
        )}
      </div>
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <div className="flex flex-col md:flex-row gap-20">
            <FormField
              control={form.control}
              name="img"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category image</FormLabel>
                  <FormControl>
                    <ImageUpload
                      value={field.value ? [field.value] : []}
                      disabled={loading}
                      onChange={(url) => field.onChange(url)}
                      onRemove={() => field.onChange("")}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid gap-6 flex-1">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        className={"max-w-md"}
                        disabled={loading}
                        placeholder="User name"
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        className={"max-w-md"}
                        disabled={loading}
                        placeholder="User email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={"password"}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        className={"max-w-md"}
                        disabled={loading}
                        placeholder="User password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="isAdmin"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 max-w-md">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        // @ts-ignore
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Admin</FormLabel>
                      <FormDescription>
                        This user will have Admin privilege.
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Button disabled={loading} className="ml-auto" type="submit">
            {action}
          </Button>
        </form>
      </Form>
      <Separator />
    </>
  );
};
