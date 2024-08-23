export interface SpaceListItem {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  isLiked: boolean;
}

export interface Tag {
  id: number;
  name: string;
}

export interface Image {
  id: number;
  url: string;
}

export interface Info {
  id: number;
  title: string;
  description: string;
}

export interface AccessInfo {
  id: number;
  title: string;
  icon: string;
  available: boolean;
}

export interface Subway {
  line: string;
  station: string;
  exit: number;
  directions: string;
}

export interface Bus {
  type: string;
  bus_number: string;
  directions: string;
}

export interface Transportation {
  subway: Subway[];
  bus: Bus[];
}

export interface SpaceDetail extends SpaceListItem {
  tags: Tag[];
  images: Image[];
  isBookmarked: boolean;
  likeCount: number;
  info: Info[];
  accessInfo: AccessInfo[];
  transportation: Transportation;
}
