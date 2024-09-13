import "./Footer.css"

const Footer = () => {
    return (
      <div className="Footer">
      <h3 style={{ display: "flex", justifyContent: "center", padding: "24px"}}>Pedras Boreales © {new Date().getFullYear()}</h3>
      </div>
    )
  }
  
  export default Footer