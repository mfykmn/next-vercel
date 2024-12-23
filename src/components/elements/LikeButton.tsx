"use client";

export function LikeButton({photoId}: {photoId: string}) {
    return (
        <button
            onClick={() => {
                console.log(`いいねされました${photoId}`);
            }}
        >
            いいね
        </button>
    );
}
