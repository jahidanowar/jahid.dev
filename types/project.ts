export interface Project {
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
  content: Content;
  excerpt: Content;
  featured_media: number;
  template: string;
  industry: string;
  location: string;
  tech_stack: string;
  _links: ProjectLinks;
  _embedded: Embedded;
}

export interface Embedded {
  "wp:featuredmedia": WpFeaturedmedia[];
}

export interface WpFeaturedmedia {
  id: number;
  date: Date;
  slug: string;
  type: string;
  link: string;
  title: GUID;
  author: number;
  is_cloudinary_synced: boolean;
  source_url: string;
  caption: GUID;
  alt_text: string;
  media_type: string;
  mime_type: string;
  media_details: MediaDetails;
  _links: WpFeaturedmediaLinks;
}

export interface WpFeaturedmediaLinks {
  self: About[];
  collection: About[];
  about: About[];
  author: AuthorElement[];
  replies: AuthorElement[];
}

export interface About {
  href: string;
}

export interface AuthorElement {
  embeddable: boolean;
  href: string;
}

export interface GUID {
  rendered: string;
}

export interface MediaDetails {
  width: number;
  height: number;
  file: string;
  sizes: Sizes;
  image_meta: ImageMeta;
}

export interface ImageMeta {
  aperture: string;
  credit: string;
  camera: string;
  caption: string;
  created_timestamp: string;
  copyright: string;
  focal_length: string;
  iso: string;
  shutter_speed: string;
  title: string;
  orientation: string;
  keywords: any[];
}

export interface Sizes {
  medium: Full;
  thumbnail: Full;
  medium_large: Full;
  full: Full;
}

export interface Full {
  file: string;
  width: number;
  height: number;
  mime_type: string;
  source_url: string;
}

export interface ProjectLinks {
  self: About[];
  collection: About[];
  about: About[];
  "wp:featuredmedia": AuthorElement[];
  "wp:attachment": About[];
  curies: Cury[];
}

export interface Cury {
  name: string;
  href: string;
  templated: boolean;
}

export interface Content {
  rendered: string;
  protected: boolean;
}
