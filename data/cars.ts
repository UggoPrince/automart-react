// import { GetStaticProps } from 'next';
import { getApiUrl } from "../utilities/getEnvs";

const apiUrl = getApiUrl();

export type Cars = {
  imageUrl: string;
}

export const getCars = async () => {
  const { data } = await fetch(`${apiUrl}/cars`).then(result => result.json());
  return {
    cars: data,
  }
};
