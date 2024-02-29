import { ComicDetailChapterModel } from "@/models/comic-detail-chapter.model";
import { BookOpenIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { ChangeEvent, FC, useState } from "react";

interface ChapterListProps {
  chapters: ComicDetailChapterModel[];
  slug: string
}

export const ChapterList: FC<ChapterListProps> = ({ chapters, slug }) => {
  const [searchChapter, setSearchChapter] = useState("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const search = e.currentTarget.value;
    setSearchChapter(search);
  };

  return (
    <div className="w-full text-white bg-app px-3 lg:px-20">
      <h1 className="text-2xl">Danh sách chương : </h1>
      <div className="w-full bg-high-light rounded-lg p-5 mt-5">
        <div className="search w-[300px] relative">
          <input
            type="number"
            placeholder="Đi đến chương ..."
            className="pl-3 pr-10 py-2 bg-secondary rounded-lg focus:outline-none w-full"
            onChange={handleSearch}
          />
          <BookOpenIcon className="w-5 h-5 absolute right-2 top-1/2 -translate-y-1/2" />
        </div>
        <div className="chapter-list min-h-[100px]  max-h-[500px] overflow-y-scroll grid md:grid-cols-4 lg:grid-cols-6 gap-4 mt-5 pr-2">
          {chapters
            .filter(
              (chapter) =>
                chapter.chapterIndexText.indexOf(searchChapter) !== -1
            )
            .map((chapter, index) => {
              return (
                <Link
                  key={index}
                  href={"/read" + chapter.href.split("truyen-tranh")[1] + '?detailSlug=' + slug}
                >
                  <a className=" bg-app py-5 px-5 rounded-md flex flex-col max-h-[100px] hover:bg-primary transition-all cursor-pointer ease-in-out">
                    <div className="w-full">{chapter.chapterIndexText}</div>
                    <div className="w-full flex items-center justify-between mt-2">
                      <span className="text-sm">{chapter.updatedAtText}</span>
                      <BookOpenIcon className="w-4 h-4" />
                    </div>
                  </a>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};
