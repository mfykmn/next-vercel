"use client";

export default function GrobalError({ 
    error, 
    reset 
}: {
    error: Error & { digest?: string};
    reset: () => void;
}) {
    return (
        <html>
            <body>
                <h2>Something went wrong!</h2>
                <button onClick={() => reset()}>Try Again</button>
            </body>
        </html>
    )
}
