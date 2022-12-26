import { sanityClient } from './sanity';
import { urlForImage } from './sanity';

export async function fetchPostData(query) {
  const data = await sanityClient.fetch(query);
  return data[0];
}

export async function transformPostData(data) {
  const author = await getAuthorOfPost(data.author._ref);

  const postData = {
    slug: data.slug.current,
    title: data.title,
    coverImageURL: urlForImage(data.coverImage),
    author,
  };

  console.log(postData);
  return postData;
}

async function getAuthorOfPost(reference) {
  const res = await sanityClient.fetch(`*[_id == "${reference}"]`);
  const author = {
    name: res[0].name,
    image: urlForImage(res[0].picture),
  };

  return author;
}