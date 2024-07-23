"use client";
import { useRouter } from "next/navigation";

interface ButtonBackProps {
  children: React.ReactNode;
  className?: string;
}

export function ButtonBack({ children, className }: ButtonBackProps) {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`w-36 p-2 bg-red-600 text-white border-none rounded-md text-base cursor-pointer my-4 mx-8 hover:bg-red-700 transition-colors duration-300 ${className}`}
    >
      {children}
    </button>
  );
}
