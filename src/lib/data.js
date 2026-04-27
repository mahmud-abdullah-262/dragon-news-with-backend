export const getCategory = async () => {
  const data = await fetch('https://openapi.programming-hero.com/api/news/categories');
  const res = await data.json()
  return res.data;
}

export const getNewsById = async (id)  => {
  const data = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`);
  const res = await data.json()
  return res.data;
}
export const getNewsDetailsById = async (id)  => {
  const data = await fetch(`https://openapi.programming-hero.com/api/news/${id}`);
  const res = await data.json()
  return res.data;
}