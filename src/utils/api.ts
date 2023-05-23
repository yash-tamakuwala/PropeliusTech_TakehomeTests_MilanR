import { DummyApiType } from "@/types/dummyApi";

export const getData = async () => {
  const res = await fetch(
    "https://6ca13a92-b734-44be-a3de-9e047346479a.mock.pstmn.io/applicant",
  );

  const data = await res.json();

  return data as DummyApiType;
};
