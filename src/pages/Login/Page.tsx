import LoginForm from './LoginForm';

export function Component() {
    return (
        <section className="grid min-h-screen place-content-center">
            <div className="flex w-80 flex-col gap-y-4 rounded-lg border bg-white p-6">
                <LoginForm />
            </div>
        </section>
    );
}
