import {
  FILTER_OPTIONS,
  GENRE_LIST,
  SELECT_FILTER_SORT_OPTIONS,
  SELECT_FILTER_SORT_STATUS,
} from "@/constants";
import { GenreModel } from "@/models/genre.model";
import { ComicService } from "@/services/comic.service";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import SelectFilterItem, { SelectOptionType } from "./SelectFilterItem";

const SelectFilter = () => {
  const [options, setOptions] = useState<SelectOptionType[]>([]);

  const queryValues = useRef<{ [k: string]: string }>({});

  const router = useRouter();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    for (const key in router.query) {
      if (FILTER_OPTIONS.some((item) => item === key)) {
        queryValues.current = {
          ...queryValues.current,
          [key]: router.query[key] as string,
        };
      }
    }

    if (!options.length) {
      setOptions(
        GENRE_LIST.map((item: GenreModel) => {
          return { value: item.slug, label: item.title };
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query]);

  return (
    <>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5 items-center ">
        <SelectFilterItem
          options={options}
          instancdId={"the-loai"}
          name={"slug"}
          isClearable={false}
        />
        <SelectFilterItem
          options={SELECT_FILTER_SORT_OPTIONS}
          instancdId={"sap-xep"}
          name={"sort"}
          isClearable={true}
        />
        <SelectFilterItem
          options={SELECT_FILTER_SORT_STATUS}
          instancdId={"trang-thai"}
          name={"status"}
          isClearable={true}
        />
      </div>
    </>
  );
};

export default SelectFilter;
