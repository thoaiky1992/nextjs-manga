import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import Select from "react-select";

export type SelectOptionType = {
  value: string;
  label: string;
};

interface SelectFilterItemProps {
  options: SelectOptionType[];
  instancdId: string;
  name: string;
  isClearable: boolean;
}

const SelectFilterItem: FC<SelectFilterItemProps> = ({
  options,
  instancdId,
  name,
  isClearable,
}) => {
  const router = useRouter();
  const [defaultValue, setDefaultValue] = useState<SelectOptionType | null>(
    options.filter(
      (item: SelectOptionType) => item.value === router.query[name]
    )[0]
  );
  const handleChange = (values: SelectOptionType) => {
    setDefaultValue(values);
    let query = { ...router.query };
    if (name === "slug") delete query["page"];
    if (values) {
      query = { ...query, [name]: values.value };
    } else {
      delete query[name];
    }
    router.replace({
      query,
    });
  };

  useEffect(() => {
    if (options.length) {
      setDefaultValue(
        options.filter(
          (item: SelectOptionType) => item.value === router.query[name]
        )[0]
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options]);

  return (
    <Select
      key={instancdId}
      value={defaultValue}
      isMulti={false}
      placeholder={"Thể loại"}
      isClearable={isClearable}
      options={options}
      classNamePrefix="select"
      //@ts-ignore
      onChange={handleChange}
      instanceId={instancdId}
      hideSelectedOptions={false}
      noOptionsMessage={() => "Không tồn tại"}
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary: "#f43f5e",
          primary25: "#3f3f3f",
          primary75: "#f87171",
          primary50: "#fca5a5",
          primary20: "#fecaca",
        },
      })}
      styles={{
        container: (styles) => ({
          ...styles,
          width: "100%",
        }),
        option: (provided, state) => {
          return {
            ...provided,
            color: state.isSelected ? "#fff" : "#fff",
            margin: "5px 0px",
            borderRadius: "5px",
          };
        },
        control: (provided) => {
          return {
            ...provided,
            backgroundColor: "#1a1a1a",
            width: "100%",
            minWidth: "100%",
            color: "#fff",
          };
        },
        input: (provided) => {
          return {
            ...provided,
            color: "#fff",
            padding: "4px",
          };
        },
        singleValue: (provided) => {
          return {
            ...provided,
            color: "#fff",
            borderRadius: "20px",
          };
        },
        menu: (provided) => {
          return {
            ...provided,
            backgroundColor: "#1a1a1a",
            boxShadow: "0px 0px 5px white",
            padding: "10px",
          };
        },
        menuPortal: (provided) => ({
          ...provided,
          zIndex: 9999,
        }),
      }}
    />
  );
};

export default SelectFilterItem;
