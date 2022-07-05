import {
  GET_COMIC_BY_ASPATH,
  GET_GENRE,
  GET_NEW_COMIC,
  GET_RECCOMMEND_COMIC,
  GET_TOP_DAY_DOMIC,
  GET_TOP_MONTH_COMIC,
  GET_TOP_WEEK_COMIC,
} from "@/graphql/query";
import { FilterComicModel } from "@/models/filter-comic.model";
import { GenreModel } from "@/models/genre.model";
import { NewComicModel } from "@/models/new-comic.model";
import { RankComicModel } from "@/models/rank-comic.model";
import { ReccommendComicModel } from "@/models/reccommend-comic.model";
import { GraphQLClient } from "graphql-request";

interface IComicService {
  getRecommendedComic: () => Promise<Array<ReccommendComicModel>>;
  getNewComic: () => Promise<Array<NewComicModel>>;
  getTopMonthComic: () => Promise<Array<RankComicModel>>;
  getTopWeekComic: () => Promise<Array<RankComicModel>>;
  getTopDayComic: () => Promise<Array<RankComicModel>>;
  getGenre: () => Promise<Array<GenreModel>>;
  getComicByAsPath: (asPath: string) => Promise<Array<FilterComicModel>>;
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
    return await this.graphqlCli.request(GET_RECCOMMEND_COMIC);
  }

  public async getNewComic() {
    return await this.graphqlCli.request(GET_NEW_COMIC);
  }

  public async getTopMonthComic() {
    return await this.graphqlCli.request(GET_TOP_MONTH_COMIC);
  }

  public async getTopWeekComic() {
    return await this.graphqlCli.request(GET_TOP_WEEK_COMIC);
  }

  public async getTopDayComic() {
    return await this.graphqlCli.request(GET_TOP_DAY_DOMIC);
  }

  public async getGenre() {
    return await this.graphqlCli.request(GET_GENRE);
  }

  public async getComicByAsPath(asPath: string) {
    return await this.graphqlCli.request(GET_COMIC_BY_ASPATH, {
      asPath: asPath.split("/")[2],
    });
  }
}
