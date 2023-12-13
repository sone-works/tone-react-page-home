interface IHomePageProps {}

export default function HomePage({}: IHomePageProps) {
  return (
    <main className="flex flex-col justify-center items-center bg-[var(--global-lighter)] text-[var(--global-darker)] h-screen">
      <div className="max-w-md m-4">
        <p className="font-content text-xl">
          <span className="font-release font-bold text-3xl">tone</span> is an
          open source, artist & listener owned music listening service.
        </p>
        <p className="font-content text-xl my-4">
          We're building it out right now, help us decide what an equitable
          music marketplace looks like.
        </p>
        <p className="font-content text-xl">
          Come say hello over at our{' '}
          <a
            href="https://discord.com/invite/dfky8n7kFv"
            className="font-header underline text-2xl"
          >
            discord
          </a>{' '}
          or check out our codebase on{' '}
          <a
            href="https://github.com/sone-dao/"
            className="font-header underline text-2xl"
          >
            github
          </a>
          .
        </p>
      </div>
    </main>
  )
}
