import React from 'react'
import Remove from './Remove'
import Link from 'next/link'
import { Edit } from 'lucide-react'

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Topic", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};


export default async function List() {
  const { topics } = await getTopics();

  return (
    <>
      {topics.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>
          <div className="flex gap-2">
            <Remove id={t._id}/>
            <Link href={`/edit-topic/${t._id}`}>
              <Edit size={24}/>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};