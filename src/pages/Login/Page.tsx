import LoginForm from './LoginForm';

export function Component() {
    return (
        <section className="grid min-h-screen place-content-center bg-zinc-800">
            <div className="flex w-80 flex-col gap-y-4 rounded-lg bg-zinc-900 p-6">
                <LoginForm />
            </div>
        </section>
    );
}
