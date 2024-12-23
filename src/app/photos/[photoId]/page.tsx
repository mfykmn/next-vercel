import { LikeButton } from '../../../components/elements/LikeButton';

type Props = {
    params: Promise<{photoId: string}>;
}

export default async function Page({params}: Props) {
    const { photoId } = await params;
    return <div>
        <h1>写真詳細画面</h1>
        <p>写真ID: {photoId}</p>
        <LikeButton photoId={photoId} />
    </div>;
}
