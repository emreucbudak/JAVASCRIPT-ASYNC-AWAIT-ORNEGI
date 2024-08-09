const a = document.querySelector(".buton");
a.addEventListener ("click", async () => {
  const b = await(await fetch("https://jsonplaceholder.typicode.com/posts/1")).json()
  const c = await (await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${b.id}`)).json()
  console.log (b,c)
})