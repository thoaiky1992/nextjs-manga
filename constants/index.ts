export enum LAYOUTS {
  APP = "APP",
}
export const NT = "https://www.nettruyenme.com";
export const WEBSITE_URL = "https://manga.thoaiky.com/";

export const HOME_REVALIDATE_EXPIRE = 60 * 60;

export const SELECT_FILTER_SORT_OPTIONS = [
  { value: "15", label: "Truyện mới" },
  { value: "11", label: "Top Tháng" },
  { value: "12", label: "Top Tuần" },
  { value: "13", label: "Top Ngày" },
];

export const SELECT_FILTER_SORT_STATUS = [
  { value: "-1", label: "Tất cả" },
  { value: "2", label: "Hoàn thành" },
  { value: "1", label: "Đang tiến hành" },
];

export const FILTER_OPTIONS = ["slug", "sort", "status"];

export const RANK_TOP_MONTH_QUERY = "?status=-1&sort=11";
export const RANK_TOP_WEEK_QUERY = "?status=-1&sort=12";
export const RANK_TOP_DAY_QUERY = "?status=-1&sort=13";

export const GET_GENRES_KEY = "GET_GENRES_KEY";
