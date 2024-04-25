import Link from "next/link";

export default function NotFound() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center h-dvh px-5">
      <h1 className="text-4xl lg:text-7xl">404</h1>
      <p className="text-center">
        The page you’re looking for doesn’t exist.{" "}
        <span className="underline">
          <Link href="/">Go Back</Link>
        </span>
      </p>
    </div>
  );
}
