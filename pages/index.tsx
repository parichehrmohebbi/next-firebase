import { getDocuments } from "../firebase/firestore/getData";
import AddTech from "./admin/addTech";

export default function Home({ words }) {
  return (
    <>
      <div className="grid grid-cols-2 pt-16 pl-16 h-screen w-screen">
        <div className=" flex flex-col  text-2xl">
          <div className="font-bold pb-10">
            Tech list fetched from
            <span className="text-3xl font-bold px-4">firebase</span>:
          </div>
          <div>
            {words?.map((word, i) => {
              return (
                <div className="pb-6">
                  <div className="font-bold">{`${i + 1}:  ${word.title}`}</div>
                  <div className="pl-6">{`Description: ${word.description}`}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <AddTech></AddTech>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const { result, error } = await getDocuments("dictionary");
  return {
    props: {
      words: result,
    },
  };
}
