export enum LAYOUTS {
  APP = "APP",
}
export const HOME_REVALIDATE_EXPIRE = 60 * 60;
export const WEBSITE_URL = "http://localhost:3000/";
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
