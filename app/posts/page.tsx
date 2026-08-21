export const revalidate = 60;

type BlogPostProps = {
    params: {
        slug: string;
    };
};

export default async function BlogPost({ params }: BlogPostProps) {
    const { slug } = params;

    const res = await fetch(`https://api.example.com/posts/${slug}`, {
        next: { revalidate: 60 }
    });
    const post = await res.json();

    return (
        <article>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </article>
    );
}