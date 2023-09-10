function Avatar() {
  return (
    // classname, src, alt, width and height are all
    // considered to be props which we are 
    // passing to a built-in component img
    // 
    // React has built-in components that correspond 
    // to all standard HTML elements, e.g h1, h2, img, p, etc
    // The props will therefore be attributes of those
    // elements
    // https://www.w3schools.com/tags/tag_img.asp

    <img
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="Lin Lanying"
      width={100}
      height={100}
    />
  );
}

export default function Profile() {
  return (
    <Avatar />
  );
}
