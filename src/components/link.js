function Link(props = { text, to, tar }) {
  return (
    <a {...props} href={props.to} target={props.tar}>
      {props.text}
    </a>
  );
}

export default Link;
