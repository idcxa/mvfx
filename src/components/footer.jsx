import '../css/footer.scss'
export default function Footer(props) {
  return (
    <footer className='footer' style={props.style}>
      <div>
        <p> this is the footer </p>
        <p> here will be lots of different useful information </p>
      </div>
      <div>
        <p> contact info </p>
        <p> availability </p>
        <p> more stuff ig </p>
      </div>
    </footer>
  )
}
