/**
 * WordPress Composables
 * A collection of WordPress composable functions.
 */

import { ApiRoutes } from "~/constant/ApiRoutes";
import type { Project } from "~/types/project";
import type { ShortLink } from "~/types/short_link";

export default () => {
  async function get<T>(endpoint: string) {
    return useFetch<T>(
      `${useRuntimeConfig().public.WPUrl}/wp-json/wp/v2/${endpoint}`
    );
  }

  async function getLink(slug: string) {
    return get<ShortLink[]>(ApiRoutes.links.show(slug));
  }

  async function getPosts(
    category?: number,
    page: number = 1,
    perPgae: number = 20,
    fields: string = "author,id,excerpt,title,link,slug,date"
  ) {
    return get(ApiRoutes.posts.index(page, perPgae, category));
  }

  async function getPost(slug: string) {
    return get(ApiRoutes.posts.show(slug));
  }

  async function getCatgories(fields: string = "name,slug,count") {
    return get<any>(ApiRoutes.categories.index());
  }

  async function getCatgory(slug: string) {
    return get<any>(ApiRoutes.categories.show(slug));
  }

  async function getProjects(
    category?: number,
    page: number = 1,
    perPgae: number = 20,
    fields: string = "author,id,excerpt,title,link,slug,date"
  ) {
    return get<Project[]>(ApiRoutes.projects.index(page, perPgae, category));
  }

  async function getProject(slug: string) {
    return get<Project>(ApiRoutes.projects.show(slug));
  }

  return {
    get,
    getPosts,
    getPost,
    getCatgories,
    getCatgory,
    getLink,
    getProjects,
    getProject,
  };
};
