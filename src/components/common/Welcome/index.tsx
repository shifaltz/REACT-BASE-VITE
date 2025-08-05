export default function Welcome() {
  return (
    <>
      <div className="w-full h-20 flex flex-row mt-20">
        <div className="w-1 bg-teal-600 h-full mr-2"></div>
        <div className="h-20 flex flex-col justify-center gap-3">
          <div>
            <p className="text-4xl font-bold">Olá Pedro!</p>
          </div>
          <div className="text-xl">
            <p>
              Bem vindo ao autoatendimento da
              <strong> SPPREV</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
