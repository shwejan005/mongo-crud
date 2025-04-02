"use client";

import { useRouter } from "next/navigation";
import { TrashIcon } from "lucide-react";

export default function RemoveBtn({ id }) {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/Topic?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button onClick={removeTopic} className="text-red-400 hover:cursor-pointer">
      <TrashIcon size={24} />
    </button>
  );
}