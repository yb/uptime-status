function Link(props = { text, hvr, to, tar }) {
  return (
    <a {...props} class={props.hvr} href={props.to} target={props.tar}>
      {props.text}
    </a>
  );
}

export default Link;
