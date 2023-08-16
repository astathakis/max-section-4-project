const ListItem = (props) => {
  return (
    <li className='concept'>
      <img src={props.img} alt='TODO: TITLE' />
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </li>
  )
}
export default ListItem
