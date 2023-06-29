import { useState } from "react";
import AsyncSelect from "react-select/async";
import { getCity } from "../../api/axios";
import style from "./selectCity.module.css";
import { ICity, ICityData, IcityProps } from "../../../interface";

const SelectCity = ({ handleSelectedCity }: IcityProps) => {
  const [search, setSearch] = useState<ICity>();

  let options: ICity[] = [];

  const loadOptions = (inputValue: string, callback: any) => {
    setTimeout(() => {
      getCity(inputValue)
        .then((res) => {
          options = [];
          res.data.data.map((city: ICityData) => {
            options.push({
              label: `${city.name}, ${city.countryCode}`,
              value: `${city.latitude} ${city.longitude}`,
            });
          });
        })
        .then(callback(options));
    }, 600);
  };

  const handleOnchange = (searchData: ICity | any) => {
    setSearch(searchData);
    handleSelectedCity(searchData);
  };

  return (
    <AsyncSelect
      className={style.input}
      placeholder="Search for city"
      value={search}
      onChange={handleOnchange}
      loadOptions={loadOptions}
    />
  );
};

export default SelectCity;
