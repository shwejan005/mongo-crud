"use client";

import { useRouter } from "next/navigation";
import { TrashIcon } from "lucide-react";
import { toast } from "sonner";

export default function RemoveBtn({ id }) {
  const router = useRouter();

  const removeTopic = () => {
    toast("Are you sure you want to delete this topic?", {
      action: {
        label: "Yes, delete",
        onClick: async () => {
          const res = await fetch(`http://localhost:3000/api/Topic?id=${id}`, {
            method: "DELETE",
          });

          if (res.ok) {
            toast.success("Topic deleted successfully!");
            router.refresh();
          } else {
            toast.error("Failed to delete topic!");
          }
        },
      },
    });
  };

  return (
    <button onClick={removeTopic} className="text-red-400 hover:cursor-pointer">
      <TrashIcon size={24} />
    </button>
  );
}
