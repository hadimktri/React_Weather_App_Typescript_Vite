export interface ICity {
  label: string;
  value: string;
}

export interface ICityData {
  city: string;
  country: string;
  countryCode: string;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  population: number;
  region: string;
  regionCode: string;
  regionWdId: string;
  type: string;
  wikiDataId: string;
}

export interface IcityProps {
  handleSelectedCity: (city: ICity) => void;
}
