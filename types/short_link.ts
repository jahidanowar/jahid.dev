export interface ShortLink {
  id: number;
  date: Date;
  date_gmt: Date;
  guid: GUID;
  modified: Date;
  modified_gmt: Date;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: GUID;
  parent: number;
  template: string;
  meta: Meta;
  _ta_destination_url: string;
  _ta_rel_tags: string;
  _ta_redirect_type: string;
  _ta_no_follow: string;
  _ta_new_window: string;
  _ta_uncloak_link: string;
  _ta_pass_query_str: string;
  _ta_image_ids: any[];
  _ta_categories: number[];
  _ta_category_slug: string;
  _ta_category_slug_id: number;
  _links: Links;
}

export interface Links {
  self: About[];
  collection: About[];
  about: About[];
  "wp:attachment": About[];
  curies: Cury[];
}

export interface About {
  href: string;
}

export interface Cury {
  name: string;
  href: string;
  templated: boolean;
}

export interface GUID {
  rendered: string;
}

export interface Meta {
  inline_featured_image: boolean;
  _cloudinary_featured_overwrite: boolean;
}
