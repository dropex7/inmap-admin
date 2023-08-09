import LoginForm from "./LoginForm";
import { useAuth } from "../../hooks/useAuth";

export function Component() {
  const { auth } = useAuth();
  console.log(auth);
  return (
    <section className="grid min-h-screen place-content-center">
      <div className="flex flex-col gap-y-4 rounded-lg border bg-white p-4">
        <LoginForm />
      </div>
    </section>
  );
}
