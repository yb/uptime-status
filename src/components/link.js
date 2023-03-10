function Link(props = { text, to }) {
  return (
    <a {...props} href={props.to}>
      {props.text}
    </a>
  );
}

export default Link;
