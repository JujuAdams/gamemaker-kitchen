export const url = "/search.json";

export default function ({ search }, { url }) {
  const result = [];
  
  // Search tags from libraries
  for (const tag of search.tags("type=lib")) {
    result.push({
      label: `Tag: ${tag}`,
      search: tag,
      value: url(`/tags/${tag}/`),
    });
  }
  
  // Search libraries
  for (const lib of search.pages("type=lib")) {
    result.push({
      label: `Lib: ${lib.data.title}`,
      search: `${lib.data.title} ${lib.data.tags.join(" ")}`,
      value: url(lib.data.url),
    });
  }
  
  // Search authors
  for (const author of search.pages("type=author")) {
    result.push({
      label: `Author: ${author.data.name}`,
      search: `${author.data.title} ${author.data.tags.join(" ")}`,
      value: url(author.data.url),
    });
  }

  // Search tags from posts
  for (const tag of search.tags("type=posts")) {
    result.push({
      label: `Tag: ${tag}`,
      search: tag,
      value: url(`/tags/${tag}/`),
    });
  }

  // Search posts
  for (const post of search.pages("type=posts")) {
    result.push({
	label: `Post: ${post.data.title}`,
      search: `${post.data.title} ${post.data.tags.join(" ")}`,
      value: url(post.data.url),
    });
  }

  return JSON.stringify(result);
}



  // Search authors 
  /*for (const author of { site }.site.getAuthors()) {
	for (const page of getAuthorPages(author)) {
	result.push({
      label: `Author: ${author}`,
      search: author,
      value: url(`/authors/${author}/`),
    });
	}
  }*/