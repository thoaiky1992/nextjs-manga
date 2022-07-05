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
