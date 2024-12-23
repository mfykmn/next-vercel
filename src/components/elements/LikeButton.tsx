"use client";

export function LikeButton({photoId}: {photoId: string}) {
    return (
        <button
            onClick={() => {
                console.log("いいねされました");
            }}
        >
            いいね
        </button>
    );
}
