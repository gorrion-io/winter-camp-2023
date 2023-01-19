import { GetStaticProps } from "next";
import { Viking } from "../types";
import VikingList from "../components/VikingList";

interface Props {
  vikings: Viking[];
}

export default function Home({ vikings }: Props) {
  return <VikingList vikings={vikings} />;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await fetch(`http://localhost:3000/api/vikings`);
  const vikings: Viking[] = await res.json();

  return {
    props: {
      vikings,
    },
  };
};
