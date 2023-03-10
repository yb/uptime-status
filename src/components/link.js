function Link(props = { text, to }) {
  return (
    <a {...props} href={props.to} target='_self'>
      {props.text}
    </a>
  );
}

export default Link;
