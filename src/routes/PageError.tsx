import {isRouteErrorResponse, useRouteError} from 'react-router-dom';

export default function PageError() {
    const error = useRouteError();

    return (
        <section className="m-8 bg-red-300 p-4">
            {isRouteErrorResponse(error) ? (
                <h1>
                    {error.status}: {error.statusText}
                </h1>
            ) : error instanceof Error ? (
                <h1>{error.message}</h1>
            ) : (
                typeof error === 'string' && <h1>{error}</h1>
            )}
        </section>
    );
}
