
export default function Button( { title ="" , onClick = ()=>{}, disabled=false } ) {
  return (
    <button className="btn btn-primary" onClick={onClick} disabled={disabled}>{title}</button>
  )
}
