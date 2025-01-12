"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { CardWrapper } from "./card-wrapper";

import { Input } from "../ui/input";

import { LoginSchema } from "@/schemas";
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-succes";
import { login } from "@/actions/login";

export const  LoginForm= () => {
    
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email:"",
            password:""
        }
    })

    const onSubmit = (values: z.infer<typeof LoginSchema>) =>{
       login(values);
        
    }
    
    return (
        <CardWrapper
            headerLabel="Welcome back"
            backButtonHref="/auth/register"
            backButtonLabel="Don't have an account !"
            showSocial
        >
            <Form {...form}>
                <form 
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                >
                    <div className="sapce-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input 
                                            {...field}
                                            placeholder="hammadi.developer@exemple.com" 
                                            type="email"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input 
                                            {...field}
                                            placeholder="******" 
                                            type="password"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    {/* <FormError message="Somthing went wrong!" /> */}
                    {/* <FormSuccess message="Somthing went wrong!" /> */}
                    <Button
                        type="submit"
                        className="w-full"
                    >
                        Login
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    );
}