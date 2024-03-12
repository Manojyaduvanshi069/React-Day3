function handleClick(event) {
  console.log("Hello");
  console.log(event);
}

function handleMouseOver() {
  console.log("bye!");
}

export default function Button() {
  return (
    <div>
      <button onClick={handleClick}>Click Me!</button>
      <p onMouseOver={handleMouseOver}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis aperiam
        voluptatum perspiciatis asperiores, error adipisci nobis exercitationem
        laboriosam modi deserunt enim maxime. Sint consequuntur non saepe rerum
        consequatur eligendi laudantium.
      </p>
    </div>
  );
}
