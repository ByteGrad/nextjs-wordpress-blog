export async function generateStaticParams() {
  const res = await fetch(`${process.env.WP_API_URL}/posts`);
  const data = await res.json();

  const postSlugs = data.map((post: { slug: string }) => ({ slug: post.slug }));

  return postSlugs;
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const res = await fetch(
    `${process.env.WP_API_URL}/posts?slug=${params.slug}`
  );
  const data = await res.json();

  return (
    <main className="px-7 pt-24 text-center">
      <h1 className="text-5xl font-semibold mb-7">{data[0].title.rendered}</h1>
      <div
        className="max-w-[700px] mx-auto"
        dangerouslySetInnerHTML={{ __html: data[0].content.rendered }}
      />
    </main>
  );
}
