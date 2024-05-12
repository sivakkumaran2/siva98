import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
export function Login() {
  return (
    <Card className="mx-auto max-w-sm ">
      <CardHeader>
        <CardTitle className="text-xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-full">
          <div className="flex py-2">
            <div className="mx-auto grid w-[350px] gap-6">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <div className="flex">
                    <Label htmlFor="email">Email</Label>
                  </div>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <Input id="password" type="password" required />
                  <Link
                    to="/forgot-password"
                    className="ml-auto inline-block text-sm underline"
                  >
                    {" "}
                    Forgot your password?{" "}
                  </Link>
                </div>
                <Link to="/dashboard">
                  <Button type="submit" className="w-full">
                    Login
                  </Button>
                </Link>
                <Button variant="outline" className="w-full">
                  Login with Google
                </Button>
              </div>
              <div className="mt-4 text-sm">
                Don&apos;t have an account? <Link to="/sign-up">Sign up</Link>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
export default Login;
