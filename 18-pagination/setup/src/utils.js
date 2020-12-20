const paginate = (followers) => {
  const itemsPerPage = 8
  // length of followers array divided by predesignated number of items per page
  const pages = Math.ceil(followers.length / itemsPerPage)
  // create an new array and pass in a object with length property that is equal to what I pass in, in this case length is equal to the number of pages.
  // second argument is a callback function that iterates over our new array and uses items from old array to create our new arrays.
  // with 'item' passed in as a '_' for undefined and a index.
  // As we iterate over what we return will be placed in that index.
  const newFollowers = Array.from({ length: pages }, (_, index) => {
    // start will become starting index for each sub-array
    const start = index * itemsPerPage
    // then slice the how list (followers), from start, which changes on each iteration and ends with start + itemsPerPage
    return followers.slice(start, start + itemsPerPage)
  })
  // newFollowers is the array of arrays
  return newFollowers
}

export default paginate
