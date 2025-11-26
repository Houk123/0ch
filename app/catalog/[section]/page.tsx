type Params = {
    section: string
}

export default async function SectionPage(props: { params: Promise<Params> }) {
  const params = await props.params;
  
  return (
    <>
        <p>Секция URL: {params.section}</p>
    </>
  );
}