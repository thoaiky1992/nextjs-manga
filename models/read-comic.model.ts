import { ComicDetailChapterModel } from "./comic-detail-chapter.model";

export interface ReadComicModel {
  previousChapterHref: string;
  currentChapterIndexText: string;
  currentChapterIndex: number;
  currentChapterHref: string;
  nextChapterHref: string;
  imageSrcList: string[];
  chapters: ComicDetailChapterModel[];
}
