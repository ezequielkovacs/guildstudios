import React from 'react';
import {Col, Row, Carousel, Card, Icon, Avatar} from 'antd';

const { Meta } = Card;
class Dashboard extends React.Component {
  render() {
    document.title = "Guild Studios";
    return (
<>

      <div className="zone" style={{textAlign: "right", paddingTop: 15}}>
      <h2><i>"Ameaçar um homem de assédio é abuso de poder"<br />Kazuma Yuuji</i></h2>
      </div>
</>
    )
  }
}


export default Dashboard
