import { gql } from "graphql-request";

export const GET_RECCOMMEND_COMIC = gql`
  {
    getRecommendedComic {
      title
      chapIndexText
      chapUpdatedAtText
      imageSrc
      slug
    }
  }
`;

export const GET_NEW_COMIC = gql`
  {
    getNewComic {
      title
      chapIndexText
      chapUpdatedAtText
      imageSrc
      slug
      views
      likes
    }
  }
`;

export const GET_TOP_MONTH_COMIC = gql`
  {
    getTopMonthComic {
      title
      chapIndexText
      chapUpdatedAtText
      imageSrc
      slug
      views
      likes
    }
  }
`;

export const GET_TOP_WEEK_COMIC = gql`
  {
    getTopWeekComic {
      title
      chapIndexText
      chapUpdatedAtText
      imageSrc
      slug
      views
      likes
    }
  }
`;

export const GET_TOP_DAY_DOMIC = gql`
  {
    getTopDayComic {
      title
      chapIndexText
      chapUpdatedAtText
      imageSrc
      slug
      views
      likes
    }
  }
`;

export const GET_GENRE = gql`
  {
    getGenre {
      title
      slug
    }
  }
`;

export const GET_COMIC_BY_ASPATH = gql`
  query getComicByAsPath($asPath: String!) {
    getComicByAsPath(asPath: $asPath) {
      comics {
        title
        chapIndexText
        chapUpdatedAtText
        imageSrc
        slug
        views
        likes
      }
      totalPage
    }
  }
`;

export const GET_COMIC_DETAIL_BY_SLUG = gql`
  query getComicDetailBySlug($slug: String!) {
    getComicDetailBySlug(slug: $slug) {
      title
      imageSrc
      author
      status
      views
      description
      chapters {
        href
        chapterIndexText
        updatedAtText
      }
    }
  }
`;

export const READ_COMIC = gql`
  query readComic($slug: String!) {
    readComic(slug: $slug) {
      previousChapterHref
      currentChapterIndexText
      currentChapterIndex
      currentChapterHref
      nextChapterHref
      imageSrcList
      chapters {
        chapterIndexText
        href
        updatedAtText
      }
    }
  }
`;

export const SEARCH_COMIC = gql`
  query searchComic($keySearch: String!) {
    searchComic(keySearch: $keySearch) {
      title
      views
      likes
      chapterIndexText
      updatedAtText
      imgSrc
      slug
    }
  }
`;
