type TitlePageProps = {
  namePage: string;
};

export function TitlePage({ namePage }: TitlePageProps) {
  return (
    <>
      <h1 className="text-4xl font-bold">{namePage}</h1>
    </>
  );
}
