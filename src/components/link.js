function Link(props = { text, to }) {
  return (
    <a {...props} href={props.to} target='_blank'>
      {props.text}
    </a>
  );
}

export default Link;
