const paginate = (followers) => {
  console.log(followers)
  const itemsPerPage = 8
  // length of followers array divided by predesignated number of items per page
  const pages = Math.ceil(followers.length / itemsPerPage)
  // console.log(pages)

  // create an new array and give it a length property that is equal to what I pass in. in this case length is equal to the number of pages.
  const newFollowers = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage
    // console.log(start)
    return followers.slice(start, start + itemsPerPage)
  })
  console.log(newFollowers)
  return newFollowers
}

export default paginate
