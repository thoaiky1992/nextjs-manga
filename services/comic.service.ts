import {
  GET_COMIC_BY_ASPATH,
  GET_COMIC_DETAIL_BY_SLUG,
  GET_GENRE,
  GET_NEW_COMIC,
  GET_RECCOMMEND_COMIC,
  GET_TOP_DAY_DOMIC,
  GET_TOP_MONTH_COMIC,
  GET_TOP_WEEK_COMIC,
  READ_COMIC,
  SEARCH_COMIC,
} from "@/graphql/query";
import { ComicDetailModel } from "@/models/comic-detail.model";
import { FilterComicModel } from "@/models/filter-comic.model";
import { GenreModel } from "@/models/genre.model";
import { NewComicModel } from "@/models/new-comic.model";
import { RankComicModel } from "@/models/rank-comic.model";
import { ReadComicModel } from "@/models/read-comic.model";
import { ReccommendComicModel } from "@/models/reccommend-comic.model";
import { SearchComicModel } from "@/models/search-comic.model";
import { GraphQLClient } from "graphql-request";

interface IComicService {
  getRecommendedComic: () => Promise<Array<ReccommendComicModel>>;
  getNewComic: () => Promise<Array<NewComicModel>>;
  getTopMonthComic: () => Promise<Array<RankComicModel>>;
  getTopWeekComic: () => Promise<Array<RankComicModel>>;
  getTopDayComic: () => Promise<Array<RankComicModel>>;
  getGenre: () => Promise<Array<GenreModel>>;
  getComicByAsPath: (asPath: string) => Promise<Array<FilterComicModel>>;
  getComicDetailBySlug: (slug: string) => Promise<ComicDetailModel>;
  readComic: (slug: string) => Promise<ReadComicModel>;
  searchComic: (keySearch: string) => Promise<SearchComicModel[]>;
}

export class ComicService implements IComicService {
  private static instance: ComicService;

  private graphqlCli: GraphQLClient;
  constructor() {
    this.graphqlCli = new GraphQLClient(
      String(process.env.NEXT_PUBLIC_BASE_GRAPHQL_URL)
    );
  }

  // Degisn Pattern Singleton
  public static getInstance() {
    if (!this.instance) {
      this.instance = new this();
    }
    return this.instance;
  }

  public async getRecommendedComic() {
    return (await this.graphqlCli.request(GET_RECCOMMEND_COMIC))
      .getRecommendedComic;
  }

  public async getNewComic() {
    return (await this.graphqlCli.request(GET_NEW_COMIC)).getNewComic;
  }

  public async getTopMonthComic() {
    return (await this.graphqlCli.request(GET_TOP_MONTH_COMIC))
      .getTopMonthComic;
  }

  public async getTopWeekComic() {
    return (await this.graphqlCli.request(GET_TOP_WEEK_COMIC)).getTopWeekComic;
  }

  public async getTopDayComic() {
    return (await this.graphqlCli.request(GET_TOP_DAY_DOMIC)).getTopDayComic;
  }

  public async getGenre() {
    return (await this.graphqlCli.request(GET_GENRE)).getGenre;
  }

  public async getComicByAsPath(asPath: string) {
    return (
      await this.graphqlCli.request(GET_COMIC_BY_ASPATH, {
        asPath: asPath.split("/")[2],
      })
    ).getComicByAsPath;
  }

  public async getComicDetailBySlug(slug: String) {
    return (await this.graphqlCli.request(GET_COMIC_DETAIL_BY_SLUG, { slug }))
      .getComicDetailBySlug;
  }

  public async readComic(slug: String) {
    return (await this.graphqlCli.request(READ_COMIC, { slug })).readComic;
  }

  public async searchComic(keySearch: string): Promise<SearchComicModel[]> {
    return (await this.graphqlCli.request(SEARCH_COMIC, { keySearch }))
      .searchComic;
  }
}
