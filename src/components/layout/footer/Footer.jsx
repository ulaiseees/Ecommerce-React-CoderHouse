import "./footer.css"

const Footer = () => {
    return (
      <h3 style={{ display: "flex", justifyContent: "center", padding: "24px"}}>Pedras Boreales © {new Date().getFullYear()}</h3>
    )
  }
  
  export default Footer