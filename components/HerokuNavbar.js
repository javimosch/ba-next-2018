export default class extends React.Component {
  static async getInitialProps({ req }) {
    return {}
  }
 
  render() {
    return (
      <div className="Root">
      Navbar
        {this.props.children}
    <style jsx>{`
      .Root {
          min-height:50px;
          background-color:white;
          border-bottom:5px solid skyblue;
      }
      @media (min-width: 768px) {
        
      }
    `}</style>
  </div>
    )
  }
}
