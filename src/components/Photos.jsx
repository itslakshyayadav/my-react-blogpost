function Photos() {
  const photoList = [
    "https://i.dummyjson.com/data/products/1/1.jpg",
    "https://i.dummyjson.com/data/products/1/2.jpg",
    "https://i.dummyjson.com/data/products/1/3.jpg",
    "https://i.dummyjson.com/data/products/1/4.jpg",
    "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  ];

  return (
    <>
      <h1> photos</h1>
      {photoList.map((photo, index) => {
        //   <img className="max-w-xs" src={product.image} alt="" />

        return <img key={"photo-list" + index} src={photo} alt=""></img>;
      })}
    </>
  );
}
export default Photos;
