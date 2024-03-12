function handleFormSubmit(event) {
  event.preventDefault();
  console.log("Form Submitted");
}

export default function Form() {
  return (
    <form>
      <input placeholder="Write something" />
      <button onClick={handleFormSubmit}>Submit</button>
    </form>
  );
}
