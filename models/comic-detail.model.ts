import { ComicDetailChapterModel } from "./comic-detail-chapter.model";

export interface ComicDetailModel {
  imageSrc: string;

  title: string;

  author: string;

  status: string;

  views: string;

  description: string;

  chapters: ComicDetailChapterModel[];
}
