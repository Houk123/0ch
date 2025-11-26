interface CategoryPageProps {
  params: Promise<{
    section: string
    sku: string
  }>
}

const SectionPage = async ({ params }: CategoryPageProps) => {
  const { sku, section } = await params;
  
  return (
    <>
        <p>URL: {sku} {section}</p>
    </>
  );
}

export default SectionPage;