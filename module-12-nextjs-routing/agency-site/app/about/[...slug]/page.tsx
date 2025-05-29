const Page = async({params}) => {
  const { slug } = await params;
  return (
    <div>
      <p>{slug}</p>
    </div>
  )
}

export default Page