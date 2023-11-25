export default function WrongUrlPage() {
  return (
    <>
    <div className="bg-gray-900 h-[100vh] w-[100vw]">
      <div className="flex items-center flex-col gap-3 justify-center h-full">
        <h1 className="text-alert-500 font-black text-xl text-center">Dotarłeś do miejsca gdzie diabeł mówi dobranoc.</h1>
        <h1 className="text-alert-700 font-black text-3xl"><a href="/">Zawróć</a></h1>
      </div>
    </div>
    </>
  )
}
