import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { SignUpValidation } from "@/lib/validation";
import { Link, useNavigate } from "react-router-dom";


const SignUpForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  

const form = useForm<z.infer<typeof SignUpValidation>>({
  resolver: zodResolver(SignUpValidation),
  defaultValues: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    location: ''
  },
});


async function onSubmit(values: z.infer<typeof SignUpValidation>) {
  const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("firstName", values.firstName);
    urlencoded.append("lastName", values.lastName);
    urlencoded.append("email", values.email);
    urlencoded.append("password", values.password)
    urlencoded.append("location", values.location);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
    };
    try {
      const newUser = await fetch("http://localhost:8080/auth/register", requestOptions)
      if (!newUser) {
        return toast({ title: "Sign up failed. Please try again." })
      } else {
        navigate('/sign-in')
      }
    } catch (error) {
      console.log(error)
    }   
};

  return (
    <div className="flex flex-col lg:h-screen lg:w-screen items-center p-10 justify-center">
       <Form {...form} >
      <div className="flex justify-center items-center mt-6 flex-col">
        <h1 className="text-6xl text-[#01F9C6] items-center p-2">FriendS</h1>
        <h2 className="h3-bold md:h2-bold pt-2 sm:pt-4">Create a new account</h2>
        <p className="text-light-3 small-medium 
        md:base-regular mt-2">To use FriendS, please enter your details</p>
     
    <form onSubmit={form.handleSubmit(onSubmit)} 
    className="flex flex-col gap-5 w-full mt-4">
      <FormField
        control={form.control}
        name="firstName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>First Name</FormLabel>
            <FormControl>
              <Input type="text" className="shad-input rounded-full"{...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="lastName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Last Name</FormLabel>
            <FormControl>
              <Input type="text" className="shad-input rounded-full"{...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
       <FormField
        control={form.control}
        name="location"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Location</FormLabel>
            <FormControl>
              <Input type="text" className="shad-input rounded-full"{...field} />
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
              <Input type="email" className="shad-input rounded-full"{...field} />
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
              <Input type="password" className="shad-input rounded-full"{...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit"
      className="shad-button_primary">
        SignUp
      </Button>
      <p className="text-small-regular text-light-3 text-center mt-2">
        Already have an account?
        <Link to="/sign-in"
        className="text-[#93FFE8] text-small-semibold ml-1"> Log in</Link>
      </p>
    </form>
    </div>
  </Form>
 </div>
 )
}

export default SignUpForm;
