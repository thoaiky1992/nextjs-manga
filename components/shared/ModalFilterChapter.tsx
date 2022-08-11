import { ComicDetailChapterModel } from "@/models/comic-detail-chapter.model";
import { DocumentTextIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { ChangeEvent, FC, useEffect, useRef, useState } from "react";

interface ModalFilterChapterProps {
  chapters: ComicDetailChapterModel[];
  currentChapterHref: string;
}

const ModalFilterChapter: FC<ModalFilterChapterProps> = ({
  chapters,
  currentChapterHref,
}) => {
  const chapterList = useRef(null);
  const [searchChapter, setSearchChapter] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchChapter(e.currentTarget.value);
  };

  const handleClose = () => {
    setSearchChapter("");
    setOpen(false);
  };

  useEffect(() => {
    setTimeout(() => {
      document
        .querySelector(`.modal-chapter-list a[data-id="${currentChapterHref}"]`)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 200);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chapters, open]);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="bg-secondary py-2 pl-3  pr-5 rounded-lg w-[120px] lg:w-auto text-[10px] lg:text-sm mr-2 cursor-pointer"
      >
        Đi đến chương ...
      </div>
      <div
        className={`w-screen h-screen fixed bg-transparent left-0 top-0 flex items-center justify-center text-white ${
          open ? "" : "hidden"
        }`}
      >
        <div className="absolute bg-secondary opacity-90 w-full h-full top-0 left-0 z-40"></div>
        <div className="bg-app w-[90%] lg:w-[600px] h-[500px] animate-scale absolute z-50 rounded-lg p-5">
          <div className="w-full flex items-start justify-between">
            <input
              type="number"
              className="bg-secondary ml-2 py-2 pl-3 pr-5 rounded-lg w-[140px] lg:w-auto text-[12px] lg:text-sm mr-2 cursor-pointer focus:ring-1 focus:ring-primary focus:outline-none"
              placeholder="Đi đến chương ..."
              onChange={handleChange}
              value={searchChapter}
            />
            <XIcon
              className="w-8 h-8 cursor-pointer hover:scale-90 transition-all ease-in-out"
              onClick={handleClose}
            />
          </div>
          <div
            ref={chapterList}
            className="w-full modal-chapter-list rounded-lg max-h-[400px] mt-5 overflow-y-scroll bg-app flex flex-col px-2"
          >
            {chapters
              .filter(
                (chapter) =>
                  chapter.href.indexOf("chap-" + searchChapter) !== -1
              )
              .map((chapter, index) => {
                return (
                  <Link
                    key={index}
                    href={"/read" + chapter.href.split("truyen-tranh")[1]}
                  >
                    <a
                      onClick={handleClose}
                      data-id={chapter.href}
                      className={`
                    flex w-full rounded-lg my-2 bg-secondary px-4 py-5 items-center justify-between cursor-pointer
                    ${chapter.href === currentChapterHref ? "bg-primary" : ""}
                  `}
                    >
                      <div className="flex items-center">
                        <DocumentTextIcon className="mr-4 h-4 w-4" />
                        <span className="text-[10px] lg:text-sm">
                          {chapter.chapterIndexText}
                        </span>
                      </div>
                      <div className=" text-[10px] lg:text-sm">
                        {chapter.updatedAtText}
                      </div>
                    </a>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalFilterChapter;
