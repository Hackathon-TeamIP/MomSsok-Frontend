import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 pt-52">
      <p className="text-2xl font-semibold text-primary">404</p>
      <h1 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
        앗! 페이지가 없어요.
      </h1>
      <p className="mt-3 leading-7 text-gray-500">
        요청하신 페이지가 존재하지 않습니다.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          href="/"
          className="rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm "
        >
          메인으로 가기
        </Link>
      </div>
    </main>
  );
}
